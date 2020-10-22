<template>
  <div class="bg-red-800 rounded-lg text-white p-1">
  <span >Are you sure you want to delete {{productName}}?</span>
  <button @click=ConformDelete() class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Delete
  </button>
  </div>
</template>


<script>
export default {
  props: {
    productId: {
      type: Number,
      default: ''
    },
     productName: {
      type: String,
      default: ''
    }
  },
  name: 'ConformDelete',
  components: {},
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
      ConformDelete(){
          debugger
          this.$emit('delete', { index: this.productId})
      }
  }
}
</script>