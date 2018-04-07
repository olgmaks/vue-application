<template>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="switchDrawer()"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuex from 'vuex';
import store from '@/store'

@Component({})
export default class Header extends Vue {

  switchDrawer() {
    store.state.drawer = !store.state.drawer;
  }
}
</script>