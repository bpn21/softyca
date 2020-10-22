<template>
    <div class="container">
        <div class="bg-teal-900">
                <div class="flex flex-wrap bg-teal-900 rounded-lg">
    <div class="box-border w-4/5 p-4">
    <div class="bg-teal-900 rounded-lg">
    <p class="font-sans bg-teal-800 rounded-lg uppercase tracking-wide font-bold text-4xl text-white "> Edit Product</p>

            <label class="text-gray-700" for="name">Name</label>
            <input v-model="postData.name" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="">
          
            <label class=" text-gray-700 text-sm font-bold " for="size">
              Size
            </label>
            <input v-model="postData.size" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="size" type="text" placeholder="">
          
            <label class=" text-gray-700 text-sm font-bold " for="color">
              Color
            </label>
            <input v-model="postData.color" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="color" type="text" placeholder="Color">
          
            <label class=" text-gray-700 text-sm font-bold " for="brand">
              Brand
            </label>
            <input v-model="postData.brand" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="brand" type="text" placeholder="Brand">

            <label class=" text-gray-700 text-sm font-bold " for="category">
              category
            </label>
            <input v-model="postData.category" class="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Category">
          
          <div class="flex items-center">
        </div>
    
   <button @click=Edit() class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Edit
    </button>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
    </div>
</div>
</div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
 data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  name: 'Edit',
  components: {},
  data () {
    return {
        postData:{}
    }
  },
 mounted(){
     this.postData = this.data
 },
  methods: {
      Edit(){
          this.$emit('edit', {data : this.postData})
      }
  }
}
</script>
