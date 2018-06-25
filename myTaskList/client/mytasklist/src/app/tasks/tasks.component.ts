import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

import {Task} from '../models/Task';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    tasks : Task[];
    title : string;
    
    constructor(private tasksService : TasksService){
        this.tasksService.getTasks().subscribe(res => {
            this.tasks = res.json();
        })
    }

    addTask(event){
        //event.preventDefault();
        //console.log(this.title);
        var newTask ={
            title : this.title,
            isDone : false
        }
        if(newTask.title){
            this.tasksService.addTask(newTask).subscribe(res =>{
                console.log(res.json());
                // this.tasksService.getTasks().subscribe(res => {
                //     this.tasks = res.json();
                // })
                this.tasks.push(res.json());
                this.title = '';
            });
        }
    }

    deleteTask(id){
        var tasks = this.tasks;

        this.tasksService.deleteTask(id).subscribe(data => {
            //console.log(data.json());
            for(var i=0; i < tasks.length; i++){
                if(tasks[i]._id == id){
                    tasks.splice(i, 1);
                }
            }
        });
    }

    updateTask(task){
        var _task = {
            _id : task._id,
            title: task.title,
            isDone: !task.isDone
        }
        this.tasksService.updateTask(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }
}
