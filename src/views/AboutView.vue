<script setup>
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const cartStore = useCartStore();
const {item} = storeToRefs(cartStore);

const cartItem = computed(()=>{
    return cartStore.item.filter((v)=>cartStore.cartItem.includes(v.id));
});

//console.log(cartItem);

// const inCart=(id)=>{
//     cartStore.item.find((el)=>{
//         if(el.id === id){
//             console.log(el.id);
//             el.qty++;

//         }else{
//             cartStore.cartItem.push(id);
//         }
//     });
// };

// const outCart=(id)=>{
//     cartStore.cartItem=cartStore.cartItem.filter((v) => v !== id);
// }
</script>
<template>
    <h1>상품목록</h1>
    {{ cartItem }}
    <ul>
        <li v-for="it in item" :key="it.id">
            <span>{{ it.name }}</span>
            <span> - </span>
            <span>{{ it.price }}</span>
            <span>-장바구니 담긴 수량 : </span>
            <span>{{ it.qty }} </span>
            <button @click="()=>cartStore.noCart(it.id)">빼기</button>
            <button @click="()=>cartStore.inCart(it.id)">담기</button>
            <button @click="()=>cartStore.outCart(it.id)">삭제</button>
        </li>
    </ul>
</template>