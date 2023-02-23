// function on() {
//     let h = document.querySelector("img")
//     h.src="img/photo_2022-02-19_20-18-23.jpg"
// }
// function off() {
//     let h = document.querySelector("img")
//     h.src="img/photo_2022-02-19_20-18-10.jpg"
// }


// function darkMode() {
//     let a = document.querySelector("body")

//     a.classList.toggle("bg-dark")
// }

let div = document.querySelector("div");
function word() {
    let word = prompt("enter some word or sentences");
    let newContent = document.createElement("p");
    newContent.textContent = word;
    div.append(newContent);
}