<template>
  <canvas class="hero-animation" id="heroAnimation" ref="heroAnimation" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<script>
export default {
  computed: {
    canvasHeight() {
      return document.querySelector('html').clientHeight;
    },
    canvasWidth() {
      return document.querySelector('html').clientWidth;
    }
  },
  mounted() {
    const canvas = document.getElementById('heroAnimation');
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      let verticalMove = 0;
      let horizontalMove = 0;

      do {
        ctx.save();
        console.log(verticalMove, 'ver');
        console.log(horizontalMove, 'hor');
        this.createTriangleSquares(ctx, 5, 40, horizontalMove, verticalMove);
        horizontalMove = horizontalMove + 5 + 40 + 2.5;
        if(horizontalMove >= this.canvasWidth) {
          horizontalMove = 0;
          verticalMove = verticalMove + 5 + 40 + 2.5;
        }
        ctx.translate(horizontalMove, verticalMove)
        ctx.restore();
      } while (verticalMove < this.canvasHeight);
    }
  },
  methods: {
    createTriangleSquares(ctx, spacing, sideLength, horizontalMove, verticalMove) {
        ctx.fillStyle = 'orange';
        ctx.beginPath()
        ctx.moveTo(spacing + horizontalMove, spacing + verticalMove);
        ctx.lineTo(sideLength + spacing + horizontalMove, spacing + verticalMove);
        ctx.lineTo(spacing + horizontalMove, sideLength + spacing + verticalMove);
        ctx.fill();

        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.moveTo(sideLength + spacing + spacing/2 + horizontalMove, spacing + spacing/2 + verticalMove);
        ctx.lineTo(spacing + spacing/2 + horizontalMove, sideLength + spacing + spacing/2 + verticalMove);
        ctx.lineTo(sideLength + spacing + spacing/2 + horizontalMove, sideLength + spacing + spacing/2 + verticalMove);
        ctx.fill();
    },
    draw() {
      let verticalMove = 0;
      let horizontalMove = 0;

      do {
        ctx.save();
        console.log(verticalMove, 'ver');
        console.log(horizontalMove, 'hor');
        this.createTriangleSquares(ctx, 5, 40, horizontalMove, verticalMove);
        horizontalMove = horizontalMove + 5 + 40 + 2.5;
        if(horizontalMove >= this.canvasWidth) {
          horizontalMove = 0;
          verticalMove = verticalMove + 5 + 40 + 2.5;
        }
        ctx.translate(horizontalMove, verticalMove)
        ctx.restore();
      } while (verticalMove < this.canvasHeight);
    }
  }
}
</script>

<!-- createTriangleSquares(ctx, spacing, sideLength) {
  let horizontalSpace = 0;
  let verticalSpace = 0;
  let horizontalMove = 0;
  let verticalMove = 0;
  ctx.save();
  
  do {
    if(horizontalSpace >= this.canvasWidth) {
      horizontalSpace = 0;
      horizontalMove = 0;
      verticalSpace = verticalSpace + spacing + spacing/2;
      verticalMove = verticalMove + sideLength + spacing + spacing/2;
      ctx.restore();
    }

    ctx.fillStyle = 'orange';
    ctx.beginPath()
    ctx.moveTo(spacing, spacing);
    ctx.lineTo(sideLength + spacing, spacing);
    ctx.lineTo(spacing, sideLength + spacing);
    ctx.fill();

    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(sideLength + spacing + spacing/2, spacing + spacing/2);
    ctx.lineTo(spacing + spacing/2, sideLength + spacing + spacing/2);
    ctx.lineTo(sideLength + spacing + spacing/2, sideLength + spacing + spacing/2);
    ctx.fill();

    horizontalSpace = horizontalSpace + sideLength + spacing + spacing/2;
    horizontalMove = sideLength + spacing + spacing/2;


    ctx.translate
    (horizontalMove, verticalMove);
  } while (verticalSpace < this.canvasHeight);
} -->
