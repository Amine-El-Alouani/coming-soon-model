const form = document.querySelector(".form");
const email = document.querySelector(".email");


form.addEventListener("submit", (e) => {
  e.preventDefault();
   emailIsValid(email.value);
});

function emailIsValid(email) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
	form.classList.remove("error");
    return true;
  } else if( email === ""){
	form.classList.remove("error");
  } else{
	form.classList.add("error");
	return false;
}
 
}
