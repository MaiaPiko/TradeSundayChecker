function isTradeSunday(date) {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    
    const twoSundaysBeforeChristmas = new Date(year, 11, 25 - 14);
    const oneSundayBeforeEaster = new Date(year, month, day - 7);
    const lastSundayOfJanuary = new Date(year, 0, 31 - new Date(year, 0, 31).getDay());
    const lastSundayOfApril = new Date(year, 3, 30 - new Date(year, 3, 30).getDay());
    const lastSundayOfJune = new Date(year, 5, 30 - new Date(year, 5, 30).getDay());
    const lastSundayOfAugust = new Date(year, 7, 31 - new Date(year, 7, 31).getDay());
    
    return (
      (date.getTime() === twoSundaysBeforeChristmas.getTime()) ||
      (date.getTime() === oneSundayBeforeEaster.getTime()) ||
      (date.getTime() === lastSundayOfJanuary.getTime()) ||
      (date.getTime() === lastSundayOfApril.getTime()) ||
      (date.getTime() === lastSundayOfJune.getTime()) ||
      (date.getTime() === lastSundayOfAugust.getTime())
    );
  }
  
  export default isTradeSunday;
  