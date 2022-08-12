//-------------------------------
//  problem 1
//  -----------------------------
// function 
function radianToDegree(radian) {
    // error haddle 
    if (typeof radian !== "number") {
        return 'pleace entre a valid number';
    }

    let degree = Math.PI;
    let degreeResult = radian * (180 / degree);
    result = degreeResult.toFixed(2);
    return result;
}
// console 
console.log(radianToDegree(10));

//----------------------------
//  problem-2 
//  ---------------------------
// function 
function isJavaScriptFile(string) {
    if (typeof string !== 'string') {
        return "please enter a string value!!"
    }
    if (string[string.length - 1] === "s" && string[string.length - 2] === "j" && string[string.length - 3] === ".") {
        return true;
    }
    else {
        return false;
    }
}
// console 
let isJavaScriptFileResult = isJavaScriptFile('index.js');
console.log(isJavaScriptFileResult);

//----------------------------------------
//  problem-3 
// ------------------------------------
// function
function oilPrice(diseleQuantity, petrolQuantity, octaneQuantity) {
    // error haddle 
    if (typeof diseleQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number") {
        return 'pleace entre a valid number';
    }

    let price = diseleQuantity * petrolQuantity * octaneQuantity;
    const perDiselePrice = 114;
    const perPetrolePrice = 130;
    const perOctanePrice = 135;

    let diselePrice = diseleQuantity * perDiselePrice;
    let pectrolePrice = petrolQuantity * perPetrolePrice;
    let octanePrice = octaneQuantity * perOctanePrice;

    let totalPrice = diselePrice + pectrolePrice + octanePrice;
    return totalPrice;
}
// console 
console.log(oilPrice(10, 20, 12));

// ----------------------------------
// problem-4 
// ------------------------------
// function 
function publicBusFare(people) {
    // error handle 
    if (typeof people !== "number") {
        return 'pleace entre a valid number';
    }
    const publicBusTicketPrice = 250;
    const eachBusPeople = 50;
    const eachMicrobusPeople = 11;
    const remainMicrobusPeople = people % eachBusPeople;
    const remainPublicBusPeople = remainMicrobusPeople % eachMicrobusPeople;
    const publicBusPeopleTicketPrice = remainPublicBusPeople * publicBusTicketPrice;

    return publicBusPeopleTicketPrice;
}
// console 
console.log(publicBusFare(1));

// ----------------------------------------
// problem-5
// --------------------------------------------
// function 
function isBestFriend(friendOne, friendTwo) {
    // error handle 
    if (typeof friendOne !== "object" || typeof friendTwo !== "object") {
        return "Pleae use correct name also be sure both name will be same case!"
    }
    if
        (((friendOne.name.length === 0) || (friendTwo.friend.length === 0)) || ((friendTwo.name.length === 0) || (friendOne.friend.length === 0))) {
        return "empty string!!!";
    }
    // condition 
    else if (friendOne.name === friendTwo.friend && friendTwo.name === friendOne.friend) {
        return true;
    }
    else {
        return false;
    }

}
// { name: "rafi", friend: "mostafiz" }, { name: "mostafiz", friend: "rafi" }
console.log(isBestFriend({ name: "a", friend: "b" }, { name: "b", friend: "a" }));