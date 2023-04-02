from django.shortcuts import render

# Create your views here.
import requests
import pickle
import numpy as np
import pandas as pd
import sklearn
from django.http import JsonResponse
from rest_framework.response import Response
from sklearn.preprocessing import StandardScaler
from django.views import View
from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve(strict=True).parent.parent

model = pickle.load(open(BASE_DIR/ "vot_reg.pkl", "rb"))
standard_to = StandardScaler()

class newsapi(APIView):

	def post(self,request):

		Fuel_Type_Diesel=0
    
		if request.method == 'POST':
		    Year = int(request.data['Year'])
		    Present_Price=float(request.data['Present_Price'])
		    Kms_Driven=int(request.data['Kms_Driven'])
		    Owner=int(request.data['Owner'])
		    Fuel_Type_Petrol=request.data['Fuel_Type_Petrol']
		    if(Fuel_Type_Petrol=='Petrol'):
		            Fuel_Type_Petrol=1
		            Fuel_Type_Diesel=0
		    else:
		        Fuel_Type_Petrol=0
		        Fuel_Type_Diesel=1
		    Year=2023-Year
		    Seller_Type_Individual=request.data['Seller_Type_Individual']
		    if(Seller_Type_Individual=='Individual'):
		        Seller_Type_Individual=1
		    else:
		        Seller_Type_Individual=0
		    Transmission_Mannual=request.data['Transmission_Mannual']
		    if(Transmission_Mannual=='Mannual'):
		        Transmission_Mannual=1
		    else:
		        Transmission_Mannual=0
		    prediction=model.predict(np.array([[Year, 
		                                        Present_Price, 
		                                        Kms_Driven,
		                                        Owner, 
		                                        Fuel_Type_Diesel, 
		                                        Fuel_Type_Petrol, 
		                                        Seller_Type_Individual, 
		                                        Transmission_Mannual]]))
		    output=round(prediction[0],2)
		    if output<0:
		        return Response("Sorry you cannot sell this car")
		    else:
		        return Response("You can sell the Car at an estimated price of {} lakhs".format(output))
		else:
		    return Response("This method is not allowed")

csv_path = os.path.join(BASE_DIR,'loginsignupfeed/Cleaned_Data.csv')
df = pd.read_csv(csv_path)
class carfinder(APIView):
	def post(self,request):
		
		brand = request.data['Brand']
		Transmission = request.data['Transmission']
		fuel = request.data['Fuel']
		year = request.data['Year']
		owner_type = request.data['owner_type']
		seats = int(request.data['seats'])
		filter_data = df.loc[(df['Brand']==brand)| (df['Year']==year) | (df['Owner_Type'] ==owner_type) | (df['Seats']==seats) | (df['Fuel_Type']==fuel) | (df['Transmission']==Transmission)]
		newdta = filter_data[:10]
		print(newdta)
		data = []
		for i in range(10):
			new_data = {'name':newdta['Name'][i],'location':newdta['Location'][i],'price':newdta['Price'][i],'Year':newdta['Year'][i]}
			data.append(new_data)
		return Response(data)
























