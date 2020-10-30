var compoment =  new Vue(
    {
      el:"#shopping-list" , 
      data:{
            header:null, 
            newItem:'',
            items:[
                 {
                    name:'Pedro Jose Marcus' ,
                    estado:false, 
                 } , 
                 {
                    name:'Alexandre Jose Pedro' ,
                    estado :true , 
            
                 } , 
                 
            ], 
            status:'default', 
                      
      }, 
      methods:{
            
            saveItem:function(){ 
                this.items.push({
                    name:this.newItem, 
                    estado :false
                });
                this.newItem = '' 
            },

            changeStateItem:function(newStatus){
                   this.status   =  newStatus;
                   this.newItem = '';
            },
            MudarMeuEstado:function(newItem){
                 console.log("Welcome  into javascript");
                  console.log(newItem.estado);
                  newItem.estado = !newItem.estado;
            }
            
      } ,
    computed:  {
          CharacterCount(){
            return  this.newItem.length ;
          } , 
          reversedItems(){
            return this.items.slice(0).reverse();
          }   
     } 
    }
);
 