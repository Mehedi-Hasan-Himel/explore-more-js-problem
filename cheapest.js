const phones = [
  {
    name: `Samsung`,
    camera: 12,
    Storage: `36 GB`,
    price: 36000,
    color: `silver`,
  },
  {
    name: `Walton`,
    camera: 10,
    Storage: `36 GB`,
    price: 22000,
    color: `silver`,
  },
  {
    name: `iPhone`,
    camera: 10,
    Storage: `36 GB`,
    price: 82000,
    color: `silver`,
  },
  { name: `MI`, camera: 10, Storage: `36 GB`, price: 52000, color: `silver` },
  { name: `Oppo`, camera: 10, Storage: `36 GB`, price: 20000, color: `silver` },
  {
    name: `Nokia`,
    camera: 10,
    Storage: `36 GB`,
    price: 44000,
    color: `silver`,
  },
  { name: `HTC`, camera: 10, Storage: `36 GB`, price: 62000, color: `silver` },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
