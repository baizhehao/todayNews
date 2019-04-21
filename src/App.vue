<template>
    <router-view/>
</template>

<script>
import "./assets/icon/iconfont.css";
export default {
	name: 'App'
}
</script>

<style>

body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
html{
	font-size:26.67vw;
}
html,body{
	height: 100%;
}
body{
	font-family:'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', 'sans-serif','微软雅黑';
  width: 100%;
}
ul,ol{
	list-style:none;
}
img{
	border: 0;
	display: block;
}
a{
    text-decoration: none;
    display: block;
}
.iconfont{
    display: block;
}


</style>
