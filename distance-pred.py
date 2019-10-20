import numpy as np 
import matplotlib.pyplot as plt 
import pandas as pd 
from sklearn.linear_model import LinearRegression 
from sklearn.preprocessing import PolynomialFeatures
dt = pd.read_csv(r'C:\Users\welcome\Desktop\cbs.csv')
X = dt.iloc[:, 1].values 
Y = dt.iloc[:, 2].values
Z = dt.iloc[:, 3].values
poly = PolynomialFeatures(degree = 4) 
X = np.reshape(X, (-1, 1))
X_poly = poly.fit_transform(X) 
poly.fit(X_poly, Y) 
lin2 = LinearRegression() 
lin2.fit(X_poly, Y) 
plt.scatter(X, Z, color = 'blue') 
plt.plot(X, lin2.predict(poly.fit_transform(X)), color = 'red') 
plt.title('Polynomial Regression') 
plt.xlabel('Distance') 
plt.ylabel('Time') 
plt.show() 
