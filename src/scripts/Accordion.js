export default class Accordion {
  constructor(selector) {
    this.accordionContainer = document.querySelector(selector);
    this.accordionButtons = null;

    this.init();
  }

  init() {
    this.accordionButtons = this.accordionContainer.querySelectorAll('.accordion-trigger');
    this.injectStyle(this.createKeyframeAnimation());
  }

  mount() {
    this.accordionButtons.forEach(button => {
      button.addEventListener('mousedown', this.startAnimation.bind(this));
    })
  }

  startAnimation(event) {
    const buttonData = event.target.closest('.accordion-trigger').dataset;
    const panel = document.querySelector(`#${buttonData.triggers}`);
    panel.classList.toggle('collapsed');
  }

  createKeyframeAnimation() {
    let animation = '';
    let inverseAnimation = '';

    for(let step = 0; step <= 100; step++) {
      let easedStep = this.ease(step/100);

      const scale = easedStep;

      animation += `
        ${step}% {
          transform: scaleY(${scale});
        }
      `;

      const invScale = 1 / scale;
      inverseAnimation += `
        ${step} {
          transform: scaleY(${invScale});
        }
      `
    }

    return `
      @keyframes panelAnimation {
        ${animation}
      }

      @keyframes panelContentAnimation {
        ${inverseAnimation}
      }
    `
  }

  ease(v, pow=4) {
    return 1 - Math.pow(1 - v, pow);
  }

  injectStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
}