<template>
    <div class="divBox">
        <top @click1="parentclick"></top>
        <div class="content">
            <keep-alive>
               <component v-bind:is="contents"></component>
            </keep-alive>
        </div>
       
        <bottom/>
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
           console.log(index)
           console.log(this.$store.state.comTitName)
            this.contents=this.$store.state.comTitName[index]
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
</style>


