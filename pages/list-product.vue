<template>
<div class="bg-teal-800">
  <div class="container bg-teal-900" >
      <div class="flex flex-wrap ">

          <h1 class="mx-6 font-sans block shadow-lg text-5xl font-extrabold text-white rounded-lg border p-1 bg-teal-700 my-5" >These are the list of Products in Database.</h1> 
          
          <div class=" py-8 px-3  my-5 mx-6 font-sans shadow-2xl w-3/12 bg-white block shadow-xl text-black rounded-lg border-double bg-teal-800 text-white" v-for="(product,id) in list" :key="`${id}-ec`">
            <div class=" my-4 p-3 rounded-lg shadow-lg border bg-white capitalize text-black ">
              Detail of {{product.name}}
            </div>
            <div class="uppercase bg-green-700 text-white-500 rounded-lg ">
            Category: {{product.category_name ||"not avaliable"}},<br>
            </div>
            Name:  {{product.name||"not avaliable"}},<br>
            Size : {{product.size||"not avaliable"}}, <br>
            Color :{{product.color||"not avaliable"}},<br>
            Brand :{{product.brand||"not avaliable"}},<br>
            Id: {{product.id ||"not avaliable"}}
            <div class="flex">

              <button @click="toggleEditModal(product)">
                <svg class="stroke-2  w-10 h-6 hover:bg-teal-900 rounded-lg"  fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              </button>


              <button @click="toggleDeleteModal(product)">
                <svg class="w-10 h-6 text-teal-100 hover:bg-red-700 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>

          </div>

          <button class="fixed inset-x-0 " @click="toggleAddModal()">
            <svg class=" w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 
          </button> 

          <div v-if=showDeleteModal> 
            <ConformDelete
            :id=id
            :data=data
            @delete=ConformDelete
            />
          </div>

          <div v-if=showEditModal>
            <Edit
            :categoryList=categoryList
            :id=id
            :data=data
            @edit=Edit
            />
          </div>

          <div v-if=showAddModal>
              <Add
              :categoryList=categoryList
              :data=data
              @add=Add
            />
          </div>

          <h1 class="mx-6 font-sans block shadow-lg text-5xl font-extrabold text-white rounded-lg border p-1 bg-green-700 my-5" >These are the list of category .</h1> 
          <div  class=" py-8 px-3  my-5 mx-6 font-sans shadow-2xl w-3/12 bg-white block shadow-xl text-black rounded-lg border-double bg-green-700 text-white">
            <button @click="toggleCategoryProduct(category)">
              list of category
            </button>
              <div class="flex">
          
              </div>
          </div>    
            
          <button>
              <svg class="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 
          </button> 
      </div>
  </div>
  <div v-if=showCategoryProduct>
                <CategoryProduct
                :categoryList=categoryList
                @cproduct = CategoryProduct
                />
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
Vue.use(Toaster, {timeout: 5000})
import ConformDelete from '~/components/ConformDelete'
import Edit from '~/components/Edit'
import Add from '~/components/Add'
import categoryProduct from './../components/categoryProduct'

export default {

  components:{
    ConformDelete,
    Edit,
    categoryProduct
    },
  
  data(){
    return{
      showDeleteModal: false,
      showEditModal : false,
      showAddModal : false,
      showCategoryProduct:false,
      categoryList: [], 
      list : [],
      cpList:[],
      id: Number,
      data:{
        name :'',
        size:'',
        color:'',
        brand:'',
        color:'',
        category_name:'',
        category:''
      }
      }

  },
  
  mounted(){
        this.callThisFunction()
        this.callCategoryFucntion()
    },
    
  methods: 
    {
      callThisFunction() {
        this.$axios
          .$get(`api/list`)
          .then((response) => {
              this.list = response
          })
          .catch((error) => {
            console.log(error)
          })},

      callCategoryFucntion(){
      this.$axios
        .$get('api/category')
        .then((response)=>{
          this.categoryList = response
            debugger
        })
        .catch((error)=>{
            console.log('error : ',error)
        })
  },
      
      toggleDeleteModal(product){
      this.id = product.id
      this.data.name =product.name
      this.showDeleteModal = !this.showDeleteModal
      },

      toggleEditModal(product){
        // Edit garda Pervious data tha hos bhaneyra rakheyko
        this.id = product.id
        this.name = product.name
        this.data.name = product.name
        this.data.size = product.size
        this.data.color = product.color
        this.data.brand = product.brand
        this.data.category_name = product.category_name
        this.showEditModal = !this.showEditModal
      },
      
      toggleAddModal(){
      this.data.name = ''
      this.data.size = ''
      this.data.color = ''
      this.data.brand = ''
      this.data.category_name = ''
      this.showAddModal = !this.showAddModal
      },

      ConformDelete(object){
        
        this.$axios.$delete(`api/list/${this.id}`)
      .then((response) => {
        this.showDeleteModal = false
        this.$toaster.success(`${this.data.name} has been deleted`)
        
      })
      .catch((error) => {
          console.log(error)
      })},
      
      Edit(object){
        debugger
          this.$axios.$patch(`api/list/${this.id}/`,object.data)
        .then((response) => {
            this.list = response
        this.$toaster.success(`${this.name} has been Edited`)
        debugger

        })
        .catch((error) => {
            console.log(error)
        })},
        
      Add(object){
        debugger
        this.$axios
      .$post(`api/list/`,object.data)
      .then((response) => {
          this.list = response
          console.log('what comes in response',response)
          this.$toaster.success(`${response.name} has been added`)

          debugger
      })
      .catch((error) => {
          console.log(error)
      })},

      toggleCategoryProduct(){
        debugger
        this.showCategoryProduct = true
      },
        
  },
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