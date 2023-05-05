const monthsList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const getAge = (date) => {
  if (!date) {
    return 'NA';
  }
  return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60 / 24 / 365);
};

export const formatBirthday = (date) => {
  if (!date) {
    return 'NA';
  }
  const birth = new Date(date);
  return `${birth.getDate()} ${
    monthsList[birth.getMonth()]
  } ${birth.getFullYear()}`;
};
