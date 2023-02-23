let tbody = document.querySelector("tbody");
function showList() {
    tbody.innerHTML = " "
    news.map((i, index) => {

        let tr = document.createElement("tr")
        let td1 = document.createElement("td");
        td1.innerHTML = index

        let td2 = document.createElement("td");
        td2.innerHTML = i.id

        let td3 = document.createElement("td");
        td3.innerHTML = i.title

        let td4 = document.createElement("td");
        let img = document.createElement("img")
        img.src = i.photo
        img.alt = i.title
        img.classList.add("w-50")
        td4.appendChild(img)

        let btn = document.createElement("button");
        btn.innerHTML = "Delete"
        btn.classList.add("btn-success", "btn")
        btn.setAttribute("onclick", `dell(${index})`)

        let td5 = document.createElement("td");
        td5.appendChild(btn)

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr)

    })
}

function dell(num) {
    news.splice(num, 1);

    showList();

}