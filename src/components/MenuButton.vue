<template>
  <div>
    <div class="text-center d-none d-md-flex">
      <v-btn
        v-for="(menuButton, index) in menuButtons"
        :key="index"
        :color="menuButton.color"
        class="mx-5"
        elevation="0"
      >
        {{ menuButton.title }}
        <v-icon v-if="menuButton.icon" right>{{menuButton.icon}}</v-icon>
      </v-btn>
    </div>

    <div class="text-center d-sm-flex d-md-none">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="secondary" elevation="2" large>
            Menu
            <v-icon right>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(menuButton, index) in menuButtons" :key="index">
            <v-list-item-title>{{ menuButton.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Colors, IMenuButton } from "@/types";

@Component({
  components: {},
})
export default class MenuButton extends Vue {
  menuButtons: Array<IMenuButton> = [
    {
      title: "Features",
      color: Colors.Grey,
    },
    {
      title: "Contact",
      color: Colors.Grey,
    },
    {
      title: "About",
      color: Colors.Grey,
    },
    {
      title: "Visit Store",
      color: Colors.Secondary,
      icon: "mdi-cart"
    },
  ];
}
</script>

<style scoped></style>
