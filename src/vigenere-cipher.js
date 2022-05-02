const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  
  constructor(require) {
    this.require = require
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.arr = []
  }

  genArr() {
    for (let i = 0; i < this.letters.length; i++) {
      let row = this.letters.slice(i)
      row += this.letters.slice(0, i)
      this.arr.push(row)
    }
  }

  getArr() {
    return this.arr
  }

  repeatString(key, message) {
    let resultStr = "";
    let length = key.length;
    let counter = 0;

    for (let i = 0; i < message.length; i++) {
      if (counter % length == 0) {
        counter = 0;
      }
      if (this.letters.indexOf(message[i]) >= 0) {
        resultStr += key[counter];
        counter++;
      } else {
        resultStr += message[i];
      }
    }
    return resultStr;
  }

  encrypt(message, key) {
    if (!message || !key) { throw new Error('Incorrect arguments!') } else {
      if (this.require == false) {
        let arr = message.split('')
        let revArr = arr.reverse()
        let result = revArr.join('')
        return result

      } else {
        let upSend = message.toUpperCase()
        let newKeys = key.toUpperCase()
        let encryptMessage = "";
        let upperNewKey = this.repeatString(newKeys, upSend);
        this.genArr();

        for (let counter = 0; counter < upSend.length;) {
          if (this.letters.indexOf(upSend[counter]) >= 0) {
            let i = this.letters.indexOf(upSend[counter]);
            let j = this.letters.indexOf(upperNewKey[counter]);
            encryptMessage += this.arr[i][j];
            counter++
          } else {
            encryptMessage += upSend[counter]
            counter++
          }
        }
        return encryptMessage;
      }
    }
  }
  decrypt(encryptedMess, key) {
    if (!encryptedMess || !key) { throw new Error('Incorrect arguments!') } else {
      if (this.require == false) {
        let arr = encryptedMess.split('')
        let revArr = arr.reverse()
        let result = revArr.join('')
        return result

      } else {
        let upSend = encryptedMess.toUpperCase()
        let newKeys = key.toUpperCase()
        let decryptMessage = "";
        let upperNewKey = this.repeatString(newKeys, upSend);
        this.genArr();

        for (let counter = 0; counter < upSend.length; counter++) {
          if (this.letters.indexOf(upSend[counter]) >= 0) {
            let i = this.letters.indexOf(upperNewKey[counter]);
            let j = this.arr[i].indexOf(upSend[counter]);
            decryptMessage += this.letters[j];
          } else {
            decryptMessage += upSend[counter]
          }
        }
        return decryptMessage;
      }
    }
  }
}
module.exports = {
  VigenereCipheringMachine
};
