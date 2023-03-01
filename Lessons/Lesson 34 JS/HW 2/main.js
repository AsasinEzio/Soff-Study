let content = document.querySelector(".content")

function showCards() {
    content.innerHTML = " "
    news.map((i, index) => {
        let card = document.createElement("div");
        card.classList.add("card", "col-3");
        
        let img = document.createElement("img");
        img.src = i.photo;
        img.alt = i.photo;

        let title = document.createElement("h4");
        title.innerHTML = i.title;

        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.classList.add("btn" , "btn-success");
        btn.setAttribute("onclick", `dell(${index})`);

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(btn);
        content.appendChild(card);

    });

    
}

function dell(num) {
    news.splice(num, 1);
    showCards();
}

function addItem() {
    news.push({
        id: +prompt("Enter the ID"),
        title: prompt("Enter the title"),
        photo: prompt("Enter the photo URL")
    })
    showCards();
}