import pandas as pd
import numpy as np
import scipy.stats
import csv
path_to_file = r'C:\Users\gusta\PycharmProjects\datamining\diabetes_012_health_indicators_BRFSS2015.csv'
document = []
with open(path_to_file, newline='') as csvfile:
    reader = csv.reader(csvfile)

for i in reader:
    rlist=[]
    rlist = i
    document.append(rlist)
    Diabetes = []
    HighBP = []
    HighChol = []
    Cholcheck = []
    BMI = []
    Smoker =[]
    Stroke = []
    HeartDiseaseorAttack = []
    PhysActivity = []
    Fruits =[]
    Veggies = []
    Heavy_alc = []
    HealthCare = []
    Docb = []
    GenHlth =[]
    MenHlth = []
    PhyHlth = []
    Diffwalk = []
    Sex = []
    Age = []
    Educ = []
    Income =[]

for i in range(1,253680):
    Diabetes.append(float(document[i][0]))
    HighBP.append(float(document[i][1]))
    HighChol.append(float(document[i][2]))
    Cholcheck.append(float(document[i][3]))
    BMI.append(float(document[i][4]))
    Smoker.append(float(document[i][5]))
    Stroke.append(float(document[i][6]))
    HeartDiseaseorAttack.append(float(document[i][7]))
    PhysActivity.append(float(document[i][8]))
    Fruits.append(float(document[i][9]))
    Veggies.append(float(document[i][10]))
    Heavy_alc.append(float(document[i][11]))
    HealthCare.append(float(document[i][12]))
    Docb.append(float(document[i][13]))
    GenHlth.append(float(document[i][14]))
    MenHlth.append(float(document[i][15]))
    PhyHlth.append(float(document[i][16]))
    Diffwalk.append(float(document[i][17]))
    Sex.append(float(document[i][18]))
    Age.append(float(document[i][19]))
    Educ.append(float(document[i][20]))
    Income.append(float(document[i][21]))
    
x = HighBP
y = HighChol
print(scipy.stats.pointbiserialr(x, y))
y =Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y= Smoker
print(scipy.stats.pointbiserialr(x, y))
y=Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = HighChol
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y= Smoker
print(scipy.stats.pointbiserialr(x, y))
y=Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Cholcheck
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Smoker
print(scipy.stats.pointbiserialr(x, y))
y=Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Smoker
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Stroke
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = HeartDiseaseorAttack
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = PhysActivity
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Fruits
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Veggies
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Heavy_alc
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Docb
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Diffwalk
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Diffwalk
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack
print(scipy.stats.pointbiserialr(x, y))
y = PhysActivity
print(scipy.stats.pointbiserialr(x, y))
y = Fruits
print(scipy.stats.pointbiserialr(x, y))
y = Veggies
print(scipy.stats.pointbiserialr(x, y))
y = Heavy_alc
print(scipy.stats.pointbiserialr(x, y))
y = Docb
print(scipy.stats.pointbiserialr(x, y))
y = Sex
print(scipy.stats.pointbiserialr(x, y))
x = Sex
y = HighBP
print(scipy.stats.pointbiserialr(x, y))
y =HighChol
print(scipy.stats.pointbiserialr(x, y))
y= Cholcheck
print(scipy.stats.pointbiserialr(x, y))
y=Smoker
print(scipy.stats.pointbiserialr(x, y))
y = Stroke
print(scipy.stats.pointbiserialr(x, y))
y = HeartDiseaseorAttack