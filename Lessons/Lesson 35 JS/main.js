// 1 - mashq

// let a = +prompt("Son kiriting");
// let b = String(parseInt(a/10));
// let c = Math.floor(a%10);
// console.log(Number(c+b));

// 2 - mashq

// let N = +prompt("Son kiritng");
// let sum = 0;
// for(i=1; i<=N; i++){
//     sum+=(i*i);
// }
// console.log(sum);

// 3 - mashq

// let bad = prompt("So'z kirit")
// console.log(bad.replaceAll(/yomon/gi,"yaxshi"));

// 4 - mashq

// let ask = prompt("Ask something");
// let b = ask.match(/\d+/);
// let juft = 0;
// let toq = 0;
// for (i = 0; i <= b[0]; i++) {
//     if (i % 2 == 0) {
//         juft += i;
//     } else {
//         toq += i;
//     }
// }
// console.log(juft - toq);


// let sum = 0;
// for (i=0; i<=100; i++){
//     if ((i%3 == 0) && (i%5 == 0)){
//         sum+=i;
//         console.log(i);
//     }
// }
// console.log(sum);

// let shop = [
//     {
//         name: 'macbook',
//         cost: 2500,
//         count: 20
//     },
//     {
//         name: 'iphone13',
//         cost: 900,
//         count: 50
//     },
//     {
//         name: 'iphone14',
//         cost: 500,
//         count: 60
//     },
//     {
//         name: 'telvizor',
//         cost: 300,
//         count: 10
//     },
//     {
//         name: 'muzlatgich',
//         cost: 700,
//         count: 15
//     }
// ]

// function show(){
//     console.log(shop);
// }

// function add() {
//     shop.push({
//         name: prompt("Nomini kiriting"),
//         cost: +prompt("Narxini kiriting"),
//         count: +prompt("Sonini kiriting")
//     })
// }

// function delet() {
//     shop.splice(+prompt("Mahsulot indexi ni kiriting"), 1)
// }

// function edit() {
//     shop.splice(+prompt("Mahsulot indexini kiriting"),1,{
//         name: prompt("Mahsulot nomini kiriting"),
//         cost: +prompt("Mahsulot qiymatini kiriting"),
//         count: +prompt("Mahsulot sonini kiriting")
//     });
// }


//  1 - misol
// let l = 10;
// console.log(l/100);

// 2 - misol
// let m = 5;
// console.log(m/1000);

// 3 - misol
// let bite = 2048;
// console.log(bite/1024);

// 4 - misol
// let a = 24;
// let b = 3;

// console.log(a/b);

// 5 - misol
// let a = 25;
// let b = 3;

// console.log(Math.round(a/b)*b);

// 6 - misol
// let a = 65;
// console.log(Math.floor(a/10),a%10);

// 7 - misol

// let a = 23;
// console.log(Math.floor(a/10)+a%10);
// console.log(Math.floor(a/10)*a%10);

// 8 - misol
// let a = +prompt("Ikki xonali son kiriting");
// console.log(String(a%10)+Math.floor(a/10));

// 9 - misol

// let a = +prompt("Uch xonali son kiriting");
// console.log(Math.floor(a/100));

// 10 - misol
// let a = 324;
// let b = a%10; // 4 
// b = (a-b)%100/10; // (324-4)%100 = 20/10 = 2
// console.log(a%10,b);


// 11 - misol
// let a = 324;
// let b = Math.floor(a / 100);
// let c = a % 10; // 2
// c = (a - c) % 100 / 10; //(557-7) = 550%100 = 50/10=4
// console.log(a % 10 + b + c);

// 12 - misol

// let a = 324;
// let b = Math.floor(a / 100);
// let c = a % 10; // 2
// c = (a - c) % 100 / 10; //(557-7) = 550%100 = 50/10=4
// console.log(String(a%10)+c+b);


// 13 - misol
// let a = 324;
// let b = Math.floor(a / 100);
// let c = a % 10; // 2
// c = (a - c) % 100 / 10; //(557-7) = 550%100 = 50/10=4
// console.log(String(c)+a%10+b);

// 14 - misol
// let a = 324;
// let b = Math.floor(a / 100);
// let c = a % 10; // 2
// c = (a - c) % 100 / 10; //(557-7) = 550%100 = 50/10=4
// console.log(String(a%10)+b+c);


// 15 - misol
// let a = 324;
// let b = Math.floor(a / 100);
// let c = a % 10; // 2
// c = (a - c) % 100 / 10; //(557-7) = 550%100 = 50/10=4
// console.log(String(c)+b+a%10);

// 16 - misol
// let a = 324;
// let b = Math.floor(a / 100);
// let c = a % 10; // 2
// c = (a - c) % 100 / 10; //(557-7) = 550%100 = 50/10=4
// console.log(String(b)+a%10+c);

// 17 - misol
// let a = 1234;
// console.log(Math.floor(a%1000/100));  //234 == 2.34 == 2

// 18 - misol
// let a = 12345;
// console.log(Math.floor(a%10000/1000));

// 19 - misol
// let sec = 300;
// let min = sec/60; // 5
// console.log(min);

// 20 - misol
// let sec = 7200;
// let soat = sec/3600;
// console.log(soat);

