const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("input-btn");
const deleteButtonEl = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const copyEl = document.getElementById("copy-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); //String형으로 되어있는 myLeads를 JSON으로 변환하여 leadsLocalStorage변수에 저장
let myLeads = [];
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render();
}
buttonEl.addEventListener("click", () => {
    addLink(inputEl.value);
    render();
});
deleteButtonEl.addEventListener("dblclick", () => {
    deleteAll();
    render();
})
copyEl.addEventListener("click", () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        addLink(url);
        render()
    });
});
function render() {
    ulEl.innerHTML = ""
    myLeads.forEach(e => {
        ulEl.innerHTML += `<li><a target='_blank' href='${e}'>${e}</a></li>`
    })
}
function addLink(link) {
    myLeads.push(link);
    inputEl.value = "";
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
}
function deleteAll() {
    myLeads = [];
    localStorage.clear();
}