window.sections = [...document.querySelectorAll('.section')];
const header = document.getElementById('main-header');
document.body.style.background = window.sections[0].getAttribute('data-bg');
header.style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const section = window.sections
    .map(el => ({el, rect: el.getBoundingClientRect()}))
    .find(s => s.rect.bottom >= (window.innerHeight * 0.5));

  if (section) {
    const bg = section.el.getAttribute('data-bg');
    document.body.style.background = bg;
    header.style.background = bg;
  }
}
