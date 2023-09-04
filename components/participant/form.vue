<template lang="pug">
.app
  .app-img
    img(src="~/assets/img/form.jpg")
  .app_main--w
    h3 Стань участником проекта
    .app_main
      .app-input
        input(type="text" placeholder="Имя")
      .app-input
        input(type="tel" placeholder="Телефон")
      .app-input
        input(type="email" placeholder="Email")
      .app-btn
        button(button="submit") Присоединиться

</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>


.app {
  background-color: #1B1B1B;
  display: flex;
  color: white;
  font-weight: 800;
  line-height: 46px;
  padding: 60px;

  h3 {
    margin-bottom: 50px;
    font-size: 34px;
  }

}

.app-img {
  margin-right: 60px;
  max-width: 595px;
  height: 326px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.app-input {
  max-width: 353px;
  width: 100%;
  margin-bottom: 15px;
  input {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: transparent;
    font-size: 18px;
    padding-bottom: 2px;
    padding-left: 8px;
    border-bottom: 1px solid #8D959C;
    font-weight: 400;
    color: #8D959C;
    line-height: 26px;

    &:focus {
      outline: none;
    }
  }
}

.app-btn {
  button {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: #3657D3;
    color: white;
    padding: 10px 50px;
    border-radius: 2px;
    font-size: 18px;
    font-weight: 300;
    font-family: 'Montserrat', serif;
    cursor: pointer;
    line-height: 26px;
  }
}

@media(max-width: 1024px) {
    .app {
      flex-direction: column;
    }
    .app-img {
      margin: 0 0 30px 0;
      max-width: 100%;
    }
    .app-input {
      max-width: 100%;
    }
  }

  @media(max-width: 480px) {
    .app {
      padding: 20px;
    }
    .app-btn {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }

  .app-input {
    input {
      transition: all .3s ease;
      &:focus {
        border-color: #3657D3;
      }
    }
  }
</style>