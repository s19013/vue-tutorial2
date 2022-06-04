import {grandChildComponent} from './grand-child-component.js';

export const childComponent = {
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