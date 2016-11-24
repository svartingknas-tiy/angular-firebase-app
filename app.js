'use strict';

var app = angular.module('todoApp', ['firebase']);

app.controller('TodoCtrl', function($scope, $firebaseArray, $firebaseObject) {

  var ref = firebase.database().ref().child('todos');

  this.todos = $firebaseArray(ref);
  // [
    // 'reference https://github.com/firebase/angularFire',
    // 'reference https://github.com/firebase/angularfire/blob/master/docs/quickstar.md',
    // 'reference https://github.com/firebase/angularfire/blob/master/docs/reference.md',
    // 'Give Sean high quality feedback on the classrom section of bootcamp',
    // 'Have a great Thanksgiving holiday',
    // 'Have more confidence in your coding capabilities',
    // 'Build an awesome personal project'
  // ]

  this.addNewTodo = function(keyEvent) {
    if (keyEvent === undefined || keyEvent.which === 13) {
    // this.todos.push(this.newTodo)
    this.todos.$add(this.newTodo)
    this.newTodo = ''
    }
  }

  this.triggerEditMode = function() {
    this.editMode = !this.editMode
  }

  this.editTask = function(todo) {
    this.todos.$save(todo)
  }

  this.deleteTodo = function(todo) {
    // this.todos.splice(index, 1)
    this.todos.$remove(todo)
  }
})
