// Progress bar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// When refresh the page come on top page
history.scrollRestoration = 'manual';
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}

// Menu navigation 
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const links = document.querySelectorAll('.dropdown-content a');

document.addEventListener('pointerdown', hideDropdown);
dropdown.addEventListener('pointerdown', toggleDropdown);

links.forEach(link => {
  link.addEventListener('pointerdown', navigateLink);
});

function hideDropdown(event) {
  if (!dropdown.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
}

function toggleDropdown() {
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function navigateLink(event) {
  event.preventDefault();
  dropdownContent.style.display = 'none';
}

