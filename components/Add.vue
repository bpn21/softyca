  <template>
  <div class="bg-teal-800">
  <div class="">
    <div class="flex flex-wrap p-12 bg-teal-900 rounded-lg">
    <div class="box-border w-4/5 p-4">
    <div class="bg-teal-900 rounded-lg">
    <p class="font-sans bg-teal-800 rounded-lg uppercase tracking-wide font-bold text-4xl text-white "> Add New Product</p>
          <dropdown class="bg-white rounded-lg" :options="categoryList" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown> <br>
          
            <label class="text-white text-sm font-bold " for="name">Name</label>
            <input v-model="data.name" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
      
            <label class=" text-white text-sm font-bold " for="size">
              Size
            </label>
            <input v-model="data.size" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="size" type="text" placeholder="Size">

            <label class=" text-white text-sm font-bold  " for="color">
              Color
            </label>
            <input v-model="data.color" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="color" type="text" placeholder="Color">
          
            <label class=" text-white text-sm font-bold " for="brand">
              Brand
            </label>
            <input v-model="data.brand" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="brand" type="text" placeholder="Brand">                 

          <div class="flex items-center">
            <button @click=Add() class="my-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Product
            </button>
          </div>
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
          }
       
        }
    }
</script>