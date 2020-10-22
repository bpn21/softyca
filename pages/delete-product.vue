  <template>
  <div class="bg-teal-800">
    <div class="container flex flex-wrap bg-teal-900 rounded-lg">
    <div class=" box-border w-6/12 p-4">
    <div class="bg-teal-900 rounded-lg">
    <p class="font-sans bg-red-900 rounded-lg uppercase tracking-wide font-bold text-4xl text-white "> Delete Product</p>
        <form v-on:submit.prevent="submit" class="bg-white border shadow-lg rounded p-8">
            <label class=" text-gray-700 text-sm font-bold " for="id">
              ID
            </label>
            <input v-model="product.id" class="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="ID">
          
          <div class="flex items-center">
            <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Delete
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
</template>


    
<script>
// import productForm from './../components/productForm'
export default {
    // components: {
    //     productForm
    // },
    data(){
        return{
            product:
            {
                id : ''
            }
        }
    },
    methods:{
        submit(){
            this.$axios
          .$delete(`api/list/${this.product.id}`,this.product)
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