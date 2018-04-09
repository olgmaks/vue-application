<template> 
  <div>
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
    
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                icon
                large
                
                target="_blank"
                slot="activator"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank" slot="activator">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> 
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import store from "@/store";
@Component({
  components: {
    "header-component": Header,
    "footer-component": Footer
  },
  computed: {
    drawer: {
      get() {
        console.log('get')
        return store.state.drawer;
      },
      set(val){
        console.log('set' + val)
        store.commit('switchDrawer');
      }
    }
  } 
})
export default class Home extends Vue {}
</script>