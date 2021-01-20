<template>
  <div class="home">
     <div class="conteiner">
       <div class="demo">
          <h2 class="title">Bienvenido a mi portafolio</h2>
          <div class="data">
            <h3 class="sub_title">Soy Jorge Manitto, desarrollador web fullstack</h3>
          <p class="paragraph"> <code>HTML</code> - <code>CSS</code> - <code>JavaScript</code> - <code>PHP</code> - <code>Mysql</code> - <code>Laravel</code> - <code>VueJS</code> - <code>Sass</code> - <code>Bootstrap</code></p>
          </div>

          <h2 class="my_works">Mis trabajos</h2>
        <router-link to="/portfolio"><button class="ghost-button"> Explora</button></router-link>
         <router-link to="/contact"><button class="ghost-button"> Contact</button></router-link>

         <div class="about_me">
          <h2 class="about_me_title">Sobre mí</h2>
          <p class="paragraph_about_me">Soy estudiante de Ingeniería electrónica, allí aprendí programación (lenguaje C) , hace 1 año generé interés por el desarrolo web y decidi iniciar.</p>
         </div>
       </div>
     <img src="../assets/images/img_Home_background.jpg" class="img_home_background">
     </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.conteiner{
  display: flex;
  justify-content: right;
  
  
}
.demo{
  width: 42%;
  background-color: #228896;
  border: 1px solid #228896;
}
.title{
  color: white;
  margin-top: 2em;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 2.6em;
}
.img_home_background{
  object-fit: cover;
  width: 38%;
  height: 100vh;
}
.data{
  width: 60%;
  margin:0 auto;
  margin-top: 2em;
}
.sub_title{
    font-size: 2em;
}
.sub_title,.paragraph{
  color: #fff;
  
}.my_works{
  margin-top: 1em;
  color: #fff;
}
.about_me{
  width: 80%;
  margin: 0 auto;
}
.about_me_title{
  margin-top: 1.5em;
  color: #fff;
  font-size: 2em;
}
.paragraph_about_me{
  color: #fff;
  font-size: 1.3em;
  
}
.paragraph{
  margin-top: 1em;
}
.paragraph code{
  color: #fff;
  background-color: rgba(0, 0, 0, .5);
  border-radius: .5em;
  font-size: 1.2em;
  padding: 1px;
}
.ghost-button {
  cursor: pointer;
  color:  #228896;
  background:  #fff;
  border: 1px solid  #fff;
  font-size: 17px;
  padding: 7px 12px;
  font-weight: normal;
  margin: 6px 0;
  margin-right: 12px;
  display: inline-block;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  min-width: 120px;
  transition: all .2s ease-in-out;
}
.ghost-button:hover, .ghost-button:active {
  color:#fff;
  background: #228896;
  transform: scale(1.1);
}
@media screen and (max-width: 800px){
  .conteiner{
    display: block;
    background: #228896;
}
.demo{
  width: 100%;
}
.title{
  margin: 0;
}
.img_home_background{
  width: 100%;
  height: 20vh;
  
}
  
}
</style> 
