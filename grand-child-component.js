export const grandChildComponent = {
    template:`
    <div>
    孫コンポーネント
    <button @click="testEvent">ボタン</button>
    </div>
    `,
    methods: {
        testEvent(){
            eventBus.$emit('eventBus-test','孫のボタンをおしました')
        }
    },
}