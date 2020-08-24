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
};



module.exports = {STORE,};