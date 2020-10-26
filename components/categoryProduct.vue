<template>
    <div class= "container bg-green-500 p-16">
          <div  class=" py-8 px-3 font-sans shadow-2xl w-4/5 bg-white block shadow-xl text-black rounded-lg border-double bg-green-900 text-white">
            <div v-for="(product,id) in list" :key="`${id}`">
                    {{list}}
            </div>
            <div v-for="(category,id) in categoryList" :key="`${id}`">
                {{category.name}} <br>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        categoryList:Array,
        list:Array
    },
}
</script>