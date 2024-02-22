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

function shuffleArr(arr) {
  const arrCopy = [...arr];
  const shuffledArr = [];

  while (arrCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    const [randomSelection] = arrCopy.splice(randomIndex, 1);
    shuffledArr.push(randomSelection);
  }

  return shuffledArr;
}

// exports
export { generateIdArr, shuffleArr };
