// https://github.com/jasonsturges/lunarphase-js

// ////for specific  date
module.imports = { Moon } 
// const date = new Date();
// const phase = Moon.lunarPhase(date);


///lunar phase for specific date///
const phaseEmoji = Moon.lunarPhaseEmoji();
const phase = Moon.lunarPhase();const getJulianDate = (date = new Date()) => {
    const time = date.getTime();
    const tzoffset = date.getTimezoneOffset()
    
    return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
  }
  
 