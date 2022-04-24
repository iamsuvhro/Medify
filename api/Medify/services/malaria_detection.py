from utils.apiResponse import ApiResponse
import utils
import keras.backend as K
from datetime import datetime as dt
import numpy as np
import uuid
from PIL import Image
import os
import keras
import tempfile
from keras.models import load_model
import imageio
from keras.preprocessing import image
from keras.models import Sequential
from keras.layers import Dense, Activation, Dropout, Flatten
from keras.layers import Conv2D
from keras.layers import MaxPooling2D
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.applications.imagenet_utils import decode_predictions


class MalariaDetection:
    """Service for malaria detection"""
 
    def load_model_():
        model_name = os.path.join("../trained_models/malaria.h5")
        model = load_model(model_name)
        return model
    def translate_malaria(preds):
        res = ApiResponse()
        y_proba_Class0 = preds.flatten().tolist()[0] * 100
        y_proba_Class1 = 100.0-y_proba_Class0

        para_prob="Probability of the cell image to be Parasitized: {:.2f}%".format(y_proba_Class1)
        unifected_prob="Probability of the cell image to be Uninfected: {:.2f}%".format(y_proba_Class0)

        total = para_prob + " " + unifected_prob
        total = [para_prob,unifected_prob]

        if (y_proba_Class1 > y_proba_Class0):
            return res.update(True,"Inference: The cell image shows strong evidence of Malaria.",total)
        else:
            return res.update(True,"Inference: The cell image shows no evidence of Malaria.",total)
    pass