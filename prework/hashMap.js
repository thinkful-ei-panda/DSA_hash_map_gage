class HashMap {
  constructor(initialCapacity = 8){
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._delete = 0;
  }

  static _hashString(string){
    let hash = 6381;
    for(let i = 0 ; i < string.length; i++){
      hash = (hash << 5 ) + hash + string.charCodeAt(i);
      hash = hash & hash; 
    }
    return hash >>> 0;
  }
}


module.exports = HashMap; 