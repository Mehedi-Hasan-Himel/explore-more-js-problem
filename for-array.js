// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// for of
/* for (const number of numbers) {
  console.log(number);
} */


// for

for (let i = 0; i < numbers.length; i++){
   console.log(numbers[i]);
}