import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import ContentCard from './ContentCard';
import DayChecker from './DayChecker';

import styles from './CalendarCard.css?module'

@Component
export default class CalendarCard extends VueComponent {
    weekDays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    
    changeDay(e: number) {
        this.day = e;
    }
    get date() {
        return this.$store.state.date
    }
    get day() : number {
        return this.$store.state.day;
    }

    set day(val: number) {
        this.$store.commit('CHANGE_DAY', { day: val })
    }


    get firstDayOfWeek(): number {
        let day = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        return day == 0 ? 7 : day;
    }

    get skippedDays(): any[] {
        let skipped: any[] = [];
        for (let i = 1; i < this.firstDayOfWeek; i++) {
            skipped.push(<div></div>)
        }
        return skipped;
    }
    
    get monthDays(): any[] {
        let days = [];
        for (let i = 1; i <= this.$store.getters.numberOfDays; i++) {
            days.push(<DayChecker 
                        value={this.day} 
                        on-change={this.changeDay} 
                        day={i}/>)
        }
        return days;
    }

    render() {
    return (
        <ContentCard>
            <span slot="header">{this.$store.getters.currentMonthAndYear}</span>
            <div class={styles.grid}>
                {this.weekDays.map((el, i) => (<div class={styles.weekDays} key={i}>{el}</div>))}
                {this.skippedDays}
                {this.monthDays}
            </div>
        </ContentCard>
    )
  }
}
