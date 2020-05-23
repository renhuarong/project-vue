<template>
<el-container style="height: 700px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>MGM</template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="1-1" v-on:click="mgminvitepape">建立邀请关系</el-menu-item>
          <el-menu-item index="1-2" v-on:click="activityinfo">活动枚举信息维护</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <div class="el-main">
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
  </el-container>
    <router-view  />
</div>
</el-container>
</template>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-main{
    background-color: white;
    padding: 10px;
    margin-top: 10px;
    padding-top: 10px;
  }


</style>

<script>
  export default {
    data() {
    },
    methods:{
      mgminvitepape:function(){
       this.$router.push('/Table/MgmInvitePage')
      },
      activityinfo:function(){
        this.$router.push('/Table/ActivityInfo')
      }
    }
  };
</script>
