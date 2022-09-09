// Getting Elements
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const aboutMe = document.querySelector('.mobile-about');
const contactMe = document.querySelector('.mobile-contacts');
const portfolio = document.querySelector('.mobile-portfolio');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

aboutMe.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

contactMe.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

portfolio.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

function resetMenu() {
  if (window.innerWidth > 768) {
    sidebar.style.display = 'none';
  }
}
window.addEventListener('resize', resetMenu);

// FORM VALIDATION

const email = document.getElementById('email');
const form = document.getElementById('genForm');
const errorMessage = document.getElementById('error');
errorMessage.style.float = 'left';
errorMessage.style.color = 'red';
errorMessage.style.fontFamily = 'Inter, sans-serif';
function valid(input) {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
}

// function for errorMessage
const showError = (e) => {
  if (!valid(email.value)) {
    e.preventDefault();
    errorMessage.textContent = 'Your Email must be lowercase';
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 3000);
  }
  email.value = '';
};
form.addEventListener('submit', showError);
