import {defineStore} from "pinia";
import {reactive,computed,ref} from "vue";


export const useCartStore = defineStore("cart",()=>{
    const item = reactive([{
        id:1,
        name:'banana',
        price:1000,
        qty:0
        },
        {
            id:2,
            name:"orange",
            price:3000,
            qty:0
        }
    ]);
    const cartItem = reactive([]);
    const outCart=(id)=>{
       // cartStore.cartItem=cartStore.cartItem.filter((v) => v !== id);
       const indexToRemove = cartItem.findIndex((v) => v ===id);
       if(indexToRemove !== -1){
        cartItem.splice(indexToRemove,1);
       }
    };

    const noCart=(id)=>{
        const cartItem2 = computed(()=>{
            return item.filter((v)=>cartItem.includes(v.id));
        });

        cartItem2.value.find((e)=>{
         if(e.id === id){
             //console.log(e);
             e.qty--;
             if(e.qty < 1) {
                e.qty=0;
                outCart(id);
             }
         }
        });
     };

     const inCart=(id)=>{
         const cartItem3 = computed(()=>{
             return item.filter((v)=>cartItem.includes(v.id));
         });

        const i = ref(0);

         cartItem3.value.find((e)=>{
            if(id === e.id){
                e.qty++;
                i.value++;
            }
            
        });
        
        if(i.value<1){
            cartItem.push(id);
            inCart(id);
        }
     };

     const delCart=()=>{
        cartItem.splice(0,cartItem.length);

    };

    return {item,cartItem,outCart,delCart,noCart,inCart};
});