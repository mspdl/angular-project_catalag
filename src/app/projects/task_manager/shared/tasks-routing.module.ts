import { Routes } from '@angular/router';
import { ListTaskComponent } from '../list';
import { TaskComponent } from '../task';

export const TaskRoutes: Routes = [
  {
    path: 'task_manager',
    component: ListTaskComponent,
  },
  { path: 'tasks', redirectTo: 'task_manager' },
  { path: 'task_manager/task', component: TaskComponent },
  { path: 'task_manager/task/:id', component: TaskComponent },
];
