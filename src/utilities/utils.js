function generateIdArr(size, maxInt) {
  const idsObj = {};
  for (let i = 0; i < size; i += 1) {
    const newId = _addId(idsObj, maxInt);
    idsObj[newId] = newId;
  }

  const idArr = [];
  Object.keys(idsObj).forEach((key) => {
    idArr.push(Number(key));
  });

  return idArr;
}

// helper function for adding a unique id
function _addId(idsObj, maxInt) {
  const randomId = Math.ceil(Math.random() * maxInt);
  return idsObj.hasOwnProperty(randomId) ? _addId(idsObj, maxInt) : randomId;
}

// exports
export { generateIdArr };
