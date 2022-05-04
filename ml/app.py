import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from flask import Flask
from pathlib import Path

csvPath = Path('./Diabetes_Normalized.csv').resolve()

def predict(array):
  spit = ["HighBP", 'HighChol', 'CholCheck', 'BMI', "Smoker", 'Stroke', 'HeartDiseaseorAttack', 'PhysActivity',
          'Fruits', 'Veggies', 'HvyAlcoholConsump', 'AnyHealthcare', 'NoDocbcCost', 'GenHlth', 'DiffWalk', 'Sex',
          'Age', 'Education', 'Income']
  # array must be 19 attributes
  data = [array]
  test_data_frame = pd.DataFrame(data, columns=spit)
  data_frame = pd.read_csv(csvPath)
  subject = data_frame.Diabetes_012
  data_frame = data_frame[spit]
  sub_train, sub_test, all_train, all_test = train_test_split(data_frame, subject, test_size=.20)
  dtc = LogisticRegression()
  dtc.fit(sub_train, all_train)
  return dtc.predict(test_data_frame)

app = Flask(__name__)

@app.route("/")
def index():


  return {
    'data': {

    },
    'errors': []
  }

if __name__ == '__main__':
  app.run()