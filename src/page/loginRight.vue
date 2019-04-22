<template>
    <div class="login-content">
        <i class="iconfont icon-guanbi"></i>
        <keep-alive>
            <component :is="comName"></component>
        </keep-alive>
        <footer style="margin-top:1.99rem">
            <div class="footer-bottom">
                <a href="#" class="line">账号注册</a>
                <a href="#" class="line">密码登录</a>
                <a href="#">隐私设置</a>
            </div>
        </footer>
    </div>
</template>

<script>

import login from "../components/login";
import right from "../components/right";

export default {
    data:function(){
        return {
            comName:"login"
        }
    },
    components:{
        login,right
    }
}
</script>

<style scoped>
.iconfont{
    display: block;
}
/* login-content */
.login-content{  
    height: 6.47rem;
    margin-top:.2rem;
    background-color:#fafafa;
    border-top-left-radius: .045rem;
    border-top-right-radius: .045rem;
    position: relative;
    padding:0px .3rem;
    text-align: center;
}
.icon-guanbi{
    font-size: 20px;
    color:#505050;
    position: absolute;
    right: 0px;
    margin-top:.15rem;
    margin-right: .15rem;
}
.footer-bottom{
    display:-webkit-flex;
    justify-content: space-between;
    margin-top:.33rem;
}
.footer-bottom a{
    font-size: 14px;
    color:#406599;
    line-height: 14px;
    position: relative;
}
</style>
