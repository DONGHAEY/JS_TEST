//pending 대기
//fulled 이행
//rejected 거부

//기본구조
const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const err = false;
            if (err) {
                reject("Sorry");
            } else {
                resolve("Success");
            }
        }, 3000)
    })

}
buyFlightTicket().catch(err => {
    console.log(err)
}).then(stat=> {
    console.log(stat);
})

