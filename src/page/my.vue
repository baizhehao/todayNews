<template>
    <div class="my_div_box">
        <top/>
        <bottom/>
    </div>
    
    
</template>
<script>

import top from "../components/logmy";
import bottom from "../components/footer";

 



export default {
   name:"index",
   components:{
       bottom,top
   }
}



</script>


<style scoped>
/* mypage */
.my_div_box{
	display:flex;
	flex-direction: column;
	height: 100%;
}
</style>


