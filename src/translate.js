"use strict";

const translate = (word) => {
  // const vowels = ["a", "e", "i", "o", "u"]; //<--- the other method i always forget
  // if(vowels.includes(word[0])) {
  //   return word + "way";
  // }
  word = word.toLowerCase();

  if (
    word[0] === "a" ||
    word[0] === "e" ||
    word[0] === "i" ||
    word[0] === "o" ||
    word[0] === "u"
  ) {
    return `${word}way`;
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter)); //<--- .split puts string into array, then we can find the index that includes the first vowel
    return word.slice(index) + word.slice(0, index) + "ay";
  } //<--- index = where the vowel is and take everything from there, adding back the range,0 - index(the vowel not included), then adding 'ay'
};

module.exports = { translate };
