<template>
    <div class="content1" id="wrapper">
         <!-- 点击×的内容 -->
        <div class="popup" ref="hidden">
            <div class="popup_content" id="delete" @touchstart="deleNewsFunc">
                <div class="popup_text">
                    <h3>不感兴趣</h3>
                    <p>减少这类内容</p>
                </div>
            </div>
            <div class="popup_content">
                <div class="popup_text rubbish youyi">
                    <h3>反馈垃圾内容</h3>
                    <p>低俗、标题党等</p>
                </div>
            </div>
            <div class="popup_content">
                <div class="popup_text">
                    <h3>不感兴趣</h3>
                    <p>减少这类内容</p>
                </div>
            </div>
            <div class="popup_content">
                <div class="popup_text shield youyi">
                    <h3>屏蔽</h3>
                    <p>搞笑视频、张卫健</p>
                </div>
            </div>
        </div>

        <a class="common news-content" href="#">
            <h3 class="news-content-tit">缅怀先烈——习近平这样说</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华社</p>
                <p class="comment"><span class="commentNum">1489</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content" href="#">
            <h3 class="news-content-tit">让信仰之光照亮复兴之路</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华网客户端</p>
                <p class="comment"><span class="commentNum">1035</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content" href="#">
            <h3 class="news-content-tit">让信仰之光照亮复兴之路</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华网客户端</p>
                <p class="comment"><span class="commentNum">1035</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content" href="#">
            <h3 class="news-content-tit">让信仰之光照亮复兴之路</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华网客户端</p>
                <p class="comment"><span class="commentNum">1035</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content" href="#">
            <h3 class="news-content-tit">让信仰之光照亮复兴之路</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华网客户端</p>
                <p class="comment"><span class="commentNum">1035</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content" href="#">
            <h3 class="news-content-tit">让信仰之光照亮复兴之路</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华网客户端</p>
                <p class="comment"><span class="commentNum">1035</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content" href="#">
            <h3 class="news-content-tit">让信仰之光照亮复兴之路</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华网客户端</p>
                <p class="comment"><span class="commentNum">1035</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content" href="#">
            <h3 class="news-content-tit">让信仰之光照亮复兴之路</h3>
            <div class="commonStyle">
                <span class="special">置顶</span>
                <p class="provenance">新华网客户端</p>
                <p class="comment"><span class="commentNum">1035</span>评论</p>
                <p class="time">刚刚</p>
            </div>
        </a>
        <a class="common news-content news-content-picture" 
                v-for="(item,index) in newsdate" 
                :key="item.id" 
                :link="item.link">
            <div class="pictrue-layout">
                <h3 class="news-content-tit">{{item.title}}</h3>
                <div class="commonStyle">
                    <p class="provenance">新华网客户端</p>
                    <p class="comment"><span class="commentNum">1035</span>评论</p>
                    <p class="time">刚刚</p>
                    <span class="close" @touchstart="showHid($event,index)"></span>
                </div>
            </div>
            <img class="news-picture-img" v-if="item.picInfo[0]" 
                                          :src="item.picInfo[0].url" 
                                          alt=""/>
        </a>
    </div>
</template>

<script>

import IScroll from 'iscroll';

import $ from "jquery";
import { setTimeout } from 'timers';

export default {
    name:"index",
    data:function(){
        return {
          isDelete:null
        }
    },
    props:['newsdate'],
    methods:{
        //点击×的效果
        showHid:function(e,id){
            this.$emit("parentFunc");
            let mouseY = parseInt(e.targetTouches[0].clientY);
            if(mouseY-87<280){
                $(".popup").css({"top":mouseY})
            }else{
                $(".popup").css({"top":`${mouseY-280}px`})
            }
            $(".popup").css({display:"block"});
            this.currNewsId=id
        },
        deleNewsFunc:function(e){
           let content = e.target.innerHTML
            console.log(content)
            if(content=="减少这类内容"||content=="不感兴趣"){
                console.log()
                this.$emit("parentFunc",this.currNewsId)
            }
        }
    
        
    }
    
    
}
</script>

<style scoped>

.common{
    width:3.47rem;
    margin:0 auto;
}
/* content */
.news-content{
    border-bottom: 1px solid #e7e7e7;
    display:block;
    padding-top:.16rem;
    padding-bottom:.15rem;
}
.news-content-tit{
    font-size:.18rem;
    line-height: .21rem;
    color: #222;
    margin-bottom:.09rem;
    letter-spacing: 1px;
    font-weight: 100;
}
    /* commonStyle  可以复用的样式*/
.commonStyle{
    display: -webkit-flex;
    -webkit-align-items:center;
    line-height: .16rem;
    font-size: 12px;
    color:#8c8c8c;
    position: relative;
}
.special{
    display: block;
    line-height: .13rem;
    height: .13rem;
    padding:0 .05rem;
    color:#e95e71;
    border:1px solid #e95e71;
    border-radius: 3px;
}
 .provenance{ /*出处 */
    margin-left: .05rem;
    margin-right: .09rem;
}
.comment{
    margin-right:.08rem;
}
.close{
    display: block;
    width:.16rem;
    height: .11rem;
    border:1px solid #c9c9c9;
    border-radius: 4px;
    text-align: center;
    line-height: .11rem;
    position: absolute;
    right:0px;
}
.close::before{
    font-family: "iconfont" !important;
    font-size: 12x;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e642";
}
.news-picture{
    display: -webkit-flex;
    padding-bottom:.09rem;
}
.news-picture-img{
    width:1.12rem;
    height: .73rem;
    border:1px solid #e8e8e8;
}
.news-content-picture{
    display: -webkit-flex;
    -webkit-justify-content:space-between;
}
.pictrue-layout{
    width:61%;
}
/* popup 弹窗 */
.popup{
    width:3.15rem;
    height:2.8rem;
    border-radius:.04rem;
    background-color:white;
    margin:0 auto;
    padding:0 .15rem;
    position:absolute;
    left: .15rem;
    z-index: 4;
    display:none;
}
.popup_text{
    border-bottom:1px solid #e8e8e8;
    display:-webkit-flex;
    flex-direction: column;
}
.popup_text h3::before{
    display: block;
    font-family: "iconfont" !important;
    font-size: .18rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e60a";
    color:#505050;
    position: absolute;
    left:-0.3rem;
    top:0.26rem;
}
.popup_text h3{
    font-size:.15rem;
    color:#222222;
    line-height: .15rem;
    padding-top:.16rem;
    padding-bottom: .06rem;
    margin-left: .28rem;
    position: relative;
}
.popup_text p{
    font-size:.14px;
    color:#999999;
    line-height: 14px;
    margin-bottom: .2rem;
    margin-left: .28rem;
}
.rubbish h3::before{
    content: "\e63a"
}
.youyi h3::after{
    display: block;
    font-family: "iconfont" !important;
    font-size: .18rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\e62d";
    color:#222222;
    position: absolute;
    right:.04rem;
    top:0.31rem;
}
.shield h3::before{
    content: "\e608"
}
.shield{
    border:none;
}
.shield p{
    margin-bottom: 0px;
}
</style>

