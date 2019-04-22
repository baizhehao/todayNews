<template>
    <div>
        <h2 class="login-tit">登录你的头条, 精彩永远不丢失</h2>
        <form action="">
            <div class="phone-style">
                <span class="state">+86</span>
                <input type="text" placeholder="手机号" class="phone-number">
            </div>
            <div class="phone-style">
                <input type="text" placeholder="验证码" class="phone-number phone-code">
                <span class="code">发送验证码</span>
            </div>   
            <input type="submit" value="进入头条" class="phone-style submit"> 
            <p class="protocol">点击查看<a href="">"用户协议"</a>和<a href="">"隐私政策"</a></p>
        </form>
        <footer>
            <div class="footer-top">
                <i class="iconfont icon-weixin"></i>
                <i class="iconfont icon-weixin"></i>
                <i class="iconfont icon-weixin"></i>
                <i class="iconfont icon-weixin"></i>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.login-tit{
    font-size:.18rem;
    color:#2a2a2a;
    line-height: .18rem;
    font-weight: 100;
    padding:.62rem 0 .45rem;
    
}
.phone-style{
    width:100%;
    height: .44rem;
    border:1px solid #9b9b9b;
    border-radius:.2rem;
    display:-webkit-flex;
    margin-bottom: .25rem;
    background-color:white;
}
.state{
    display: block;
    font-size: 14px;
    color:#252525;
    line-height: .44rem;
    margin-left: .2rem;
}
.state::after{
    font-family: "iconfont" !important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e696";
    margin-left: .01rem;
    margin-right: .15rem;
}
.phone-number{
    display: block;
    border:none;
    outline: none;
}
.code{
    display: block;
    font-size: .14rem;
    color:#222222;
    line-height: .44rem;
}
.phone-code{
    margin-left: .2rem;
    
}
.code::before{
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e60f";
    margin-left: .2rem;
    margin-right: .05rem;
}
.submit{
    background-color:#faa9a9;
    color:white;
    text-align: center;
    border: none;
    font-size: .15rem;
    text-indent: 1.2rem;
    margin-bottom:.16rem;
}
.protocol{
    font-size: 14px;
    color:#222222;
    display: -webkit-flex;
    -webkit-justify-content: center;
    line-height: 14px;
}
.protocol a{
    color:#406599;
}
/* footer */
footer{
    padding:.3rem .4rem;
    margin-top:1.55rem;
}
.footer-top{
    display:-webkit-flex;
    -webkit-justify-content: space-between;
}
.icon-weixin{
    width: .44rem;
    height: .44rem;
    font-size: .25rem;
    line-height: .44rem;
    text-align:center;
    border-radius: 50%;
    background-color:white;
    color:#35c020;
}

.line::after{
    font-family: "iconfont" !important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e60f";
    color:#dddddd;
    position: absolute;
    right:-.24rem ;
}
</style>
