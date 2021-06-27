<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <nav id="nav">
    <a href="#" class="logo">
      <img src="images/logo.gif" alt="logo image" />
    </a>
    <ul>
      <li>Home</li>
      <li>Product</li>
      <li>Promo</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div class="search-form">
      <button class="search-form__button">
        <img src="images/search_btn.gif" alt="search button image" />
      </button>
      <input type="text" class="search-form__input" />
    </div>
  </nav>
  <header>
    <h1>Title Here</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Vivamus lacinia odio vitae<br />
      vestibulum vestibulum.
    </p>

    <button class="">ORDER NOW</button>
  </header>
  <main>
    <article class="main__article01">
      <h2>Popular Menu</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <ul>
        <li>
          <img src="images/item_01.gif" alt="sushi image" />
          <h3>Title here</h3>
          <p>Lorem ipsum dolor sit amet<br />consectetur adipiscing elit.</p>
        </li>
        <li>
          <img src="images/item_02.gif" alt="sushi image" />
          <h3>Title here</h3>
          <p>Lorem ipsum dolor sit amet<br />consectetur adipiscing elit.</p>
        </li>
        <li>
          <img src="images/item_03.gif" alt="sushi image" />
          <h3>Title here</h3>
          <p>Lorem ipsum dolor sit amet<br />consectetur adipiscing elit.</p>
        </li>
      </ul>
    </article>
    <article class="main__article02">
      <ul>
        <li>
          <img src="images/item_04.gif" alt="sushi image" />
        </li>
        <li>
          <h2>Title here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            adipiscing elit. Vivamus lacinia odio vitae<br />
            vestibulum vestibulum.
          </p>
          <button>ORDER NOW</button>
        </li>
      </ul>
    </article>
    <article class="main__article03">
      <h2>Statistics</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <ul>
        <li>
          <em>123</em>
          <span>STORE</span>
        </li>
        <li>
          <em>123</em>
          <span>MENU</span>
        </li>
        <li>
          <em>200</em>
          <span>CHEF</span>
        </li>
      </ul>
    </article>
    <article class="main__article04">
      <ul>
        <li>
          <h2>Title here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            adipiscing elit. Vivamus lacinia odio vitae<br />
            vestibulum vestibulum.
          </p>
          <button>ORDER NOW</button>
        </li>
        <li>
          <img src="images/item_04.gif" alt="sushi image" />
        </li>
      </ul>
    </article>
    <article class="main__article05">
      <div class="article05__imgBox">
        <img src="images/groot_baby.PNG" alt="profile image" />
      </div>
      <p>
        If you are a culinary fan, if you like to spend time<br />
        in your kitchen, you likely find yourself looking for<br />
        reliable resources through which you can
      </p>
      <em>Phoebe Frazier</em>
    </article>
  </main>
  <footer></footer>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style>
@import url(../public/reset.css);
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,200;0,400;0,600;0,700;0,800;1,200;1,400;1,600;1,700;1,800&display=swap");
body {
  font-family: "Libre Franklin", sans-serif;
}

nav {
  position: fixed;
  width: 90%;
  margin-left: 5%;
  top: 1.5rem;
  display: flex;
  justify-content: space-between;
  background-color: #21243d;
  padding: 1.5rem 5.8rem 2rem 5.6rem;
  box-sizing: border-box;
  border-radius: 2rem;
  transition: all 0.3s;
}

nav.on {
  width: 100%;
  margin-left: 0;
  top: 0;
  border-radius: 0;
  box-shadow: 0 4px 4px -4px black;
}

nav .logo img {
  width: 10.5rem;
}

nav ul li {
  font-size: 2rem;
  color: #fff;
  display: inline-block;
  margin-right: 3.5rem;
  padding-top: 0.5rem;
  cursor: pointer;
}

nav ul li:last-child {
  margin-right: 0;
}

nav .search-form__button {
  background: none;
  border: none;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
}

nav .search-form__button img {
  width: 1.5rem;
  margin-top: 0.5rem;
}

nav .search-form__input {
  display: none;
}

header {
  background: url(../public/images/bg_01.gif);
  background-size: cover;
  background-position: center;
  padding-top: 25rem;
  padding-left: 5rem;
  padding-bottom: 15rem;
  color: #fff;
}

header h1 {
  font-weight: 600;
  font-size: 12rem;
  margin-bottom: 4rem;
}

header p {
  font-size: 3rem;
  margin-bottom: 5rem;
  padding-left: 1rem;
}

header button {
  width: 32rem;
  height: 6.5rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  background-color: #21243d;
  border-radius: 3rem;
}

main article.main__article01 {
  background-image: url(../public/images/design_01.gif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #21243d;
  text-align: center;
  color: #fff;
  padding: 9rem 6rem;
}

main article.main__article01 > h2 {
  font-weight: 600;
  font-size: 6rem;
  padding-bottom: 4rem;
}

main article.main__article01 > p {
  font-size: 2.4rem;
}

main article.main__article01 > ul {
  margin-top: 7.5rem;
}

main article.main__article01 > ul li {
  display: inline-block;
  width: 27%;
}

main article.main__article01 > ul li h3 {
  font-weight: 600;
  font-size: 2.8rem;
  margin: 2.5rem 0;
}

main article.main__article01 > ul li p {
  font-size: 1.6rem;
}

main article.main__article02 {
  background-image: url(../public/images/design_02.gif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffd17e;
  color: #21243d;
  padding: 19rem 13rem 14rem;
}

main article.main__article02 ul {
  display: flex;
  justify-content: space-between;
}

main article.main__article02 ul li:first-child {
  margin-right: 16rem;
}

main article.main__article02 ul li img {
  width: 100%;
  min-width: 46rem;
}

main article.main__article02 ul li h2 {
  margin: 5.5rem 0;
  font-weight: 600;
  font-size: 7.5rem;
}

main article.main__article02 ul li p {
  font-size: 3rem;
}

main article.main__article02 ul li button {
  width: 32rem;
  height: 6.5rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  background-color: #21243d;
  border-radius: 3rem;
  margin-top: 6.5rem;
}

main article.main__article03 {
  background-image: url(../public/images/design_03.gif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #21243d;
  text-align: center;
  color: #fff;
  padding: 9rem 6rem;
}

main article.main__article03 > h2 {
  font-weight: 600;
  font-size: 6rem;
  padding-bottom: 4rem;
}

main article.main__article03 > p {
  font-size: 2.4rem;
}

main article.main__article03 > ul {
  margin-top: 7.5rem;
  display: flex;
  justify-content: space-around;
}

main article.main__article03 > ul li {
  display: inline-block;
  width: 27.5rem;
  height: 27.5rem;
  border-radius: 50%;
  border: 0.8rem solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main article.main__article03 > ul li em {
  font-weight: 700;
  font-size: 7.5rem;
  display: block;
}

main article.main__article03 > ul li span {
  font-weight: 700;
  font-size: 4rem;
}

main article.main__article04 {
  background-image: url(../public/images/design_04.gif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffd17e;
  color: #21243d;
  padding: 19rem 13rem 14rem;
}

main article.main__article04 ul {
  display: flex;
  justify-content: space-between;
}

main article.main__article04 ul li img {
  width: 100%;
  min-width: 46rem;
}

main article.main__article04 ul li h2 {
  margin: 5.5rem 0;
  font-weight: 600;
  font-size: 7.5rem;
}

main article.main__article04 ul li p {
  font-size: 3rem;
}

main article.main__article04 ul li button {
  width: 32rem;
  height: 6.5rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  background-color: #21243d;
  border-radius: 3rem;
  margin-top: 6.5rem;
}

main article.main__article05 {
  background-image: url(../public/images/bg_02.gif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 19rem 13rem 14rem;
  text-align: center;
}

main article.main__article05 .article05__imgBox {
  background-color: #fffd;
  max-width: 24rem;
  min-height: 24rem;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 4.5rem;
}

main article.main__article05 .article05__imgBox img {
  width: 100%;
}

main article.main__article05 p {
  font-size: 4rem;
  margin-bottom: 4.5rem;
}

main article.main__article05 em {
  font-weight: 600;
  font-size: 4rem;
}
</style>
