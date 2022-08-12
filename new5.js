function isBestFriend(friendOne, friendTwo) {
    // error handle 
    if (typeof friendOne !== 'object' || typeof friendTwo !== "object") {
        return 'please use currect object values'
    }
    // condition 
    if (friendOne.name === friendTwo.friend && friendTwo.name === friendOne.friend) {
        return true;
    }
    else {
        return false;

    }
}
// objects 
let object01 = { name: "Tom", friend: "Rock" };
let object02 = { name: "Rock", friend: "Tom" };
// console 
// console.log(isBestFriend(object01, false));

function isBestFriend(friendOne, friendTwo) {
    if (typeof friendOne !== "object" || typeof friendTwo !== "object") {
        return "Pleae use correct name also be sure both name will be same case!"
    }
    // if(friendOne.name !== friendTwo.friend || friendTwo.name !== friendOne.friend){
    //     return "Pleae use correct name also be sure both name will be same case!"
    // }
    if
        (((friendOne.name.length === 0) || (friendTwo.friend.length === 0)) || ((friendTwo.name.length === 0) || (friendOne.friend.length === 0))) {
        return "empty string!!!";
    }
    else if (friendOne.name === friendTwo.friend && friendTwo.name === friendOne.friend) {
        return true;
    }
    else {
        return false;
    }

}
// { name: "rafi", friend: "mostafiz" }, { name: "mostafiz", friend: "rafi" }
console.log(isBestFriend({ name: false, friend: true }, { name: "mostafiz", friend: "rafi" }));