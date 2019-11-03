import getPhase from './getPhase';
import sunSignDB from './sunSignDB';
import lune from 'lune';
import {subDays, addDays} from 'date-fns';
import formatDate from '../utils/formatDate'

//date format: 'yyyy-mm-dd'
export default function moonSign (date) {
let moon_age = lune.phase(new Date(date)).age;
let dateOfTheLastNewMoon = formatDate(subDays(new Date(date), Math.round(moon_age)).toLocaleDateString()); 
const sunsignInLastNewMoon = sunSignDB(dateOfTheLastNewMoon);
const moonSignInLastNewMoon = sunsignInLastNewMoon;
let moonsign = "";

const signs = 
[   'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo' ,
    'virgo',
    'libra', 
    'scorpio', 
    'sagitarius',
    'capricorn',
    'aquarius',
    'pisces'
];

const moonSignInLastNewMoonIndex = signs.indexOf(moonSignInLastNewMoon);
let actualMoonSignIndex; 

if (moon_age >= 0 && moon_age < 2.5) { //new  
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 0;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex]; 
    
} else if (moon_age >= 2.5  && moon_age < 4.5) {
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 1;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

 } else if (moon_age >= 4.5 && moon_age < 6.5) { 
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 2;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 6.5 && moon_age < 8.5) { //wax
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 3;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 8.5 && moon_age < 10.5) {
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 4;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 10.5 && moon_age < 13.5) {
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 5;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 13.5 && moon_age < 14.5) { //full
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 6;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 14.5 && moon_age < 16.5) {
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 7;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];


} else if (moon_age >= 16.5 && moon_age < 18.5) {
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 8;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 18.5 && moon_age < 20.5) {
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 9;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 20.5 && moon_age < 22.5) { //min   
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 10;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

} else if (moon_age >= 22.5 && moon_age < 24.5) {
    actualMoonSignIndex = moonSignInLastNewMoonIndex + 11;

    if(actualMoonSignIndex > 11) {actualMoonSignIndex = actualMoonSignIndex - 12;}
    moonsign = signs[actualMoonSignIndex];

}

return moonsign;

}