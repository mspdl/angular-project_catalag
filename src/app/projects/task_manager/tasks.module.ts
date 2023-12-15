import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListTaskComponent } from './list';
import { TaskDoneDirective, TaskService } from './shared';
import { TaskComponent } from './task';

@NgModule({
  declarations: [ListTaskComponent, TaskComponent, TaskDoneDirective],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TaskService],
})
export class TasksModule {}
