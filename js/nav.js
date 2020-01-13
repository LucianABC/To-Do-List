const navButtons = document.querySelectorAll(".navBttn");
const cards = document.querySelectorAll(".card");

const navSearch = document.querySelector("#searchNav");
const cardSearch = document.querySelector("#searchCard");

const navAdd = document.querySelector("#addNav");
const cardAdd = document.querySelector("#addCard");

const navModify = document.querySelector("#modNav");
const cardModify = document.querySelector("#modCard");

navSearch.addEventListener("click", ()=>{
    navButtons.forEach((button)=>{
        button.classList.remove("active");
    })
    navSearch.classList.add("active");

    cards.forEach((card)=>{
        card.classList.add("hide");
    })
    cardSearch.classList.remove("hide");
});


navAdd.addEventListener("click", ()=>{
    navButtons.forEach((button)=>{
        button.classList.remove("active");
    })
    navAdd.classList.add("active");

    cards.forEach((card)=>{
        card.classList.add("hide");
    })
    cardAdd.classList.remove("hide");
});


navModify.addEventListener("click", ()=>{
    navButtons.forEach((button)=>{
        button.classList.remove("active");
    })
    navModify.classList.add("active");

    cards.forEach((card)=>{
        card.classList.add("hide");
    })
    cardModify.classList.remove("hide");
})



