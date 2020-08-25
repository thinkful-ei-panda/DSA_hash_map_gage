const HashMap = require('../prework/hashMap');
const HashMap_w_chains = require('./hashMap_w_chain/hashMapWChain');
const {STORE} = require('../store/store');

const {lordOfTheRingsCast, log, anagramPalindrome , palindrome , anagramArray} = STORE;

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

// log(anagramPalindrome('acecarr'));



/*login at the 1st item in the list
    if x = y remove y from list
    after x is compared to all on the list
         add x to list ,
             prep new array,
                 and rinse and repeat
*/
const anagramGrouping = (arr) => {

  let res = [], obj = {};

  for(let i = 0 ; i < arr.length ; i ++){

    let temp; 
    temp = arr[i].split('').sort().join('');

    if(!obj[temp]){
      obj[temp] = [];
    }
    obj[temp].push(arr[i]);
  }
  for(let j in obj){
    res.push(obj[j]);
  }
  return res;
};

// log(anagramGrouping(anagramArray));



const chain = () => {
  const lotr = new HashMap_w_chains;

  lotr.MAX_LOAD_RATIO = 0.5,
  lotr.SIZE_RATIO = 3;
  
  for(let i = 0 ; i < lordOfTheRingsCast.length ; i++){
    for(let j in lordOfTheRingsCast[i])
      lotr.set(j,lordOfTheRingsCast[i][j]);
  }

  return lotr;
};

log(chain());