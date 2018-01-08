<template>
  <div>
    <head1></head1>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import head1 from '../components/head1';
import foot from '../components/foot';
export default {
  name: 'hello',
  data() {
    return {
     
    }
  },
  components:{
    head1,
    foot
  }
}
</script>





<style scoped>

</style>
