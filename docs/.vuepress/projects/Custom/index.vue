<template>
  <div>
    {{ msg }}

    <Child />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  data: () => ({
    msg: 'hello'
  }),
  components: { Child }
}
</script>
