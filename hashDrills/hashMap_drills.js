const HashMap = require('../prework/hashMap');
const {STORE} = require('../store/store');

const {lordOfTheRingsCast, log, anagramPalindrome , palindrome} = STORE;

const main = () =>{
  const lotr = new HashMap;

  lotr.MAX_LOAD_RATIO = 0.5,
  lotr.SIZE_RATIO = 3;

  for(let i = 0 ; i < lordOfTheRingsCast.length ; i++){
    for(let j in lordOfTheRingsCast[i])
      lotr.set(j,lordOfTheRingsCast[i][j]);
  }

  log(lotr.get('Maiar'),lotr.get('Hobbit'));
  return lotr;
};

//log(`length of the lotr array before hashing is :${lordOfTheRingsCast.length}`);

// log(main());

// log(removeDuplicates('google all that you think can think of'));



log(anagramPalindrome('acecarr'));