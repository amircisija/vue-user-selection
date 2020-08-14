<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card p-5 mb-4 text-left">
            <h4>Users</h4>
            <p class="text-left mb-0">
              <strong>Get Users with axios on created()</strong>
            </p>
            <pre class="text-left">
axios
.get("https://jsonplaceholder.typicode.com/users")
.then(response => (this.users = response.data));
          </pre>

            <a class="btn" @click="removeUser()">Delete User</a>
          </div>
        </div>
        <div class="col-sm-6" v-if="user">
          <div class="card p-5 mb-4 text-left">
            <h5>Selected user:</h5>
            <p>{{ user.name }}</p>
          </div>
        </div>
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
import axios from "axios";
export default {
  name: "App",
  components: {
    UserDetails
  },
  data: () => ({
    users: null,
    user: null
  }),
  methods: {
    removeUser() {
      this.user = null;
    },
    getUser(user) {
      this.user = user;
      // Do axios call for the `car` object
    }
    //   handleSelectUser(user) {
    //    this.selectedUser = this.user.name;
    //    return console.log(this.selectedUser);
    //    you can also handle toggle action here manually to open and close dropdown
    //  }
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
</style>
