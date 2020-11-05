<template>
<div class="flex screens xs:container sm:container md:container lg:container xl:container ">
  <div class="flex  xs:bg-teal-900 sm:bg-teal-900 md:bg-teal-900 lg:bg-teal-900 xl:bg-teal-900 xs:w-screen " >
      <div class="flex flex-wrap">

        <button class="flex xs:mx-2 xs:min-w-0 xl:mx-full lg:mx-32 md:mx-40 sm:mx-64" @click="toggleAddModal()">
          <svg class="flex w-12 h-12 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 
        </button>         

        <h1 style="min-height: 100px;margin-left: inherit;" class="flex  bg-teal-700 flex font-sans block shadow-lg text-5xl font-extrabold text-white rounded-lg border p-1  my-4   lg:text-black xl:text-white md:text-red-500 md:w-1/2 md:mx-64 md:min-w-0 md:w-4/5  sm:min-w-0 sm:w-4/5 sm:mx-12 xl:mx-0 sm:min-w-4 sm:mx-4 " >Products in Database.</h1> 
        <div style="font-variant: all-small-caps;flex-flow: wrap;" class="flex xs:-mx-32 xl:mx-1 lg:mx-12 ">
        <div  class="flex border xl:py-2 xl:px-3 lg:py-2 lg:my-4 sm:p-6 sm:my-4 md:mx-64 mx-64 xl:my-5 xl:mx-3 font-sans shadow-2xl block shadow-xl text-black rounded-lg border-double bg-teal-800 text-white column  md:min-w-20 md:h-44 my-6 md:mx-1 lg:mx-2 xs:mx-32 xs:px-2"  style="min-width: 350px;" v-for="(product,id) in list" :key="`${id}-ec`">
             <div class="flex column__icon text-white">
            <button @click="toggleEditModal(product)">
              <svg class="stroke-2  w-10 h-6 hover:bg-teal-900 rounded-lg"  fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </button>

            <button @click="toggleDeleteModal(product)">
              <svg class="h-6 hover:bg-red-700 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
          <div class=" my-4 p-3 rounded-lg shadow-lg border bg-white capitalize text-black">
            Detail of {{product.name}}
          </div>
          <div class="flex uppercase bg-green-700 text-white-500 rounded-lg ">
          Category: {{product.category_name ||"not avaliable"}},<br>
          </div>
          Name:  {{product.name||"not avaliable"}},<br>
          Size : {{product.size||"not avaliable"}}, <br>
          Color :{{product.color||"not avaliable"}},<br>
          Brand :{{product.brand||"not avaliable"}},<br>
          Id: {{product.id ||"not avaliable"}}
       
        </div>
        </div>

        <div v-if="showDeleteModal">
                    <ConformDelete
                    :id=id
                    :data=data
                    @delete=ConformDelete
                    @cancel=cancel
                    />
        </div>

        <div v-if="showEditModal">
          <Edit
                    :categoryList=categoryList
                    :category_name=data.category_name
                    :category=data.category
                    :data=data
                    @edit=Edit
                    @cancel=cancel
                    
                    />
        </div>
         
        <div v-if="showAddModal">
              <Add
              :categoryList=categoryList
              :data=data
              @add=Add
              @cancel=cancel
            />
        </div>

        <h1 style="min-width: 933px;min-height: 164px" class="flex mx-6 font-sans block shadow-lg text-5xl font-extrabold text-white rounded-lg border p-1 bg-green-700 my-5 xl:w-min-full lg:w-min-full" >These are the list of category .</h1> 
        <div  class="flex py-8 px-3  my-5 mx-6 font-sans shadow-2xl w-3/12 block shadow-xl text-black rounded-lg border-double bg-green-700 text-white ">
          <button @click="toggleCategory(category)">
            list of category
          </button>
        </div>  
      </div>
  </div>
  <div v-if=showCategoryProduct>
                <CategoryProduct
                :categoryList=categoryList
                @cproduct = CategoryProduct
                @cancel=cancel
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
import rough from '~/components/rough'

export default {
  components:{
    ConformDelete,
    Edit,
    categoryProduct,
    },
  
  data(){
    return{
      showDeleteModal: false,
      showEditModal : false,
      showAddModal : false,
      showCategoryProduct:false,
      showModal: false,
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
              debugger
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
        this.category = product.category
        this.data.category = product.category
        this.showEditModal = !this.showEditModal
        debugger
      },
      
      toggleAddModal(){
      this.data.name = ''
      this.data.size = ''
      this.data.color = ''
      this.data.brand = ''
      this.data.category=''
      this.data.category_name = ''
      this.showAddModal = !this.showAddModal
      },

      ConformDelete(object){
        
        this.$axios.$delete(`api/list/${this.id}`)
      .then((response) => {
        this.showDeleteModal = false
         const index = this.list.findIndex(item => item.id === response.id)
          console.log("what comes in index",index)
          this.list.splice(index, 1)
        this.$toaster.success(`${this.data.name} has been deleted`)
        
      })
      .catch((error) => {
          console.log(error)
      })},
     
     cancel(){
        this.showDeleteModal= false
        this.showEditModal=false
        this.showAddModal=false
        this.showCategoryProduct=false
      },
      
      Edit(object){
          if(object.data.category==""){
        this.$toaster.error(`category is required`)
        }
        if(object.data.name==""){
        this.$toaster.error(`name is required`)
        }
        if(object.data.size==""){
        this.$toaster.error(`size is required`)
        }
         if(object.data.color==""){
        this.$toaster.error(`color is required`)
        }
         if(object.data.brand==""){
        this.$toaster.error(`brand is required`)
        }
       

        debugger
          this.$axios.$patch(`api/list/${this.id}/`,object.data)
        .then((response) => {
          this.showEditModal=false
          const index = this.list.findIndex(item => item.id === response.id)
          console.log("what comes in index",index)
          this.list.splice(index, 1,response)
        this.$toaster.success(`${this.name} has been Edited`)
        console.log('what comes in list',this.list)
        debugger

        })
        .catch((error) => {
            console.log(error)
        })},
        
      Add(object){
        debugger
        if(object.data.category==""){
        this.$toaster.error(`category is required`)
        }
        if(object.data.name==""){
        this.$toaster.error(`name is required`)
        }
        if(object.data.size==""){
        this.$toaster.error(`size is required`)
        }
         if(object.data.color==""){
        this.$toaster.error(`color is required`)
        }
         if(object.data.brand==""){
        this.$toaster.error(`brand is required`)
        }
        this.$axios
      .$post(`api/list/`,object.data)
      .then((response) => {
        debugger
        this.showAddModal=false
          const index = this.list.findIndex(item => item.id === response.id)
          console.log("what comes in index",index)
          this.list.push(response)
          this.$toaster.success(`${response.name} has been added`)
      })
      .catch((error) => {
          console.log(error)
      })},

      toggleCategory(){
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

.column{
    display: flex;
    flex-direction: column;
}

.column__icon {
  align-self: flex-end;
  display: flex;
}

#bipin_g {
  text-align: initial;
}

</style>
