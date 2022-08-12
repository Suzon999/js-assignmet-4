//-------------------------------
//  problem 1
//  -----------------------------
// function 
function radianToDegree(radian) {
    // error haddle 
    if (typeof radian !== Number) {
        return 'pleace entre a valid number';
    }

    let degree = Math.PI;
    let degreeResult = radian * (180 / degree);
    result = degreeResult.toFixed(2);
    return result;
}
// console 
console.log(radianToDegree("hiii"));



//----------------------------
//  problem-2 
//  ---------------------------
// function 
function isJavaScriptFile(string) {
    if (string[string.length - 1] === "s" && string[string.length - 2] === "j" && string[string.length - 3] === ".") {
        return true;
    }
    else {
        return false;
    }
}
// console 
let isJavaScriptFileResult = isJavaScriptFile("index.js");
console.log(isJavaScriptFileResult);



//----------------------------------------
//  problem-3 
// ------------------------------------
// function
function oilPrice(diseleQuantity, petrolQuantity, octaneQuantity) {
    // error haddle 
    if (typeof diseleQuantity !== Number || typeof petrolQuantity !== Number || typeof octaneQuantity !== Number) {
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
console.log(oilPrice(10, 20, 30));



// ----------------------------------
// problem-4 
// ------------------------------
// function 
function publicBusFare(people) {
    // error handle 
    if (typeof people !== Number) {
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
console.log(publicBusFare());



// -----------------------------------------
// prolem-5 
// -------------------------------------
// function 
function isBestFriend(object01, object02) {
    if (typeof object01 !== Object && typeof object02 !== Object) {
        return 'please entir the value text';
    }

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
// object 

let object01 = { name: "Tom", friend: "Rock" };
let object02 = { name: "Rock", friend: "Tom" };
let object03 = { name: "Rock", friend: "tamim" };

// console 
const results = isBestFriend(3, object02);
console.log(results);

