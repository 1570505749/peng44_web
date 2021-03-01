<template>
  <!--  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">-->
  <!--  </a-result>-->
  <div id="main">
  <section class="home-404">
    <h1>Oh, Oooops!</h1>
    <p>Sorry, the page you visited does not exist.Please try again</p>
    <a href="/" class="btn">Go home</a>
  </section>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
  #main {
    height: 100%;
    width: 100%;
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-family: system,-apple-system,BlinkMacSystemFont,'PingFang SC',Arial,'Microsoft YaHei',Lato,sans-serif;
    line-height: 2;
    color: #555;
  }
  .home-404 {
    font-family: 'Telefon Black', sans-serif;
    animation: fade-in-top 2s;
  }
  .home-404 h1 {
    font-size: 64px;
    font-family: 'Telefon Black', sans-serif;
  }
  .home-404 p {
    font-size: 24px;
    font-family: 'Telefon Black',sans-serif;
  }
  .home-404 .btn {
    padding: 16px 36px;
    box-shadow: 3px 3px 2px #ccc;
    border: 1px solid #505160;
    border-radius: 3px;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    line-height: 1.5;
    font-family: 'PingFang SC','Microsoft YaHei',Lato,sans-serif;
  }
  p {
    margin: 0 0 20px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  a {
    background-color: transparent;
    color: #505160;
    outline: 0;
    border-bottom: 1px solid #999;
  }
</style>
