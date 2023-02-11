<template>
  <section class="reply-modal">
    <div class="modal">
      <div class="modal-content d-flex flex-column">
        <div class="modal-header">
          <img
            src="./../assets/icon/close-orange.png"
            alt=""
            class="close"
            @click="closeModal"
          />
        </div>
        <div class="modal-body">
          <div class="modal-body__panel d-flex">
              <img
                :src="tweet.user.image | emptyImage"
                alt=""
                class="modal-body__panel__avatar"
              />
            <div class="modal-body__panel__content ">
              <div
                class="modal-body__panel__content__title d-flex "
              >
                <p class="fw-bold modal-body__panel__content__title__name truncate">{{tweet.user.name}}</p>
                <p class="fs-14 modal-body__panel__content__title__id">@{{tweet.user.account}}．<span>{{tweet.createdAt | fromNow}}</span></p>
              </div>
              <div class="modal-body__panel__content__description">
                <p>
                  {{tweet.description}}
                </p>
                <p class="fs-14 modal-body__panel__content__description__reply-to">
                  回覆給
                  <span class=" modal-body__panel__content__description__reply-to__id"
                    >@{{tweet.user.account}}</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex mt-5">
            <img
              :src="currentUser.image"
              alt=""
              class="modal-body__avatar"
            />
            <div class="">
              <textarea
                name=""
                id=""
                cols="35"
                rows="5"
                placeholder="推你的回覆"
                class="modal-body__textarea pt-2"
                v-model="comment"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end align-items-center">
          <div class="error-handler" v-if="comment.trim().length <= 0">內容不可為空白!</div>
          <button type="button" class="btn-main" style="width: 66px" @click="createReply(tweet.id)" :disabled="isProcessing || comment.trim().length <= 0">
            回覆
          </button>
        </div>
      </div>
    </div>

  </section>
</template>


<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 27%;
  top: 74px;
  z-index: 999;
  &.active {
    display: initial;
  }

  & .modal-content {
    border-radius: 14px;
    width: 634px;
    height: 500px;
    background-color: var(--white);
    & .modal-header {
      padding: 20px;
      border-bottom: 1px solid var(--2-gray);
    }
    & .modal-footer {
      border-top: 0;
      padding-right: 16px;
      margin: 16px 0;
      background: white;
    }
  }
}

.modal-body {
  flex: 1;
  padding-top: 16px;
  padding-left: 24px;
  &__panel {
      position: relative;
      &::before{
          content:'';
          position:absolute;
          top:calc(50px + 16px);
          left:25px;
          transform: translate(-50%,0);
          width:2px;
          height:calc(100% - 32px);
          background-color:#CCD6DD;
      }
    &__avatar {
      width: 50px;
      height: 50px;
    }
     &__content{
        margin-left:8px;
        &__title{
            &__name{
                color: var(--black-color);
            }
            &__id{
                margin-left:8px;
                 color: var(--secondary-color);
            }
        }
    &__description{
        margin-top:10px;
        color: var(--black-color);
        width:90%;
        overflow-wrap: anywhere;
        &__reply-to{
            margin-top:11px;
            color: var(--secondary-color);
            &__id{
                color: var(--brand-color);
            }
        }
    }
     }
  }
  &__avatar {
    width: 50px;
    height: 50px;
  }
  &__textarea {
    width: 100%;
    font-size: 16px;
    margin-left: 8px;
    border: 0;
    outline: none;
  }
}
.close {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.error-handler {
  margin-right: 20px;
  font-size: 12px;
  color: var(--error-color);
}

.truncate{
  white-space: nowrap; 
  max-width: 300px; 
  overflow: hidden;
  text-overflow: ellipsis; 
}

</style>


<script>
import {fromNowFilter} from './../utils/mixins'
import tweetApi from "./../apis/tweets";
import { Toast } from "./../utils/helpers";
import {mapState} from 'vuex'
import {emptyImageFilter} from './../utils/mixins'

export default {
  props:{
    initialTweet:{
      type:Object,
      required:true
    },
  },
  data() {
    return {
      tweet:this.initialTweet,
      comment:'',
      isProcessing:false
    };
  },
  mixins:[fromNowFilter, emptyImageFilter],
  methods: {
    callModal() {
      this.isEditing = true;
    },
    closeModal() {
      this.$emit("closeReplyModal");
    },
    async createReply(id){
      try{
        this.isProcessing = true
              const response = await tweetApi.createReply({comment:this.comment,tweet_id:id})
              // if(response.statusText !== 'OK')throw new Error
              this.$emit("closeReplyModal");
              
              this.$emit("afterCreateReply",{
                id:response.data.id,
                comment:this.comment,
                user:{
                  account:this.currentUser.account,
                  image:this.currentUser.image,
                  name:this.currentUser.name
                },
                createdAt:new Date
              });
              this.isProcessing = false
          }
          catch(error){
            this.isProcessing = false
          Toast.fire({
          icon: "warning",
          title: "無法新增推文",
        });
    }
  },
  },
  computed:{
    ...mapState(['currentUser','isAuthenticated'])
  }
};
</script>



