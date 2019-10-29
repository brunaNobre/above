import lune from 'lune'

export default function getPhase (date) {

    const moon_age = lune.phase(date).age;
    let phase = "";

   if (moon_age < 6.55) {
       phase = "new";
   } else if (moon_age < 13.55) {
        phase = "waxing";
   } else if (moon_age < 20.55) {
       phase = "full";
   } else {
       phase = "waning";
   }
   return phase;
}