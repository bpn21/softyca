<template>
    <section>
        <h2>Delete Product</h2>
        <form v-on:submit.prevent="submit">
            <div>
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