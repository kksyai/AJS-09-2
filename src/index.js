import getBuffer from "./getBuffer";
import ArrayBufferConverter from "./ArrayBufferConvert";

const buffer = getbuffer();

const test = new ArrayBufferConverter;

console.log(test.load(buffer));
console.log(test.toString(buffer));
