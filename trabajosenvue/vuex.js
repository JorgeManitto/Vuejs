Vue.component('titulo',{
    template:`
    <div>
        <h1>Numero: {{ numero }}</h1>
        <hijo></hijo>
        </div>
    `,
    computed:{
       ...Vuex.mapState(['numero'])
    }
})
Vue.component('hijo',{
    template:`
    <div>
  
    <button @click="aumentar">+</button>
    <button @click="disminuir(2)">-</button>
    <button @click="obtenerCursos">Obtener Cursos</button>

    
    <ul v-for="item of cursos">
    <li>{{item.nombre}}</li>
    </ul>
 
    </div>
    `,
   methods:{
        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
})

const store=new Vuex.Store({
    state:{
        numero:10,
        cursos:[]
    },
    mutations:{
        aumentar(state){
           state.numero ++
        },
        disminuir(state,n){
            state.numero -=n
        },
        llenarCursos(state,cursosAccion){
            state.cursos=cursosAccion
        }
    },
    action:{
        obtenerCursos:async function({commit}){
            const data= await fetch('cursos.json');
            const cursos=await data.json();
            commit('llenarCursos',cursos);
        }
    }

});
const app= new Vue({
    el:'#app',
    store:store
})