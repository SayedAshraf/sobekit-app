<template>
  <div class="card">
    <div class="row">
      <!-- image column -->
      <div class="col-4">
        <img class="avatar" :src="user.picture" :alt="user.title"/>
      </div>
      <!-- information column -->
      <div class="col-8">
        <div class="infos">
          <router-link class="Continue" :to="`/user/${user.id}`">
            <div class="name capitalize">{{ user.title }}/ {{ user.firstName }} {{ user.lastName }}</div>
          </router-link>
          <div class="ID"><font-awesome-icon icon="id-card"/> {{ user.id }}</div>
          <div class="email"><font-awesome-icon icon="envelope"/> {{ user.email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usercard",
  props: ["user"],
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
$global_gap: 10px;
$shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
$shadow_hover: 0 6px 10px rgba(0, 0, 0, 0.16), 0 6px 10px rgba(0, 0, 0, 0.23);

.card {
  padding: $global_gap;
  border-radius: 5px;
  box-shadow: $shadow;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  .avatar {
    margin-right: $global_gap;
    border-radius: 50%;
  }
  .infos {
    div {
      &:not(:last-child) {
        margin-bottom: $global_gap;
      }
      &.capitalize {
        text-transform: capitalize;
      }
      &.name {
        font-size: 150%;
        font-weight: bold;
      }
      i {
        margin-right: $global_gap;
      }
    }
  }
}
</style>

