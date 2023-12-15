import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.updateTasks();
  }

  updateTasks(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  onRemoveTask($event: MouseEvent, task: Task): void {
    $event.preventDefault();
    if (confirm(`Do you want to remove the task ${task.name}?`)) {
      this.taskService.removeTask(task.id);
      this.updateTasks();
    }
  }

  onCheckTask(task: Task): void {
    this.taskService.changeTaskStatus(task);
    this.updateTasks();
  }
}
