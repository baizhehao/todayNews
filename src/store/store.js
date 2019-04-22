import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //推荐的标签头
        addTit:[
                {tagName:"党媒推荐",componentName:""},
                {tagName:"钓鱼",componentName:""},
                {tagName:"精品课",componentName:"nover"},
                {tagName:"音频",componentName:""},
                {tagName:"时尚",componentName:""},
                {tagName:"历史",componentName:""},
                {tagName:"搞笑",componentName:""},
                {tagName:"数码",componentName:""},
                {tagName:"养生",componentName:""},
                {tagName:"手机",componentName:""},
                {tagName:"宠物",componentName:""},
                {tagName:"情感",componentName:""},
                {tagName:"教育",componentName:""},
                {tagName:"三农",componentName:""},
                {tagName:"孕产",componentName:""},
                {tagName:"文化",componentName:""},
                {tagName:"游戏",componentName:""},
                {tagName:"股票",componentName:""},
                {tagName:"健身",componentName:""},
                {tagName:"彩票",componentName:""},
                {tagName:"三农",componentName:""},
                {tagName:"孕产",componentName:""},
                {tagName:"动漫",componentName:""},
                {tagName:"情感",componentName:""}
            ],
        //当前的标签头
        curTitArr:[{tagName:"西安",componentName:"xianNews"},
                   {tagName:"财经",componentName:"businessNews"},
                   {tagName:"小说",componentName:"nover"},
                   {tagName:"视频",componentName:""},
                   {tagName:"直播",componentName:""},
                   {tagName:"热点",componentName:""},
                   {tagName:"娱乐",componentName:""},
                   {tagName:"科技",componentName:""},
                   {tagName:"懂车帝",componentName:""},
                   {tagName:"体育",componentName:""},
                   {tagName:"军事",componentName:""},
                   {tagName:"国际",componentName:""},
                   {tagName:"健康",componentName:""},
                   {tagName:"美食",componentName:""},
                   {tagName:"电影",componentName:""},
                   {tagName:"旅游",componentName:""},
                   {tagName:"育儿",componentName:""},
                   {tagName:"家居",componentName:""},
                   {tagName:"问答",componentName:""},
                   {tagName:"图片",componentName:""},
                   {tagName:"中餐",componentName:""},
                   {tagName:"烹饪技巧",componentName:""},
                   {tagName:"新时代",componentName:""},
                   {tagName:"国风",componentName:""},
                   {tagName:"NBA",componentName:""},
                   {tagName:"值点",componentName:""}
                 ]
    }
        
})