<template>
    <div class="titPage">
        <div class="top">
            <i class="el-icon-close closeC" @touchstart="tagHid"></i>
        </div>
        <div class="content">
            <div class="content_tit">
                <h3>我的频道</h3>
                <p>{{pText}}</p>
                <div class="bianJi" @touchstart="bianJiFunc">{{titText}}</div>
            </div>
            <div class="titBox">
                <span class="titName">关注</span>
                <span class="titName">推荐</span>
                <span class="titName" 
                      v-for="(item,index) in curTitArr" 
                      :key="item.id"
                >
                    <i class="el-icon-error" 
                            v-show="pshow"
                            @touchstart="deleteTag(index)"
                            ></i>
                    {{item.tagName}}
                </span>
            </div>
            <div class="content_tit tit2">
                <h3>频道推荐</h3>
                <p>点击添加频道</p>
            </div>
            <div class="titBox">
                    <span class="titName recommendTit" 
                        v-for="(item,index) in recommendTit" 
                        :key="item.id"
                        @touchstart="pushFunc(index)"
                    >
                        <i class="el-icon-plus"></i>
                        {{item.tagName}}
                    </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:"tagArr",
   data:function(){
       return {
           curTitArr:this.$store.state.curTitArr,
           recommendTit:this.$store.state.addTit,
           pText:"点击进入频道",
           titText:"编辑",
           pshow:false
       }
   },
   methods:{
       bianJiFunc:function(){
           this.pshow=!this.pshow;
           if(this.titText=="编辑"){
               this.titText="完成"
               this.pText="拖拽可以排序"
           }else{
               this.titText="编辑"
               this.pText="点击进入频道"
           }
       },
       pushFunc:function(index){
            this.$store.state.curTitArr.push(this.$store.state.addTit[index]);
            this.$store.state.addTit.splice(index,1);
       },
       deleteTag:function(index){
            this.$store.state.addTit.push(this.$store.state.curTitArr[index]);
            this.$store.state.curTitArr.splice(index,1);
       },
       tagHid:function(){
           this.$emit("clickTag")
       }
   }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.titPage{
    display: flex;
    flex-direction: column;
    height: 100%;
    position:absolute;
    background:#ffffff;
    z-index:3;
}
/* top */
.top{
    width:100%;
    height:.435rem;
    border-radius: .04rem;
    border-bottom: 1px solid #ffffff;
}
.closeC{
    font-size:14px;
    color:222222;
    display: block;
    line-height: .435rem;
    margin-left: .15rem;
}
/* content 中间 */
.content{
    flex:1;
    overflow-y:auto 
}
.content_tit{
    display: flex;
}
.content_tit h3{
    font-size: .18rem;
    line-height: .18rem;
    color:#222222;
    padding:.1rem .12rem;
}
.content_tit p{
    font-size:12px;
    line-height: 12px;
    color:#999999;
    padding-top:.16rem;
    padding-bottom: .13rem;
}
.bianJi{
    width:.51rem;
    height:.23rem;
    border:1px solid #f85a5a;
    font-size: 13px;
    color:#f85a5a;
    text-align: center;
    line-height: .23rem;
    border-radius: .1rem;
    margin-left: 1.42rem;
    margin-top:.04rem;
}
.titBox{
    display: flex;
    flex-wrap: wrap;
}
.titName{
    font-size: .15rem;
    width:.8rem;
    height:.44rem;
    background:#f4f5f6;
    color:#222222;
    line-height: .44rem;
    text-align: center;
    border-radius: .04rem;
    margin-top:.11rem;
    margin-left:.11rem;
    position: relative;
}
.el-icon-error{
    display: block;
    font-size: .18rem;
    color:#cacaca;
    position: absolute;
    top:-.04rem;
    right: -.04rem;
}
.titBox span:first-child{
    color:#999999;
}
.titBox span:nth-child(2){
    color:#f85959;
}
.tit2{
    margin-top:.21rem;
}
.el-icon-plus{
    display: block;
    color:#222222;
    font-size: 10px;
    line-height: .44rem;
    font-weight: 600;
    margin-right: .04rem;
}
.recommendTit{
    display: flex;
    justify-content: center;
}
.titBox .recommendTit:first-child{
    color:#222222;
}
.titBox .recommendTit:nth-child(2){
    color:#222222;
}
</style>
