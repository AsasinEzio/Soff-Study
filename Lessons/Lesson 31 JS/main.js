let shop = [
    {
        name: 'macbook',
        cost: 2500,
        count: 20
    },
    {
        name: 'iphone13',
        cost: 900,
        count: 50
    },
    {
        name: 'iphone14',
        cost: 500,
        count: 60
    },
    {
        name: 'telvizor',
        cost: 300,
        count: 10
    },
    {
        name: 'muzlatgich',
        cost: 700,
        count: 15
    },
    {
        name: 'hp',
        cost: 2500,
        count: 40
    },
    {
        name: 'soat',
        cost: 100,
        count: 40
    }

]
function show(){
    console.log(shop);
}
function del (){
    shop.pop()
}

function del__arr(){
    shop.splice(+prompt("Mahsulot id sini kiriting"), +prompt("O'chirilishi kerak mahsulotlar"))
}
