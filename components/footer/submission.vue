<template lang="pug">
.submission
  .submission-title 
    h6 Подпишись на рассылку
  .submission-form 
    form
      .submission-input 
        input(type="email" placeholder="Email")
      .submission-btn 
        button(type="submit") Подписаться
</template>

<style lang="scss">
.submission {
  background-color: #1B1B1B;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 27px 30px;

  h6 {
    font-size: 22px;
  }
}

@media(max-width: 992px) {
  .submission {
    flex-wrap: wrap;

    h6 {
      margin-bottom: 30px;
    }

  }
  form, .submission-form {
      width: 100%;
    }

    .submission-input {
      flex: 1;
    }
}

.submission-form {
  form {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }
}

.submission-input {
  width: 353px;
  margin-right: 37px;
  // width: 100%;
  input {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: none;
    background: transparent;
    color: #fff;
    border-bottom: 1px solid #8D959C;
    width: 100%;
    font-size: 18px;
    padding: 2px 4px;

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: #8D959C;
    }
    &:-ms-input-placeholder {
      color: #8D959C;
    }
  }
}

.submission-btn {
  button {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: none;
    background: #3657D3;
    color: #fff;
    padding: 10px 50px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 2px;
    font-weight: 300;
    font-family: 'Montserrat';
  }
}

@media(max-width: 767px) {
  .submission-form {
  form {
    flex-direction: column;
  }
  .submission-input {
    margin: 0 0 20px 0;
  }
  .submission-btn {
    width: 100%;
    button {
      width: 100%;
    }
  }
}
}

@media(max-width: 480px) {
  .submission-input {
    width: 100%;
  }
}

.submission-btn {
  button {
    transition: all .3s ease;
    border: 1px solid transparent;
    &:hover {
      color: white;
      border-color: #3657D3;
      background-color: transparent;
    }
  }
}

.submission-input {
  input {
    transition: all .3s ease;
    &:focus {
      border-color: #3657D3;
    }
  }
}
</style>