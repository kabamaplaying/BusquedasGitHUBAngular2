"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var git_service_1 = require('../services/git.service');
var GitComponent = (function () {
    function GitComponent(_gitService) {
        this._gitService = _gitService;
    }
    GitComponent.prototype.search = function () {
        var _this = this;
        this._gitService.getUpdateUsername(this.usuarioname);
        this._gitService.getUsers().subscribe(function (user) {
            _this.user = user;
        });
        this._gitService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    };
    GitComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'git-app',
            templateUrl: 'git.component.html',
            providers: [git_service_1.GitServices]
        }), 
        __metadata('design:paramtypes', [git_service_1.GitServices])
    ], GitComponent);
    return GitComponent;
}());
exports.GitComponent = GitComponent;
//# sourceMappingURL=git.component.js.map