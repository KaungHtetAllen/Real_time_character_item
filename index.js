/* Elements */
const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

/* press function */
textareaEl.addEventListener("keyup",() => {
    updateCounter()
})

updateCounter()


/* main function */
function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}