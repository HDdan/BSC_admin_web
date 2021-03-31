<template>
  <div class="login-page">
    <div class="login-page__left">
      <div class="login-page__left__content">
        <img src="@/assets/images/logo@2x.png" alt="" />
        <el-input
          class="user-input"
          prefix-icon="iconfont iconyonghuming-2"
          placeholder="请输入用户名"
          v-model="user"
        ></el-input>
        <el-input
          type="password"
          class="password-input"
          prefix-icon="iconfont iconmima"
          placeholder="请输入密码"
          v-model="password"
        ></el-input>
        <div class="login-page__left__content__submit" @click="login">登录</div>
      </div>
    </div>
    <div class="login-page__right">
      <div class="login-page__right__wapper">
        <div class="login-page__right__wapper__text1">HI，您好～</div>
        <div class="login-page__right__wapper__text2">
          BSC经销商管理系统后台欢迎您！
        </div>
        <img
          class="login-page__right__wapper__welcome"
          src="@/assets/images/login-welcome@2x.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("user/login", {
          action: "login",
          loginname: this.user,
          password: this.password,
        })
        .then(() => {
          this.$router.replace({ path: "/potentialDistributor" });
        })
        .catch((e) => {});
    },
  },
};
</script>
<style lang="scss">
.login-page {
  display: flex;
  width: 100%;
  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54.38%;
    min-width: 587px;
    background: #4196ff;
    &__content {
      width: 66.92%;
      height: 77.78%;
      min-width: 524px;
      min-height: 529px;
      background: #ffffff;
      img {
        display: block;
        margin: 16.57% auto 7.78%;
        width: 38.17%;
      }
      .user-input {
        display: block;
        margin: 0 auto 20px;
        width: 400px;
      }
      .password-input {
        display: block;
        margin: 0 auto;
        width: 400px;
      }
      &__submit {
        margin: 54px auto 0;
        width: 400px;
        height: 48px;
        background: #4196ff;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        line-height: 48px;
        cursor: pointer;
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45.63%;
    min-width: 493px;
    box-sizing: border-box;
    background: #ffffff;
    &__wapper {
      width: 67%;
      &__text1 {
        margin-bottom: 12px;
        font-size: 24px;
        text-align: left;
      }
      &__text2 {
        margin-bottom: 91px;
        font-size: 24px;
        text-align: left;
      }
      &__welcome {
        width: 100%;
      }
    }
  }
  .el-input--prefix .el-input__inner {
    padding-left: 28px !important;
    width: 100%;
  }
}
</style>