const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu');}));
const elements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {const observer = new IntersectionObserver(entries => entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('visible'); observer.unobserve(entry.target);}}), {threshold: 0.08}); elements.forEach(element => observer.observe(element));} else {elements.forEach(element => element.classList.add('visible'));}
