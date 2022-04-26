import logging
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.http import HttpRequest
from rest_framework.response import Response
from .models import Malaria
from Medify.services.malaria_detection import MalariaDetectionServices


# class MalariaViewSet(viewsets.ModelViewSet):
#     queryset = Malaria.objects.all()
#     serializer_class = MalariaSerializer

@api_view(["POST"])
def verifyMalariaDetection(request: HttpRequest) -> Response:
    """
    Method for run Malaria detection 
    """
    if request.method == "POST":
        params = {
            'filename': request.POST.get('filename', request.data),
            'image': request.FILES.get('image','image'),
        }
        response = Malaria.objects.create(filename=params['filename'], image=params['image'])

        return Response({True,'File upload successfully'})
    else:
        return Response({False,"Error occur while uploading the image files"})

