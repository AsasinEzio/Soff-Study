// 1 - mashq

// let a = +prompt("Birinchi sonni kiriting")
// let b = +prompt("Ikkinchi sonni kiriting")

// if (a == b) {
//     alert("A va B o'zaro teng")
// } else if (a > b) {
//     alert(a + " soni " + b + " sonidan katta ")
// } else {
//     alert(b + " soni " + a + " sonidan katta ")
// }

// 2 - mashq

// let a = +prompt("Birinchi sonni kiriting")
// let b = +prompt("Ikkinchi sonni kiriting")
// let sum = 0;
// for (i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     } else {
//         console.log(i);
//     }
// }
// console.log(`${a} dan ${b} gacha juft sonlar yig'indisi --> ${sum}`);

// 3 - mashq

// function reverseNumber() {
//     let a = +prompt("Uch xonali son kiriting")

//     if ((Math.floor(a / 100) >= 10) || (Math.floor(a / 100) <= 0)) {
//         alert(`${a} uch xonali son emas`)
//     } else {
//         let e = Math.floor(a / 100) // yuzlik xonasi
//         let b = a % 10; // birlik xonasi
//         let c = (a - b) % 100 / 10; // o'nlik xonasi
//         alert(String(b) + c + e)
//     }
// }

// 4 - mashq

// function calcDegree() {
//     let a = +prompt("Birinchi sonni kiriting");
//     let b = +prompt("Ikkinchi sonni kiriting");
//     alert(a ** b)
// }

// 5 - mashq

// let text = prompt("Textni kiriting");
// text = text.toLowerCase()
// if (text.indexOf("assalomu alaykum") >= 0) {
//     alert("Xush kelibsiz!")
// } else {
//     alert("Tizimga kirish mumkin emas!")
// }

// 8 - mashq

// function searchById() {
//     let x = +prompt("Enter the film ID")
//     data.map(i => {
//         if (i.id == x) {
//             console.log(i);
//         }
//     });
// }

// function filmsAfter2002() {
//     data.map(i => {
//         if (i.year >= 2002) {
//             console.log(i);
//         }
//     })
// }

// function showGenres() {
//     let genre = [];
//     data.map(i => {
//         for (j = 0; j < i.genres.length; j++) {
//             if (genre[i] != i.genres[j]) {
//                 genre.push(i.genres[j])
//             }
//         }
//     })
//     for (i = 0; i < genre.length; i++) {
//         for (j = 0; j < genre.length; j++) {
//             if (genre[i] == genre[j]) {
//                 genre.splice(j, 1)
//             }
//         }
//     }
//     for (i = 0; i < genre.length; i++) {
//         for (j = 0; j < genre.length; j++) {
//             if (genre[i] == genre[j]) {
//                 genre.splice(j, 1)
//             }
//         }
//     }
//     console.log(genre);

// }

// function showByGenre() {
//     let genre = prompt("Enter the genre");

//     data.map(i => {
//         for (j = 0; j < i.genres.length; j++) {
//             if (genre.toLowerCase() == i.genres[j].toLowerCase()) {
//                 console.log(i.title);
//             }
//         }
//     })
// }




