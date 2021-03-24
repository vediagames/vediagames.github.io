<template>
  <v-app-bar color="grey darken-4" rounded="lg" app>
    <v-container class="py-0 fill-height">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vedia Games</v-toolbar-title>
      <!-- <v-img
          contain
          lazy-src="../assets/logo.svg"
          max-width="90px"
          src="../assets/logo.svg"
      ></v-img> -->

      <v-spacer></v-spacer>

      <MenuButton></MenuButton>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuButton from "@/components/MenuButton.vue";

@Component({
  components: { MenuButton }
})
export default class Example extends Vue {
}
</script>

<style>
.sticky {
  position: sticky;
}
</style>
