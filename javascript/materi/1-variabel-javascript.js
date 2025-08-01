/*
    Deklarasi Variabel :
    1. var : Global scope dan deklarasinya bisa 
    berulang serta nilainya dapat berubah
    2. let : Block scope dan deklarasinya tidak bisa 
    berulang namun nilainya dapat berubah (redefined)
    3. const : Block scope dan deklarasinya tidak bisa 
    berulang serta nilainya tidak dapat berubah (immutable)
*/

// -. Var
var nama = "Dicky";
console.log(nama);
{
  var alamat = "Jl Untung Jawa";
}

{
  console.log(alamat);
}

var nama = "Ucup";
console.log(nama);

console.log("==========");

// -. Let
let name = "Ridwan";
console.log(name);

let sayaPintar;
console.log(sayaPintar);
sayaPintar = true;
console.log("Saya Pintar =", sayaPintar);

{
  let address = "Jl PIK 2";
  console.log(address);
}

name = "Zainudin";
console.log(name);
// {
//   console.log(address);
// }

console.log("==========");
// -. Const
const phi = 3.14;
console.log(phi);

{
  const angka = 10;
  console.log(angka);
}

// PENAMAAN VARIABEL :
/*
    CASE :
    1. camelCase => kalimat pertama selalu diawali huruf kecil dan 
    kalimat seterusnya huruf diawali dengan huruf besar
    2. kebab-case => dipisah dengan strip (-)
    3. snake_case => dipisah dengan underscore (_)
*/

// NILAI VARIABEL => TIPE DATA
// DALAM JAVASCRIPT TERDAPAT BEBERAPA TIPE DATA:
/*
    - Primitive Data Types :
    1. Number => integer dan float
    2. String => kalimat dan karakter
    3. Boolean => tipe data logika (true atau false)
    4. Null => Kosong
    5. Undefined => Belum didefinisikan
    6. dll
    
    - Reference (Object) Data Types :
    1. Array
    2. Object
    3. Function
    4. Class
    5. dll
    */
console.log("==========");

// CONTOH PENGGUNAAN VARIABEL :
// 1. Number => integer dan float
let angka1 = 10;
let angka2 = 20;
let hasil = angka1 + angka2;
console.log(hasil);

let tinggiBadanDicky = 185.78;
console.log(tinggiBadanDicky, "cm");

console.log("==========");

// 2. String => kalimat dan karakter
let firstName = "Dicky";
let middleName = "Fernando";
let lastName = "Sitepu";

// Concatenation (+) => Cara menggabungkan 2 atau lebih string bersamaan
console.log(firstName + " " + middleName + " " + lastName);

console.log(firstName, middleName, lastName);

console.log("==========");
// 3. Boolean => tipe data logika (true atau false)
const isAmISmart = false;
if (isAmISmart == true) {
  console.log("I have to give reward to myself");
} else {
  console.log("I have to study");
}

console.log("==========");
// 4. Null => Kosong
let kosong = null;
console.log(kosong);

console.log("==========");
// 5. Undefined => Belum didefinisikan
let unknown = undefined;
console.log(unknown);

