const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let count = names.length * 2;
  const n = [...names];
  while (count !== 0) {
    for (let i = 1; i < n.length; i++) {
      const part = n.slice(0, i);
      if (part.indexOf(n[i]) !== -1) {
        const slice = n[i].slice(-3).replace(/[()]+/g, "");
        const d = parseInt(slice, 10);
        if (!d && d <= 1) {
          n[i] = `${n[i]}(1)`;
          break;
        }
        if (d && d > 1) {
          const slicepart = n[i].slice(0, -3);
          n[i] = `${slicepart}(${d + 1})`;
          break;
        } else {
          if (n[i].slice(-6).replace(/[()]+/g, "") === "11") {
            const slicepart = n[i].slice(0, -6);
            n[i] = `${slicepart}(2)`;
            break;
          }
          n[i] = `${n[i]}(1)`;
          break;
        }
      }
    }
    count--;
  }
  return n;
}

module.exports = {
  renameFiles
};
