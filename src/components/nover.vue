<template>
<div>
    <div class="swiper-container swiper1" id="">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><a class="pic1" href=""></a></div>
            <div class="swiper-slide"><a class="pic2" href=""></a></div>
            <div class="swiper-slide"><a class="pic3" href=""></a></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
        <!-- 分类、排行、会员 -->
    <div class="header_tit">
        <div class="header_tit_top">
            <div class="common_tit">
                <i class="iconfont common_ico icon-xiugaifenlei"></i>
                <span class="tit_text">分类</span>
            </div>
            <div class="common_tit">
                <i class="iconfont common_ico icon-paihangbangdan_icon"></i>
                <span class="tit_text">排行</span>
            </div>
            <div class="common_tit">
                <i class="iconfont common_ico icon-huiyuanzhongxin"></i>
                <span class="tit_text">会员</span>
            </div>
            <div class="common_tit">
                <i class="iconfont common_ico icon-chazhao"></i>
                <span class="tit_text">找书</span>
            </div>
            <div class="common_tit">
                <i class="iconfont common_ico icon-mianfeizhuanqu"></i>
                <span class="tit_text">免费</span>
            </div>
        </div>
        <div class="header_tit_bottom">
            <div class="bottom_sign">
                <span class="sign_text">每日签到</span>
            </div>
            <div class="bottom_sign">
                <span class="sign_text ico_bookrack">我的书架</span>
            </div>
        </div>
    </div>
    <!-- recommend novella 推荐小说 -->
    <div class="recommend_novella">
        <h3 class="recommend_novella_tit">推荐小说</h3>
        <div class="novella_box" v-for="itme in nover" :key=itme.id>
            <img :src="itme.book_cover" alt="">
            <div class="novella_synopsis">
                <h4>{{itme.bookname}}</h4>
                <p>{{itme.introduction.substring(0,33)+"..."}}</p>
                <div class="information">
                    <span class="author">{{itme.author_name}}</span><span class="novella_type">{{itme.class_name}}</span><span>2.3万人已读</span>
                </div>
            </div>
        </div>
        <div class="novella_box">
            <img src="../assets/img/xiaoshuoPic1.png" alt="">
            <div class="novella_synopsis">
                <h4>活人禁地</h4>
                <p>古老的村子全都是女人,他们竟然遵守一个特殊的风俗,和所有愿意与她...</p>
                <div class="information">
                    <span class="author">感叹号</span><span class="novella_type">悬疑灵异</span><span>2.3万人已读</span>
                </div>
            </div>
        </div>
        <div class="novella_box">
            <img src="../assets/img/xiaoshuoPic1.png" alt="">
            <div class="novella_synopsis">
                <h4>活人禁地</h4>
                <p>古老的村子全都是女人,他们竟然遵守一个特殊的风俗,和所有愿意与她...</p>
                <div class="information">
                    <span class="author">感叹号</span><span class="novella_type">悬疑灵异</span><span>2.3万人已读</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swiper from "swiper";
import "../assets/css/swiper.min.css";
export default {
    name:"index",
     data(){
        return{
            nover:[]
        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
                autoplay : true,
                loop:true,//循环播放
                loopAdditionalSlides:0,
                
                // 如果需要分页器
                pagination: '.swiper-pagination',
                paginationClickable :true,
                paginationElement : 'li',
            //    paginationType : 'custom',

                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
        })      
    },
    created:function() {
        fetch('http://localhost:3000/nover')
            .then((res)=>{
            return res.text(); // res.text()是一个Promise对象
            })
            .then((res)=>{
                this.nover = JSON.parse(res);
        })
    }
}
</script>

<style scoped>
/* banner */
.swiper1{
    width:100%;
    height: 1.53rem;
}
.swiper-wrapper{
    width:100%;
    height: 1.53rem;
}
.swiper-slide a{
    width:100%;
    height: 1.53rem;
    background-size: 100% 1.53rem;
}
.pic1{
    background:url(../assets/img/banner.png); 
}
.pic2{
    background:url(../assets/img/banner2.png); 
}
.pic3{
    background:url(../assets/img/banner3.png); 
}
/* 书签 */
.header_tit{
    background-color:white;
    padding:.08rem .2rem .15rem .2rem;
}
.header_tit_top{
    display:-webkit-flex;
    justify-content: space-between;
    margin-bottom:.19rem;
}
.common_tit{
    display:-webkit-flex;
   flex-direction: column;
    text-align: center;
}
.common_ico{
    width:.36rem;
    height: .36rem;
    font-size: .36rem;
    color:#79d35f;
    line-height: .36rem;
    border-radius: 50%;
}
.tit_text{
    font-size:14px;
    color:#222222;
    line-height: 14px;
    margin-top:.1rem;
}
.icon-paihangbangdan_icon{
    color:#fe6568;
}
.icon-huiyuanzhongxin{
    color:#ffc83c;
}
.icon-chazhao{
    color:#2dbb6a;
}
.icon-mianfeizhuanqu{
    color:#ffc83c;
}
.header_tit_bottom{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
}
.bottom_sign{
    width:1.62rem;
    height:.44rem;
    background:#f8f8f8;
    border-radius: .03rem;
    text-align: center;
    line-height:.44rem ;
}
.sign_text{
    display: block;
    font-size: 14px;
    color:#222222;
}
.sign_text::before{
    font-family: "iconfont" !important;
    font-size: .2rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e618";
    margin-right: .17rem;
    color:#ffb15b;
    vertical-align: middle;
}
.ico_bookrack::before{
    content:"\e61c";
    color:#fb7b53;
}
/* recommend novella 推荐小说  */
.recommend_novella{
    padding:.19rem .15rem 0;
    background: white;
    margin-top:.06rem;
}
.recommend_novella_tit{
    font-size: .15rem;
    color:#222222;
}
.novella_synopsis{
    margin-left: .12rem;
    width:2.45rem;
}
.novella_box{
    padding:.16rem 0;
    border-bottom:1px solid #e8e8e8;
    display: -webkit-flex;
}
.novella_box img{
    border:1px solid #e8e8e8;
    width:.86rem;
    height: 1.15rem;
}
.novella_synopsis h4{
    font-size: .18rem;
    color:#252525;
    line-height: .18rem;
    margin:.03rem 0 .17rem;
}
.novella_synopsis p{
    font-size: 14px;
    color:#6c6c6c;
    line-height: .18rem;
    margin-bottom:.32rem;
}
.information{
    display: -webkit-flex;
}
.information span{
    display: block;
    font-size: 14px;
    color:#999999;
    line-height:14px;
}
.novella_type{
    margin:0 .1rem;
}
</style>


