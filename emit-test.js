let emitTest = {
    template:`<div>
    <button @click="childMethod">子側のボタン</button>
    </div>`,
    methods:{
      childMethod(){
        this.$emit('custom-event', '子の値')
      }
    }
  }