import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task = new Task();

  onEditMode: boolean = true;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.params['id'];
    if (!taskId) {
      this.onEditMode = false;
    } else {
      console.log('on component = ' + JSON.stringify(this.taskService.getTaskById(taskId)))
      this.task = this.taskService.getTaskById(taskId);
    }
  }

  onUpdate(): void {
    if (this.taskForm.form.valid) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['tasks']);
    }

  }
  onCreate(): void {
    if (this.taskForm.form.valid) {
      this.taskService.createTask(this.task);
      this.router.navigate(['tasks']);
    }
  }
}
