<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="邀请人userid">
        <el-input v-model="formInline.user" placeholder="邀请人userid"></el-input>
      </el-form-item>
      <el-form-item label="新注册手机号">
        <el-input v-model="formInline.user" placeholder="新注册手机号"></el-input>
      </el-form-item>
      <el-form-item label="loanMgmUserSource">
        <el-input v-model="formInline.user" placeholder="loanMgmUserSource"></el-input>
      </el-form-item>
      <el-form-item label="sourcefrom">
        <el-input v-model="formInline.user" placeholder="sourcefrom"></el-input>
      </el-form-item>

      <div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">invite</el-button>
        </el-form-item>
      </div>


    </el-form>




  </div>
</template>

<script>
  import {queryInviterId} from '../../api/invite.js'
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    created(){
      queryInviterId()
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

