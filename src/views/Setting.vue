<template>
  <main class="container d-flex">
    <div class="container__left">
      <Navbar />
    </div>
    <div class="container__right d-flex">
      <div class="section">
        <h4 class="title">帳號設定</h4>
        
        <SettingForm        
          ref="formRef"
          :initialUserSetting="userData"
          @afterSubmit="handleAfterSubmit"
          
        ></SettingForm>
        
        <div class="d-flex justify-content-end">
          <button
            class="btn btn-main btn-main:hover btn-main:active"
            type="submit"
            v-on:click="getData"
            :disabled="isProcessing"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SettingForm from "./../components/SettingForm.vue";
import Navbar from "./../components/Navbar.vue";
import userApi from "./../apis/user";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    Navbar,
    SettingForm,
  },
  data() {
    return {
      userData: {},
      isProcessing: false,
    };
  },
  created() {
    const { id } = this.$route.params;
    console.log(id);
    this.fetchData(Number(id));
  },
  methods: {
    async fetchData(id) {
      try {
        const { data } = await userApi.getUser( {id} ); 
        console.log(data);
        this.userData = { ...data };
      } catch (error) {
        console.log('getUser error:',error);
        Toast.fire({
          icon: "warning",
          title: "無法讀取使用者",
        });
      }
    },

    // 呼叫子元件的handleForm方法
    getData() {
      this.$refs.formRef.handleForm();
    },
    //子元件傳入
    async handleAfterSubmit(formData) {
      this.userData = { ...formData };
      this.isProcessing = true
      try {       
       const { data } = await userApi.putUser({
        id:this.userData.id,
        account: this.userData.account.trim(),
          name: this.userData.name.trim(),
          email: this.userData.email.trim(),
          password: this.userData.password,
          checkPassword: this.userData.checkPassword,
       });        
       
       Toast.fire({
          icon: "success",
          title: "修改成功",
        });
        this.isProcessing = false 

      } catch (error) {
        this.isProcessing = false               
        const errorMessage = error.response.data.message;
        console.log( error.response.data.message)
        if (errorMessage === "Error: account 已存在") {
          Toast.fire({
            icon: "warning",
            title: "account 已重複註冊！",
          });
        }else if(errorMessage === "Error: email 已存在"){
          Toast.fire({
            icon: "warning",
            title: "email 已重複註冊！",
          });
        }else if(errorMessage === "Error: 所有欄位皆須填寫"){
          Toast.fire({
            icon: "warning",
            title: "所有欄位皆須填寫！",
          });
        }else {
        Toast.fire({
          icon: "warning",
          title: "無法修改請稍後再試",
        })
      }
      }
    },
    
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 639px;
  position: relative;
  border: 1px solid #e6ecf0;
  margin-left: 24px;
}

.title {
  padding: 24px 0 24px 24px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}

.btn {
  margin: 8px 23px 25px 0px;
  padding: 8px 24px;
}
</style>
