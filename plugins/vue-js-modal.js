// plugins/vue-js-modal.js
import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'

import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, { })

/*
export default function(_, inject) {
  inject('modal', VModal)
}
*/

import VueModal from '@kouts/vue-modal';
import '@kouts/vue-modal/dist/vue-modal.css';