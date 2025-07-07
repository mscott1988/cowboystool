// assets/js/animations.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Animate the title
  const title = document.getElementById('main-title');
  title.classList.add('slide-in');

  // 2) Stagger in each button
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn, i) => {
    // delay each one by 200ms
    setTimeout(() => {
      btn.classList.add('pop-in');
    }, 600 + i * 200);
  });

  // 3) (Optional) more complex click animations?
  // Already we have the :active scale. If you need a flash or color-change,
  // you can toggle a class here.
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // btn.classList.toggle('clicked');
      // you could define a .clicked { background: #E63946; color: #fff; }
    });
  });
});
