(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-store_manage-add-spec"],{"147f":function(t,e,n){var i=n("ba90");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("02170006",i,!0,{sourceMap:!1,shadowMode:!1})},4379:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-list"},[t._t("default")],2)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},5786:function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e53c")),o=i(n("595c")),s={config:function(){return new Promise((function(t,e){a.default.post("common/oosParams",{token:getApp().token}).then((function(n){200==n.code?t(n.data):e(err)})).catch((function(t){e(t)}))}))},upload:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.default.config("UP_OSSURL");return new Promise((function(i,a){var r=t.split(".");r=r[r.length-1];s.config().then((function(s){s.key;e&&uni.showLoading({title:"上传中...",mask:!1}),uni.uploadFile({url:n,filePath:t,fileType:"image/video/audio",name:"file",formData:{key:s.key+r,OSSAccessKeyId:s.id,success_action_status:200,policy:s.policy,signature:s.signature,name:(0,o.default)(t)},header:{timestamp:(new Date).getTime()},success:function(e){200==e.statusCode?i({key:s.key+r,absolute_url:t,file_path:n+s.key+r}):a(e)},fail:function(t){a(t)},complete:function(){e&&uni.hideLoading()}})})).catch((function(t){a(t)}))}))}},r=s;e.default=r},"5d7b":function(t,e,n){"use strict";n.r(e);var i=n("e4c0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"699e":function(t,e,n){var i=n("f454");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("75f43288",i,!0,{sourceMap:!1,shadowMode:!1})},"94af":function(t,e,n){"use strict";var i=n("147f"),a=n.n(i);a.a},9781:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("fc11")),o=i(n("f3f3"));n("96cf");var s,r=i(n("c964")),c=i(n("5786")),u=!1,l=(s={data:function(){return{info:{name:"",price:"",stock:"",cover:"",cover_path:"",status:0},uploadCount:0,spec_id:"",good_id:""}},onLoad:function(t){this.good_id=t.good_id,u=getApp().getBeforePage(),t.spec_id&&(this.spec_id=t.spec_id,this.get_spec_info())},computed:{i18n:function(){return this.$t("index")}}},(0,a.default)(s,"computed",{i18n:function(){return this.$t("index")}}),(0,a.default)(s,"methods",{statucSwitchChange:function(t){this.info.status=1==t.detail.value?1:0},saveSpec:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.info.name){e.next=3;break}return uni.showToast({title:i18n.k_qing_shu_ru_gui_ge_ming_cheng,icon:"none"}),e.abrupt("return",!1);case 3:if(""!=t.info.price){e.next=6;break}return uni.showToast({title:i18n.k_qing_shu_ru_jia_ge,icon:"none"}),e.abrupt("return",!1);case 6:if(""!=t.info.stock){e.next=9;break}return uni.showToast({title:i18n.k_qing_shu_ru_ku_cun,icon:"none"}),e.abrupt("return",!1);case 9:if(""!=t.info.cover){e.next=12;break}return uni.showToast({title:i18n.k_qing_shang_chuan_feng_mian_tu,icon:"none"}),e.abrupt("return",!1);case 12:return e.next=14,getApp().post("store/saveProductSpec",(0,o.default)({token:getApp().token,product_id:t.good_id},t.info));case 14:n=e.sent,uni.showToast({title:n.msg||i18n.k_cao_zuo_shi_bai,icon:"none"}),200==n.code&&(u&&"function"==typeof u.get_productSpecList&&u.get_productSpecList(),uni.navigateBack({delta:1}));case 17:case"end":return e.stop()}}),e)})))()},get_spec_info:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,getApp().post("store/editProductSpec",{token:getApp().token,id:t.spec_id});case 2:n=e.sent,200==n.code&&(t.info=n.data);case 4:case"end":return e.stop()}}),e)})))()},uploadToAlioss:function(t,e){var n=this;return(0,r.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:c.default.upload(t,!0).then((function(t){"cover"==e&&(n.info.cover=t.key,n.info.cover_path=t.file_path)})).catch((function(t){uni.showToast({title:i18n.k_shang_chuan_shi_bai,icon:"none"})}));case 1:case"end":return i.stop()}}),i)})))()},upload:function(t){var e=this;uni.chooseImage({count:1,sizeType:"compressed",success:function(n){e.uploadToAlioss(n.tempFilePaths[0],t)}})}}),s);e.default=l},"9e81":function(t,e,n){"use strict";n.r(e);var i=n("cfc9"),a=n("e6ae");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a013");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"507fc65a",null,!1,i["a"],s);e["default"]=c.exports},a013:function(t,e,n){"use strict";var i=n("699e"),a=n.n(i);a.a},a9c6:function(t,e,n){"use strict";n.r(e);var i=n("4379"),a=n("5d7b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("94af");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5d1a4dfe",null,!1,i["a"],s);e["default"]=c.exports},ba90:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-list[data-v-5d1a4dfe]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\nposition:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\r\n\t/* border-bottom-color: $uni-border-color;\r\n */\r\n\t/* border-bottom-style: solid;\r\n */\r\n\t/* border-bottom-width: 1px;\r\n */}\n.uni-list[data-v-5d1a4dfe]:before{height:0}.uni-list[data-v-5d1a4dfe]:after{height:0}\r\n\r\n",""]),t.exports=e},cfc9:function(t,e,n){"use strict";var i={uniList:n("a9c6").default,uniIcons:n("4bd1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"add-goods-flex"},[n("uni-list",{staticClass:"add-goods-flex"},[n("cell",{staticClass:"goods-cell-item"},[n("v-uni-view",{staticClass:"goods-info-item"},[n("v-uni-view",{staticClass:"flex s-nowrap"},[n("v-uni-text",{staticClass:"s-red s-desc"},[t._v("*")]),n("v-uni-text",{staticClass:"s-text s-black6 padding-left-title"},[t._v(t._s(t.i18n.k_gui_ge_ming_cheng))])],1),n("v-uni-input",{staticClass:"goods-input",attrs:{type:"text",placeholder:t.i18n.k_qing_shu_ru_gui_ge_ming_cheng},model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}})],1),n("v-uni-view",{staticClass:"goods-info-item"},[n("v-uni-view",{staticClass:"flex s-nowrap"},[n("v-uni-text",{staticClass:"s-red s-desc"},[t._v("*")]),n("v-uni-text",{staticClass:"s-text s-black6 padding-left-title"},[t._v(t._s(t.i18n.k_jia_ge))])],1),n("v-uni-input",{staticClass:"goods-input",attrs:{type:"number",placeholder:t.i18n.k_qing_shu_ru_gui_ge_jia_ge},model:{value:t.info.price,callback:function(e){t.$set(t.info,"price",e)},expression:"info.price"}})],1),n("v-uni-view",{staticClass:"goods-info-item"},[n("v-uni-view",{staticClass:"flex s-nowrap"},[n("v-uni-text",{staticClass:"s-red s-desc"},[t._v("*")]),n("v-uni-text",{staticClass:"s-text s-black6 padding-left-title"},[t._v(t._s(t.i18n.k_ku_cun))])],1),n("v-uni-input",{staticClass:"goods-input",attrs:{type:"number",placeholder:t.i18n.k_qing_shu_ru_gui_ge_ku_cun},model:{value:t.info.stock,callback:function(e){t.$set(t.info,"stock",e)},expression:"info.stock"}})],1),n("v-uni-view",{staticClass:"goods-info-item"},[n("v-uni-view",{staticClass:"flex s-nowrap"},[n("v-uni-text",{staticClass:"s-red s-desc"},[t._v("*")]),n("v-uni-text",{staticClass:"s-text s-black6 padding-left-title"},[t._v(t._s(t.i18n.k_shang_pin_feng_mian))])],1),""==t.info.cover_path?n("v-uni-view",{staticClass:"empty-upload",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload("cover")}}},[n("uni-icons",{attrs:{type:"plusempty",size:"30",color:"#666666"}})],1):n("v-uni-image",{staticClass:"avatar_path",attrs:{src:t.info.cover_path},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload("cover")}}})],1),n("v-uni-view",{staticClass:"goods-info-item flex s-space-between"},[n("v-uni-view",{staticClass:"flex s-nowrap"},[n("v-uni-text",{staticClass:"s-red s-desc"},[t._v("*")]),n("v-uni-text",{staticClass:"s-text s-black6 padding-left-title"},[t._v(t._s(t.i18n.k_shi_fou_shang_jia))])],1),n("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:1==t.info.status},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.statucSwitchChange.apply(void 0,arguments)}}})],1)],1),n("cell",{staticClass:"goods-cell-item"},[n("v-uni-view",{staticClass:"goods-info-item"},[n("v-uni-text",{staticClass:"submitBtns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveSpec.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.k_tian_jia_gui_ge))])],1)],1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},e4c0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},backgroundColor:{type:String,default:function(){return"#ffffff"}}},provide:function(){return{list:this}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},onPulling:function(e){t.log("onpulling",e)},onRefresh:function(){var t=this;this._freshing||(this._freshing=!0,setTimeout((function(){t.triggered=!1,t._freshing=!1}),3e3))},onRestore:function(){this.triggered="restore",t.log("onRestore")},onAbort:function(){t.log("onAbort")}}};e.default=n}).call(this,n("5a52")["default"])},e6ae:function(t,e,n){"use strict";n.r(e);var i=n("9781"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f454:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.add-goods-flex[data-v-507fc65a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-cell-item[data-v-507fc65a]{background-color:#fff;padding:%?20?%}.goods-info-item[data-v-507fc65a]{margin-bottom:%?20?%}.goods-input[data-v-507fc65a]{width:%?710?%;padding-left:%?10?%;padding-right:%?10?%;border-color:#f2f2f2;border-width:%?2?%;border-radius:%?10?%;font-size:%?28?%;color:#333;height:%?60?%;line-height:%?60?%}.avatar_path[data-v-507fc65a]{width:%?200?%;height:%?200?%;background-color:#f2f2f2;border-radius:%?10?%}.empty-upload[data-v-507fc65a]{width:%?200?%;padding-top:%?50?%;padding-bottom:%?50?%;background-color:#f2f2f2;border-radius:%?10?%}.submitBtns[data-v-507fc65a]{width:%?710?%;padding-top:%?20?%;padding-bottom:%?20?%;text-align:center;background-color:#7eb5fa;color:#fff;font-size:%?30?%;border-radius:%?100?%}',""]),t.exports=e}}]);