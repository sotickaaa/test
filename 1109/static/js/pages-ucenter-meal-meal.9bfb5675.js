(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-meal-meal"],{"0fdd":function(t,e,n){var i=n("bf63");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("71638f82",i,!0,{sourceMap:!1,shadowMode:!1})},1097:function(t,e,n){"use strict";n.r(e);var i=n("363d"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"11eb":function(t,e,n){"use strict";n.r(e);var i=n("279b"),r=n("2180");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("4747");var s,o=n("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"6798dffe",null,!1,i["a"],s);e["default"]=l.exports},"147f":function(t,e,n){var i=n("ba90");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("02170006",i,!0,{sourceMap:!1,shadowMode:!1})},2180:function(t,e,n){"use strict";n.r(e);var i=n("8467"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"279b":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:["text"===t.styleType?"segmented-control--text":"segmented-control--button"],style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control__item",class:["text"===t.styleType?"segmented-control__item--text":"segmented-control__item--button",i===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===i&&"button"===t.styleType?"segmented-control__item--button--first":"",i===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""],style:{backgroundColor:i===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:i===t.currentIndex&&"text"===t.styleType||"button"===t.styleType?t.activeColor:"transparent"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick(i)}}},[n("v-uni-text",{staticClass:"segmented-control__text",style:{color:i===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}},[t._v(t._s(e))])],1)})),1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},3610:function(t,e,n){var i=n("659f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("12f4d42d",i,!0,{sourceMap:!1,shadowMode:!1})},"363d":function(t,e,n){"use strict";var i=n("ee27");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("fc11"));n("96cf");var a,s=i(n("c964")),o=(a={data:function(){return{items:[i18n.k_quan_bu,i18n.k_dai_shi_yong,i18n.k_yi_shi_yong],taskList:[{refreshText:i18n.k_xia_la_shua_xin,loadMore:"more",refreshing:!1,data:[],page:1,status:-1},{refreshText:i18n.k_xia_la_shua_xin,loadMore:"more",refreshing:!1,data:[],page:1,status:0},{refreshText:i18n.k_xia_la_shua_xin,loadMore:"more",refreshing:!1,data:[],page:1,status:1}],current:0,baseColor:""}},onLoad:function(){this.baseColor=this.$store.state.baseColor,this.getList(0)},computed:{i18n:function(){return this.$t("index")}}},(0,r.default)(a,"computed",{i18n:function(){return this.$t("index")}}),(0,r.default)(a,"methods",{createTask:function(t){uni.navigateTo({url:"/pages/ucenter/task/send?buy_id=".concat(t.id)})},getList:function(t,e){var n=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=n.taskList[t],r.loadingText=i18n.k_shu_ju_jia_zai_zhong,i.next=4,getApp().post("/meal_buy/mealBuyList",{token:getApp().token,page:r.page,row:10,status:r.status});case 4:a=i.sent,200==a.code?(r.loadMore="more",r.loadingText=i18n.k_jia_zai_wan_cheng,1==r.page?r.data=a.data.list:r.data=r.data.concat(a.data.list)):(r.loadMore="noMore",r.loadingText=i18n.k_mei_you_geng_duo_le),"refreshData"==e&&(n.pulling=!0,r.refreshing=!1,r.refreshText=i18n.k_yi_shua_xin,setTimeout((function(){n.pulling=!1}),500));case 7:case"end":return i.stop()}}),i)})))()},loadMore:function(){var t=this.taskList[this.current];t.page=t.page+1,t.loadMore="loading",this.getList(this.current)},switchTab:function(t){this.current=t,0===this.taskList[t].data.length&&this.getList(t)},swiperChange:function(t){this.switchTab(t.detail.current)},onClickItem:function(t){this.switchTab(t.currentIndex)},onrefresh:function(t){var e=this.taskList[this.current];e.refreshFlag&&(e.refreshing=!0,e.refreshText=i18n.k_zheng_zai_shua_xin,e.page=1,this.getList(this.current,"refreshData"))},onpullingdown:function(t){var e=this.taskList[this.current];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText=i18n.k_shi_fang_li_ji_shua_xin):(e.refreshFlag=!1,e.refreshText=i18n.k_xia_la_ke_yi_shua_xin))}}),a);e.default=o},4379:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-list"},[t._t("default")],2)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},4747:function(t,e,n){"use strict";var i=n("3610"),r=n.n(i);r.a},"5d7b":function(t,e,n){"use strict";n.r(e);var i=n("e4c0"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"659f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".segmented-control[data-v-6798dffe]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:36px;overflow:hidden}.segmented-control__item[data-v-6798dffe]{\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;box-sizing:border-box;\nposition:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.segmented-control__item--button[data-v-6798dffe]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-6798dffe]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-6798dffe]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-6798dffe]{border-bottom-style:solid;border-bottom-width:3px}.segmented-control__text[data-v-6798dffe]{font-size:12px;line-height:15px;text-align:center}",""]),t.exports=e},8467:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};e.default=i},"94af":function(t,e,n){"use strict";var i=n("147f"),r=n.n(i);r.a},a9c6:function(t,e,n){"use strict";n.r(e);var i=n("4379"),r=n("5d7b");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("94af");var s,o=n("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"5d1a4dfe",null,!1,i["a"],s);e["default"]=l.exports},ba90:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-list[data-v-5d1a4dfe]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\nposition:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\r\n\t/* border-bottom-color: $uni-border-color;\r\n */\r\n\t/* border-bottom-style: solid;\r\n */\r\n\t/* border-bottom-width: 1px;\r\n */}\n.uni-list[data-v-5d1a4dfe]:before{height:0}.uni-list[data-v-5d1a4dfe]:after{height:0}\r\n\r\n",""]),t.exports=e},bf63:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-48056d6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#fff}.swiper[data-v-48056d6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;border-top-color:#f2f2f2;border-top-width:%?2?%;border-style:solid}.swiper-item[data-v-48056d6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.swiper-item-list[data-v-48056d6b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#f2f2f2}.header-tips[data-v-48056d6b]{width:%?750?%;padding-left:%?20?%;padding-right:%?20?%;background-color:#fff}.meal_list-item[data-v-48056d6b]{width:%?710?%;margin:%?20?%;background-color:#fff;border-radius:%?10?%}.meal-png[data-v-48056d6b]{width:%?32?%;height:%?32?%;margin-right:%?10?%}.header-bg[data-v-48056d6b]{background-color:#7eb5fa;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%;padding-left:%?20?%;padding-right:%?20?%;padding-top:%?10?%;padding-bottom:%?10?%}.btns[data-v-48056d6b]{background-color:#7eb5fa;color:#fff;padding-left:%?20?%;padding-right:%?20?%;padding-top:%?5?%;padding-bottom:%?5?%;font-size:%?30?%;border-radius:%?10?%}.mescroll-empty[data-v-48056d6b]{width:%?750?%;padding:%?20?%}.mescroll-empty-img[data-v-48056d6b]{width:%?210?%;height:%?222?%}uni-swiper-item[data-v-48056d6b]{overflow:auto}uni-page-body[data-v-48056d6b], uni-page-refresh[data-v-48056d6b], .content[data-v-48056d6b]{height:100%}',""]),t.exports=e},dd5b:function(t,e,n){"use strict";n.r(e);var i=n("ea40"),r=n("1097");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("f094");var s,o=n("f0c5"),l=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"48056d6b",null,!1,i["a"],s);e["default"]=l.exports},e4c0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},backgroundColor:{type:String,default:function(){return"#ffffff"}}},provide:function(){return{list:this}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},onPulling:function(e){t.log("onpulling",e)},onRefresh:function(){var t=this;this._freshing||(this._freshing=!0,setTimeout((function(){t.triggered=!1,t._freshing=!1}),3e3))},onRestore:function(){this.triggered="restore",t.log("onRestore")},onAbort:function(){t.log("onAbort")}}};e.default=n}).call(this,n("5a52")["default"])},ea40:function(t,e,n){"use strict";var i={uniSegmentedControl:n("11eb").default,uniList:n("a9c6").default,simpleRefresh:n("529c").default,uniLoadMore:n("ef1f").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":t.baseColor},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickItem.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!1,autoplay:!1,current:t.current},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.taskList,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[n("uni-list",{staticClass:"swiper-item-list",on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(i)}}},[n("simple-refresh",{attrs:{refreshing:e.refreshing,refreshText:e.refreshText},on:{refresh:function(e){arguments[0]=e=t.$handleEvent(e),t.onrefresh(i)},pullingdown:function(e){arguments[0]=e=t.$handleEvent(e),t.onpullingdown.apply(void 0,arguments)}}}),1==i?n("header",{staticClass:"header-tips"},[n("v-uni-text",{staticClass:"s-text s-red"},[t._v(t._s(t.i18n.k_yi_gou_mai_de_tao_can_qing_zai)+"72"+t._s(t.i18n.k_xiao_shi_nei_shi_yong_fa_bu_ren_wu))]),n("v-uni-text",{staticClass:"s-text s-yellow"},[t._v(t._s(t.i18n.k_qing_xuan_ze_nin_yi_jing_gou_mai_de_tao_can_jin_hang_fa_bu_ren_wu))])],1):t._e(),t._l(e.data,(function(e,i){return n("cell",{key:i,staticClass:"swiper-item-list-cell"},[n("v-uni-view",{staticClass:"meal_list-item flex s-columns",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.createTask(e)}}},[n("v-uni-view",{staticClass:"flex s-space-between header-bg"},[n("v-uni-view",{staticClass:"flex  s-nowrap s-flex-vcenter"},[n("v-uni-image",{staticClass:"meal-png",attrs:{src:"/static/meal.png"}}),n("v-uni-text",{staticClass:"s-text s-white"},[t._v(t._s(e.name))])],1),n("v-uni-view",{staticClass:"flex  s-nowrap"},[n("v-uni-text",{staticClass:"s-text s-white"},[t._v(t._s(t.i18n.k_zhuang_tai)+"：")]),n("v-uni-text",{staticClass:"s-text s-white s-bold"},[t._v(t._s(e.status_str))])],1)],1),n("v-uni-view",{staticClass:"flex s-nowrap s-padding s-flex-vbottom s-space-between"},[n("v-uni-view",{staticClass:"flex s-columns"},[n("v-uni-text",{staticClass:"s-text s-black"},[t._v(t._s(t.i18n.k_xuan_shang_shu)+"："+t._s(e.task_apply_num))]),n("v-uni-text",{staticClass:"s-text s-black"},[t._v(t._s(t.i18n.k_xuan_shang_jin_e)+"："+t._s(t._f("toAmount")(e.task_reward_amount))+t._s(t.i18n.k_yuan))]),n("v-uni-text",{staticClass:"s-text s-black"},[t._v(t._s(t.i18n.k_zeng_song)+"（"+t._s(t.i18n.k_mei_tian)+t._s(e.day_task_num)+t._s(t.i18n.k_tiao_jie_dan_ren_wu)+"）")]),n("v-uni-text",{staticClass:"s-text s-black"},[t._v(t._s(t.i18n.k_gou_mai_shi_jian)+"："+t._s(e.create_time_str))])],1),n("v-uni-view",{staticClass:"flex s-columns s-flex-vbottom"},[n("v-uni-text",{staticClass:"btns"},[t._v(t._s(t.i18n.k_fa_bu_ren_wu))])],1)],1)],1)],1)})),e.data.length<1?n("cell",[n("v-uni-view",{staticClass:"mescroll-empty flex s-flex-vcenter"},[n("v-uni-image",{staticClass:"mescroll-empty-img",attrs:{src:"/static/mescroll-empty.png"}}),n("v-uni-text",{staticClass:"s-text s-black6"},[t._v(t._s(t.i18n.k_zan_wu_xiang_guan_shu_ju))])],1)],1):t._e(),n("uni-load-more",{attrs:{status:e.loadMore}})],2)],1)})),1)],1)],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},f094:function(t,e,n){"use strict";var i=n("0fdd"),r=n.n(i);r.a}}]);