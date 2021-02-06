const decamalize = (object) => {
  const keys = Object.keys(object);
  const newKeys = keys.map((key) => {
    return key
      .replace(/([a-z\d])([A-Z])/g, (match, p1, p2) => {
        if (match) {
          return `${p1}_${p2}`;
        }
      })
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, (match, p1, p2) => {
        if (match) {
          return `${p1}_${p2}`;
        }
      })
      .toLowerCase();
  });

  return newKeys.reduce((acc, cur, index) => {
    const obj = object[keys[index]];
    return {
      ...acc,
      [cur]: typeof obj === 'object' ? decamalize(obj) : obj,
    }
  }, {})
}

const camelize = (object) => {
  const keys = Object.keys(object);
  const newKeys = keys.map((key) => {
    return key.replace(/[_]+(\w)/g, (match, p1) => {
      if (match) return p1.toUpperCase();      
    });
  });

  return newKeys.reduce((acc, cur, index) => {
    const obj = object[keys[index]];
    return {
      ...acc,
      [cur]: typeof obj === 'object' ? camelize(obj) : obj,
    }
  }, {})
}
