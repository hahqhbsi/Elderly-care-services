<template>
    <div>
        <div class="container loginIn" >

            <div :class="2 == 1 ? 'left' : 2 == 2 ? 'left center' : 'left right'" style="backgroundColor: rgba(255, 255, 255, 0.71)">
                <el-form class="login-form" label-position="left" :label-width="1 == 3 ? '56px' : '0px'">
                    <div>21计科1班段优越</div>
                    <div class="title-container"><h3 class="title" style="color: rgba(84, 88, 179, 1)">养老服务系统管理员端</h3></div>
                    <el-form-item :label="1 == 3 ? '用户名' : ''" :class="'style'+1">
                        <span v-if="1 != 3" class="svg-container" style="color:rgba(89, 97, 102, 1);line-height:44px"><svg-icon icon-class="user" /></span>
                        <el-input id="username" placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username" />
                    </el-form-item>
                    <el-form-item :label="1 == 3 ? '密码' : ''" :class="'style'+1">
                        <span v-if="1 != 3" class="svg-container" style="color:rgba(89, 97, 102, 1);line-height:44px"><svg-icon icon-class="password" /></span>
                        <el-input id="password" placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password" />
                    </el-form-item>
                  
                    <el-button id="loginInBt" type="primary" @click="login()" class="loginInBt" style="padding:0;font-size:16px;border-radius:4px;height:44px;line-height:44px;width:100%;backgroundColor:rgba(84, 88, 179, 1); borderColor:rgba(84, 88, 179, 1); color:rgba(255, 255, 255, 1)">{{'1' == '1' ? '登录' : 'login'}}</el-button>
                    <el-form-item class="setting">
            <!-- <div class="register" @click="register('yonghu')">用户注册</div> -->
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>
<script>
    import menu from "@/utils/menu";
    export default {
        data() {
            return {
                rulesForm: {
                    username: "",
                    password: "",
                    role: "管理员",
                    code: '',
                },
                menus: [],
                tableName: "",
                codes: [{
                    num: 1,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                },{
                    num: 2,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                },{
                    num: 3,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                },{
                    num: 4,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                }],
            };
        },
        mounted() {
            let menus = menu.list();
            this.menus = menus;
        },
        created() {
            this.setInputColor()
            this.getRandCode()
        },
        methods: {
            setInputColor(){
                this.$nextTick(()=>{
                    document.querySelectorAll('.loginIn .el-input__inner').forEach(el=>{
                        el.style.backgroundColor = "rgba(255, 255, 255, 1)"
                        el.style.color = "rgba(0, 0, 0, 1)"
                        el.style.height = "44px"
                        el.style.lineHeight = "44px"
                        el.style.borderRadius = "2px"
                    })
                    document.querySelectorAll('.loginIn .style3 .el-form-item__label').forEach(el=>{
                        el.style.height = "44px"
                        el.style.lineHeight = "44px"
                    })
                    document.querySelectorAll('.loginIn .el-form-item__label').forEach(el=>{
                        el.style.color = "rgba(89, 97, 102, 1)"
                    })
                    setTimeout(()=>{
                        document.querySelectorAll('.loginIn .role .el-radio__label').forEach(el=>{
                            el.style.color = "rgba(84, 88, 179, 1)"
                        })
                    },350)
                })

            },
            register(tableName){
                this.$storage.set("loginTable", tableName);
                this.$router.push({path:'/register'})
            },
            // 登陆
            login() {
                let code = ''
                for(let i in this.codes) {
                    code += this.codes[i].num
                }
           
                if (!this.rulesForm.username) {
                    this.$message.error("请输入用户名");
                    return;
                }
                if (!this.rulesForm.password) {
                    this.$message.error("请输入密码");
                    return;
                }
                
                let menus = this.menus;
                for (let i = 0; i < menus.length; i++) {
                    if (menus[i].roleName == this.rulesForm.role) {
                        this.tableName = menus[i].tableName;
                    }
                }
                this.$http({
                    url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
                    method: "post"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.$storage.set("Token", data.token);
                        this.$storage.set("userId", data.userId);
                        this.$storage.set("role", this.rulesForm.role);
                        this.$storage.set("sessionTable", this.tableName);
                        this.$storage.set("adminName", this.rulesForm.username);
                        this.$router.replace({ path: "/index/" });
                        console.log(data);
                        
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
          
        }
    };
</script>
<style lang="scss" scoped>
    .loginIn {
        min-height: 100vh;
        position: relative;
        background-repeat: no-repeat;
        background-position: center center;

        background-image: url("./bg.webp");
  background-size: cover;
  background-position: center;

    .left {
        position: absolute;
        left: 0;
        top: 0;
        width: 360px;
        height: 100%;

    .login-form {
        background-color: transparent;
        width: 100%;
        right: inherit;
        padding: 0 12px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .title-container {
        text-align: center;
        font-size: 24px;

    .title {
        margin: 20px 0;
    }
    }

    .el-form-item {
        position: relative;

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
        vertical-align: middle;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        padding: 0;
        line-height: 40px;
        width: 30px;
        text-align: center;
    }

    .el-input {
        display: inline-block;
        height: 40px;
        width: 100%;

    & /deep/ input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          padding: 0 15px 0 30px;
          color: #fff;
          height: 40px;
      }
    }

    }


    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 360px;
        transform: translate3d(-50%,-50%,0);
        height: 446px;
        border-radius: 8px;
    }

    .right {
        position: absolute;
        left: inherit;
        right: 0;
        top: 0;
        width: 360px;
        height: 100%;
    }

    .code {
    .el-form-item__content {
        position: relative;

    .getCodeBt {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 40px;
        width: 100px;
        background-color: rgba(51,51,51,0.4);
        color: #fff;
        text-align: center;
        border-radius: 0 4px 4px 0;
        height: 40px;
        overflow: hidden;

    span {
        padding: 0 5px;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
    }
    }

    .el-input {
    & /deep/ input {
          padding: 0 130px 0 30px;
      }
    }
    }
    }

    .setting {
    & /deep/ .el-form-item__content {
          padding: 0 15px;
          box-sizing: border-box;
          line-height: 32px;
          height: 32px;
          font-size: 14px;
          color: #999;
          margin: 0 !important;

    .register {
        float: left;
        width: 50%;
    }

    .reset {
        float: right;
        width: 50%;
        text-align: right;
    }
    }
    }

    .style2 {
        padding-left: 30px;

    .svg-container {
        left: -30px !important;
    }

    .el-input {
    & /deep/ input {
          padding: 0 15px !important;
      }
    }
    }

    .code.style2, .code.style3 {
    .el-input {
    & /deep/ input {
          padding: 0 115px 0 15px;
      }
    }
    }

    .style3 {
    & /deep/ .el-form-item__label {
          padding-right: 6px;
      }

    .el-input {
    & /deep/ input {
          padding: 0 15px !important;
      }
    }
    }

    .role {
    & /deep/ .el-form-item__label {
          width: 56px !important;
      }

    & /deep/ .el-radio {
          margin-right: 12px;
      }
    }

    }
</style>
