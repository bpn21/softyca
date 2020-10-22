
  <template>
  <div class="bg-teal-800">

  <div class="container">
    <div class="flex flex-wrap bg-teal-900 rounded-lg">
    <div class="box-border w-6/12 p-4">
    <div class="bg-teal-900 rounded-lg">
    <p class="font-sans bg-teal-800 rounded-lg uppercase tracking-wide font-bold text-4xl text-white "> Edit Product</p>

        <form v-on:submit.prevent="submit" class="bg-white border shadow-lg rounded p-8">
          
            <label class="" for="name">Name</label>
            <input v-model="product.name" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
          
          
            <label class=" text-gray-700 text-sm font-bold " for="size">
              Size
            </label>
            <input v-model="product.size" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="size" type="text" placeholder="Size">
          
          
            <label class=" text-gray-700 text-sm font-bold " for="color">
              Color
            </label>
            <input v-model="product.color" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="color" type="text" placeholder="Color">
          
          
            <label class=" text-gray-700 text-sm font-bold " for="brand">
              Brand
            </label>
            <input v-model="product.brand" class="shadow-lg  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="brand" type="text" placeholder="Brand">
          

            <label class=" text-gray-700 text-sm font-bold " for="category">
              category
            </label>
            <input v-model="product.category" class="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Category">
          
            <label class=" text-gray-700 text-sm font-bold " for="category">
              Id
            </label>
            <input v-model="product.id" class="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="Id">
          
          <div class="flex items-center">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Edit Product
            </button>
          </div>
        </form>
    
  
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

    data(){
        return{
            product:
            {
                name: '',
                size: '',
                color: '',
                brand: '',
                category : null,
                id : ''
            }
        }
    },
    methods:{
        submit(){
            this.$axios
          .$patch(`api/list/${this.product.id}/`,this.product)
          .then((response) => {
              this.productList = response
              console.log('what comes in response',response)
              debugger
          })
          .catch((error) => {
              console.log(error)
          })},
       
        }
    }
</script>