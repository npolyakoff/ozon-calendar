import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './TaskItem.css?module'

interface Props {
    value: Boolean,
    id: number
}

@Component
export default class TaskItem extends VueComponent<Props> {

    @Prop() private value!: Boolean;
    @Prop() private id!: number;
    @Emit('change') updateOnChange() {
        return {day: this.$store.state.day, id: this.id, result: !this.value }
    } 

    render() {
        return (
            <div class={styles.taskItem}>
                <input 
                    id={`task-${this.id}`}
                    type="checkbox" 
                    name='tasks'
                    checked={this.value} 
                    on-change={this.updateOnChange}
                    class={styles.taskItem__input}
                />
                <label for={`task-${this.id}`} >
                    {this.$slots.default}
                </label>
            </div>
        )
    }
}
