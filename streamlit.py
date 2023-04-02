import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import streamlit as st
import warnings
warnings.filterwarnings('ignore')

plt.style.use(style='ggplot')

data = pd.read_csv('train-data.csv')
print(data.head())

data.info()
data.drop(['Unnamed: 0'],axis=1, inplace=True)
data.dropna(subset = ['Mileage', 'Power', 'Mileage', 'Seats'], inplace=True)
data.drop(['New_Price'],axis=1, inplace=True)
data.isnull().sum()

data['Power'] = data['Power'].str.replace('null bhp', '113')

data['Mileage'] = data['Mileage'].str.replace('[^\d\.]', '').astype('float64')
data['Engine'] = data['Engine'].str.replace('[^\d\.]', '').astype('float64')
data['Power'] = data['Power'].str.replace('[^\d\.]', '').astype('float64')

data.drop(data[data['Kilometers_Driven'] > 100000].index, axis = 0, inplace = True)
data.drop(data[data['Power'] > 480].index, axis = 0, inplace = True)
data.drop(data[data['Engine'] > 5000].index, axis = 0, inplace = True)
st.info("Kilometer Driven")
fig = plt.figure(figsize = (12 ,6))
sns.histplot(data = data, x = data['Kilometers_Driven'], kde = True)
st.pyplot(fig)
st.info("Location")
fig2 = plt.figure(figsize = (14 ,6))
sns.countplot(data = data, x = 'Location')
st.pyplot(fig2)
st.info("Owner type")
fig3 = plt.figure(figsize = (10 ,6))
sns.countplot(data = data, x = 'Owner_Type')
st.pyplot(fig3)

st.info("Transmission and automatic")
fig ,ax = plt.subplots(1, 2, figsize = (14, 7))
sns.countplot(data = data, x = 'Transmission', ax = ax[0])
ax[1].pie(data['Transmission'].value_counts().values, labels = data['Transmission'].value_counts().index, 
          autopct = '%1.1f%%')
st.pyplot(fig)


st.info("Seats")
fig6 = plt.figure(figsize = (10 ,6))
sns.countplot(data = data, x = 'Seats')
st.pyplot(fig6)