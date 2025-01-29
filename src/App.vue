


<template>
 
  <div class="main_content">
    <Form></Form>
  </div>

</template>

<script >
import Form from './components/Form.vue';

export default {
  components: {
    Form
  },
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.main_content{

  display: flex;
  flex-direction: column;
  align-items: center;
  
}

</style>
