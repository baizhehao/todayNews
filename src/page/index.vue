<template>
    <div class="divBox" >
        <top @click1="parentclick" @clickTag="tagHid=!tagHid"></top>
        <div class="content">
            <keep-alive>
               <component v-bind:is="contents" @parentFunc="childFunc" :newsdate="newsDates"></component>
            </keep-alive>
        </div>
        <bottom/>
        <!-- 点击×的内容 -->
        <div class="zhezhao" @touchstart="hid"></div>
        <!-- 标签页 -->
        <transition name="custom-classes-transition"
            enter-active-class="animated fadeInUpBig"
            leave-active-class="animated fadeOutDownBig"
            >
            <tagArr v-show="tagHid"  @clickTag="tagHid=!tagHid"></tagArr>
        </transition>
    </div>
    
</template>
<script>

import top from "../components/top";
//中间的动态组件
import newscon from "../components/newscon";
import attention from "../components/attention";
import nover from "../components/nover";
import xianNews from "../components/xianNews";
import businessNews from "../components/businessNews";

import bottom from "../components/footer";

//隐藏的tag页面；
import tagArr from "./tagArr";

export default {
   name:"index",
   methods:{
       parentclick:function(index){
           if(index=="recommend"){
               this.contents="newscon";
               
               return
           }else if(index=="attention"){
               this.contents=attention;
               return
           }else{
               this.contents=this.$store.state.curTitArr[index].componentName;
           }
           
        },
        //不喜欢、屏蔽、遮罩的function;
        hid:function(event){ 
            $(".zhezhao").css({display:"none"});
            $(".popup").css({display:"none"})
        },
        childFunc:function(newsId){
            if(newsId==undefined){
                $(".zhezhao").css({display:"block"});
            }else{
                this.newsDates.splice(newsId,1);
                this.hid()
            }
            
        }
   },
   data:function(){
       return{
           contents:"newscon",
           tagHid:false,
           newsDates:[]
       }
   },
   components:{
       top,newscon,xianNews,businessNews,nover,bottom,tagArr
   },
   //钩子函数
   created:function() {
        fetch('http://localhost:3000/news')
            .then((res)=>{
            return res.text(); // res.text()是一个Promise对象
        })
        .then((res)=>{
            this.newsDates = JSON.parse(res);
        })
    }
    
}

</script>


<style scoped>
.divBox{
		width:100%;
		display: -webkit-flex;
		flex-direction:column;
		height:100%;
}
.content{
    -webkit-flex:1;
    overflow-y: auto;
}

.zhezhao{
    width:3.75rem;
    height: 6.67rem;
    background:black;
    opacity: 0.3;
    position: absolute;
    z-index: 3;
    display: none;
}
</style>


