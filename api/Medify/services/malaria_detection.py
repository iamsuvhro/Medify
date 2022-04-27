#from utils.apiResponse import ApiResponse
from httplib2 import Response
import responses
import utils
import keras.backend as K
from datetime import datetime as dt
import numpy as np
import uuid
from PIL import Image
import os
from keras.models import load_model
import imageio
from rest_framework.response import Response
from keras.preprocessing import image
from keras.models import Sequential
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.applications.imagenet_utils import decode_predictions


class MalariaDetectionServices:
    """Service for malaria detection"""

    def __init__(self,image):
        self.image = image
 
    def imgToarray(self):
        try:
            imgFile = (f'static/images/{str(self.image)}')
            test_image = image.load_img(imgFile, target_size = (128, 128))
            test_image = image.img_to_array(test_image)
            test_image = test_image/255
            test_image = np.expand_dims(test_image, axis = 0)
            response = test_image
            return response
        except Exception as ex:
            return ex

    def load_model_():
        model_name = os.path.join("static/model/malaria.h5")
        model = load_model(model_name)
        return model

    def translate_malaria(preds):
        try:
            y_proba_Class0 = preds.flatten().tolist()[0] * 100
            y_proba_Class1 = 100.0-y_proba_Class0

            para_prob="Probability of the cell image to be Parasitized: {:.2f}%".format(y_proba_Class1)
            unifected_prob="Probability of the cell image to be Uninfected: {:.2f}%".format(y_proba_Class0)

            total = para_prob + " " + unifected_prob
            total = [para_prob,unifected_prob]

            if (y_proba_Class1 > y_proba_Class0):
                return (True,"Inference: The cell image shows strong evidence of Malaria.",total)
            else:
                return (True,"Inference: The cell image shows no evidence of Malaria.",total)
        except Exception as ex:
            return ex
    
