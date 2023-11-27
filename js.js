//this add open and close functions on contact form

function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm () {
    document.getElementById("myform").style.diplay = "none";
}

//this will create close contact form when user clicks off.
//first, we add an even listener for any clicks on the website
document.addEventListener('click', function(event){
    //now we state that the click will cancel on the button or anywhere outside of form
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )