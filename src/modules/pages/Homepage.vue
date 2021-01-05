<template>
  <div>
    <v-container>
      <h2 class="text-center primary--text ma-3 pa-3">
        Fetch random user data
      </h2>
      <v-layout row wrap justify-center>
        <v-flex
          xs12
          sm12
          md4
          lg4
          pa-2
          v-for="(item, index) in user.data.results"
          :key="index"
        >
          <v-card>
            <v-card-text>
              <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="200"
                type="article"
              >
                <v-layout column align-center justify-center>
                  <v-avatar size="100px">
                    <img :src="item.picture.large" alt="" />
                  </v-avatar>
                  <p class="mt-3">
                    <b>Name:</b> {{ item.name.title }} {{ item.name.first }}
                    {{ item.name.last }}
                  </p>
                  <p><b>Gender:</b> {{ item.gender }}</p>
                </v-layout>
              </v-skeleton-loader>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { api } from "@/api/";
export default {
  data() {
    return {
      loading: true,
      transition: "fade-transition",
      user: {},
    };
  },
  async created() {
    await api.getUser().then((res) => {
      this.user = res;
      this.loading = false;
    });
  },
};
</script>