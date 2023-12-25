const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '--discard-next') {
//       arr.splice(i, 2);
//     }
//     if (arr[i] === '--discard-prev') {
//       if (i === 0) {
//         arr.splice(i, 1);
//         continue;
//       }
//       arr.splice(i - 1, 2);
//     }
//     if (arr[i] === '--double-next') {
//       if (i === arr.length - 1) {
//         arr.splice(i, 1);
//         continue;
//       }
//       arr.splice(i, 1, arr[i + 1]);
//     }
//     if (arr[i] === '--double-prev') {
//       if (i === 0) {
//         arr.splice(i, 1);
//         continue;
//       }
//       arr.splice(i, 1, arr[i - 1]);
//     }
//   }
//   return arr;
// }

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (result.length > 0 && arr[i - 2] !== '--discard-next') {
        result.pop(); // удаляем последний элемент, если он не был помечен для удаления
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        result.push(arr[i + 1]); // удваиваем следующий элемент
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1]); // удваиваем предыдущий элемент, если он не был помечен для удаления
      }
    } else {
      result.push(arr[i]); // добавляем текущий элемент в массив result
    }
  }

  return result;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
