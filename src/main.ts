import './style.css'

const hero = document.querySelector<HTMLElement>('.hero');
const title = document.querySelector<HTMLElement>('.hero__title');

if (hero && title) {
  hero.addEventListener('pointermove', (event) => {
    const rect = title.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    title.style.setProperty('--light-x', `${x}px`);
    title.style.setProperty('--light-y', `${y}px`);
  });

  hero.addEventListener('pointerleave', () => {
    title.style.setProperty('--light-x', '-1000px');
    title.style.setProperty('--light-y', '-1000px');
  });
}