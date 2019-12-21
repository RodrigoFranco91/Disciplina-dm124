import { BMIService } from "./bmi.service";

const decimalDigits = 2;
const height = 1.71;
const weight = 76;

const bmi = BMIService.getIndex(weight, height).toFixed(decimalDigits);
console.log(bmi);