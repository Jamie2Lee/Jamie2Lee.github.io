<script setup>
import {ref} from "vue";
import axios from "axios";

//패치
const result=ref(null);
// const getData = async() =>{
//   fetch("http://localhost:3000/api/data")
//     .then((res)=>res.json())
//     .then((data)=>(result.value=data));
// }

//axios
const getData = async() =>{
  axios("http://localhost:3000/api/data")
    .then((data)=>(result.value=data.data));
}

//데이터 등록
// const postData = ()=>{
//   fetch("http://localhost:3000/api/data",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       name:"New Data ",
//       description:"New Data Desc 1",
//     }),
//   });

// };
//axios
const postData = ()=>{
  axios.post("http://localhost:3000/api/data",{
      name:"New Axios Data ",
      description:"New Data Desc 1",
  });
};

//데이터 변경
// const putData = ()=>{
//   fetch("http://localhost:3000/api/data/1",{
//     method:"PUT",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       name:"Update Data ",
//       description:"Update Data Desc",
//     }),
//   });
// }
//axios
const putData = ()=>{
  axios.put("http://localhost:3000/api/data/1",{
      name:"Update Data ",
      description:"Update Data Desc",
  });
}

//데이터 일부 변경
// const patchData = ()=>{
//   fetch("http://localhost:3000/api/data/1",{
//     method:"PATCH",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       name:"Update Data ",
//       description:"Update Data Description",
//     }),
//   });
// }
//axios
const patchData = ()=>{
  axios.patch("http://localhost:3000/api/data/1",{
      name:"Update Data ",
      description:"Update Data Description",
  });
}
//DELETE
// const deleteData = ()=>{
//   fetch("http://localhost:3000/api/data/1",{
//     method:"DELETE",
//   });
// }
//axios
const deleteData = ()=>{
  axios.delete("http://localhost:3000/api/data/1",{
  });
}
</script>
<template>
  <h1>APP</h1>
  {{ JSON.stringify(result) }}
  <header>
    <nav>
      <RouterLink to="/">HOME ||</RouterLink>
      <RouterLink to="/about">ABOUT ||</RouterLink>
      <RouterLink to="/cart">Cart </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView/>
    <button @click="getData">GET</button>
    <button @click="postData">POST</button>
    <button @click="putData">PUT</button>
    <button @click="patchData">PATCH</button>
    <button @click="deleteData">DELETE</button>
  </main>
</template>
<style>
</style>
