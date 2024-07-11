<script setup lang="ts">
 //s;d'ldada






 const { data, pending, error, refresh } = await useAsyncData(
  'notes',
  () => $fetch('http://localhost:90/notes')
)
const dd = ref([1,2,3,4,5,6]);
console .log(data);
console .log(dd);

const re = () => refresh()

async function deleteNote(id: string){
  
  // alert("note deleted " + id);
  // refresh();vdddfsdgdgdgsdsdsgg909gdewewwreoiuoir

  await useFetch('http://localhost:90/notes/' + id,{
    method:"DELETE",
  }).then(()=>{
    re()
 
  })

  }
  const titleNote = ref('notes tltle');
  const contentsNote = ref('notes contents');

   const titleEdit=ref('title to edit')
   const contentsEdit=ref('contents to edit')

  async function addNote(){
  await useFetch('http://localhost:90/notes/',{
    method:"POST",
    body:{
      title:titleNote.value,
      contents: contentsNote.value,
    }
  }).then(()=>{
    re()

    titleNote.value="wewew"
    contentsNote.value="wewewe"


  })

  }
const edit_btn = ref(false)
 async function editNote(id: any){
  await useFetch('http://localhost:90/notes',{
    method:"PUT",
    body:{
      title:titleEdit.value,
      contents: contentsEdit.value,
      id:id,
    }
  }).then(()=>{
    re()

    titleEdit.value=""
    contentsEdit.value=""
    edit_btn.value = false
  })

  }

const message = ref('hellom')

const btn = ref()

  const edit_func = (id: boolean, title: string, content: string) => {
    edit_btn.value = id
    contentsEdit.value = content
    titleEdit.value = title
  }
//jhkjsdssdsddsdshsdsgwdwwjhgfdxadaasggddacdfssfxcfddfljgelkljdfcdfvdfdjdvdssdzdayiuyyiuydfsfssddhfhfhfhfuy87dfd987987
</script>

<template>
 <div>new : {{titleNote}}</div>
 <div>new : {{contentsNote}}</div>
 <div>edit title :{{titleEdit}}</div>
 <div>edit content : {{contentsEdit}}</div>
<new_note @add-note-event="addNote()"  v-model:titleNote="titleNote" v-model:contentsNote="contentsNote" />

<button @click="editNote(31)">check edit</button>
<div>{{message}}</div> 
<div v-if="btn" >
</div>
<button @click="addNote()" >tes insert button</button>
<button @click="btn = !btn" class="border-2 bg">btn</button>
<div>modal s: </div>
  <div v-if="pending">
    Loading...
  </div>
  <div v-else-if="error">
    error : {{error}}
  </div>
  <div v-else >data ok</div>
  <div v-for="(value, index) in data">
    <p>edit btn : {{edit_btn}}</p>
    <p></p>
    <p></p>
    <notes v-model:titleEdit="titleEdit" v-model:contentsEdit="contentsEdit" :edit="edit_btn" 
    :id="data[index].id" :title = "data[index].title" :content="data[index].contents" 
    :created="data[index].created" @delete-event="deleteNote(data[index].id)" 
    @edit-event="edit_func(data[index].id, data[index].title, data[index].contents)" 
    @cencel-event="edit_btn = false" @save-event="editNote(data[index].id)"/>
  </div>
 
</template>