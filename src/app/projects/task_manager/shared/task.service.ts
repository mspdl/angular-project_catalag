import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  LOCAL_TASKS = 'tasks';

  constructor() {}

  getAllTasks(): Task[] {
    const tasks = localStorage[this.LOCAL_TASKS];
    return tasks ? JSON.parse(tasks) : [];
  }

  createTask(task: Task): void {
    const currentTasks = this.getAllTasks();
    task.id = new Date().getTime() + Math.random();
    currentTasks.push(task);
    localStorage[this.LOCAL_TASKS] = JSON.stringify(currentTasks);
  }

  getTaskById(taskId: number): Task {
    const currentTasks: Task[] = this.getAllTasks();
    return currentTasks.find((task) => (task.id === taskId));
  }

  updateTask(updatedTask: Task): void {
    const currentTasks: Task[] = this.getAllTasks();
    const foundTaskIndex = currentTasks.findIndex(
      (task) => task.id == updatedTask.id
    );
    if (foundTaskIndex >= 0) {
      currentTasks[foundTaskIndex] = updatedTask;
    }
    localStorage[this.LOCAL_TASKS] = JSON.stringify(currentTasks);
  }

  removeTask(taskId: number) {
    const currentTasks: Task[] = this.getAllTasks();
    const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
    localStorage[this.LOCAL_TASKS] = JSON.stringify(updatedTasks);
  }

  changeTaskStatus(checkedTask: Task) {
    const currentTasks: Task[] = this.getAllTasks();
    const foundTaskIndex = currentTasks.findIndex((task) => task.id == checkedTask.id);
    if (foundTaskIndex >= 0) {
      currentTasks[foundTaskIndex].isDone =
        !currentTasks[foundTaskIndex].isDone;
    }
    localStorage[this.LOCAL_TASKS] = JSON.stringify(currentTasks);
  }

}
