const myApp = new Vue({
   el: '#my_root',
   data:{
      userArray: [],
      elToAdd: '',
   },
   methods:{
      addElement: function(){
         this.userArray.push({
            myInput: this.elToAdd,
            colorClass: false
         });
         this.elToAdd = '';
         console.log(this.userArray)
      },
      removeElement: function(index){
         this.userArray.splice(index,1);
      },
      show: function(){
         if(this.userArray.length != 0){
            return true;
         }
      },
      color: function(index){
         this.userArray[index].colorClass = !this.userArray[index].colorClass;
      }
   }
})
