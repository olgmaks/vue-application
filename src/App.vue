<template>
  <div id="app"> 
     <v-app id="inspire">
      <header-component></header-component> 

       <router-view/>

     <footer-component></footer-component>
     </v-app> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import store from "@/store";
@Component({
  components: {
    "header-component": Header,
    "footer-component": Footer
  }
})
export default class Home extends Vue {
  drawer = store.state.drawer;
  source = "";
}
</script>