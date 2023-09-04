<template lang="pug">
footer.footer
  .container
    .footer-main
      .footer_main--brand
        .footer_logo
          NuxtLink(to="/")
            img(src="~/assets/img/logo.svg")
        p Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      .footer_main--info
        .footer_email
          span email
          a(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
        ul.footer-social
          li
            a(target="_blank" href="http://facebook.com.vn/")
              img(src="~/assets/img/social/face.svg")
          li
            a(target="_blank" href="https://vk.com/")
              img(src="~/assets/img/social/vk.svg")
          li
            a(target="_blank" href="https://instagram.com")
              img(src="~/assets/img/social/inst.svg")
          li
            a(target="_blank" href="https://telegram.org/")
              img(src="~/assets/img/social/tg.svg")
    FooterSubmission


</template>



<style lang="scss" scoped>


.footer {
  margin-top: 200px;
  border-top: 1px solid #8D959C;
}


.footer-main {
  padding: 50px 0 70px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media(max-width: 767px) {
  .footer {
    margin-top: 80px;
  }
  .footer-main {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer_main--brand {
    margin-bottom: 30px;
  }
}

.footer_main--brand {
  max-width: 400px;
  font-size: 14px;
  color: #8D959C;
  line-height: 20px;
}

.footer_logo {
  margin-bottom: 20px;
}

.footer_email {
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 14px;
    color: #8D959C;
    line-height: 20px;
    margin-bottom: 2px;
  }

  a {
    font-size: 18px;
    color: #1B1B1B;
    font-family: 'Ubuntu';
    font-weight: 500;
    display: block;
  }
}

.footer-social {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  grid-gap: 20px;
}

</style>