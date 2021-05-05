const idGetter = (value) => {
  let regexp = /([^,]+_id)/gi;
  const key = Object.keys(value).toString().match(regexp)[0];
  console.log(value[key]);
  return value[key];
};

export default idGetter;
