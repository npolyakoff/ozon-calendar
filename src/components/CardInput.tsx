import { Component, Prop, Vue, Emit} from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './CardInput.css?module'


@Component
export default class CardInput extends VueComponent {
    text: string = '';
    onInputChange(e: KeyboardEvent) {
        if (e.key == "Enter" && this.text.length > 0) {
            this.$emit('change', this.text);
            this.text = '';
        }
    } 
    clearOnBlur() {
        this.text = '';
    }
    render() {
    return (
        <input 
            vModel={this.text}
            type="text"
            placeholder="Текст" 
            class={styles.cardInput} 
            onKeyup={this.onInputChange}
            onBlur={this.clearOnBlur}
        />
    )
  }
}
