const { data, pending, error, refresh } = await useAsyncData(
  'notes',
  () => $fetch('http://localhost:3000/notes')
)

 console.log("rryy", data)
 const datas = ref([1,3,4,5,6,7,8])
 datas.value = data

 export default datas