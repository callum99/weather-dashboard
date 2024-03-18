export const getDate = (numDays?: number) => {
  const dateObject = new Date();
  let day = '' + dateObject.getDate();
  let month = '' + dateObject.getMonth();
  const year = '' + dateObject.getFullYear();

  if (dateObject.getDate() < 10) {
    day = `0${day}`;
  }

  if (numDays) {
    day = `${dateObject.getDate() + numDays}`;
  }

  if (dateObject.getMonth() < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
};
