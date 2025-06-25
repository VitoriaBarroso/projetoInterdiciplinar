function openForm(productName) {
  document.getElementById('formModal').style.display = 'block';
  document.getElementById('productTitle').innerText = 'Comprar ' + productName;
  document.getElementById('successMessage').style.display = 'none';
}

function closeForm() {
  document.getElementById('formModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('formModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('successMessage').style.display = 'block';
  this.reset();

  setTimeout(() => {
    closeForm();
  }, 3000);
});



document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn');
  const navbar = document.querySelector('.navbar');

  menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

