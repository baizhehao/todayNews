<template>
    <div class="divBox" >

        <top @click1="parentclick"></top>
        <div class="content">
            <keep-alive>
               <component v-bind:is="contents" @parentFunc="childFunc"></component>
            </keep-alive>
        </div>
        <bottom/>
        <!-- 点击×的内容 -->
        <div class="zhezhao" @touchstart="hid"></div>
        
    </div>
    
</template>
<script>

import top from "../components/top";
import newscon from "../components/newscon";
import nover from "../components/nover";
import bottom from "../components/footer";
 

export default {
   name:"index",
   methods:{
       parentclick:function(index){
            this.contents=this.$store.state.comTitName[index]
        },
        hid:function(event){ 
            $(".zhezhao").css({display:"none"});
            $(".popup").css({display:"none"})
        },
        childFunc:function(){
            $(".zhezhao").css({display:"block"});
        }
   },
   data:function(){
       return{
           contents:"newscon"
       }
   },
   components:{
       top,newscon,nover,bottom
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


