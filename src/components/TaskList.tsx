import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import TaskItem from './TaskItem'
import CardInput from './CardInput';


import styles from './TaskList.css?module'


@Component
export default class TaskList extends VueComponent {
    
    get tasks() : [] {
        return this.$store.getters.dayTasks;
    }
    addTask(e: string) {
        this.$store.dispatch('addTask', { task : {text: e, day: this.$store.state.day, finished: false, id: this.tasks.length }})
    }
    updateTask(e: {}) {
        this.$store.dispatch('updateTask', e)
    }
    render() {
        return (
            <ul class={styles.taskList}>
                {
                    this.tasks.map((el: Task) => {
                        return <li class={styles.taskList__item}><TaskItem 
                            id={el.id} 
                            value={el.finished}
                            on-change={this.updateTask}
                        >
                            {el.text}
                        </TaskItem></li>
                    }) 
                }
                <CardInput on-change={this.addTask} class={styles.taskList__input}/>
            </ul>
        )
    }
}
