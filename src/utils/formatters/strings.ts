export const formatLongText = (text: string, start = 5, end = 5) => {
  if (text.length > start + end) {
    return text.slice(0, start).concat('...').concat(text.slice(-end));
  }
  return text;
};

export const overflowText = (text: string, maxLenght = 100) => {
  if (text.length > maxLenght) {
    return text.slice(0, maxLenght).concat('...');
  }
  return text;
};
