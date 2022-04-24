<template>
  <div>
    <user-profile :info="userInfo">
      <template v-slot:username>
        <div>
          {{ userInfo.id }}
        </div>
      </template>
      <template v-slot:time>
        <span>
          {{ `joined ${userInfo.created} , ` }}
        </span>
        <span>
          {{ userInfo.karma }}
        </span>
      </template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
