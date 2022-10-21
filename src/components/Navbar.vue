<template>
  <nav class="d-flex flex-column justify-content-between">
    <div  class="nav-tweet-modal">
        <NewTweetModal  
         @afterCreatedTweet="handleAfterCreatedTweet"
        v-if="isEditing" @afterCloseModal="handleAfterCloseModal" />
    <div class="modal-bg" :class="{ active: isEditing }"></div>
    </div>

    <div class="menu d-flex flex-column">
      <div>
        <img src="./../assets/logo.png" alt="" class="menu__logo" />
      </div>
      <div class="menu__function">
        <router-link
          to="/main"
          class="text-center d-flex link align-items-center"
        >
          <img
            src="./../assets/icon/home.png"
            alt=""
            class="menu__function__icon"
          />
          <img
            src="./../assets/icon/home-active.png"
            alt=""
            class="menu__function__icon__active"
          />
          <span>首頁</span>
        </router-link>
      </div>
            <div class="menu__function">
        <router-link
          to="/public-chat"
          class="text-center d-flex link align-items-center"
        >
          <img
            src="./../assets/icon/chat.png"
            alt=""
            class="menu__function__icon"
          />
          <img
            src="./../assets/icon/chat-active.png"
            alt=""
            class="menu__function__icon__active"
          />
          <span>公開聊天室</span>
        </router-link>
      </div>
      <div class="menu__function">
        <router-link
          :to="{name:'user-information', params:{id:currentUser.id}}"
          class="text-center d-flex link align-items-center"
        >
          <img
            src="./../assets/icon/profile.png"
            alt=""
            class="menu__function__icon"
          />
          <img
            src="./../assets/icon/profile-active.png"
            alt=""
            class="menu__function__icon__active"
          />
          <span>個人資料</span>
        </router-link>
      </div>
      <div class="menu__function">
        <router-link
        :to="{name:'setting', params:{id:currentUser.id}}"
          class="text-center d-flex link align-items-center"
        >
          <img
            src="./../assets/icon/setting.png"
            alt=""
            class="menu__function__icon"
          />
          <img
            src="./../assets/icon/setting-active.png"
            alt=""
            class="menu__function__icon__active"
          />
          <span>設定</span>
        </router-link>
      </div>
      <button class="btn-main" @click="newTweet">推文</button>
    </div>

    <div class="logout d-flex flex-column justify-contnet-center">
      <div class="d-flex link align-items-center cursor-pointer" @click="logout">
        <img
          src="./../assets/icon/logout.png"
          alt=""
          class="menu__function__icon"
        />
        <img
          src="./../assets/icon/logout-active.png"
          alt=""
          class="menu__function__icon__active"
        />
        <span >登出</span>
      </div>
    </div>

  </nav>
</template>

<style scoped lang="scss">
nav {
  width: 178px;
  height: 100vh;
  position:relative;
}
.menu {
  flex: 1;
  & &__logo {
    width: 40px;
    height: 40px;
    margin: 13px 0 30px 13px;
  }
  & &__function {
    margin-bottom: 40px;
  }
}
.menu__function__icon {
  max-width: 21px;
  margin-right: 17px;
  margin-left: 18px;

  &__active {
    display: none;
    max-width: 21px;
    margin-right: 17px;
    margin-left: 18px;
  }
}

.logout {
  margin-bottom: 16px;
}

.link {
  color: var(--8-gray);
  font-weight: 700;
  font-size: 18px;
  &:hover {
    color: var(--brand-color);
    .menu__function__icon {
      display: none;
      &__active {
        display: initial;
      }
    }
  }
  &:active {
    color: var(--brand-color);
    font-weight: 700;
    font-size: 18px;
    .menu__function__icon {
      display: none;
      &__active {
        display: initial;
      }
    }
  }
}

.nav-tweet-modal{
  position: relative;
  left:calc(178px + 24px);
  top:74px;
}

.modal-bg {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;

  &.active {
    display: initial;
    z-index:2;
  }
}
</style>

<script>
import NewTweetModal from '../components/NewTweetModal.vue'
import{ mapState} from 'vuex'
export default {
  data() {
    return {
      user:{
        id:1
      },
      isEditing: false,
    };
  },
  methods: {
    newTweet() {
      this.isEditing = true;
    },
    handleAfterCloseModal(){
      this.isEditing = false;
    },
    handleAfterCreatedTweet(playLoad){
      this.isEditing = false
      console.log(playLoad)
      this.$emit('navCreateTweet',playLoad)
    },
    logout(){
      this.$emit('socketLogout')
      this.$store.commit('revokeAuthentication')
      this.$router.push('/logIn')
    }
  },
  components:{
    NewTweetModal
  },
  computed:{
    ...mapState(['currentUser', 'isAuthenticated'])
  }
};
</script>
