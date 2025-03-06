'use strict';

// Element toggle function
const toggleElement = (elem) => elem.classList.toggle('active');

// Sidebar toggle
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
sidebarBtn.addEventListener('click', () => toggleElement(sidebar));

// Portfolio filter
const filterItems = document.querySelectorAll('[data-filter-item]');
const filterButtons = document.querySelectorAll('[data-filter-btn]');

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === 'all' || selectedValue === item.dataset.category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedValue = btn.innerText.toLowerCase();
    filterFunc(selectedValue);
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Navigation
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetPage = link.innerHTML.toLowerCase();
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add('active');
        link.classList.add('active');
      } else {
        page.classList.remove('active');
        link.classList.remove('active');
      }
    });
    window.scrollTo(0, 0);
  });
});

// Form validation
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

formInputs.forEach(input => {
  input.addEventListener('input', () => {
    formBtn.disabled = !form.checkValidity();
  });
});
