import {grandChildComponent} from './grand-child-component.js';

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