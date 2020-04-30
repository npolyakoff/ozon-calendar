import { Component, Vue } from 'vue-property-decorator';
import CalendarCard from './components/CalendarCard';
import TaskCard from './components/TaskCard';


import styles from './App.css?module'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <div class={styles.container}>
          <CalendarCard class={styles.container__item}></CalendarCard>
          <TaskCard class={styles.container__item}></TaskCard>
        </div>
      </div>
    )
  }
}
