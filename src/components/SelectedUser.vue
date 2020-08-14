<template>
  <div class="card main__card p-5 mb-4 text-left">
    <h5 class="title__3">Selected user</h5>
    <p>{{ user.name }}</p>
    <ul class="list-group">
      <li class="list-group-item">{{ user.username }}</li>
      <li class="list-group-item">{{ user.phone }}</li>
      <li class="list-group-item">{{ user.email }}</li>
      <li class="list-group-item">{{ user.website }}</li>
      <li
        class="list-group-item"
      >{{ user.address.street }} {{ user.address.suite }}, {{ user.address.zipcode }} {{ user.address.city }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.title__3 {
  color: #2f1c6a;
  line-height: 1.4;
  font-size: 1.4em;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0;
  background-color: #fff;
  border: none;
  font-size: 13px;
  padding: 0.6em 0em;
}
.card {
  min-height: 360px;
  height: auto;
}
</style>


