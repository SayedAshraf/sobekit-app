<template>
  <b-container v-if="Users">
    <b-row>
      <b-col sm="12" md="12" lg="6" v-for="(user, idx) in Users" :key="idx">
        <user-card :user="user"></user-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Users",
  components: {
    UserCard,
  },
  computed: {
    ...mapGetters(["Users"]),
  },
  methods: {
    ...mapActions(["getUsers"]),

    async fetchUsers() {
      await this.getUsers();
    },
  },

  created() {
    this.fetchUsers();
  },
};
</script>