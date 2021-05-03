const idGetter = (value) => {
  let regexp = /([^,]+_id)/gi;
  const key = Object.keys(value).toString().match(regexp)[0];
  return value[key];
};

export default idGetter;
