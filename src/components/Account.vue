<template>
  <section>
    <div class="tweet-card" v-for="account in accounts" :key="account.id">
      <div class="tweet-card__panel d-flex">
        <router-link :to="{name:'user-information',params:{id:account.id}}">
        <img
          :src="account.image | emptyImage"
          alt=""
          class="tweet-card__panel__avatar"
        />
        </router-link>

        <div class="tweet-card__panel__content">
          <div
            class="
              tweet-card__panel__content__title
              d-flex d-flex
              align-items-center
              justify-content-between
            "
          >
            <p class="fw-bold truncate">{{ account.name }}</p>
            <div class="" v-if="account.id !== currentUser.id">
              <button
                class="btn-main btn-following"
                v-if="account.isFollowing"
                @click="removeFollowing(account.followingId)"
              >
                正在跟隨
              </button>
              <button
                class="btn-white btn-follow"
                v-else
                @click="addFollowing(account.followingId)"
              >
                追隨
              </button>
            </div>
          </div>
          <div class="tweet-card__panel__content__text">
            <p>
              {{ account.introduction }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.tweet-card {
  width: 639px;
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
      flex: 1;
      &__text {
        margin-top: 8px;
        width:90%;
         overflow-wrap: anywhere;
      }
    }
  }
}

.btn-following {
  width: 96px;
}
.btn-follow {
  width: 64px;
}

.truncate{
  white-space: nowrap; 
  width: 300px; 
  overflow: hidden;
  text-overflow: ellipsis; 
}

</style>

<script>
import userApi from "./../apis/user";
import { Toast } from "./../utils/helpers";
import {mapState} from 'vuex'
import {emptyImageFilter} from './../utils/mixins'
export default {
  props: {
    initialData: {
      type: Array,
    },
  },
  data() {
    return {
      isfollowing: false,
      accounts: [],
    };
  },
  watch: {
    initialData() {
      this.accounts = this.initialData;
    },
  },
  methods: {
    async removeFollowing(id) {
      try {
        const { data } = await userApi.removeFollowing(id);
        if (data.status !== "success") return new Error();
        this.accounts = this.accounts.map((account) => {
          if (account.followingId === id) {
            return {
              ...account,
              isFollowing: false,
            };
          }
          return account;
        });
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取消追蹤使用者",
        });
      }
    },
    async addFollowing(id) {
      try {
        const { data } = await userApi.addFollowing({ id });
        if (data.status !== "success") return new Error();
        this.accounts = this.accounts.map((account) => {
          if (account.followingId === id) {
            return {
              ...account,
              isFollowing: true,
            };
          }
          return account;
        });
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法追蹤使用者",
        });
      }
    },
  },
  computed:{
    ...mapState(['currentUser','isAuthenticated'])
  },
  mixins:[emptyImageFilter]
};
</script>


