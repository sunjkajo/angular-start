angular.module('todoListApp')
.directive('todosDirective', function() {
    return {
        templateUrl: 'template/todos.html',
        controller: 'mainCtrl',
        replace: true   // da se skloni naziv taga u html
    }
});