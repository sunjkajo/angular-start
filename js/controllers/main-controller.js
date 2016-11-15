'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, todoService) {

    todoService.getTodos(function(response) {
        $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodos = function() {
        $scope.todos.filter(function(todo) {
            if(todo.edited) {
                return todo;
            }
        });
    };

    $scope.addTodo = function() {
        var newTodo = {"name" : "new task!"}
        $scope.todos.unshift(newTodo);
    };

});