'use strict';

angular.module('todoListApp')
.service('todoService', function($http) {
    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback);
    };
});