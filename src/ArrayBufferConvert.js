export default class ArrayBufferConverter{
    constructor(buffer){
        this.buffer = buffer;
    }
    load(buffer){
      return this.buffer;
    }
    
    toString(buffer){
      let text = '';
      const testData = new Uint16Array(buffer);
      
      for(let i = 0; i < testData.length; i+=1){
        text += String.fromCharCode(testData[i])
      }
      return text
    }
  }