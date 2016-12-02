import {Component} from '@angular/core';
import { GitServices } from '../services/git.service';
@Component({
    moduleId:module.id,
    selector: 'git-app',
    templateUrl: 'git.component.html',
    providers:[GitServices]
})

export class GitComponent {
    user:any;
    repos:any;
    usuarioname:string;
    constructor(private _gitService:GitServices) {
       
        

    }

    search(){
        this._gitService.getUpdateUsername(this.usuarioname);
        this._gitService.getUsers().subscribe(user => {
             this.user = user;
        });
        this._gitService.getRepos().subscribe(repos => {
             this.repos = repos;
        });
    }
}