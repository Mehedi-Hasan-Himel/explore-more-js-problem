// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

const Numbers = [20, 40, 60, 100, 150, 200];

// for loop

let biggerNumbers = [];

for (let i = 0; i < Numbers.length; i++) {
  if (Numbers[i] > 80) {
    biggerNumbers.push(Numbers[i]);
  }
}
console.log(biggerNumbers);

