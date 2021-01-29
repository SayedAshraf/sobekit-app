<template>
  <div class="bg-white rounded shadow p-3 h-100">
    <div class="row">
      <div class="col-12 col-md-4 text-center text-lg-left">
        <img
          src="https://randomuser.me/api/portraits/women/74.jpg"
          class="w-100 mw-240px mb-3"
          alt="dummmy user"
        />
      </div>
      <div class="col-12 col-md-4">
        <div class="text-muted">0P6E1d4nr0L1ntW8cjGU</div>
        <div class="h5 text-truncate">miss. Katie Hughes</div>
        <div class="text-truncate"><b>Gender: </b>Female</div>
        <div class="text-truncate"><b>Date Of Birth: </b>Aug 26 1945</div>
        <div class="text-truncate"><b>Register Date: </b>May 04 2020</div>
        <br />
        <div class="text-truncate"><b>Email: </b>katie.hughes@example.com</div>
        <div class="text-truncate"><b>Phone: </b>(931)-868-5781</div>
        <br />
      </div>
      <div class="col-12 col-md-4">
        <div>
          <b>Address</b><br/>New Zealand, Otago, Napier<br />7459, New North Road
        </div>
        <img
          class="w-100"
          src="https://maps.googleapis.com/maps/api/staticmap?markers=Otago,7459,%20New%20North%20Road,New%20Zealand,Napier&amp;center=Otago,7459,%20New%20North%20Road,New%20Zealand,Napier&amp;zoom=8&amp;size=600x300&amp;key=AIzaSyD9dyB7_5evAcVtSOf92NlVO8Cp0OdEwTA"
          alt="dummy user map"
        />
      </div>
    </div>
    <div class="border-top mt-2 pt-2 text-left">
      <div class="out-a small pointer text-underline" role="button">
        Get Full Profile
      </div>
      <div class="out-a small pointer text-underline" role="button">
        Get Posts List
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
