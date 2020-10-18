<template>
    <section>
        <h2>Edit Product</h2>
        <form v-on:submit.prevent="submit">
            <div class="container bg-lightblue mx-auto px-6 text-gray-500 ">
                <div class="flex">
                </div>
                <label for="">Category</label>
                <input v-model="product.category" placeholder="Category"> <br>
                <label for="">Name</label>
                <input v-model="product.name" placeholder="Name"> <br>
                <label for="">Size</label>
                <input v-model="product.size" placeholder="Size"> <br>
                <label for="">Color</label>
                <input v-model="product.color" placeholder="Color"> <br>
                <label for="">Brand</label>
                <input v-model="product.brand" placeholder="Brand"> <br>  <br>
                <label for="">Id</label>
                <input v-model="product.id" placeholder="Id">
            </div>
            <button >Submit</button>
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
          .$patch(`api/${this.product.id}/edit/`,this.product)
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