// script by: Pavitra Golchha https://codepen.io/pavi2410
// altered by: Willie Spriggs

const createMatrix = () => {
  const s = document.querySelector("#home");
  const w = (q.width = s.offsetWidth + 10);
  const h = (q.height = s.offsetHeight + 100);
  const ctx = q.getContext("2d");

  const p = Array(Math.floor(w / 10) + 1).fill(0);

  const random = (items) => items[Math.floor(Math.random() * items.length)];

  const hex = "0123456789ABCDEF".split("");

  setInterval(() => {
    ctx.fillStyle = "rgba(233, 211, 174, .05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#afa188";
    p.map((v, i) => {
      ctx.fillText(random(hex), i * 10, v);
      p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
  }, 1000 / 30);
};

const generateMatrixBackground = () => {
  createMatrix()
  window.addEventListener('resize', createMatrix)
}

generateMatrixBackground()