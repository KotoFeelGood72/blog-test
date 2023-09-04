<template lang="pug">
.slider-button.ButtonNext
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M60 59C60 59.5523 59.5523 60 59 60L1 60C0.447716 60 3.91405e-08 59.5523 8.74228e-08 59L5.15794e-06 0.999995C5.20623e-06 0.447711 0.447721 -5.20623e-06 1.00001 -5.15794e-06L59 -8.74227e-08C59.5523 -3.91404e-08 60 0.447716 60 1L60 59Z" fill="#1B1B1B"/>
    <path d="M26.5649 21L34.3431 28.7782C34.7336 29.1687 34.7336 29.8019 34.3431 30.1924L26.5649 37.9706" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>
  </svg>
</template>
  
  <script>
    export default {
      
    }
  </script>
  
  <style lang="scss" scoped>
  
  
  .slider-button {
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
      opacity: .8;
    }
    &.swiper-button-disabled  {
      pointer-events: none;
      opacity: .5;
    }
  }

  @media(max-width: 1024px) {
    .slider-button {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  </style>