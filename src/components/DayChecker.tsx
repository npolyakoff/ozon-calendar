import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './DayChecker.css?module'

interface Props {
  day: number,
  value: number,
}

@Component
export default class DayChecker extends VueComponent<Props> {

    @Prop() private day!: number;
    @Prop() private value!: number;
    
    @Emit('change') change() {
        return this.day;
    }
    get hasTasks() : boolean {
        return this.$store.state.tasks.filter((el: Task) => el.day == this.day).length > 0;
    }

    render() {
        return (
            <div class={[styles.checker, this.hasTasks ? styles.checker_active : '']}>
                <input 
                    checked={this.value == this.day} 
                    onChange={this.change}
                    value={this.day} 
                    id={`day-${this.day}`} 
                    type="radio" 
                    name='days'
                />
                <label for={`day-${this.day}`}>
                    {this.day}
                </label>
            </div>
        )
    }
}
