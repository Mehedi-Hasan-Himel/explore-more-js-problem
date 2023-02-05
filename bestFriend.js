const friends = [
  "Rakib",
  "Sahinur Islam",
  "Rajib",
  "Asif",
  "Abdullah",
  "Bipul",
  "Mominul",
];
function bestFriend(friends) {
  let longestFriendName = friends[0];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > longestFriendName.length) {
      longestFriendName = friends[i];
    }
  }
  return longestFriendName;
}

let BestFriend = bestFriend(friends);

console.log(BestFriend);
