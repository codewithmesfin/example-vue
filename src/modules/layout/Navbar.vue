<template>
  <div>
    <v-app-bar color="primary" flat dense dark app clipped-left clipped-right>
      <v-app-bar-nav-icon @click.stop="toggleNavBar"></v-app-bar-nav-icon>

      <v-toolbar-title @click="$router.push({ name: 'home' })">
        <v-avatar size="40px">
          <img src="@/assets/logo.jpg" alt="logo" height="100%" width="100%" />
        </v-avatar>
        <span class="d-none d-md-inline-block mx-2">GDG Bahir Dar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mx-2">
        <v-text-field
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
          flat
          rounded
          hide-details
          dense
        ></v-text-field>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        class="text-capitalize d-none d-md-block"
        v-for="menu in menus"
        :key="menu.title"
        @click="$router.push({ name: menu.route })"
      >
        {{ menu.title }}
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      menus: [
        {
          title: "About",
          route: "about",
        },
        {
          title: "Service",
          route: "service",
        },
        {
          title: "Team",
          route: "team",
        },
        {
          title: "Portfolio",
          route: "portfolio",
        },
        {
          title: "Store",
          route: "store",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("layout", ["toggleNavBar"]),
  },
};
</script>