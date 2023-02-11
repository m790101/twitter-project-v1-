"use strict";(self["webpackChunktwitter_project_v1"]=self["webpackChunktwitter_project_v1"]||[]).push([[543],{1201:function(t,s,i){i.d(s,{Z:function(){return f}});var n=function(){var t=this,s=t._self._c;return s("section",t._l(t.accounts,(function(i){return s("div",{key:i.id,staticClass:"tweet-card"},[s("div",{staticClass:"tweet-card__panel d-flex"},[s("router-link",{attrs:{to:{name:"user-information",params:{id:i.id}}}},[s("img",{staticClass:"tweet-card__panel__avatar",attrs:{src:t._f("emptyImage")(i.image),alt:""}})]),s("div",{staticClass:"tweet-card__panel__content"},[s("div",{staticClass:"tweet-card__panel__content__title d-flex d-flex align-items-center justify-content-between"},[s("p",{staticClass:"fw-bold truncate"},[t._v(t._s(i.name))]),i.id!==t.currentUser.id?s("div",{},[i.isFollowing?s("button",{staticClass:"btn-main btn-following",on:{click:function(s){return t.removeFollowing(i.followingId)}}},[t._v(" 正在跟隨 ")]):s("button",{staticClass:"btn-white btn-follow",on:{click:function(s){return t.addFollowing(i.followingId)}}},[t._v(" 追隨 ")])]):t._e()]),s("div",{staticClass:"tweet-card__panel__content__text"},[s("p",[t._v(" "+t._s(i.introduction)+" ")])])])],1)])})),0)},e=[],a=(i(1703),i(9682)),r=i(6163),c=i(3822),o=i(3459),l={props:{initialData:{type:Array}},data(){return{isfollowing:!1,accounts:[]}},watch:{initialData(){this.accounts=this.initialData}},methods:{async removeFollowing(t){try{const{data:s}=await a.Z.removeFollowing(t);if("success"!==s.status)return new Error;this.accounts=this.accounts.map((s=>s.followingId===t?{...s,isFollowing:!1}:s))}catch(s){r.F.fire({icon:"warning",title:"無法取消追蹤使用者"})}},async addFollowing(t){try{const{data:s}=await a.Z.addFollowing({id:t});if("success"!==s.status)return new Error;this.accounts=this.accounts.map((s=>s.followingId===t?{...s,isFollowing:!0}:s))}catch(s){r.F.fire({icon:"warning",title:"無法追蹤使用者"})}}},computed:{...(0,c.rn)(["currentUser","isAuthenticated"])},mixins:[o.L]},u=l,d=i(1001),_=(0,d.Z)(u,n,e,!1,null,"3fd88e24",null),f=_.exports},9098:function(t,s,i){i.d(s,{Z:function(){return _}});var n=function(){var t=this,s=t._self._c;return s("section",[s("h4",{staticClass:"title"},[t._v("推薦跟隨")]),s("div",{staticClass:"section__panel"},t._l(t.users,(function(i){return s("div",{key:i.id,staticClass:"section__panel__account d-flex align-items-center"},[s("router-link",{attrs:{to:{name:"user-information",params:{id:i.id}}}},[s("img",{staticClass:"section__panel__account__avatar",attrs:{src:t._f("emptyImage")(i.image),alt:""}})]),s("div",{staticClass:"section__panel__account__content d-flex align-items-center justify-content-between"},[s("div",{staticClass:"section__panel__account__content__title d-flex flex-column justify-content-start"},[s("p",{staticClass:"fw-bold truncate"},[t._v(t._s(i.name))]),s("p",{staticClass:"section__panel__account__content__title__id fs-14 truncate"},[t._v(" @"+t._s(i.account)+" ")])]),s("div",{staticClass:"section__panel__account__content__btn-section d-flex"},[i.isFollowing?s("button",{staticClass:"btn-main",staticStyle:{width:"96px"},attrs:{disabled:t.isProcessing},on:{click:function(s){return t.removeFollowing(i.id)}}},[t._v(" 正在追蹤 ")]):s("button",{staticClass:"btn-white",attrs:{disabled:t.isProcessing},on:{click:function(s){return t.addFollowing(i.id)}}},[t._v("跟隨")])])])],1)})),0)])},e=[],a=(i(1703),i(9682)),r=i(6163),c=i(3459),o={data(){return{users:[],isProcessing:!1}},methods:{async fetchData(){try{const{data:t}=await a.Z.getUserTop();this.users=t}catch(t){r.F.fire({icon:"warning",title:"無法讀取使用者"})}},async addFollowing(t){try{this.isProcessing=!0;const{data:s}=await a.Z.addFollowing({id:t});if("success"!==s.status)return new Error;this.users=this.users.map((s=>s.id===t?{...s,isFollowing:!0}:s)),this.isProcessing=!1}catch(s){this.isProcessing=!1,r.F.fire({icon:"warning",title:"無法追蹤使用者"})}},async removeFollowing(t){try{this.isProcessing=!0;const{data:s}=await a.Z.removeFollowing(t);if("success"!==s.status)return new Error;this.users=this.users.map((s=>s.id===t?{...s,isFollowing:!1}:s)),this.isProcessing=!1}catch(s){this.isProcessing=!1,r.F.fire({icon:"warning",title:"無法追蹤使用者"})}}},created(){this.fetchData()},mixins:[c.L]},l=o,u=i(1001),d=(0,u.Z)(l,n,e,!1,null,"14d1bb6f",null),_=d.exports},332:function(t,s,i){i.d(s,{Z:function(){return o}});var n=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"spinner"},[s("div",{staticClass:"bouncing-loader"},[s("div"),s("div"),s("div")])])}],a=i(1001),r={},c=(0,a.Z)(r,n,e,!1,null,"6b2e489c",null),o=c.exports},2220:function(t,s,i){i.r(s),i.d(s,{default:function(){return w}});var n=function(){var t=this,s=t._self._c;return s("main",{staticClass:"container d-flex"},[s("div",{staticClass:"container__left"},[s("Navbar")],1),s("div",{staticClass:"container__right d-flex"},[s("div",{staticClass:"section"},[t.isProcessing?s("Spinner"):[s("div",{staticClass:"header d-flex align-items-center title"},[s("img",{staticClass:"cursor-pointer",staticStyle:{width:"17px",height:"14px"},attrs:{src:i(8171),alt:""},on:{click:function(s){return t.$router.back()}}}),s("div",{staticClass:"header__text"},[s("h5",{},[t._v(t._s(t.user.name))]),s("p",{staticClass:"header__text__info"},[s("span",[t._v(t._s(t.tweetNum))]),t._v(" 推文")])])]),s("ul",{staticClass:"d-flex nav-pill"},[s("router-link",{attrs:{to:`/user/${t.user.id}/follower`}},[s("li",{staticClass:"nav-item cursor-pointer active"},[t._v("追蹤者")])]),s("router-link",{attrs:{to:`/user/${t.user.id}/following`}},[s("li",{staticClass:"nav-item cursor-pointer"},[t._v("正在追隨")])])],1)],s("Account",{attrs:{"initial-data":t.followers}})],2)]),s("PopularList")],1)},e=[],a=i(4431),r=i(9098),c=i(1201),o=i(9682),l=i(6163),u=i(332),d={data(){return{user:{id:-1},followers:[],isProcessing:!1,tweetNum:null}},methods:{handleAfterPage(t){this.page=t},handleCloseUserEditModal(){this.isEditing=!1},handleAfterCallModal(){this.isEditing=!0},async getFollowers(t){try{this.isProcessing=!0;const{data:s}=await o.Z.getFollowers(t);this.followers=s,this.isProcessing=!1}catch(s){this.isProcessing=!1,l.F.fire({icon:"warning",title:"無法讀取正在追隨者"})}},async getData(t){try{this.isProcessing=!0;const s=await o.Z.getUser({id:t}),i=await o.Z.getTweets({id:t});this.user={...this.user,...s.data},this.tweetNum=i.data.length,this.isProcessing=!1}catch(s){this.isProcessing=!1,l.F.fire({icon:"warning",title:"無法讀取帳號"})}}},components:{Navbar:a.Z,Account:c.Z,PopularList:r.Z,Spinner:u.Z},created(){const{id:t}=this.$route.params;this.getFollowers(Number(t)),this.getData(Number(t)),this.user.id=Number(t)}},_=d,f=i(1001),g=(0,f.Z)(_,n,e,!1,null,"1d1c43e2",null),w=g.exports},3459:function(t,s,i){i.d(s,{L:function(){return r},q:function(){return a}});var n=i(6797),e=i.n(n);const a={filters:{fromNow(t){return t?e()(t).fromNow():"-"}}},r={filters:{emptyImage(t){return t||"https://i.imgur.com/mVOT0IN.png"}}}},8171:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=543.a72c073b.js.map