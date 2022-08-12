function isBestFriend(object01, object02) {

    let tomName = object01.name;
    let tomFriend = object02.friend;
    let rokyName = object01.friend;
    const rokyFriend = object02.name;

    if (tomName === tomFriend && rokyName === rokyFriend) {

        return true;
    }
    else {
        return false;
    }
}

let object01 = { name: "Tom", friend: "Rock" };
let object02 = { name: "Rock", friend: "Tom" };


const results = isBestFriend(3, object02);
console.log(results);