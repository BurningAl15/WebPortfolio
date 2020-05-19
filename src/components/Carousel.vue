<template>
  <div class="container-slider">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide caption="First slide" img-src="https://i.imgur.com/nynUaHM.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Second Slide" img-src="https://i.imgur.com/9ZiQuQc.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Third Slide" img-src="https://i.imgur.com/0oigOYw.png"></b-carousel-slide>
      <b-carousel-slide caption="First slide" img-src="https://i.imgur.com/5ATWUDj.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Second Slide" img-src="https://i.imgur.com/9Z6O8J3.png"></b-carousel-slide>
      <b-carousel-slide caption="Second Slide" img-src="https://i.imgur.com/By6mTMS.jpg"></b-carousel-slide>
      <b-carousel-slide caption="Third Slide" img-src="https://i.imgur.com/iOFpBTD.jpg"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss">
.container-slider {
  width: 100%;
  margin: auto;
  overflow: hidden;
  background: #f3f4fa;
  // padding: 54px 0;
  position: relative;
  .slider {
    margin-left: -43%;
    width: 400%;
    display: flex;
    .slide {
      width: 15%;
      max-width: 950px;
      margin-right: 0.7%;
      box-shadow: 0px 20px 40px #aaa;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
  }
}
.carousel-caption {
  //   width: 100%;
  background: rgba(0, 0, 0, 0.582);
}

.carousel-control-next,
.carousel-control-prev {
  color: black;
}
</style>