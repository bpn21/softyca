<template>
  <div class="bg-red-800 rounded-lg text-white p-1">
  <span >Are you sure you want to delete {{data.name}}?</span>
  <button @click=ConformDelete() class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Delete
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
  }
}
</script>