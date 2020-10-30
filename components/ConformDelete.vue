<template>
  <div class="bg-white w-4/5 rounded-lg text-black p-1">
  <span >Are you sure you want to delete {{data.name}}?</span><br>
  <button @click=ConformDelete() class="bg-white hover:bg-red-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Delete
  </button>
<button @click=cancel() class="bg-white hover:bg-teal-900 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Cancel
  </button>
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