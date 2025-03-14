<script setup>
 import { useCartStore } from '@/store/cart';
 import { computed } from 'vue';

const cartStore = useCartStore();

const cartItem = computed(()=>{
    return cartStore.item.filter((v)=>cartStore.cartItem.includes(v.id));
});

// const outCart=(id)=>{
//     cartStore.cartItem = cartStore.cartItem.filter((v)=>v !==id);
// };

// const delCart=()=>{
//     cartStore.cartItem=[];
// };
// const noCart=(id)=>{
//    cartItem.value.find((e)=>{
//     if(e.id === id){
//         //console.log(e);
//         if(e.qty < 2){
//             e.qty--;
//             cartStore.outCart(id);
//         }else{
//             e.qty--;
//         }
//     }
//    });
// };

const payCart=()=>{
    const totPrice=cartItem.value.reduce((prev,cur)=>{
        return prev + (cur.price*cur.qty);
    },0);
    alert(`총 ${totPrice.toLocaleString()}원을 결제 하시겠습니까?`);
};
</script>
<template>
    <h1>장바구니</h1>
    {{ cartItem }}
    <ul>
        <li v-for="it in cartItem" :key="it.id">
            <span>{{ it.name }}</span>
            <span> - </span>
            <span>{{ it.price.toLocaleString()  }}</span>
            <span>-</span>
            <span>주문수량</span>
            <span>{{ it.qty }}</span>
            <button @click="()=>cartStore.noCart(it.id)">빼기</button>
            <button @click="()=>cartStore.inCart(it.id)">더하기</button>
            <button @click="()=>cartStore.outCart(it.id)">삭제</button>

        </li>
    </ul>
    <button @click="cartStore.delCart">비우기</button>
    <button @click="payCart">결제하기</button>
</template>