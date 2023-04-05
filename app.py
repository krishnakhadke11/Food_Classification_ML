# import Dependencies
import os
import numpy as np
import pandas as pd
from six import reraise
import tensorflow as tf
from tensorflow import keras
from keras.applications.inception_v3 import preprocess_input
from keras_models.models import *
# from keras_models.models import load_model
from keras.preprocessing.image import ImageDataGenerator
from keras_preprocessing.image import *
# from keras_preprocessing.image import load_img
from keras.utils import img_to_array
from keras.preprocessing import *
# from keras.preprocessing import image
from flask import Flask , redirect , url_for , request , render_template
from werkzeug.utils import secure_filename

# Create a Flask App
app = Flask(__name__)

# load the model
Model_path = (r"E:\Sem-6\MPR-Sem6\Dummy_proj\Indian-Food-Classification\Food.h5")
model=keras.models.load_model(Model_path)
# model = load_model(Model_path)


# Create a function to take and image and predict the class
def model_predict(img_path , model):
    print("Hello World")
    # image = image.load_img(img_path, target_size=(224, 224))  
    # image = image.img_to_array(image)  
    # image = np.expand_dims(image, axis=0)
    # image /= 255
    img = tf.keras.utils.load_img(img_path, target_size=(224, 224))  
    img = tf.keras.utils.img_to_array(img)  
    img = np.expand_dims(img, axis=0)
    img /= 255.  

    # print(img_path)
    # img = image.load_img(img_path , target_size=(299 , 299))
    # x = image.img_to_array(img)
    # x = x / 255 
    # x = np.expand_dims(x , axis = 0)

    preds = model.predict(img)
    preds = np.argmax(preds , axis = 1)
    if preds == 0:
        preds = "This Item is Burger"

    elif preds == 1:
        preds = "This Item is Butter Naan"

    elif preds == 2:
        preds = "This Item is Chai"

    elif preds == 3:
        preds = "This Item is Chapati"

    elif preds == 4:
        preds = "This Item is Chole Bhature"

    elif preds == 5:
        preds = "This Item is Dal Makhani"

    elif preds == 6:
        preds = "This Item is Dhokla"

    elif preds == 7:
        preds = "This Item is Fried Rice"

    elif preds == 8:
        preds = "This Item is Idli"

    elif preds == 9:
        preds = "This Item is Jalebi"

    elif preds == 10:
        preds = "This Item is Kaathi Rolls"
    
    elif preds == 11:
        preds = "This Item is Kadai Paneer"

    elif preds == 12:
        preds = "This Item is Kulfi"

    elif preds == 13:
        preds = "This Item is Masala Dosa"

    elif preds == 14:
        preds = "This Item is Momos"

    elif preds == 15:
        preds = "This Item is Paani Puri"

    elif preds == 16:
        preds = "This Item is Pakode"

    elif preds == 17:
        preds = "This Item is Pav Bhaji"

    elif preds == 18:
        preds = "This Item is Pizza"

    else:
        preds = "This Item is Samosa"

    return preds

@app.route('/' , methods=["GET"])
def index(): # Main Page
    return render_template('index.html')

@app.route('/predict' , methods=['GET', 'POST'])
def uploads():
    if request.method == 'POST':
        # Get the File from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(basepath , 'uploads' , secure_filename(f.filename))
        f.save(file_path)

        # Make Prediction
        preds = model_predict(file_path , model)
        result = preds
        return result
    return None

if __name__ == '__main__':
    app.run()


