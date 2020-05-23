<template>
  <div id="firstVue">
<!--    <input type="number" v-model.number="my_step" />-->
<!--    <button v-on:click="clickButton">Add</button>-->
<!--    <p>{{my_total}}</p>-->
    <table-com/>
  </div>
</template>

<script type="text/javascript">
  import TableCom from "./Table";
  export default {
    components:{
      TableCom
    },
    data(){
      return{
        my_step: 1,
        my_total: 0
      }

    },
    methods:{
      clickButton:function(){
        this.my_total = this.my_total + this.my_step
      }
    }
  }
</script>

<style scoped>

</style>
