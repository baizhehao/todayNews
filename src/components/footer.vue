<template>
    <footer>
        <router-link to="/">
            <div class="footer-ico" id="indexId">
                <i class="iconfont iconCommon icon-yemian-copy"></i>
                <span class="header-text footer-text onclickEvent">首页</span>
            </div>
        </router-link>
        <div class="footer-ico">
            <i class="iconfont iconCommon icon-shipin"></i>
            <span class="header-text footer-text">西瓜视频</span>
        </div>
        <div class="footer-ico">
            <i class="iconfont iconCommon icon-shipin-bofang"></i>
            <span class="header-text footer-text">小视频</span>
        </div>
        <router-link to="/my">
            <div class="footer-ico">
                <i class="iconfont iconCommon icon-wode"></i>
                <span class="header-text footer-text" id="usme">我的</span>
            </div>
        </router-link>
    </footer>
</template>

<script>

export default {
    name:"index"

}
</script>
 
<style scoped>
/* footer */
footer{
    height: .44rem;
    background-color:#fcfcfc;
    border-top:1px solid #b2b2b2;
    padding:0px .37rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
}
.footer-ico{
    display: -webkit-flex;
    flex-direction: column;
    -webkit-justify-content: center;
    text-align: center;
}
.iconCommon{
    font-size: .2rem;
}
.icon-yemian-copy{
    color:#f85959;
}
.footer-text{
    color:#505050;
    font-size: .1rem;
}
.onclickEvent{
    color:#f85959;
}
</style>
