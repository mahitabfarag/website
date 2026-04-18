

function toggleLike(button) { 
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    button.innerHTML = "🤍 Like";
  } else {
    button.classList.add("liked");
    button.innerHTML = "Dislike";
  }
}

 document.querySelector(".contact-form").addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.querySelector('[name="name"]').value.trim();
  const email = document.querySelector('[name="email"]').value.trim();
  const phone = document.querySelector('[name="phone"]').value.trim();

  if (!name || !email || !phone) {
    alert("Missing fields are required");
    return;
  }

  const message = document.querySelector(".success-message");

  message.style.display = "block";
  message.classList.add("show");

  this.reset();

});

 
