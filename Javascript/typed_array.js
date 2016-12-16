/*
* Typed Arrays: ECMAScript 6 API for handling binary data.
* APIs that support Typed Arrays: File API, XMLHttpRequest, Fetch API, Canvas, WebSockets etc.
* Buffers: instances of ArrayBuffer hold the binary data
* Views: provide the methods for accessing binary data - Typed Array constructor (eg. Unit8Array) and DataView
* Reference: http://www.2ality.com/2015/09/typed-arrays.html
* https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/
* */

/*
* Handling overflow and underflow
* Normally, when a value is out of the range of the element type, modulo arithmetic is used to convert it to a value
* within range. For signed and unsigned integers that means that:
* The highest value plus one is converted to the lowest value (0 for unsigned integers).
* The lowest value minus one is converted to the highest value.
* */

//Modulo conversion for unsigned 8-bit integers:
let unit8 = new Unit8Array(1);

unit8[0] = 255; unit8[0] //highest value within range 255
unit8[0] = 256; unit8[0] //overflow

unit8[0] = 0; unit8[0] //lowest value within range
unit8[0] = -1; unit8[0] //underflow 255

//Modulo conversion for signed 8-bit integers:
let int8 = new Int8Array(1);

int8[0] = 127; int8[0] // highest value within range 127
int8[0] = 128; int8[0] // overflow -128

int8[0] = -128; int8[0] // lowest value within range -128
int8[0] = -129; int8[0] // underflow 127

/*
* Clamped conversion is different:
* All underflowing values are converted to the lowest value.
* All overflowing values are converted to the highest value.
* */

let uint8c = new Uint8ClampedArray(1);

uint8c[0] = 255; uint8c[0] // highest value within range 255
uint8c[0] = 256; uint8c[0] // overflow 255

uint8c[0] = 0; uint8c[0] // lowest value within range 0
uint8c[0] = -1; uint8c[0] // underflow 0

/*
* Big endian: the most significant byte comes first.
* For example, the Uint16 value 0xABCD is stored as two bytes – first 0xAB, then 0xCD.
 Little endian: the least significant byte comes first.
 For example, the Uint16 value 0xABCD is stored as two bytes – first 0xCD, then 0xAB.
* */

const BIG_ENDIAN = Symbol('BIG_ENDIAN');
const LITTLE_ENDIAN = Symbol('LITTLE_ENDIAN');
function getPlatformEndianness() {
    let arr32 = Uint32Array.of(0x12345678);
    let arr8 = new Uint8Array(arr32.buffer);
    switch ((arr8[0]*0x1000000) + (arr8[1]*0x10000) + (arr8[2]*0x100) + (arr8[3])) {
        case 0x12345678:
            return BIG_ENDIAN;
        case 0x78563412:
            return LITTLE_ENDIAN;
        default:
            throw new Error('Unknown endianness');
    }
}

/*
* Negative indices:  every index in Typed Arrays can be negative. If it is, it counts backwards from the length.
* Therefore -1 refers to the last element, -2 to the second-last, etc.
* */