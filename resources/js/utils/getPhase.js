import lune from 'lune'

export default function getPhase (date) {
    let moon_age;
    if(date) {
        moon_age = lune.phase(date).age;
    } else {
        moon_age = lune.phase().age;
    }

    
    let phase = "";

   if (moon_age < 6.5) {
       phase = "new";
   } else if (moon_age < 13.5) {
        phase = "waxing";
   } else if (moon_age < 20.5) {
       phase = "full";
   } else {
       phase = "waning";
   }
   return phase;
}