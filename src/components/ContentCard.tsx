import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './ContentCard.css?module'

interface Props {
  light?: boolean
}

@Component
export default class ContentCard extends VueComponent<Props> {

  @Prop({ default: false }) readonly light!: boolean

  render() {
    return (
      <div class={styles.contentCard}>
        <h3 class={[styles.contentCard__title, this.light ? styles.contentCard__title_light : 0]}>{this.$slots.header}</h3>
        {this.$slots.default}
      </div>
    )
  }
}
