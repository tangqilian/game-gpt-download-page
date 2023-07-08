import Header from '@/components/Header.vue'
import { mapMutations,mapState } from "vuex";
export const commonMixin = {
    components:{Header},
    data() {
        return {
        }
    },
    created() {
    },
    mounted(){
      if(this.userInfo.isNetwork&&this.userInfo.address){
        this.refreshData()
      }
    },
    computed: { ...mapState(['userInfo']) },
    methods: {
        ...mapMutations([ "setUserInfo"]),
        refreshData(){},
        copySuccess(){
          this.$toast( this.$t('Mixins.CopySuccess') )
        }, 
        copyError(){
          this.$toast( this.$t('Mixins.CopyError') )
        },
        comingSoon(){
          this.$toast( this.$t('Coming soon') )
        },
        
        verify(){
          if(!this.userInfo.address){
            this.$toast( this.$t('Mixins.walletToast1') )
            return true
          }else if(!this.userInfo.isNetwork){
            this.$toast( this.$t('Mixins.walletToast2') )
            return true
          }
          return false
        }
    },
    watch:{
        "userInfo.isNetwork": {
          deep: true,
          handler: function (newValue, oldValue) {
            if(newValue){
              if(!this.userInfo.address){
                return
              }
              this.refreshData()
            }
           
          }
        },
        "userInfo.address": {
          deep: true,
          handler: function (newValue, oldValue) {
            if(!this.userInfo.isNetwork){
              return
            }
            this.refreshData()
          }
        }
    }
}