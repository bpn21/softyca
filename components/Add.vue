  <template>
  <div class="container">
  <div class="flex modal-backdrop">
  <div class="flex modal" style="text-align:end">
     <button 
            class="mx-2 text-red-500"
            type="button"
            @click="cancel"
            style="text-align:end"
            
        >
            x
        </button>
  <div class="">
    <div class="flex p-12 bg-teal-900 rounded-lg" style="display: table-header-group">
    <div class="flex box-border w-4/5 p-4">
    <div class="flex mx-32 bg-teal-900 rounded-lg" style="flex-direction: column">
    <p class="p-4 flex font-sans bg-teal-800 rounded-lg uppercase tracking-wide font-bold text-4xl text-white box_size"> Add New Product</p>
          <dropdown class="flex bg-white rounded-lg" style="text-align: justify" :options="categoryList" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown> <br>
          
            <label class="flex text-white text-sm font-bold " for="name">Name</label>
            <input v-model="data.name" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
      
            <label class="flex text-white text-sm font-bold " for="size">
              Size
            </label>
            <input v-model="data.size" class="flex shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="size" type="text" placeholder="Size">

            <label class="flex text-white text-sm font-bold  " for="color">
              Color
            </label>
            <input v-model="data.color" class="flex shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="color" type="text" placeholder="Color">
          
            <label class="flex text-white text-sm font-bold " for="brand">
              Brand
            </label>
            <input v-model="data.brand" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="brand" type="text" placeholder="Brand">                 

          <div class="bg-white my-4 rounded-lg p-2 flex items-center">
            <button @click=Add() class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Product
            </button>
            <button @click=cancel() class="flex bg-teal-900 hover:bg-teal-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Cancel
            </button>
          </div>
  <p class="flex text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
    </div>
</div>
</div>
</div>    
</div>
  </div>
    </div>
</template>


<script>

import dropdown from 'vue-dropdowns';
export default {
    props:{
      data:{
        type:Object,
        default(){
          return{}
        },
      },
      categoryList:Array,
    },
  name: 'Add',
  components: {
     'dropdown': dropdown,
 
  },
    data(){
        return{
          postData:{},
         
            object: {
              name: 'Category',
            }
        }
    },
    mounted(){
      this.postData = this.data
    },
    methods:{
          Add(){
            this.$emit('add',{data : this.postData})
          },
          methodToRunOnSelect(payload) {
            this.object = payload;
            this.data.category=this.object.id
            this.data.category_name = this.object.name
            debugger
          },
          cancel(){
          debugger
          this.$emit('cancel', { data: this.data})
      },
       
        }
    }
</script>

<style>
#x{
  text-align: end;
}
.box_size {
  text-align: center;
  font: icon;
  min-width: 700px;
}

</style>