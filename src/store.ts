import Vue from 'vue'
import Vuex from 'vuex'
import { Mutation, State, Getter, Action, createVuexStore } from 'vuex-simple';


Vue.use(Vuex)

class MyStore {
  constructor(date: Date = new Date(), day: number = new Date().getDate(), tasks: Task[] = []) {
    this.date = date;
    this.day = day;
    this.tasks = tasks;
  }
  @State() 
  public date: Date;
  @State() 
  public day: number;
  @State()
  public tasks: Task[];
  
  @Getter()
  public get currentMonthAndYear() {
    return this.date.toLocaleString('ru-RU', { month: 'long' }) + ' ' + this.date.getFullYear();
  } 
  @Getter()
  public get numberOfDays() {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate(); 
  }
  @Getter() 
  public get dayTasks() {
    return this.tasks.filter((el: Task) => el.day == this.day);
  }

  @Mutation()
  public ADD_TASK( payload: { task: Task }) {
    this.tasks.push(payload.task)
  }
  @Mutation()
  public UPDATE_TASK(payload: {day: number, id: number, result: boolean}) {
    let taskIndex = this.tasks.findIndex(el => el.day == payload.day && el.id == payload.id)
    this.tasks[taskIndex].finished = payload.result;
  }
  @Mutation() 
  public CHANGE_DAY(payload : { day: number }) {
    this.day = payload.day;
  }

  @Action() 
  public addTask(payload: { task: Task }) {
    this.ADD_TASK(payload)
  }
  @Action() 
  public updateTask(payload: {day: number, id: number, result: boolean}) {
    this.UPDATE_TASK(payload)
  }
}

const instance = new MyStore();
export default createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: []
});