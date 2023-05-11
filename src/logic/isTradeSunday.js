function isTradeSunday(date) {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
    
  const sundayBeforeChristmas = new Date(year, 11, 24).getTime();
  const sundayTwoBeforeChristmas = new Date(year, 11, 17).getTime();
  const oneSundayBeforeEaster = new Date(year, 3, 2).getTime();
  const lastSundayOfJanuary = new Date(year, 0, 31 - new Date(year, 0, 31).getDay()).getTime();
  const lastSundayOfApril = new Date(year, 3, 30 - new Date(year, 3, 30).getDay()).getTime();
  const lastSundayOfJune = new Date(year, 5, 30 - new Date(year, 5, 30).getDay()).getTime();
  const lastSundayOfAugust = new Date(year, 7, 31 - new Date(year, 7, 31).getDay()).getTime();
    
  return (
    (date.getTime() === sundayBeforeChristmas) ||
    (date.getTime() === sundayTwoBeforeChristmas) ||
    (date.getTime() === oneSundayBeforeEaster) ||
    (date.getTime() === lastSundayOfJanuary) ||
    (date.getTime() === lastSundayOfApril) ||
    (date.getTime() === lastSundayOfJune) ||
    (date.getTime() === lastSundayOfAugust)
  );
}

export default isTradeSunday;
