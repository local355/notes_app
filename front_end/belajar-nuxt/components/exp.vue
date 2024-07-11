<script setup lang="js">
  import axios from 'axios'

 
//  function getUser() {
//   try {
//     const response =  axios.get('http://localhost:3000/notes');
//     //ok hammdle
//     console.log(response)
//     return response
//   } catch (error) {
//     //error hanlde
//   }
// }

const { data, pending, error, refresh } = await useAsyncData(
  'notes',
  () => $fetch('http://localhost:3000/notes')
)

 console.log("rryy", data)
 const datas = ref([1,3,4,5,6,7,8])
 datas.value = data
// const data = ref([1,3,4,5,6,7,8])
// console.log(typeof(getUser()))
// console.log("1 ",getUser().then(response => {
//   data.value =  response.data
// return response.data
// }))

console.log("isi data", datas)

 console.log("ssss: ", datas)

</script>

<template>
  <!-- you will need to handle a loading state -->
  
  <div v-if="pending">
    Loading...
  </div>
  <div v-else-if="error">
    error : {{error}}
  </div>
  <div v-else >data:{{data}}</div>
  <div></div>
</template>