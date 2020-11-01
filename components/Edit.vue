<template> 
    <div class="flex modal-backdrop">
      <div  class="flex modal rounded-lg">
        <button 
            class="mx-2 text-red-500"
            id='x'
            type="button"
            @click="cancel"
            style="text-align:end"
        >
            x
        </button>
    <div class="flex">
    <div class="flex flex-wrap bg-teal-900 " style="flex-direction: column">
  
    <div class="flex mx-32 bg-teal-900 rounded-lg" style="flex-direction: column">
    <p class="flex p-4 font-sans bg-teal-800 rounded-lg uppercase tracking-wide font-bold text-4xl text-white w-64 box_size"> Edit Product</p>

          <dropdown class="flex bg-white rounded-lg" style="text-align: justify" :options="categoryList" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>

            <label class="flex text-white" for="name">Name</label>
            <input v-model="data.name" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="">
          
            <label class="flex text-white text-sm font-bold " for="size">
              Size
            </label>
            <input v-model="data.size" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="size" type="text" placeholder="">
          
            <label class="flex text-white text-sm font-bold " for="color">
              Color
            </label>
            <input v-model="data.color" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="color" type="text" placeholder="Color">
          
            <label class="flex text-white text-sm font-bold " for="brand">
              Brand
            </label>
            <input v-model="data.brand" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="brand" type="text" placeholder="Brand">

        </div>
    <div class="flex my-2 mx-32 p-4">
   <button @click=Edit() class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Edit
    </button>
    <button @click="$emit('cancel')" class="mx-4 bg-gray-200 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Cancel
  </button>
    </div>
      

  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
    </div>
</div>

        </div>
  
      </div>
</template>

<script>
import dropdown from 'vue-dropdowns';
export default {
  props: {
  categoryList:Array,
  category_name:String,
  category:Number,
  data: {
      type: Object,
      default () {
        return {}
      },
    },
  },
  name: 'Edit',
  components: {
      'dropdown': dropdown,
  },
  data () {
    return {
        postData:{},
        object: {
            name: 'Category',
          }
    }
  },
 mounted(){
   this.postData = this.data
    this.methodToRunOnSelect(this.data)
    debugger
 },
  methods: {
      Edit(){
          this.$emit('edit', {data : this.postData})
      },
      cancel(){
          this.$emit('cancel', {data : this.postData})
      },
    methodToRunOnSelect(payload) {
            this.object = payload;
            this.data.category=this.object.id || this.category
            this.data.category_name = this.object.name
            debugger
          }
  },
}
</script>

<style>
#x {
  text-align: end;
}

.box_size {
  text-align: center;
  font: icon;
  min-width: 700px;
}

</style>