/**
 * Chhath Geet — Divine Falling Flower Petals & Marigold Blossom Animation
 * Ultra-lightweight, 60 FPS HTML5 Canvas particle system.
 */

(function initChhathPetals() {
  // Prevent duplicate canvas creation
  if (document.getElementById('chhath-petals-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'chhath-petals-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 90;
    opacity: 0.85;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Petal color palettes (Marigold saffron, holy rose, golden yellow)
  const petalColors = [
    { r: 255, g: 107, b: 0 },    // Saffron Orange
    { r: 255, g: 179, b: 0 },    // Marigold Gold
    { r: 255, g: 213, b: 79 },   // Bright Yellow
    { r: 233, g: 30,  b: 99 },   // Holy Rose Pink
    { r: 255, g: 87,  b: 34 }    // Sunset Vermillion
  ];

  const count = window.innerWidth < 768 ? 20 : 35;
  const petals = [];

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = Math.random() * 8 + 6; // 6px to 14px
      this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
      this.opacity = Math.random() * 0.5 + 0.4;
      this.speedY = Math.random() * 1.2 + 0.7; // Falling speed
      this.speedX = Math.random() * 0.8 - 0.4; // Swaying speed
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = (Math.random() - 0.5) * 0.03;
      this.flip = Math.random() * Math.PI;
      this.flipSpeed = Math.random() * 0.03 + 0.01;
      this.type = Math.random() > 0.4 ? 'petal' : 'blossom'; // petal or small floral cluster
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.angle) * 0.9 + this.speedX;
      this.angle += this.angleSpeed;
      this.flip += this.flipSpeed;

      if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.scale(1, Math.sin(this.flip));

      const { r, g, b } = this.color;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
      ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
      ctx.shadowBlur = 4;

      ctx.beginPath();
      if (this.type === 'petal') {
        // Curved natural petal shape
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(this.size * 0.8, -this.size * 0.3, this.size * 0.4, this.size * 0.8);
        ctx.quadraticCurveTo(0, this.size, -this.size * 0.4, this.size * 0.8);
        ctx.quadraticCurveTo(-this.size * 0.8, -this.size * 0.3, 0, -this.size);
      } else {
        // 5-petal miniature marigold/flower shape
        const petalsCount = 5;
        for (let i = 0; i < petalsCount; i++) {
          const petalAngle = (i * Math.PI * 2) / petalsCount;
          const px = Math.cos(petalAngle) * (this.size * 0.5);
          const py = Math.sin(petalAngle) * (this.size * 0.5);
          ctx.arc(px, py, this.size * 0.35, 0, Math.PI * 2);
        }
      }
      ctx.closePath();
      ctx.fill();

      // Subtle center dot for flowers
      if (this.type === 'blossom') {
        ctx.fillStyle = `rgba(255, 240, 200, ${this.opacity + 0.2})`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.15, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < count; i++) {
    petals.push(new Petal());
  }

  let animationFrameId = null;
  let isPageVisible = true;

  function loop() {
    if (!isPageVisible) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < petals.length; i++) {
      petals[i].update();
      petals[i].draw();
    }

    animationFrameId = requestAnimationFrame(loop);
  }

  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
    if (isPageVisible) {
      loop();
    } else if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  loop();
})();
