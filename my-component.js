const myComponent = {
    template:`<div>
    あああ
    {{ getTitle }}
    <div v-show="isShow">表示</div>
    </div>`,
    props:{
      title:{
        type:String
      },
      disabled:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        isShow: false,
        getTitle: this.title
      }
    }
  }