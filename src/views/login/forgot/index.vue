<template>
  <div id="login-page-background">
    <div id="login-content">
      <div id="login-form-page">
        <a-spin :spinning="spinning">
          <div id="login-form-header">
            <span style="font-size: 25px;font-weight: 700;">忘记密码</span>
          </div>
          <a-form id="formRegister" ref="formRegister" :form="form">
            <a-form-item>
              <a-input v-decorator="['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }, { validator: handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]" size="large" placeholder="11 位手机号">
                <a-select slot="addonBefore" size="large" default-value="+86">
                  <a-select-option value="+86">+86</a-select-option>
                  <a-select-option value="+87">+87</a-select-option>
                </a-select>
              </a-input>
            </a-form-item>

            <a-row :gutter="16">
              <a-col class="gutter-row" :span="16">
                <a-form-item>
                  <a-input v-decorator="['smsCode', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]" size="large" type="text" placeholder="验证码">
                    <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }" />
                  </a-input>
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <a-button
                  class="getCaptcha"
                  size="large"
                  :disabled="state.smsSendBtn"
                  @click.stop.prevent="getCaptcha"
                  v-text="!state.smsSendBtn && '获取验证码'||(state.time+' s')"
                />
              </a-col>
            </a-row>
            <a-form-item>
              <a-input
                v-decorator="['userPassword', {rules: [{ required: true, message: '密码长度应为6-12位，区分大小写.'}, { validator: handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"
                size="large"
                type="password"
                autocomplete="false"
                placeholder="密码长度应为6-12位，区分大小写。"
                @click="handlePasswordInputClick"
              />
            </a-form-item>

            <a-form-item>
              <a-input
                v-decorator="['password2', {rules: [{ required: true, message: '密码长度应为6-12位，区分大小写' }, { validator: handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"
                size="large"
                type="password"
                autocomplete="false"
                placeholder="确认密码"
              />
            </a-form-item>

            <a-form-item>
              <a-button
                size="large"
                type="primary"
                html-type="submit"
                class="register-button"
                :loading="registerBtn"
                :disabled="registerBtn"
                @click.stop.prevent="handleSubmit"
              >重置密码
              </a-button>
            </a-form-item>
          </a-form>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import message from 'ant-design-vue/es/message'
import notification from 'ant-design-vue/lib/notification'
import { SmsCaptcha } from '@/apis/user/login'
export default {
  name: 'Register',
  components: {
  },
  data() {
    return {
      form: this.$form.createForm(this),
      state: {
        time: 60,
        smsSendBtn: false,
        passwordLevel: 0,
        passwordLevelChecked: true,
        percent: 10,
        progressColor: '#FF0000'
      },
      registerBtn: false,
      spinning: false
    }
  },
  computed: {

  },
  methods: {
    handlePasswordLevel(rule, value, callback) {
      let level = 0
      // 判断这个字符串中有没有数字
      if (/[0-9]/.test(value)) {
        level++
      }
      // 判断字符串中有没有字母
      if (/[a-zA-Z]/.test(value)) {
        level++
      }
      // 判断字符串中有没有特殊符号
      if (/[^0-9a-zA-Z_]/.test(value)) {
        level++
      }
      if (value.length < 6 || value.length > 12) {
        callback(new Error('密码长度应为6-12位'))
      }
      this.state.passwordLevel = level
      this.state.percent = level * 30
      if (level >= 2) {
        if (level >= 3) {
          this.state.percent = 100
        }
        callback()
      } else {
        if (level === 0) {
          this.state.percent = 10
        }
        callback(new Error('密码强度不够'))
      }
    },
    handlePasswordCheck(rule, value, callback) {
      const password = this.form.getFieldValue('userPassword')
      if (value === undefined) {
        callback(new Error('请输入密码'))
      }
      if (value && password && value.trim() !== password.trim()) {
        callback(new Error('两次密码不一致'))
      }
      callback()
    },
    handlePhoneCheck(rule, value, callback) {
      callback()
    },
    handlePasswordInputClick() {
      this.state.passwordLevelChecked = true
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.spinning = true
          this.$store.dispatch('user/register', values).then(() => {
            message.success('注册成功')
            document.getElementById('loginR').click()
          }).catch(() => {
            this.spinning = false
          })
        }
      })
    },
    getCaptcha(e) {
      e.preventDefault()
      const state = this.state
      this.form.validateFields(['mobile'], { force: true },
        (err, values) => {
          if (!err) {
            state.smsSendBtn = true
            const interval = window.setInterval(() => {
              if (state.time-- <= 0) {
                state.time = 60
                state.smsSendBtn = false
                clearInterval(interval)
              }
            }, 1000)
            const hide = message.loading('验证码发送中..', 0)
            setTimeout(hide, 2500)
            SmsCaptcha(values.mobile).then(res => {
              setTimeout(hide, 2500)
              notification['success']({
                message: '提示',
                description: '验证码发送成功，您的验证码有效期为：180秒',
                duration: 8
              })
            }).catch(err => {
              setTimeout(hide, 1)
              clearInterval(interval)
              state.time = 60
              state.smsSendBtn = false
              this.requestFailed(err)
            })
          }
        }
      )
    },
    requestFailed(err) {
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
      this.registerBtn = false
    }
  }
}
</script>

<style >
.user-register.error {
  color: #ff0000;
}
.warning {
  color: #ff7e05;
}
.success {
  color: #52c41a;
}
.user-layout-register {
  background-color: #fff;
}
</style>
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
  height: 430px;
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
.user-layout-register h3{
  font-size: 16px;
  margin-bottom: 20px;
}
.user-layout-register.getCaptcha {
  display: block;
  width: 100%;
  height: 40px;
}
.user-layout-register.register-button {
  width: 50%;
}
.user-layout-register.login {
  float: right;
  line-height: 40px;
}
.clms-index-banner-text {
  color: #000;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: .5px;
  line-height: 60px;
}
</style>
