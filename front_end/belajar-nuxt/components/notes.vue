<script setup>
  // in <script setup>
const prop =  defineProps({
  id: Number,
  title: String,
  content: String,
  created: String,
  edit:false,
  titleEdit: String,
  contentsEdit: String,
})

defineEmits([
  'update:titleEdit',
  'update:contentsEdit',
  'addNoteEvent',
  'saveChangesEvent',
  'editEvent',
  'deleteEvent',
  'saveEvent',
  'cencelEvent'
  ])

</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <p>edit btn com : {{edit}}</p>
    <p></p>
    <p></p>

  <div class="px-6 py-4">
    <div v-if="edit == id" class=" text-xl ">
      <div class="font-bold text-xl mb-2"> 
        <input 
      @input="$emit('update:titleEdit', $event.target.value)"
      class="    text-gray-700 underline   " type="text-area" :value="titleEdit " :placeholder="title ">
    </div>
      <p class="text-gray-700 text-base">
        <textarea @input="$emit('update:contentsEdit', $event.target.value)"  :value="contentsEdit" rows="1" cols="34" class="  resize" placeholder="Write your thoughts here..."></textarea>
      </p>
    </div>

    <div v-else class="text-xl">
          <div  class="font-bold text-xl mb-2">{{title}}</div>
      <p class="text-gray-700 text-base">
        {{content}}
      </p>
    </div>

    </div>

    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{created}}</span>
      </div>

   <div v-if="edit == id"></div>

<div v-if="edit == id">
    <button @click="$emit('cencelEvent')" class="bg-red-400 hover:bg-red-500 text-white mx-3 my-1 font-bold px-4 rounded-full">
 Cencel
</button>
 <button @click="$emit('saveEvent')" class="bg-lime-400 hover:bg-lime-500 text-white mx-3 my-1 font-bold px-4 rounded-full">
 Save Change
</button>
</div>
<div v-else="edit" >
    <button @click="$emit('deleteEvent')" class="bg-red-400 hover:bg-red-500 text-white mx-3 my-1 font-bold px-4 rounded-full">
 Delete
</button>
 <button @click="$emit('editEvent')" class="bg-lime-400 hover:bg-lime-500 text-white mx-3 my-1 font-bold px-4 rounded-full">
 Edit
</button>
</div>
</div>
</template>
    