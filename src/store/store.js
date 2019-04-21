import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //所有的标签头
        allTitArr:["关注","推荐","西安","财经","小说","视频","直播","热点","娱乐",
        "菜谱","科技","体育","军事","钓鱼","历史","手机","科学","股票","健身","彩票",
        "三农","孕产","动漫","情感"
    ],
        //当前的标签头
        curTitArr:["关注","推荐","西安","财经","小说","视频","直播","热点","娱乐","菜谱","科技","体育","军事"],
        
        //当前标签头所对应的组件名；
        comTitName:["","newscon","","","nover",""]
    }
        
})