<template>
    <div class="bagBox">
        <header>
            <div class="header-top">
                <!-- <img src="../assets/img/userpic.png" alt="" class="username-pic"> -->
                <div class="username">
                    <h3>查无此人</h3>
                    <div class="apply-attestation">申请认证</div>
                </div>
                <span class="more"></span>
            </div>
            <div class="header-bottom">
                <div class="header-bottom-content">
                    <h4>24</h4>
                    <p>头条</p>
                </div>
                <div class="header-bottom-content">
                    <h4>24</h4>
                    <p>关注</p>
                </div>
                <div class="header-bottom-content">
                    <h4>24</h4>
                    <p>粉丝</p>
                </div>
                <div class="header-bottom-content">
                    <h4>24</h4>
                    <p>获赞</p>
                </div>
            </div>
        </header>
        <!-- content -->
        <div class="content">
            <div class="content-tit">
                <div class="content-tit-text">
                    <div class="ico ico1"></div>
                    <p class="titP">我的收藏</p>
                </div>
                <div class="content-tit-text">
                    <div class="ico ico2"></div>
                    <p class="titP">我的评论</p>
                </div>
                <div class="content-tit-text">
                    <div class="ico ico3"></div>
                    <p class="titP">我的点赞</p>
                </div>
                <div class="content-tit-text">
                    <div class="ico ico4"></div>
                    <p class="titP">游览历史</p>
                </div>
            </div>
            <div class="content-list">
                <div class="content-list-wallet">
                    <h3>我的钱包</h3>
                    <p>全面抽奖抽小米新品</p>
                </div>
                <div class="content-list-wallet content-list-last">
                    <h3>消息通知</h3>
                    <p></p>
                </div>
            </div>
            <div class="content-list">
                <div class="content-list-wallet">
                    <h3>我的书架</h3>
                    <p></p>
                </div>
                <div class="content-list-wallet">
                    <h3>扫一扫</h3>
                    <p></p>
                </div>
                <div class="content-list-wallet">
                    <h3>免流量服务</h3>
                    <p></p>
                </div>
                <div class="content-list-wallet content-list-last">
                    <h3>阅读公益</h3>
                    <p>今日阅读94分钟</p>
                </div>  
            </div>
            <div class="content-list">
                <div class="content-list-wallet">
                    <h3>用户反馈</h3>
                    <p></p>
                </div>
                <div class="content-list-wallet content-list-last">
                    <h3>系统设置</h3>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"index"
}
</script>
<style scoped>
.bagBox{
    flex:1;
    overflow-y:auto;
    background-color: #f4f5f6;
    flex:1;
}
header{
    padding:.21rem .14rem;
    background-color:#ffffff;
    height: 1.2rem;
}
.header-top{
    display:-webkit-flex;
    position: relative;
    margin-bottom: .18rem;
}
.username-pic{
    width: .66rem;
    height: .66rem;
    border-radius: 50%;
}
.username{
    display:-webkit-flex;
    flex-direction: column;
    -webkit-justify-content: space-around;
    margin-left: .12rem;
}
.username h3{
    font-size: .15rem;
    color:#222222;
}
.apply-attestation{
    width:.6rem;
    height: .18rem;
    line-height: .18rem;
    border-radius: .07rem;
    background: #f85959;
    font-size: 10px;
    color:#fee8e8;
    text-align: center;
}
.more{
    display: block;
    height: 12px;
}
.more::before{
    font-family: "iconfont" !important;
    font-size: 12px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content: "\e62d";
    height: 12px;
    display: block;
    position: absolute;
    right: 0px;
    top:0.26rem;
    color:#222222;
    font-weight: 600;

}
.header-bottom{
    display:-webkit-flex;
    text-align: center;
}
.header-bottom-content{
    -webkit-flex:1;
}
.header-bottom-content h4{
    font-size: .15rem;
    color:#222222;
    line-height: .15rem;
    margin-bottom: .09rem;
}
.header-bottom-content p{
    font-size: 12px;
    color:#232323;
    line-height: 12px;
}
/* content */
.content-tit{
    height: .79rem;
    background-color:white;
    margin-top:.06rem;
    display: -webkit-flex;
}
.content-tit-text{
    width:25%;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-justify-content: space-around;
    text-align: center;
}
.ico::before{
    font-family: "iconfont" !important;
    font-size: .2rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    height: 0px;
    display: block;
}
.ico1::before{
    content: "\e60c";
    color:#ffb15b;
}
.ico2::before{
    content: "\e603";
    color:#4ba5f0;
}
.ico3::before{
    content: "\e600";
    color:#fb7b53;
}
.ico4::before{
    content: "\e60d";
    color:#24a88f;
}
.titP{
    font-size: 13px;
    color:#222222;
}
.content-list{
    padding-left: .15rem;
    background: white;
    margin-top:.06rem;
}
.content-list-wallet{
    height: .46rem;
    border-bottom: 1px solid #e8e8e8;
    display: -webkit-flex;
    -webkit-justify-content:space-between;
    -webkit-align-items: center;
    position: relative;
}
.content-list-wallet h3{
    font-size: .15rem;
    line-height: .15rem;
    font-weight: 100;
}
.content-list-wallet p{
    font-size: 13px;
    line-height: 13px;
    color:#999999;
    margin-right: .41rem;
}
.content-list-wallet p::after{
    font-family: "iconfont" !important;
    font-size: .2rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e62d";
    display: block;
    color:#e0e0e0;
    position: absolute;
    right: .1rem;
    top:.17rem;
}
.content-list-last{
    border:none;
}
</style>

