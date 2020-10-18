<template>
    <section>
        <form v-on:submit.prevent="submit">
            <div class="container bg-lightblue mx-auto px-6 text-gray-500 ">
                 <div class="flex">
                </div>
                <p class="block uppercase tracking-wide font-bold text-7xl"> Add New Product</p>
                <div class="flex flex-col mb-4">
                    <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="category">Category</label>
                    <input  v-model="product.category" placeholder="Category" class="bg-white shadow-md rounded px-8 border py-2 px-3 text-black-darkest" type="text" name="category" id="category">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="name">Name</label>
                    <input v-model="product.name" placeholder="Name" class="bg-white shadow-md rounded px-8 border py-2 px-3  text-black" type="text" name="name" id="name">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="size">Size</label>
                    <input v-model="product.size" placeholder="Size" class="bg-white shadow-md rounded px-8 border py-2 px-3  text-black" type="text" name="size" id="color">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="brand">Brand</label>
                    <input  v-model="product.brand" placeholder="Brand" class="bg-white shadow-md rounded px-8 border py-2 px-3 text-black" type="text" name="brand" id="brand">
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="color">Color</label>
                    <input v-model="product.color" placeholder="Color" class="bg-white shadow-md rounded px-8 border py-2 px-3  text-black" type="text" name="color" id="color">
                </div>
            <button class=" flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Submit</button>
            </div>
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
            }
        }
    },
    methods:{
        submit(){
            this.$axios
          .$post(`api/new/`,this.product)
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