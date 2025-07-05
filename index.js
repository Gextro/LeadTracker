let myLeads =[]

const inputEl = document.getElementById("input-el")

let inputBtn = document.getElementById("input-btn")

let tabBtn = document.getElementById("tab-btn");



const ulEl=  document.getElementById("ul-el")


const leadsfromLocal = JSON.parse(localStorage.getItem("myLeads"))
if(leadsfromLocal){
    myLeads = leadsfromLocal;
    renderLeads(myLeads);
}

function renderLeads(leads){
    let listIeams =""

    for(let i=0;i<leads.length;i++){
        listIeams+=`
            <li>
                 <a target ='_blank' href=' ${ leads[i]}'>
                    ${ leads[i]}
                 </a>
            </li> `
    }
    ulEl.innerHTML =listIeams
}

console.log(leadsfromLocal)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    inputEl.value=""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
    console.log(localStorage.getItem("myLeads"))
})



let deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked")
    localStorage.clear()
    myLeads=[]
    renderLeads(myLeads)

})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads(myLeads)
        })
    

})