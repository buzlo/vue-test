<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" md="4">
        <BaseFilter
          v-for="filter of filterStore.filters"
          v-model="filter.picked"
          :items="filter.items"
          :label="filter.label"
          :key="filter.label"
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto">
          <UsersList :users="filteredUsers" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseFilter from "./BaseFilter.vue";
import UsersList from "./UsersList.vue";
import { useFilterStore } from "../stores/filterStore.js";
import { mapStores } from "pinia";

export default {
  name: "ContentBlock",
  data() {
    return {
      users: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: "Ali Connors",
          title: "Brunch this weekend?",
          text: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          country: "USA",
          address: "Country, City, 1 Street",
          score: 5,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          name: "to Alex, Scott, Jennifer",
          title: "Summer BBQ",
          text: `Wish I could come, but I'm out of town this weekend.`,
          country: "Russia",
          address: "Country, City, 2 Street",
          score: 25,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Sandra Adams",
          title: "Oui oui",
          text: "Do you have Paris recommendations? Have you ever been?",
          country: "USA",
          address: "Country, City, 3 Street",
          score: 12,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          name: "Trevor Hansen",
          text: "Have any ideas about what we should get Heidi for her birthday?",
          country: "Russia",
          address: "Country, City, 4 Street",
          score: 16,
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          name: "Britta Holt",
          title: "Recipe to try",
          text: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          country: "USA",
          address: "Country, City, 5 Street",
          score: 15,
        },
      ],
    };
  },
  computed: {
    filteredUsers() {
      let users = this.users.slice();
      for (const filter of this.filterStore.filters) {
        if (filter.picked) {
          users = users.filter(filter.handler.bind(filter));
        }
      }
      return users;
    },
    ...mapStores(useFilterStore),
  },
  methods: {
    async updateUsers() {
      // Вместо TEMP записать API URL
      const url = "TEMP";
      this.users = await fetch(url).then((response) => response.json());
    },
  },
  created() {
    // Раскомментировать, когда появится внешний API
    // this.updateUsers()
  },
  components: { BaseFilter, UsersList },
};
</script>
