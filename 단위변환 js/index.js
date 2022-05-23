const input = document.getElementById("gijun");
const firstDanwi = document.getElementById("danwi")
const result = document.getElementById("result")
const willdanwi = document.getElementById("willdanwi")

function m_transe(danwi, value) {
    let temp;
    switch (danwi) {
        case 'cm':
            temp = value/100;
            break;
        case 'm' :
            temp = Number(value);
            break;
        case 'yard' :
            temp = value*0.9144
            break;
        case 'feet' :
            temp = value*0.3048
            break;
    }
    return temp;
}

function transe(danwi, value) {
    let temp;
    switch (danwi) {
        case 'cm':
            temp = value*100;
            break;
        case 'm' :
            temp = Number(value);
            break;
        case 'yard' :
            temp = value/0.9144
            break;
        case 'feet' :
            temp = value/0.3048
            break;
    }
    return temp;
}


function go() {
    const dan = firstDanwi.options[firstDanwi.selectedIndex].value
    const willdan = willdanwi.options[willdanwi.selectedIndex].value
    let m = m_transe(dan, input.value)
    let r = transe(willdan, m);
    result.innerText = '결과 : ' + r + willdan
}