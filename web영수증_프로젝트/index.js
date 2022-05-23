const buttonHouseEl = document.getElementById("buttonHouse");
const billHouseEl = document.getElementById("billHouse");
const total = document.getElementById("total");
let nameOfService = ['차량 외부 손세차', '차량 내부 손세차', '스팀세차'];
let price = [30000, 40000, 20000];
let bill = [];
let cnt = 0;
buttonRender();
function buy(where) {
    bill.push(where);
    billRender();
}
function reset() {
    bill = [];
    cnt = 0;
    billRender();
}
function billRender() {
    billHouseEl.innerHTML = ""
    cnt = 0;
    bill.forEach(e => {
        billHouseEl.innerHTML += `<p>(${nameOfService[e]} 서비스 | ${price[e]}원)</p>`
        cnt += price[e];
    })
    total.innerText = `${cnt}원`;
}

function buttonRender() {
    buttonHouseEl.innerHTML=""
    for(let i=0; i<3; i++) {
        buttonHouseEl.innerHTML += `<button onclick="buy(${i})">${nameOfService[i]} ${price[i]}</button>`
    }
}