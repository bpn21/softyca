<template>
<div class="flex container">
    <div class="flex modal-backdrop">
        <div class="flex modal rounded-lg">
            <div class= "flex bg-green-500 p-16">
                <div style="width: -moz-fit-content;" class="flex py-2 px-3 font-sans shadow-2xl block shadow-xl rounded-lg bg-green-900 text-white column capitalize">
                    <div  class="flex" v-for="(product,id) in list" :key="`${id}`">
                            {{list}}
                    </div>
                    <div v-for="(category,id) in categoryList" :key="`${id}`">
                        {{category.name}} <br>
                        
                    </div>
                </div>
            </div>
        <button @click="$emit('cancel')" style="height: max-content; align-self: center;" class="rounded-lg flex hover:bg-green-900 text-black font-bold py-2 px-4  " type="submit">
            Ok
        </button>
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

<style>
.column{
    flex-direction: column;
    width: max-content;
}
</style>