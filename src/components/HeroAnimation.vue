<template>
  <canvas class="hero-animation" id="heroAnimation" ref="heroAnimation" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<script>
import DeviceSelector from '@/scripts/DeviceSelector.js'

export default {
  data() {
    return {
      numberOfTriangles: 30,
      triangleSideLength: 45,
      triangleArray: [],
      canvasHeight: null,
      canvasWidth: null
    }
  },
  computed: {
  },
  mounted() {
    this.canvasHeight = document.querySelector('html').clientHeight;
    this.canvasWidth = document.querySelector('html').clientWidth;

    if (DeviceSelector.getDevice() === 'sm' || DeviceSelector.getDevice() === 'xs') {
      this.numberOfTriangles = 10;
    }

    if (DeviceSelector.getDevice() === 'md') {
      this.numberOfTriangles = 15;
    }

    this.createTriangleArray(this.numberOfTriangles);
    window.requestAnimationFrame(this.draw);
  },
  methods: {
    draw() {
      const canvas = document.getElementById('heroAnimation');
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        // I want to change the size of the triangles programatically
        // each triangle MUST be sqared and MUST have 2 sides of equal length
        for(let i = 0; i < this.triangleArray.length; i++) {
          const { topRightPosition, sideLength} = this.triangleArray[i];
          let { opacity, opacityStep, direction } = this.triangleArray[i];
          const { x, y } = topRightPosition;

          if(opacity + opacityStep > 1) {
            opacityStep *= -1;
            this.triangleArray[i].opacityStep *= -1;
          }

          if(opacity + opacityStep < 0) {
            let newTriangle = this.createTriangle(i);
            this.triangleArray.splice(i, 1, newTriangle);
          }

          opacity += opacityStep;
          this.triangleArray[i].opacity += opacityStep;

          this.drawTriangle(ctx, x, y, sideLength, direction, opacity);
        }

        window.requestAnimationFrame(this.draw);
      }
    },
    drawTriangle(ctx, x, y, sideLength, direction, opacity) {
      ctx.fillStyle = `rgba(220, 149, 150, ${opacity})`;
      ctx.beginPath();
      ctx.moveTo(x, y);

      if(direction === 0) {
        ctx.lineTo(x - sideLength, y);
        ctx.lineTo(x, y + sideLength);
      }
      
      if(direction === 1) {
        ctx.lineTo(x + sideLength, y);
        ctx.lineTo(x, y + sideLength);
      }

      if(direction === 2) {
        ctx.lineTo(x + sideLength, y);
        ctx.lineTo(x, y - sideLength);
      }
      ctx.fill()
    },
    createTriangle(i) {
      return {
        topRightPosition: {
          x: Math.ceil(Math.random() * (this.canvasWidth - this.triangleSideLength)),
          y: Math.ceil(Math.random() * (this.canvasHeight - this.triangleSideLength)),
        },
        sideLength: this.triangleSideLength,
        opacityStep: Math.random() / 50,
        direction: 'topRight',
        opacity: i/100,
        direction: Math.round(Math.random() * 3)
      }
    },
    createTriangleArray(numOfTriangles) {
      for(let i = 0; i < numOfTriangles; i++) {
        const triangleObject = this.createTriangle(i);
        this.triangleArray.push(triangleObject)
      }
    }
  }
}
</script>
