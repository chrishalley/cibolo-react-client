export const pathsFromObject = (object, searchKey, path=[], array=[]) => {
  if (!searchKey) return console.error('no searchKey argument specified');
  
  for (let key in object) {
    let curPath = path.concat(key);
    if (object[key].hasOwnProperty(searchKey)) {
      array.push({
        path: curPath.join('.'),
        ...object[key]
      })
    } else if (typeof(object[key] === 'object' && !Array.isArray(object[key]))){   
      pathsFromObject(object[key], searchKey, curPath, array)
    } else {
      console.log('none of the above');
    }
  }
  return array;
};