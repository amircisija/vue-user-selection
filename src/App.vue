<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card main__card p-5 mb-4 text-left">
            <h5 class="title__3">Users</h5>
            <p class="text-left mb-0">
              <strong>Get Users with axios on created()</strong>
            </p>
            <pre class="text-left">
axios
.get("https://jsonplaceholder.typicode.com/users")
.then(response => (this.users = response.data));
          </pre>
            <transition name="fade">
              <a v-if="user" class="btn btn-2" @click="removeUser()">Delete User</a>
            </transition>
          </div>
        </div>
        <transition name="fade">
          <div class="col-sm-6" v-if="user && !isLoading">
            <selected-user :user="selectedUser"></selected-user>
          </div>
        </transition>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <template v-for="user in users">
          <user-details :user="user" :key="user.id" @getUser="getUser"></user-details>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from "./components/UserDetails";
import SelectedUser from "./components/SelectedUser";
import axios from "axios";
export default {
  name: "App",
  components: {
    UserDetails,
    SelectedUser
  },
  data: () => ({
    users: null,
    user: null,
    selectedUser: null,
    isLoading: false
  }),
  methods: {
    removeUser() {
      this.user = null;
    },
    getUser(user) {
      this.user = user;
      this.selectedUser = user;
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        const { company, address, ...selectedUser } = this.user;
        console.log(selectedUser);
        //console.log(rest);
      }, 20);
    }
  },
  beforeCreate() {
    this.user = null;
  },
  mounted() {
    console.log("mounted called.");
  },
  created() {
    console.log("created called.");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.users = response.data));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.card.main__card {
  min-height: 360px;
  height: auto;
}
</style>
