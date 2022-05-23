const listEl = document.getElementById('list');

let text = "";
let possible = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "~!@#$%^&*()_+"];
let m = 8;
let ppl = [0, 0, 0, 0];
let min = [2, 2, 2, 2];

function makepassword() {
        text = "";
        for(let i=0; i<m; i++) {
            let typeRandom = Math.floor(Math.random() * possible.length)
            if(ppl[typeRandom] != min[typeRandom]) {
                let buffer = possible[typeRandom];
                text += buffer[Math.floor(Math.random() * buffer.length)];
                ppl[typeRandom] +=1;
            } else {
                m++;
            }
        }
        m=8;
        ppl = [0, 0, 0, 0];
        return text;
}


function go() {
    listEl.innerHTML = "";
    for(let i=0; i<4; i++) {
        listEl.innerHTML += `<p>${makepassword()}</p>`
    }
    
}