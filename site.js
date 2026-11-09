const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#estimate')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Free estimate request — ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nService address: ${data.get('address')}\nService: ${data.get('service')}\n\nMessage:\n${data.get('message')}`);
  window.location.href = `mailto:service@ueelectricllc.com?subject=${subject}&body=${body}`;
});
