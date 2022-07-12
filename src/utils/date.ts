export const dateTimeStringToenGBLocalisedDateTimeString = (
  dateTimeString: string
) => {
  const parsedDate = new Date(Date.parse(dateTimeString));

  return parsedDate.toLocaleString('en-GB');
};
