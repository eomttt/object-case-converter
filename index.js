const decamelize = (object) => {
  if (!object) {
    return object;
  }

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

    let value = obj;
    if (Array.isArray(obj)) {
      value = obj.map((item) => {
        return typeof item === 'object' ? decamelize(item): item;
      });
    } else if (typeof obj === 'object') {
      value = decamelize(obj);
    }

    return {
      ...acc,
      [cur]: value,
    }
  }, {})
}

const camelize = (object) => {
  if (!object) {
    return object;
  }

  const keys = Object.keys(object);
  const newKeys = keys.map((key) => {
    return key.replace(/[_]+(\w)/g, (match, p1) => {
      if (match) return p1.toUpperCase();      
    });
  });

  return newKeys.reduce((acc, cur, index) => {
    const obj = object[keys[index]];

    let value = obj;
    if (Array.isArray(obj)) {
      value = obj.map((item) => {
        return typeof item === 'object' ? camelize(item): item;
      });
    } else if (typeof obj === 'object') {
      value = camelize(obj);
    }

    return {
      ...acc,
      [cur]: value,
    }
  }, {})
}

module.exports.decamelize = decamelize;
module.exports.camelize = camelize;
