import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { Alert, ALERT_TYPE } from 'src/app/interfaces/alert';
import { makeAlert } from 'src/lib/make-alert';

// A polar response is a response to a polar question (yes / no question)
enum POLAR_RESPONSE {
  YES = 1,
  NO = 0,
}

enum GENERAL_HEALTH_RATING {
  EXCELLENT = 1,
  VERY_GOOD = 2,
  GOOD = 3,
  FAIR = 4,
  POOR = 5,
}

enum SEX {
  FEMALE = 0,
  MALE = 1,
}

// 14 (technically 13 bc we omit the don't know category) level age category
// Source: https://www.icpsr.umich.edu/web/NAHDAP/studies/34085/datasets/0001/variables/AGEG5YR?archive=NAHDAP
enum AGEG5YR {
  AGE_18_24 = 1,
  AGE_25_29 = 2,
  AGE_30_34 = 3,
  AGE_35_39 = 4,
  AGE_40_44 = 5,
  AGE_45_49 = 6,
  AGE_50_54 = 7,
  AGE_55_59 = 8,
  AGE_60_64 = 9,
  AGE_65_69 = 10,
  AGE_70_74 = 11,
  AGE_75_79 = 12,
  AGE_80_MORE = 13,
}

enum EDUCATION_LEVEL {
  NONE_OR_KINDERGARTEN = 1,
  ELEMENTARY = 2,
  HIGH_SCHOOL = 3,
  HIGH_SCHOOL_GRAD = 4,
  COLLEGE_OR_TECH = 5,
  COLLEGE_GRAD = 6,
}

// 8 level income
// Source: https://www.icpsr.umich.edu/web/NAHDAP/studies/34085/datasets/0001/variables/INCOME2?archive=NAHDAP
enum INCOME_LEVEL {
  LESS_10000 = 1,
  LESS_15000 = 2,
  LESS_20000 = 3,
  LESS_25000 = 4,
  LESS_35000 = 5,
  LESS_50000 = 6,
  LESS_75000 = 7,
  MORE_75000 = 8,
}

@Component({
  selector: 'app-use-diabetic-compass-form',
  templateUrl: './use-diabetic-compass-form.component.html',
  styleUrls: ['./use-diabetic-compass-form.component.css'],
})
export class UseDiabeticCompassFormComponent implements OnInit {
  useDiabeticCompassForm: FormGroup;
  showSpinner = false;

  constructor() {
    // NOTE: Opting to use 0 and 1 to map closely to what our ML model expects
    // instead of using true / false
    this.useDiabeticCompassForm = new FormGroup({
      // Health Info
      hasHighBloodPressure: new FormControl('', [Validators.required]),
      hasHighCholesterol: new FormControl('', [Validators.required]),
      hadCholesterolCheckLastFiveYears: new FormControl('', [
        Validators.required,
      ]),
      hasHealthCare: new FormControl('', [Validators.required]),
      couldntAffordDoctorVisit: new FormControl('', [Validators.required]),
      bodyMassIndex: new FormControl(null, [Validators.required]),
      generalHeathRating: new FormControl('', [Validators.required]),

      // Lifestyle Info
      isHeavyDrinker: new FormControl('', [Validators.required]),
      isSmoker: new FormControl('', [Validators.required]),
      hadStroke: new FormControl('', [Validators.required]),
      hasHeartDiseaseOrAttack: new FormControl('', [Validators.required]),
      hasDifficultyWithStairs: new FormControl('', [Validators.required]),
      isPhysicallyActive: new FormControl('', [Validators.required]),
      eatsFruits: new FormControl('', [Validators.required]),
      eatsVegetables: new FormControl('', [Validators.required]),

      // Demographic Info
      sex: new FormControl('', [Validators.required]),
      ageCategory: new FormControl('', [Validators.required]),
      educationLevel: new FormControl('', [Validators.required]),
      incomeLevel: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.useDiabeticCompassForm.invalid) {
      return;
    }

    console.log({
      ...this.useDiabeticCompassForm.value,
      hasHighBloodPressure:
        POLAR_RESPONSE[this.useDiabeticCompassForm.value.hasHighBloodPressure],
      hasHighCholesterol:
        POLAR_RESPONSE[this.useDiabeticCompassForm.value.hasHighCholesterol],
      hadCholesterolCheckLastFiveYears:
        POLAR_RESPONSE[
          this.useDiabeticCompassForm.value.hadCholesterolCheckLastFiveYears
        ],
      hasHealthCare:
        POLAR_RESPONSE[this.useDiabeticCompassForm.value.hasHealthCare],
      couldntAffordDoctorVisit:
        POLAR_RESPONSE[
          this.useDiabeticCompassForm.value.couldntAffordDoctorVisit
        ],

      isSmoker: POLAR_RESPONSE[this.useDiabeticCompassForm.value.isSmoker],
      hadStroke: POLAR_RESPONSE[this.useDiabeticCompassForm.value.hadStroke],
      hasHeartDiseaseOrAttack:
        POLAR_RESPONSE[
          this.useDiabeticCompassForm.value.hasHeartDiseaseOrAttack
        ],
      hasDifficultyWithStairs:
        POLAR_RESPONSE[
          this.useDiabeticCompassForm.value.hasDifficultyWithStairs
        ],
      isPhysicallyActive:
        POLAR_RESPONSE[this.useDiabeticCompassForm.value.isPhysicallyActive],
      eatsFruits: POLAR_RESPONSE[this.useDiabeticCompassForm.value.eatsFruits],
      eatsVegetables:
        POLAR_RESPONSE[this.useDiabeticCompassForm.value.eatsVegetables],
      isHeavyDrinker:
        POLAR_RESPONSE[this.useDiabeticCompassForm.value.isHeavyDrinker],

      sex: SEX[this.useDiabeticCompassForm.value.sex],
      ageCategory: AGEG5YR[this.useDiabeticCompassForm.value.ageCategory],
      educationLevel:
        EDUCATION_LEVEL[this.useDiabeticCompassForm.value.educationLevel],
      incomeLevel: INCOME_LEVEL[this.useDiabeticCompassForm.value.incomeLevel],
      generalHeathRating:
        GENERAL_HEALTH_RATING[
          this.useDiabeticCompassForm.value.generalHeathRating
        ],
    });
  }
}