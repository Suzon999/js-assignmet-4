// problem 1 : ana To Vori

function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'pleace entre a valid number';
    }
    var vori = ana / 16;
    return vori;
}
let myAna = 64;
let result = anaToVori(myAna);
console.log(result);


// problem 2: pandaCost

function pandaCost(shingaraQuantity, somuchaQuantity, gilapiQuantity) {
    // error hendling 

    if (typeof shingaraQuantity === 'string' || typeof somuchaQuantity === 'string' || typeof gilapiQuantity === 'string') {
        return 'pleace entre a valid number';
    }
    // per items price
    const perShingraPrice = 7;
    const perSomuchaPrice = 10;
    const pergilapiPrice = 15;
    // items calculation
    const shingraTotal = shingaraQuantity * perShingraPrice;
    const somuchaTotal = somuchaQuantity * perSomuchaPrice;
    const gilapiTotal = gilapiQuantity * pergilapiPrice;
    // total items
    const totalPrice = shingraTotal + somuchaTotal + gilapiTotal;
    return totalPrice;

}
let myTotalItem = pandaCost(5, 5, 5)
console.log(myTotalItem);


// // problem 3 : picnic Budget
function picnicBudget(member) {

    // error handling 
    if (typeof member === 'string') {
        return 'pleace entre a valid number';
    }

    // const ammaunt
    const cost1 = 5000;
    const cost2 = 4000;
    const cost3 = 3000;
    // condition 
    if (member <= 100) {
        const perCost1 = member * cost1;
        return perCost1
    }
    else if (member <= 200) {
        const perCost2 = member * cost2;
        return perCost2
    }
    else if (member => 300) {
        const perCost3 = member * cost3;
        return perCost3
    }
}
// input 
let picnicBudgetCost = picnicBudget(400)
console.log(picnicBudgetCost);


// /problem - 4 

function oddFriend(friends) {
    // error handling 
    if (typeof friends === Number) {
        return 'pleace entre a valid name';
    }
    // condition 
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 == 1) {
            return friends[i]
        }
    }
}
// input 
let friendList = ['rana', 'mahedi', 'sohel', 'Ismail hoss', 'Billal', 'Nahid'];
let fr = oddFriend(friendList);
console.log(fr)


