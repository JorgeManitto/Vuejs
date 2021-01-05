Vue.component('todo-item', {
   
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

var app_vegetales= new Vue({

    el: '#app_vegetales',
    data: {
        groceryList:[
            {id:0, text:'Lechuga'},
            {id:1, text:'Papa'},
            {id:2, text:'Calabaza'}
        ]
    }

});
