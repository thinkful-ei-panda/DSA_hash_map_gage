### Part 1: Create a HashMap class
Walk through the HashMap implementation in the curriculum and understand it well. Then write a HashMap class and its core functions with open addressing as the collision resolution mechanism.


- Export your `HashMap` module

- Create a `.js` file called `HashMaps_drills`. In the file import the `HashMap` module. Create a function called `main()`

- Inside your `main()` function, create a hash map called `lotr`.

- For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.

- Add the following items to your hash map: `{"Hobbit": "Bilbo"}`, `{"Hobbit": "Frodo"}`, `{"Wizard": "Gandalf"}`, `{"Human": "Aragorn"}`, `{"Elf": "Legolas"}`, `{"Maiar": "The Necromancer"}`,`{"Maiar": "Sauron"}`, `{"RingBearer": "Gollum"}`, `{"LadyOfLight": "Galadriel"}`, `{"HalfElven": "Arwen"}`,`{"Ent": "Treebeard"}`

- Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?

length is 9 but also 8? when it should be 11. 
so no and also there seems to be a bug where one of the object will come up undefined? 

- Retrieve the value that is hashed in the key `"Maiar"` and `Hobbit`.

that took long then i wish to admit  :c 
`maily because inserting that values above`Correctly`too a min to find out`

- What are the values of `Maiar` and `Hobbit` that you have? Is there a discrepancy? Explain your answer.

`Maiar =  Sauron`,
`Hobbit = Frodo`

- What is the capacity of your hash table after you have hashed all the above items? Explain your answer.

8 

because that is the default value set in the hashMaps constructor 



### Part 2: WhatDoesThisDo
DO NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.
```
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
```
###### comments
```
/*nameing the function*/
const WhatDoesThisDo = function(){

    /*setting values*/

    let str1 = 'Hello World.';
    let str2 = 'Hello World.';

    /*making new instance of hashmap*/

    let map1 = new HashMap();

    /*inserting values*/

    map1.set(str1,10);
    map1.set(str2,20);

    /*making new instance of another (but the same) hashmap*/

    let map2 = new HashMap();

    /*setting values*/

    let str3 = str1; //hello world
    let str4 = str2; //hello world

    /*setting values for the new...er hashmap*/

    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1)); // = 20
    console.log(map2.get(str3)); // = 10
}

```
i'm guessing since str1 was the 1st in
when str2 was called it pushed out the 1st call, since there was no were else  for it to go and, there can only be one item with said key value in a hash map from my understanding. 



### Part 3: Demonstrate understanding of Hash maps
*You don't need to write code for the following two drills. use any drawing app or simple pen and paper *
`u what m8?!`

![uwat](/img/2777.jpg)

- 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

![part-1](/img/part-1_of_4_hash_map.png)

 -2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

![par-2](/img/part_2_of_part_4_for_hash_maps.png)

### Part 4: Remove duplicates
Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of".
[]
```
const removeDuplicates = (str) =>{
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
};
```

### Part 5: Any permutation a palindrome
Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return `true`, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return `false`, because there's no anagram for "north" that would be a palindrome.

```
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
```

### Part 6: Anagram grouping
Write an algorithm to group a list of words into anagrams. For example, if the input was `['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']`, the output should be: [`['east', 'teas', 'eats']`, `['cars', 'arcs']`, `['acre', 'race']`].

```
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
```

### Part 7: Separate Chaining
Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.

Test your hash map with the same values from the `lotr` hash map.

only changes being that of adding "make head next if index has value"..

gg


```
  set(key, value) {
  
    const loadRatio = (this.length + this._deleted + 1) / this._capacity ;
    if(loadRatio > HashMap_w_chains.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap_w_chains.SIZE_RATIO);
    }
    /*Find the slot where this key should be in [like how i use to use the find function to get index
      of linked lists] */
    const index = this._findSlot(key);
  
    if(!this._hashTable[index]){
      this.length++;
      this._hashTable[index] = {
        key,
        value,
        next : null,
        DELETED : false
      };
    }else{
      let temp = this._hashTable[index];
      this._hashTable[index] = {
        key,
        value,
        next : temp,
        DELETED : false
      };
    }
  }
```

time for bed now 

![eh](/img/deadinsidecoding.jpg)