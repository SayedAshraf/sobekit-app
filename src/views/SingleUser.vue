<template>
  <div class="container bg-white rounded shadow p-3 h-100" v-if="SelectedUser">
    <div class="row">
      <div class="col-12 col-md-4 text-center text-lg-left">
        <img :src="SelectedUser.picture" class="w-100 mw-240px mb-3" :alt="SelectedUser.title" />
      </div>
      <div class="col-md-4">
        <div class="text-muted">{{ SelectedUser.id }}</div>
        <div class="h5">
          {{ SelectedUser.title }}. {{ SelectedUser.firstName }}
          {{ SelectedUser.lastName }}
        </div>
        <div><b>Gender: </b>{{ SelectedUser.gender }}</div>
        <div><b>Date Of Birth: </b>{{ SelectedUser.dateOfBirth }}</div>
        <div><b>Register Date: </b>{{ SelectedUser.registerDate }}</div>
        <div><b>Email: </b>{{ SelectedUser.email }}</div>
        <div><b>Phone: </b>{{ SelectedUser.phone }}</div>
      </div>
      <div class="col-12 col-md-4">
        <div v-if="SelectedUser.location">
          <b>Address</b>
          <br />
          {{ SelectedUser.location.country }},
          {{ SelectedUser.location.state }},
          {{ SelectedUser.location.city }}
          <br />
          {{ SelectedUser.location.street }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SingelUser",
  computed: {
    ...mapGetters(["SelectedUser"]),
  },
  methods: {
    ...mapActions(["getSelectedUser"]),

    async GetUser() {
      await this.getSelectedUser(this.$route.params.id);
    },
  },
  created() {
    this.GetUser();
  },
};
</script>
