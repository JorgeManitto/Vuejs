        Vue.component('jorge',{
        template:`
        <div>
    <h4>{{numero}}</h4>
    <button class="btn btn-primary" @click="numero++">+</button>
    <button class="btn btn-danger"@click="numero--" >-</button>

    </div>
        `,
        data(){
            return {
                numero:0
            }
        }
        });


        const app=new Vue({
            el:'#app',
            data:{
            saludo:'ciclo de vida vue '  
            },
            
        });