<template>
<div>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
     <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile >
        <!-- <v-list-tile @click=""> -->
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
        <!-- <v-list-tile @click=""> -->
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuex from "vuex";
import store from "@/store";

@Component({
})
export default class Header extends Vue {
  drawer = false;
}
</script>