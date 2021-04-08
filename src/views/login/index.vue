<template>
  <div id="login-page-background">
    <div id="login-content">
      <div id="login-form-page">
        <a-spin :spinning="spinning">
          <div id="login-form-header">
            <span style="font-size: 25px;font-weight: 700;">登录</span>
          </div>
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <a-input
                v-decorator="[
                  'username',
                  { rules: [{ required: true, message: '请输入用户名/手机号!' }] },
                ]"
                size="large"
                placeholder="用户名/手机号"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: '请输入密码!' }] },
                ]"
                size="large"
                type="password"
                placeholder="密码"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true
                  },
                ]"
              >
                记住我
              </a-checkbox>
              <a class="login-form-forgot" href="/sys/forget">
                忘记密码？
              </a>
              <a-button type="primary" html-type="submit" class="login-form-button">
                登录
              </a-button>
            </a-form-item>
          </a-form>
          <a-divider>快速登录</a-divider>
          <div style="margin:0 35%;float: left;">
            <a-tooltip placement="bottom">
              <template slot="title">
                <span>GitHub</span>
              </template>
              <a-icon style="font-size: 35px;color: black;margin-left: 30px;" theme="filled" type="github" @click="gotoGithub" />
            </a-tooltip>
          </div>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import { githubLogin, githubLoginTest } from '../../apis/user/login'
export default {
  components: {
  },
  data() {
    return {
      spinning: false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.spinning = true
          this.$store.dispatch('user/login', values).then(() => {
            this.$router.go(-1)
          }).catch(() => {
            this.spinning = false
          })
        }
      })
    },
    gotoGithub() {
      githubLogin().then(res => {
        this.spinning = true
        githubLoginTest(res.msg)
      })
    }
  }
}
</script>
<style scoped>
  #login-page-background {
    background: url(https://s1.ax1x.com/2020/09/20/w73DOK.jpg) no-repeat 100%;
    overflow:hidden;
    position: absolute;
    z-index:999;
    width: 100%;
    height: 100%;
    background-size: cover;
    -webkit-animation: fade-in-bottom 1s .3s backwards;
    animation: fade-in-bottom 1s .3s backwards;
    background-attachment: inherit;
  }
  #login-content{
    width: 400px;
    height: 400px;
    background-color: #ffffff;
    margin: 15% auto 0;
    border-radius: 5px;
    opacity:0.8;
  }
  #login-form-page{
    margin: 20px 10%;
  }
  #login-form-header{
    padding-top: 20px ;
    padding-bottom: 20px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>
