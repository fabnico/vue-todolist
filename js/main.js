const myApp = new Vue({
   el: '.my_root',
   data:{
      userArray: [],
      elToAdd: '',
   },
   methods:{
      addElement: function (){
         this.userArray.push(this.elToAdd);
         this.elToAdd = '';
         console.log(this.userArray)
      },
      removeElement: function(index){
         this.userArray.splice(index,1);
      }
   }
})
