<template>
  <section class="d-flex flex-column chat-room">
    <h4 class="title">公開聊天室</h4>
    <div class="chat-room__chat-display">
          <div v-for="status in statuses" :key="status.id">
            <p>{{status.text}}</p>
          </div>
        <div class="chat-room__chat-display__list d-flex align-items-center"  v-for="message in messages" :key="message.id" :class="{other:message.name !== currentUser.name && message.type!==1,
        status:message.type === 1
        }">
            <img :src="message.image" alt="" class="chat-room__chat-display__list__avatar" v-if="message.name !== currentUser.name && message.createdA">
                    <div class="chat-room__chat-display__list__text-section d-flex flex-column" :class="{
                      otherTime:message.name !== currentUser.name,
                      
                    }">
                        <p class="chat-room__chat-display__list__text-section__text" :class="{othertText:message.name !== currentUser.name && message.type !== 1,
                         statusText:message.type === 1}">
                        {{message.text}}
                        </p>
                        <p class="chat-room__chat-display__list__text-section__time color-second" v-if="message.createdAt">
                        {{message.createdAt| date}}
                        </p>
                    </div>

                </div>
    </div>
    <form action="" class="chat-room__text-send d-flex align-items-center">
      <input
        type="text"
        name=""
        class="chat-room__text-send__text"
        placeholder="請輸入訊息..."
        v-model="text"
      />
      <img
        src="./../assets/icon/message-send.png"
        alt=""
        class="chat-room__text-send__icon"
        @click="sendMessage"
      />
    </form>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment'

export default {
  props:{
    initialMessages:{
    type:Array,
    required:true
    }

  },
    data(){
        return {
            messages:this.initialMessages,
            text:'',
            statuses:[]
        }
    },
    computed:{
        ...mapState(['currentUser','isAuthenticated'])
    },
    methods:{
        sendMessage(){
            const message = {
                id:new Date().getTime()+1,
                    name:this.currentUser.name,
                    text:this.text,
                    image:this.currentUser.image,
                    createdAt:new Date(),
                    type:2
            }
        if(!this.text.trim())return 
            this.messages = this.messages.concat(message)
            this.$emit('afterMessage',message)
            this.text = ""
        }
    },
      filters:{
        date(dateTime){
                return moment(dateTime).format("a h:mm")
        }
    },
    watch:{
      initialMessages(newValue){
        this.messages = newValue
      }
    },
    created(){

    }
}
</script>



<style lang="scss" scoped>
.title {
  padding: 24px 23px;
}
.chat-room {
  height: 100%;
  width: 712px;
  border-right: 1px solid #e6ecf0;

  &__chat-display {
    border-top: 1px solid #e6ecf0;
    padding: 16px 16px 0 16px;
    flex-grow: 1;
    height: 100%;
    &__list{
      justify-content: end;
        margin-bottom:35px;
        &.status{
          justify-content: center;
        }
        &.other{
          justify-content: start;
        }
        &__avatar{
            width:50px;
            height:50px;
        }
        &__text-section{
            margin-left:10px;
            align-items: end;
          &.otherTime{
              align-items: start;
            }
            &__text{
                width:100%;
            padding: 10px 15px ;
            background-color:var(--brand-color);
            color:var(--white);
            border-radius: 25px 25px 0px 25px;
            &.othertText{
              border-radius: 25px 25px 25px 0px;
              background-color:#E6ECF0;
              color:var(--body-color);
            }
            &.statusText{
              border-radius: 0;
              background-color:transparent;
              color:var(--body-color);
            }
        }
        &__time{
            font-size:13px;

        }
        }
        
    }
  }
  &__text-send  {
    padding: 16px 9px;
    border-top: 1px solid #e6ecf0;
    &__icon {
      width: 20px;
      height: 20px;
      margin-left: 9px;
    }
    &__text {
        width:641px;
      padding: 0 10px;
      height: 32px;
      flex: 1;
      border: 0px;
      background-color: var(--3-gray);
      border-radius: 50px;
    }
  }
}
</style>