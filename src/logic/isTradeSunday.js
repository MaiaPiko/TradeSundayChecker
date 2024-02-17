function isTradeSunday(date) {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
    
  const tradeSundays2024 = [
    new Date(2024, 0, 28).getTime(),
    new Date(2024, 2, 24).getTime(),
    new Date(2024, 3, 28).getTime(),
    new Date(2024, 5, 30).getTime(),
    new Date(2024, 7, 25).getTime(),
    new Date(2024, 11, 15).getTime(),
    new Date(2024, 11, 22).getTime()
  ];
  
  return tradeSundays2024.includes(date.getTime());
}

export default isTradeSunday;
