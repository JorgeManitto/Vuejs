const app=new Vue({
    el:'#app',
    data:{
        mensaje:'hola soy jorge',
        contador:0
    },
    computed:{
        invertido(){
          return  this.mensaje.split('').reverse().join('')
        },
        color (){
            return{
                'bg-info':this.contador <=10,
                'bg-success':this.contador >10 && this.contador <20,
                'bg-warning':this.contador >=20 && this.contador<30,
                'bg-danger':this.contador >=30,
                'bg-dark':this.contador>=40
            }
        }
    }
});