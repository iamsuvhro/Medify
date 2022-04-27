import logging
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.http import HttpRequest
from rest_framework.response import Response
from yaml import load
from .models import Malaria
from Medify.services.malaria_detection import MalariaDetectionServices




@api_view(["POST"])
def verifyMalariaDetection(request: HttpRequest) -> Response:
    """
    Method for run Malaria detection 
    """
    if request.method == "POST":
        params = {
            'filename': request.POST.get('filename', request.data),
            'image': request.FILES.get('image',request.data),
        }
        query = Malaria.objects.create(filename=params['filename'], image=params['image'])
        
        malariaDetection = MalariaDetectionServices(str(params['filename']))
        imageDataArray = malariaDetection.imgToarray()
        model = malariaDetection.load_model_()
        preds, pred_val = malariaDetection.translate_malaria(model["model"].predict_proba(imageDataArray))
        payload = ({"empty": False, 
                    "para":preds[0], 
                    "unin":preds[1],
                    "pred_val": pred_val})
        
        return Response({True,'File upload successfully',payload})
    else:
        return Response({False,"Error occur while uploading the image files"})

