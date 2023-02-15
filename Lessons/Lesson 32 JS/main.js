// let shop = [
//     {
//         name: "Sabzi",
//         cost: 5000,
//         amount: 100
//     },
//     {
//         name: "Piyoz",
//         cost: 20000,
//         amount: 50
//     },
//     {
//         name: "Kartoshka",
//         cost: 6000,
//         amount: 60
//     },
//     {
//         name: "Makaron",
//         cost: 11000,
//         amount: 80
//     },
//     {
//         name: "Go'sht",
//         cost: 70000,
//         amount: 150
//     },
//     {
//         name: "Pomidor",
//         cost: 7000,
//         amount: 80
//     },
//     {
//         name: "Bodring",
//         cost: 7000,
//         amount: 80
//     },
//     {
//         name: "Olma",
//         cost: 4000,
//         amount: 40
//     },
//     {
//         name: "Banan",
//         cost: 17000,
//         amount: 90
//     },
//     {
//         name: "Non",
//         cost: 2500,
//         amount: 120
//     }
// ]

// let buyCart = []

// function addToProducts() {
//     shop.push({
//         name: prompt("Nomi"),
//         cost: +prompt("Narxi"),
//         amount: +prompt("Soni")
//     }
//     )
// }

// function buy() {
//     let a = prompt("Nima olmoqchisiz")
//     for (i = 0; i < shop.length; i++) {
//         if (a == shop[i].name) {
//             let b = +prompt(`Qancha olmoqchisiz: ${shop[i].amount}`)
//             if (b <= shop[i].amount) {
//                 buyCart.push({
//                     name: shop[i].name,
//                     cost: shop[i].cost,
//                     amount: b
//                 });
//                 shop[i].amount -= b;
//             } else {
//                 alert(`Sorry but at the moment we have only: ${shop[i].amount}`);
//             }
//         }
//         // else{
//         //     alert("Sorry but we dont have this product at the moment");
//         //     break;
//         // }
//     }
// }

// function allProducts() {
//     console.log(shop);
// }
// function myCart() {
//     console.log(buyCart);
// }

// function calculate() {
//     let sum = 0;
//     for (j = 0; j < buyCart.length; j++) {
//         sum = (buyCart[j].amount * buyCart[j].cost);
//     }
//     alert(`${sum} sums from you :)`)

// }


movies.map(i => {
    if(i.item_count >= 1000) {
    console.log(i.name);
}
}) 