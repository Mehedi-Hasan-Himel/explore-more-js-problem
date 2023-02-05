// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

let info = {
  name: `Mehedi Hasan Himel`,
  semester: `6th`,
  age: 22,
};

let infoUpdate = (info.age = 23);

console.log(info);
