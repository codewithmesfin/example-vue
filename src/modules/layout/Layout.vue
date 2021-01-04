<template>
  <div>
    <navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <sidebar />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default {
  data() {
    return {};
  },
  components: {
    Sidebar,
    Navbar,
  },
};
</script>