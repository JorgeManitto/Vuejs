<template>
  <div id="nav">
    <div id="fh5co-page">

			<aside id="fh5co-aside" role="complementary" class="border js-fullheight">

				<h1 id="fh5co-logo"><router-link to="/" >{{$store.getters.fullname}}</router-link></h1>
				<nav id="fh5co-main-menu" role="navigation">
					<ul>
						<li><router-link to="/" >Home</router-link></li>
						<li><router-link to="/portfolio" >Portfolio</router-link></li>
						<li><router-link to="/Contact">Contact</router-link></li>
					</ul>
				</nav>

				<div class="fh5co-footer">
					<ul>
						<li><a href="https://www.facebook.com/jorgemanitto8" target=" blank"><i class="fab fa-facebook-square"></i></a></li>
						<li><a href="#" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
						<li><a href="#" target="_blank"><i class="fab fa-instagram-square"></i></a></li>
						<li><a href="https://www.linkedin.com/in/jorge-oscar-manitto-a17287202/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
					</ul>
				</div>
			</aside>
		</div>
          <div class="icon_hamburger" @click="hamburger" :class="{click_hamburger_closes:links}">
              <i class="fa fa-bars"></i>
            </div>

            <div class="icon_hamburger" @click="hamburger_close" :class="{click_hamburger_closes:close_links}" >
              <i class="fa fa-bars"></i>
            </div>

    <nav class="hamburger"  :class="{click_hamburger:links}">

          <ul class="nav_links">
						<li @click="hamburger_close"><router-link to="/"><button class="btn_nav_links">Home</button></router-link></li>
						<li @click="hamburger_close"><router-link to="/portfolio" ><button class="btn_nav_links"> Portfolio</button></router-link></li>
						<li @click="hamburger_close"><router-link to="/Contact"><button class="btn_nav_links">Contact</button></router-link></li>
					</ul>
        </nav>

  <router-view></router-view>

  </div>

</template>

<script>
export default {
  data() {
    return {
      links:false,
      close_links:true
    }
  },
  methods: {
    hamburger(){
      this.close_links = false
      return this.links = true
    },
    hamburger_close(){
       this.close_links =true
      return this.links = false
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#fh5co-page {
  width: 100%;
  position: relative;
}
#fh5co-aside {
  padding-top: 60px;
  padding-bottom: 40px;
  width: 20%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 1001;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
    overflow: hidden;
}
#fh5co-aside #fh5co-logo {
  text-align: center;
  font-weight: 700;
  margin-bottom: 2em;
  text-transform: uppercase;
  font-size: 38px;
 font-family: "Roboto", Arial, sans-serif;
}
#fh5co-aside #fh5co-logo a {
     color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
}
#fh5co-aside #fh5co-logo a span {
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
}
#fh5co-aside #fh5co-main-menu ul {
  text-align: center;
  margin: 0;
  padding: 0;
}
#fh5co-aside #fh5co-main-menu ul li {
  margin: 0 0 20px 0;
  padding: 0;
  list-style: none;
}
#fh5co-aside #fh5co-main-menu ul li a {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  padding: 10px 10px;
  letter-spacing: .2em;
  font-family: "Roboto", Arial, sans-serif;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
#fh5co-aside #fh5co-main-menu ul li a:after {
  content: "";
  position: absolute;
  height: 2px;
  bottom: 7px;
  left: 10px;
  right: 10px;
  background-color: #228896;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#fh5co-aside #fh5co-main-menu ul li a:hover {
  text-decoration: none;
  color: black;
}
#fh5co-aside #fh5co-main-menu ul li a:hover:after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
#fh5co-aside #fh5co-main-menu ul li.fh5co-active a {
  color: black;
}
#fh5co-aside #fh5co-main-menu ul li.fh5co-active a:after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
#fh5co-aside #fh5co-main-menu ul li a.fh5co-active {
  color: #228896;
}
#fh5co-aside .fh5co-footer {
  position: absolute;
  bottom: 40px;
  font-size: 14px;
  text-align: center;
  width: 100%;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding: 0 20px;
}
#fh5co-aside .fh5co-footer span {
  display: block;
}
#fh5co-aside .fh5co-footer ul {
  padding: 0;
  margin: 0;
  text-align: center;
}
#fh5co-aside .fh5co-footer ul li {
  padding: 0;
  margin: 0;
  display: inline;
  list-style: none;
}
#fh5co-aside .fh5co-footer ul li a {
  color: rgba(0, 0, 0, 0.7);
  padding: 4px;
}
#fh5co-aside .fh5co-footer ul li a:hover, #fh5co-aside .fh5co-footer ul li a:active, #fh5co-aside .fh5co-footer ul li a:focus {
  text-decoration: none;
  outline: none;
  color: #228896;
}
#fh5co-main {
  width: 80%;
  float: right;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
#fh5co-main .fh5co-narrow-content {
  position: relative;
  width: 93%;
  margin: 0 auto;
  padding: 4em 0;
  clear: both;
}
.fab{
  font-size: 2em;
}
.hamburger,.icon_hamburger{
  display: none;
}
.nav_links{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #228896;
  right: .28em;
  z-index: 9999;
}
.btn_nav_links{
    width: 100%;
    height: 4em;
    margin-top:2em ;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
}
.btn_nav_links:active{
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
}
@media screen and (max-width: 800px){
#fh5co-page{
  display: none;
}
.hamburger{
  display: none;
  text-align: left;
}
.icon_hamburger {
  display: block;
  margin-left: 1em;
  margin-top: 1em;
  text-align: left;
  cursor: pointer;
}
.icon_hamburger i{
  font-size: 2em;
}
.hamburger ul li{
  list-style-type: none;
  margin-left: -10%;
}
}
.click_hamburger_closes{
  display: none;
}
.click_hamburger{
  display: block;
}
</style>
