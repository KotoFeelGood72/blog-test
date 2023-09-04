<template lang="pug">
header.header
  .container 
    .header-main 
      .logo
        NuxtLink(to="/")
          img(src="~/assets/img/logo.svg")
</template>

<style lang="scss" scoped>


.header-main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 0 25px 0;
}

.header {
  margin-bottom: 30px;
}
  
</style>