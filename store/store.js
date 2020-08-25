/* eslint-disable no-console */
/* eslint-disable quotes */
const STORE ={
  lordOfTheRingsCast : [
    {"Hobbit" : "Bilbo"},
    {"Hobbit" : "Frodo"},
    {"Wizard" : "Gandalf"},
    {"Human" : "Aragorn"},
    {"Elf" : "Legolas"},
    {"Maiar" : "The Necromancer"},
    {"Maiar" : "Sauron"},
    {"RingBearer" : "Gollum"},
    {"LadyOfLight" : "Galadriel"},
    {"HalfElven" : "Arwen"},
    {"Ent" :"Treebeard"},
  ],
  log : console.log,
  removeDuplicates : (str) => {
    let res ='';
    for(let i = 0 ; i < str.length ; i++){
      if(str[i] === ' '){
        res+= str[i];
        continue;
      }
      if(res.includes(str[i])){
        continue;
      }else{
        res+= str[i];
      }
    }
    return res;
  },
  anagramPalindrome : (str) => {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    if(typeof str !== 'string'){
      throw new Error('not a string');
    }
    let ana = anagram(str);
    for(let j = 0; j < ana.length ; j++){
      let l = str.length,
        i = 0,
        c = 0;

      while (i < str.length){
        console.log(ana[j], c );
        if(ana[j][i] === ana[j][l - 1]) c++;
        i++, l--;
      } 
      if(c === str.length ){
        return true;
      }
    }
    return false;
  },
};



const anagram = (str,ana ='',store = [] ) => {
  if(!str){
    store.push(ana);
    return store;
  }
  for(let i = 0 ; i < str.length ; i++){
    ana += str[i];
    anagram(
      str.slice(0,i) + str.slice(i + 1),
      ana,
      store
    );
    ana = ana.slice(0, ana.length-1);
  }
  return store;
};
  


module.exports = {STORE};