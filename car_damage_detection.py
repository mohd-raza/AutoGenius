import streamlit as st
from PIL import Image
#from keras.preprocessing.image import load_img,img_to_array
from tensorflow.keras.utils import load_img
from tensorflow.keras.utils import img_to_array
import numpy as np
from keras.models import load_model
import requests
from bs4 import BeautifulSoup
import cv2
import matplotlib.pyplot as plt


model = load_model('MobileNet_Car_detection.model')


def processed_img(img_path):
    img = load_img(img_path, target_size=(224, 224))
    img_array = img_to_array(img)
    img_batch = np.expand_dims(img_array, axis=0)
    im = cv2.imread(img_path)
    im = cv2.cvtColor(im, cv2.COLOR_BGR2RGB)

    plt.imshow(im)
    pred=model.predict(img_batch)
    print("Car is Damaged: "+str(pred[0][0])+", Car is not Damaged: "+str(pred[0][1]))
    if pred[0][0]<pred[0][1]:
        print("The car is not damaged")
        data = {
        'result' : "The car is not Damaged",
        'pred_damged' : str(pred[0][0]),
        'pred_not_damaged' : str(pred[0][1])
        }
        return data
    else:
        print("The car is damaged")
        data = {
        'result' : "The car is Damaged",
        'pred_damged' : str(pred[0][0]),
        'pred_not_damaged' : str(pred[0][1])
        }
        return data


def run():
    st.title("Car Damage Detection ")
    img_file = st.file_uploader("Choose an Image", type=["jpg", "png",'JPEG'])
    if img_file is not None:
        img = Image.open(img_file).resize((250,250))
        st.image(img,use_column_width=False)
        save_image_path = './upload_images/'+img_file.name
        with open(save_image_path, "wb") as f:
            f.write(img_file.getbuffer())

        # if st.button("Predict"):
        if img_file is not None:
            result= processed_img(save_image_path)
            print(result)
            if result['result']=='The car is not Damaged':
                st.info('**The car is not Damaged**')
            else:
                st.info('**The car is damaged**')
            st.success("**Car damage rate: "+result['pred_damged']+'**')
            st.success("**Car Not damaged rate: "+result['pred_not_damaged']+'**')
run()
