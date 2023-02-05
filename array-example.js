// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrLength = Numbers.length;
console.log(`Total elements: `, arrLength);

let change = (Numbers[3] = 333);
console.log(Numbers);

let add = Numbers.push(11, 12)
console.log(Numbers);

let dlt = Numbers.pop()
console.log(Numbers);