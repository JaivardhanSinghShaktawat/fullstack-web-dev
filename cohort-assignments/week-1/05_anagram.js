/*
Write a function 'isAnagram' which takes 2 parameters and returns true/false if those
are anagrams or not.

What's Anagram ?
- A word, phrase, or name formed by re-arranging the letters of another, such as spar,
formed from asap.
*/

function isAnagram(s1, s2) {
  s1 = s1
    .split("")
    .map((ch) => ch.toLowerCase())
    .join("");

  s2 = s2
    .split("")
    .map((ch) => ch.toLowerCase())
    .join("");

  // defining an empty map.
  let hash = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (hash.has(s1[i])) {
      let currentVal = hash.get(s1[i]);
      hash.set(s1[i], currentVal + 1);
    } else {
      hash.set(s1[i], 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (hash.has(s2[i])) {
      let currentVal = hash.get(s2[i]);
      if (currentVal > 0) {
        hash.set(s2[i], currentVal - 1);
      }
    } else {
      return false;
    }
  }

  for (const [key, val] of hash) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
}

if (isAnagram("listen", "silent")) {
  console.log("Anagram");
} else {
  console.log("Not anagram");
}
