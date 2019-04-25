<template>
    <header>
        <div class="header_box">
            <div class="common header_top">
                <div class="header_top_left">
                    <i class="iconfont icon-sousu"></i>
                    <input type="text">
                </div>
                <div class="header_top_right">
                    <i class="iconfont icon-zhaoxiangji"></i>
                    <span class="header_text">发布</span>
                </div>
            </div>
        </div>
        <div class="header_bottom">
            <nav class="common navClass">
                <li @touchstart="titFunc(attention)" class="">关注</li>
                <li @touchstart="titFunc(recommend)" id="titClickStyle">推荐</li>
                <li v-for="(item,index) of curList" 
                        :key="item.id"
                        @touchstart="titFunc(index)"
                        >{{item.tagName}}</li>
                <i class="iconfont icon-gengduo" @touchstart="tagShow"></i>
            </nav>
        </div>
    </header>
</template>
<script>
import $ from "jquery";

export default {
    name:"index",
    data:function(){
        return {
            curList:this.$store.state.curTitArr,
            //关注
            attention:"attention",
            //推荐；
            recommend:"recommend"
        }
    },
    methods:{
        titFunc:function(index){
            this.$emit("click1",index);
            
        },
        tagShow:function(){
            this.$emit("clickTag")
        }
    }
}
</script>
<style scoped>
.common{
    width:3.47rem;
    margin:0 auto;
}

/* header */
header{
    width:100%;
    height: .87rem;
    border-bottom:1px solid #e7e7e7;
}
.header_box{
    width:100%;
    background-color:#d53c3e;
}
.header_top{
    height: .51rem;
    display: -webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content: space-between;
}
.header_top_left{
    position: relative;
}
.icon-sousu{
    position:absolute;
    top:0.1rem;
    left: .1rem;
    font-size: .2rem;
}
.header_top_left input{
    width:3.06rem;
    height:.4rem;
    border:none;
    outline: none;
    display:block;
    border-radius: 3px;
    text-indent: 30px;
}
.icon-zhaoxiangji{
    color:white;
    font-size:.24rem;
}
.header_text{
    font-size:12px;
    display: block;
    color:white;
}
.header_bottom{
    height: .35rem;
    background-color:white;
    display: -webkit-flex;
    -webkit-align-items: center;
}
.navClass{
    display: -webkit-flex;
    overflow-x: auto;
    position: relative;
}
.navClass a:first-child{
    margin-left: 0px;
}
.navClass a:nth-child(2){
    color:#e75d5d;
    font-weight: 600;
}
.navClass li{
    list-style: none;
    font-size:.16rem;
    color:#202020;
    -webkit-flex-shrink:0;
    margin:0 .1rem;
}

.icon-gengduo{
    font-size: .2rem;
    position: fixed;
    right:0px;
    /* top:.12rem; */
    z-index:2;
    color:#282828;
    background-color:white;
    width:60px;
    text-align: center;
}
#titClickStyle{
    font-size: .18rem;
    color:#f85959;
}
</style>