import grandChildComponent from 'grand-child-components';

const childComponent = {
    template:`
    <div>
    子供コンポーネント
    <grand-child-component class="grand_child"></grand-child-component>
    </div>
    `,
    components:{
        grandChildComponent
    }
}