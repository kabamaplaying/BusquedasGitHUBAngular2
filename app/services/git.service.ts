import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GitServices{
    private username ='TU_usuarioGitHub';
    private cliente_id ='TU_ClienteGitHUb';
    private clienteid_secret='TU_ClienteSercretGitHUB';

    constructor(private _http:Http){
        console.log('#####Servicio desde GitService######');
        
    }

    getUsers(){
      return  this._http.get('https://api.github.com/users/'+this.username)
                  .map(resp => resp.json());
    }
    getRepos(){
      return  this._http.get('https://api.github.com/users/'+this.username+'/repos')
                  .map(resp => resp.json());
    }
    getUpdateUsername(username:string){
        this.username = username;
    }
}