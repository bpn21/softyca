<template>
  <div class="flex flex-row container bg-lightblue mx-auto px-6 text-white-500 " >
    <div>
      <div class="">
      </div>
      <h1 class="text-darkbrown  text-5xl  font-extrabold " >These are the list of products in database</h1> 
      <br>
      <br>
      <div>
        <ul>
          <li v-for="product in productList" :key="product.productList">
            <div class=" flex flex-row bg-white shadow-md rounded px-8 border py-2 box-border  p-4 border-4 border-gray-400 bg-gray-200">
           Name:  {{product.name||"not avaliable"}},
           Size : {{product.size||"not avaliable"}},
           Color :{{product.color||"not avaliable"}},
           Brand :{{product.brand||"not avaliable"}},
           Category: {{product.category||"not avaliable"}},
            
            </div>
          </li>
        </ul>
      
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props:[name],
  components:{
  },
    data(){
        return{
            productList : [],
        }
    },
    mounted(){
        this.callThisFunction()
    },
    methods: 
    {
      callThisFunction() {
        this.$axios
          .$get(`api/list`)
          .then((response) => {
              this.productList = response
              debugger
          })
          .catch((error) => {
              console.log(error)
          })},


    }
}

</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


this.$axios.$get('/user/12345', {
  cancelToken: source.token
}).catch(error => {
  if (this.$axios.isCancel(error)) {
    console.log('Request canceled', error)
  } else {
    // handle error
  }
})

this.$axios.$post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})