let shop = [
    {
        name: "Sabzi",
        cost: 5000,
        amount: 100
    },
    {
        name: "Piyoz",
        cost: 20000,
        amount: 50
    },
    {
        name: "Kartoshka",
        cost: 6000,
        amount: 60
    },
    {
        name: "Makaron",
        cost: 11000,
        amount: 80
    },
    {
        name: "Go'sht",
        cost: 70000,
        amount: 150
    },
    {
        name: "Pomidor",
        cost: 7000,
        amount: 80
    },
    {
        name: "Bodring",
        cost: 7000,
        amount: 80
    },
    {
        name: "Olma",
        cost: 4000,
        amount: 40
    },
    {
        name: "Banan",
        cost: 17000,
        amount: 90
    },
    {
        name: "Non",
        cost: 2500,
        amount: 120
    }
]

let buyCart = []

function addToProducts() {
    shop.push({
        name: prompt("Nomi"),
        cost: +prompt("Narxi"),
        amount: +prompt("Soni")
    }
    )
}

function buy() {
    let a = prompt("Nima olmoqchisiz");
    let status = shop.some(i => i.name == a)
    if (status) {
        for (i = 0; i < shop.length; i++) {
            let b = +prompt(`Qancha olmoqchisiz: ${shop[i].amount}`)
            if (b <= shop[i].amount) {
                buyCart.push({
                    name: shop[i].name,
                    cost: shop[i].cost,
                    amount: b
                });
                shop[i].amount -= b;
            } else {
                alert(`Sorry but at the moment we have only: ${shop[i].amount}`);
            }
            break;
        }
    }
    else {
        alert("Sorry but we dont have this product at the moment");
    }
}

function allProducts() {
    console.log(shop);
}
function myCart() {
    console.log(buyCart);
}

function calculate() {
    let sum1 = 0;
    let sum2 = 0;
    for (j = 0; j < buyCart.length; j++) {
        sum1 = (buyCart[j].amount * buyCart[j].cost);
        sum2 += sum1
    }
    alert(`${sum2} sums from you :)`)
}
