let div = document.createElement("div");

function showCards() {
    news.map((i, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        
        let img = document.createElement("img");
        img.src = i.photo;
        img.alt = i.photo;
        img.classList.add("w-50");

        let title = document.createElement("h3");
        title.innerHTML = i.title;

        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.classList.add("btn" , "btn-success");
        btn.setAttribute("onclick", `dell(${index})`);

        card.appendChild(img);
        card.appendChild(title);
        div.appendChild(card);

    });

    
}

function dell(num) {
    news.splice(num, 1);
    showList();
}

function addItem() {
    news.push({
        id: +prompt("Enter the ID"),
        title: prompt("Enter the title"),
        photo: prompt("Enter the photo URL")
    })
    showCards();
}