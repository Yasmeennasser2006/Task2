let total = 0;
const addButtons = document.getElementsByClassName("Add-button");
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function() {
                let select = document.querySelectorAll("select")[i].value;
                total += parseInt(select);
        document.getElementsByClassName("notification")[0].innerHTML =  total;
        });
}