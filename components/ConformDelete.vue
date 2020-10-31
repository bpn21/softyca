<template>
<div class="flex">
<div class="modal box_size ">
    <div  class="flex modal">
        <button 
            class="mx-2"
            id='x'
            type="button"
            @click="cancel"
            style="text-align:end"
        >
            x
        </button>
    </div>
  <div class=" w-4/5 text-black p-1" id="x">
  <span >Are you sure you want to delete {{data.name}}?</span><br>
  <button @click=ConformDelete() class="bg-white hover:bg-red-700 text-black rounded-lg font-bold py-2 px-4  " type="submit">
    Delete
  </button>
<button @click=cancel() class="bg-white hover:bg-teal-900 text-black font-bold rounded-lg py-2 px-4  " type="submit">
    Cancel
  </button>
  </div>
</div>
</div>
</template>


<script>
export default {
  props: {
    data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  name: 'ConformDelete',
  components: {},
  data () {
    return {
      postData:{}
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    this.postData = this.data
  },
  methods: {
      ConformDelete(){
          debugger
          this.$emit('delete', { data: this.data})
      },
       cancel(){
          debugger
          this.$emit('cancel', { data: this.data})
      },
  }
}
</script>

<style>
#x {
  text-align: end;
}

.box_size {
  text-align: center;
  font: icon;
  min-width: 700px;
  
}

</style>