<template>
  <v-list three-line>
    <v-slide-y-transition group>
      <v-subheader key="subheader">List</v-subheader>

      <template v-for="(item, index) in users">
        <v-list-item :key="item.title">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-avatar v-bind="attrs" v-on="on">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            </template>
            <span>{{ item.address }}</span>
          </v-tooltip>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>

            <v-list-item-subtitle>
              <span class="text--primary">{{ item.name }}</span> &mdash;
              {{ item.text }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider
          v-if="index < users.length - 1"
          inset
          :key="index"
        ></v-divider>
      </template>
    </v-slide-y-transition>
  </v-list>
</template>

<script>
import { transitions } from "vuetify";
export default { transitions: transitions, props: ["users"] };
</script>

<style lang="scss" scoped></style>
