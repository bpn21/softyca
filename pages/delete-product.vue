<template>
    <section>
        <h2>Delete Product</h2>
        <form v-on:submit.prevent="submit">
                  <div class="flex flex-col mb-4">
                    <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="color">Color</label>
                    <input v-model="product.color" placeholder="Color" class="bg-white shadow-md rounded px-8 border py-2 px-3  text-black" type="text" name="color" id="color">
                </div>
            <button class=" flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>
        </form>
    </section>
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
          .$delete(`api/${this.product.id}/remove/`,this.product)
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