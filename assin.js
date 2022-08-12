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
// console.log(radianToDegree(10));



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
let isJavaScriptFileResult = isJavaScriptFile("file.js");
// console.log(isJavaScriptFileResult);



//----------------------------------------
//  problem-3 
// ------------------------------------
// function
function oilPrice(diseleQuantity, petrolQuantity, octaneQuantity) {
    // error haddle 
    if (typeof diseleQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number") {
        return 'pleace entre a valid number';
    }
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
// console.log(oilPrice(10, 5, 30));



// ----------------------------------
// problem-4 
// ------------------------------
// function 
function publicBusFare(people) {
    // error handle 
    if (typeof people !== 'number') {
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
console.log(publicBusFare(32));



// -----------------------------------------
// prolem-5 
// -------------------------------------
// function 
function isBestFriend(object01, object02) {
    // error handle 
    // if (typeof object01 !== 'object' && typeof object02 !== "object") {
    //     return 'please entir the object!!';
    // }
    let tomName = object01.name;
    let tomFriend = object02.friend;
    let rokyName = object01.friend;
    const rokyFriend = object02.name;
    // condition 
    if (tomName === tomFriend && rokyName === rokyFriend) {

        return true;
    }
    else {
        return false;
    }
}
object
let object01 = { name: "Tom", friend: "Rock" };
let object02 = { name: "Rock", friend: "Tom" };
let object03 = { name: "Rock", friend: "tamim" };
// console 
const results = isBestFriend(object01, object02);
// console.log(results);

