<template>
  <div class="col-sm-4 mb-3">
    <div class="card" :id="user.id">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a class="btn btn-1" @click="handleSelectUser(user)">Select User</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    selectedUser: null
  }),
  methods: {
    handleSelectUser(user) {
      this.selectedUser = user;
      this.$emit("getUser", this.selectedUser);
      return console.log(this.selectedUser);
      // you can also handle toggle action here manually to open and close dropdown
    }
  }
};
</script>
<style lang="scss">
.card {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .card-title {
    color: #2f1c6a;
    line-height: 1.4;
    font-size: 1.4em;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
  }
}
.btn-1 {
  box-shadow: rgba(70, 201, 58, 0.5) 0px 20px 35px -10px;
  background: #46c93a;
}
</style>


