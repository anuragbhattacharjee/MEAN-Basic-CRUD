import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'

@Injectable()
export class TasksService{
    constructor(private http: Http){
        console.log("Tasks service running");    
    }
    home = 'http://localhost:3000';

    getTasks(){
        return this.http.get(this.home + '/api/tasks');
    }

    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.home + '/api/task', JSON.stringify(newTask), {headers : headers});
    }

    deleteTask(id){
        return this.http.delete(this.home + '/api/task/' + id);
    }

    updateTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.home + '/api/task/' + task._id, JSON.stringify(task), {headers : headers});

    }
}