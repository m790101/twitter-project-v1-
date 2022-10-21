<template>
  <section>
     <h4 class="title">上線使用者<span>({{accounts.length}})</span></h4>
    <div class="tweet-card" v-for="account in accounts" :key="account.id">
      <div class="tweet-card__panel d-flex align-items-center">
        <router-link to="">
        <img
          :src="account.image | emptyImage"
          alt=""
          class="tweet-card__panel__avatar"
        />
        </router-link>

          <div
            class="
              tweet-card__panel__content
              d-flex
              align-items-center
            "
          >
            <p class="fw-bold truncate tweet-card__panel__content__name">{{ account.name }}</p>
            <p class="fw-bold truncate color-second tweet-card__panel__content__account">{{account.account}}</p>
          </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.title {
  padding: 24px 0 24px 24px;
  border-bottom: 1px solid #e6ecf0;
  font-weight: 700;
}
.tweet-card {
  width:414px;
  &__panel {
    padding: 16px 0 17px 24px;
    border-bottom: 1px solid #e6ecf0;
    &__avatar {
      width: 50px;
      height: 50px;
    }
    &__content {
      margin-left: 8px;
      padding-right: 30px;
      &__name {
        margin-left: 10px;
         margin-right: 5px;
      }
      &__account{
        font-weight:400;
      }
    }
  }
}

.truncate{
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
}

</style>

<script>
import {mapState} from 'vuex'
import {emptyImageFilter} from './../utils/mixins'
export default {
  props: {
    initialAccounts: {
      type: Array,
      required:true
    },
  },
  data() {
    return {
      accounts: [],
    };
  },
  computed:{
    ...mapState(['currentUser','isAuthenticated'])
  },
  mixins:[emptyImageFilter],
  watch:{
    initialAccounts(newValue){
      this.accounts = newValue
    }
  }
};
</script>
