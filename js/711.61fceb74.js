"use strict";(self["webpackChunktwitter_project_v1"]=self["webpackChunktwitter_project_v1"]||[]).push([[711],{1201:function(t,i,s){s.d(i,{Z:function(){return f}});var n=function(){var t=this,i=t._self._c;return i("section",t._l(t.accounts,(function(s){return i("div",{key:s.id,staticClass:"tweet-card"},[i("div",{staticClass:"tweet-card__panel d-flex"},[i("router-link",{attrs:{to:{name:"user-information",params:{id:s.id}}}},[i("img",{staticClass:"tweet-card__panel__avatar",attrs:{src:t._f("emptyImage")(s.image),alt:""}})]),i("div",{staticClass:"tweet-card__panel__content"},[i("div",{staticClass:"tweet-card__panel__content__title d-flex d-flex align-items-center justify-content-between"},[i("p",{staticClass:"fw-bold truncate"},[t._v(t._s(s.name))]),s.id!==t.currentUser.id?i("div",{},[s.isFollowing?i("button",{staticClass:"btn-main btn-following",on:{click:function(i){return t.removeFollowing(s.followingId)}}},[t._v(" 正在跟隨 ")]):i("button",{staticClass:"btn-white btn-follow",on:{click:function(i){return t.addFollowing(s.followingId)}}},[t._v(" 追隨 ")])]):t._e()]),i("div",{staticClass:"tweet-card__panel__content__text"},[i("p",[t._v(" "+t._s(s.introduction)+" ")])])])],1)])})),0)},e=[],a=(s(1703),s(9682)),r=s(6163),o=s(3822),c=s(3459),l={props:{initialData:{type:Array}},data(){return{isfollowing:!1,accounts:[]}},watch:{initialData(){this.accounts=this.initialData}},methods:{async removeFollowing(t){try{const{data:i}=await a.Z.removeFollowing(t);if("success"!==i.status)return new Error;this.accounts=this.accounts.map((i=>i.followingId===t?{...i,isFollowing:!1}:i))}catch(i){r.F.fire({icon:"warning",title:"無法取消追蹤使用者"})}},async addFollowing(t){try{const{data:i}=await a.Z.addFollowing({id:t});if("success"!==i.status)return new Error;this.accounts=this.accounts.map((i=>i.followingId===t?{...i,isFollowing:!0}:i))}catch(i){r.F.fire({icon:"warning",title:"無法追蹤使用者"})}}},computed:{...(0,o.rn)(["currentUser","isAuthenticated"])},mixins:[c.L]},u=l,d=s(1001),_=(0,d.Z)(u,n,e,!1,null,"3fd88e24",null),f=_.exports},9098:function(t,i,s){s.d(i,{Z:function(){return _}});var n=function(){var t=this,i=t._self._c;return i("section",[i("h4",{staticClass:"title"},[t._v("推薦跟隨")]),i("div",{staticClass:"section__panel"},t._l(t.users,(function(s){return i("div",{key:s.id,staticClass:"section__panel__account d-flex align-items-center"},[i("router-link",{attrs:{to:{name:"user-information",params:{id:s.id}}}},[i("img",{staticClass:"section__panel__account__avatar",attrs:{src:t._f("emptyImage")(s.image),alt:""}})]),i("div",{staticClass:"section__panel__account__content d-flex align-items-center justify-content-between"},[i("div",{staticClass:"section__panel__account__content__title d-flex flex-column justify-content-start"},[i("p",{staticClass:"fw-bold truncate"},[t._v(t._s(s.name))]),i("p",{staticClass:"section__panel__account__content__title__id fs-14 truncate"},[t._v(" @"+t._s(s.account)+" ")])]),i("div",{staticClass:"section__panel__account__content__btn-section d-flex"},[s.isFollowing?i("button",{staticClass:"btn-main",staticStyle:{width:"96px"},attrs:{disabled:t.isProcessing},on:{click:function(i){return t.removeFollowing(s.id)}}},[t._v(" 正在追蹤 ")]):i("button",{staticClass:"btn-white",attrs:{disabled:t.isProcessing},on:{click:function(i){return t.addFollowing(s.id)}}},[t._v("跟隨")])])])],1)})),0)])},e=[],a=(s(1703),s(9682)),r=s(6163),o=s(3459),c={data(){return{users:[],isProcessing:!1}},methods:{async fetchData(){try{const{data:t}=await a.Z.getUserTop();this.users=t}catch(t){r.F.fire({icon:"warning",title:"無法讀取使用者"})}},async addFollowing(t){try{this.isProcessing=!0;const{data:i}=await a.Z.addFollowing({id:t});if("success"!==i.status)return new Error;this.users=this.users.map((i=>i.id===t?{...i,isFollowing:!0}:i)),this.isProcessing=!1}catch(i){this.isProcessing=!1,r.F.fire({icon:"warning",title:"無法追蹤使用者"})}},async removeFollowing(t){try{this.isProcessing=!0;const{data:i}=await a.Z.removeFollowing(t);if("success"!==i.status)return new Error;this.users=this.users.map((i=>i.id===t?{...i,isFollowing:!1}:i)),this.isProcessing=!1}catch(i){this.isProcessing=!1,r.F.fire({icon:"warning",title:"無法追蹤使用者"})}}},created(){this.fetchData()},mixins:[o.L]},l=c,u=s(1001),d=(0,u.Z)(l,n,e,!1,null,"14d1bb6f",null),_=d.exports},332:function(t,i,s){s.d(i,{Z:function(){return c}});var n=function(){var t=this;t._self._c;return t._m(0)},e=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"spinner"},[i("div",{staticClass:"bouncing-loader"},[i("div"),i("div"),i("div")])])}],a=s(1001),r={},o=(0,a.Z)(r,n,e,!1,null,"6b2e489c",null),c=o.exports},442:function(t,i,s){s.r(i),s.d(i,{default:function(){return w}});var n=function(){var t=this,i=t._self._c;return i("main",{staticClass:"container d-flex"},[i("div",{staticClass:"container__left"},[i("Navbar")],1),i("div",{staticClass:"container__right d-flex"},[i("div",{staticClass:"section"},[t.isProcessing?i("Spinner"):[i("div",{staticClass:"header d-flex align-items-center title"},[i("img",{staticClass:"cursor-pointer",staticStyle:{width:"17px",height:"14px"},attrs:{src:s(8171),alt:""},on:{click:function(i){return t.$router.back()}}}),i("div",{staticClass:"header__text"},[i("h5",{},[t._v(t._s(t.user.name))]),i("p",{staticClass:"header__text__info"},[i("span",[t._v(t._s(t.tweetNum))]),t._v(" 推文")])])]),i("ul",{staticClass:"d-flex nav-pill"},[i("router-link",{attrs:{to:`/user/${t.user.id}/follower`}},[i("li",{staticClass:"nav-item cursor-pointer"},[t._v("追蹤者")])]),i("router-link",{attrs:{to:`/user/${t.user.id}/following`}},[i("li",{staticClass:"nav-item cursor-pointer active"},[t._v("正在追隨")])])],1)],i("Account",{attrs:{"initial-data":t.followings}})],2)]),i("PopularList")],1)},e=[],a=s(4431),r=s(9098),o=s(1201),c=s(9682),l=s(6163),u=s(332),d={data(){return{user:{id:-1},followings:[],isProcessing:!1,tweetNum:null}},methods:{async getFollowing(t){try{this.isProcessing=!0;const{data:i}=await c.Z.getFollowings(t);this.followings=i,this.isProcessing=!1}catch(i){this.isProcessing=!1,l.F.fire({icon:"warning",title:"無法讀取正在追蹤者"})}},async getData(t){try{const i=await c.Z.getUser({id:t}),s=await c.Z.getTweets({id:t});this.user={...this.user,...i.data},this.tweetNum=s.data.length}catch(i){l.F.fire({icon:"warning",title:"無法讀取帳號"})}}},components:{Navbar:a.Z,Account:o.Z,PopularList:r.Z,Spinner:u.Z},created(){const{id:t}=this.$route.params;this.getFollowing(Number(t)),this.getData(Number(t)),this.user.id=Number(t)},beforeRouteUpdate(t,i,s){const{id:n}=i.params;this.getFollowing(Number(n)),this.getData(Number(n)),s()}},_=d,f=s(1001),g=(0,f.Z)(_,n,e,!1,null,"4660a76f",null),w=g.exports},3459:function(t,i,s){s.d(i,{L:function(){return r},q:function(){return a}});var n=s(6797),e=s.n(n);const a={filters:{fromNow(t){return t?e()(t).fromNow():"-"}}},r={filters:{emptyImage(t){return t||"https://i.imgur.com/mVOT0IN.png"}}}},8171:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=711.61fceb74.js.map