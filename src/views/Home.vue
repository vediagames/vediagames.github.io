<template>
  <v-app>
    <NavBar></NavBar>

    <v-main>
      <v-container>

      </v-container>
    </v-main>

   <!-- <v-row class="my-2">
      <v-spacer></v-spacer>
      <v-col cols="12" md="5">
        <v-container>
        </v-container>
      </v-col>
      <v-spacer></v-spacer>
    </v-row> -->
    <Footer></Footer>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "../components/NavBar.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Footer,
    NavBar
  }
})
export default class Home extends Vue {
}
</script>
