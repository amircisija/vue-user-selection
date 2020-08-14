<template>
  <div>
    <button>{{ btnText }}</button>
  </div>
</template>
<script>
export default {
  props: ["btnText"]
};
</script>

<style>
button {
  background: rgb(115, 224, 115);
  color: #fff;
  padding: 20px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.116);
  border-radius: 50px;
  border: none;
  margin-bottom: 10px;
}
button:focus {
  background: rgb(115, 224, 115);
  color: #fff;
  padding: 20px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.116);
  border-radius: 50px;
  border: none;
  outline: none;
}
</style>
