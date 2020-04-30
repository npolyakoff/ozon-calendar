import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import ContentCard from './ContentCard';
import TaskList from './TaskList';

import styles from './TaskCard.css?module'


@Component
export default class TaskCard extends VueComponent {
    
    render() {
        return (
        <ContentCard light={true}>
            <span slot="header">события</span>
            <TaskList/>
        </ContentCard>
        )
    }
}
