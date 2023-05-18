import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", {
  state: () => ({
    filters: [
      {
        items: ["Russia", "USA"],
        picked: null,
        label: "Filter by country",
        handler(user) {
          return user.country === this.picked;
        },
      },
      {
        items: ["< 10", "10-15", "15-20", "> 20"],
        picked: null,
        label: "Filter by score",
        handler(user) {
          const picked = this.picked;
          const patterns = [/^</, /^>/, /\d+-\d+/];
          const index = patterns.findIndex((pattern) => pattern.test(picked));
          return [
            user.score < +picked.match(/\d+$/),
            user.score > +picked.match(/\d+$/),
            user.score >= +picked.match(/^\d+/) &&
              user.score <= +picked.match(/\d+$/),
          ][index];
        },
      },
    ],
  }),
});
