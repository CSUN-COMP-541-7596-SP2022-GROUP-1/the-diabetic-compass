import pandas as pd
import numpy as np
import scipy.stats
import matplotlib.pyplot as plt
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

print("Correlation between Diabetes and High Chol" +
str(scipy.stats.pearsonr(Diabetes,HighChol)))
print("Correlation between Diabetes and BMI" +
str(scipy.stats.pearsonr(Diabetes,BMI)))
print("Correlation between Diabetes and High Blood Pressure" +
str(scipy.stats.pearsonr(Diabetes,HighBP)))
print("Correlation between Diabetes and Smokers" +
str(scipy.stats.pearsonr(Diabetes,Smoker)))
print("Correlation between Diabetes and STROKES" +
str(scipy.stats.pearsonr(Diabetes,Stroke)))
print("Correlation between Diabetes and Physical Activity" +
str(scipy.stats.pearsonr(Diabetes,PhysActivity)))
print("Correlation between Diabetes and Fruits" +
str(scipy.stats.pearsonr(Diabetes,Fruits)))
print("Correlation between Diabetes and Veggie" +
str(scipy.stats.pearsonr(Diabetes,Veggies)))
print("Correlation between Diabetes and Heavy alcohol consumption" +
str(scipy.stats.pearsonr(Diabetes,Heavy_alc)))
print("Correlation between Diabetes and Higher Age" +
str(scipy.stats.pearsonr(Diabetes,Age)))
print("Correlation between Diabetes and High Income " +
str(scipy.stats.pearsonr(Diabetes,Income)))
print("Correlation between Diabetes and Males" +
str(scipy.stats.pearsonr(Diabetes,Sex)))
print("Correlation between Diabetes and High Education" +
str(scipy.stats.pearsonr(Diabetes,Educ)))
print("Correlation between Diabetes and taking Chol Check" +
str(scipy.stats.pearsonr(Diabetes,Cholcheck)))
print("Correlation between Diabetes and having any healthcare" +
str(scipy.stats.pearsonr(Diabetes,HealthCare)))
print("Correlation between Diabetes and Mental Health" +
str(scipy.stats.pearsonr(Diabetes,MenHlth)))