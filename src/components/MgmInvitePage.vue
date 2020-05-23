<template>
  <el-container>
    <el-main>
      <div class="divcss-left">
        邀请人userid:<el-input v-model="input" placeholder="请输入邀请人userid"  ></el-input>

        loanMgmUserSource:<el-input v-model="input" placeholder="请输入loanMgmUserSource"></el-input>

        phone<el-input v-model="input" placeholder="请输入phone"></el-input>

        sourcefrom<el-input v-model="input" placeholder="请输入sourcefrom"></el-input>

        activityId<el-input v-model="input" placeholder="请输入activityId"></el-input>
        <el-row>
          <el-button round>圆角按钮</el-button>
        </el-row>
      </div>

    </el-main>
  </el-container>

</template>

<script type="text/javascript">
    export default {

    }
</script>

<style  scoped>
  .divcss-left {
    width:200px;
     padding: 10px;
  }
</style>
