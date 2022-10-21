<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar 
      @socketLogout="handleSocketLogout"
      @navCreateTweet="handleAfterCreatedTweet" />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <UserOnline 
        :initial-accounts="accounts"
        />
        <Spinner v-if="isProcessing" />
      </div>
      <ChatRoom 
      :initial-messages="messages"
      @afterMessage="handleAfterMessage"
      />
    </div>
  </main>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import UserOnline from "./../components/UserOnline.vue";
import ChatRoom from "./../components/ChatRoom";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

import { mapState } from "vuex";
import io from "socket.io-client";

export default {
  data() {
    return {
      isEditing: false,
      tweets: [],
      isProcessing: false,
      status: "",
      messages:[],
      accounts:[]
    };
  },
  components: {
    Navbar,
    UserOnline,
    ChatRoom,
    Spinner,
  },
  methods: {
    handleAfterCallModal() {
      this.isEditing = true;
    },
    handleAfterCloseModal() {
      this.isEditing = false;
    },
    handleAfterCreatedTweet(playLoad) {
      this.isEditing = false;
      this.tweets.unshift({
        ...playLoad,
        UserId: 2,
        isLiked: false,
        likeNum: 0,
        replyNum: 0,
      });
    },
    async fetchTweets() {
      try {
        this.isProcessing = true;
        const { data } = await tweetsAPI.getTweets();
        this.tweets = data;
        this.tweets = this.tweets.map((tweet) => {
          if (!tweet.user.image) {
            return {
              ...tweet,
              user: {
                ...tweet.user,
                image: "https://i.imgur.com/mVOT0IN.png",
              },
            };
          }
          return tweet;
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "無法讀取推文",
        });
      }
    },
    handleAfterMessage(playLoad){
      this.socketInstance.emit('message',playLoad)
    },
    handleSocketLogout(){
      console.log('logout')
   this.socketInstance.disconnect()
       }
  },
  created() {
    this.fetchTweets();
     this.socketInstance = io('http://localhost:3000')
         this.socketInstance.on("connect", () => {
           
     const status = {
        id:new Date().getTime(),
        text:`${this.currentUser.name}已經上線`,
        name:this.currentUser.name,
        account: this.currentUser.account,
        type:1
      }
      //for chat romm online user
       this.socketInstance.emit('onlineStatus',status)
       this.socketInstance.on('onlineStatusCheck',data =>{
       this.messages = this.messages.concat(data)
       this.accounts= this.accounts.concat({
         ...data
       })
    
      })

      //for messages
      this.socketInstance.on('messageReceive',data =>{
        this.messages = this.messages.concat(data)
      })

       this.socketInstance.on('offLine',data=>{
        this.messages = this.messages.concat(data)
        this.accounts = this.accounts.filter(account => account.account !== data.account)
      })

       this.socketInstance.emit('online',{
         ...this.currentUser,
         id:this.socketInstance.id
         })
     this.socketInstance.on('onlineUserNow',data=>{
        this.accounts = this.accounts.concat(data).concat({
          ...this.currentUser,
          id:this.socketInstance.id
          })
      })
    });
    this.socketInstance.on("disconnect", () => {
      //console.log(this.socketInstance); // undefined
    });
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>


<style lang="scss" scoped>
.section {
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
  height: 100vh;
  overflow: scroll;
}


.modal-bg {
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
  &.active {
    display: initial;
  }
}
</style>
