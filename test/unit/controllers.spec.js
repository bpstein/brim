describe("brimAppController", function() {
  var controller;

  beforeEach(module("brimApp"));

  beforeEach(inject(function($controller) {
    controller = $controller("brimAppController");
  }));

  // beforeEach(module('toDoApp'));
  //
  // var ctrl;
  // var factory;
  // var httpbackend;
  // var data;
  // var fs;
  //
  // beforeEach(inject(function($controller,ToDoFactory,$httpBackend,FilterService){
  //   ctrl = $controller('ToDoController');
  //  	fs = FilterService;
  //   spyOn(fs,'amendToDos').and.returnValue(["ToDo1 : completed"]);
  //   factory = ToDoFactory;
  //   httpbackend = $httpBackend;
	// 	data = [new ToDoFactory('ToDo1',true),new ToDoFactory('ToDo2',false)];
  //   httpbackend.expect('GET','http://quiet-beach-24792.herokuapp.com/todos.json').respond(data);
  //   httpbackend.flush();
  // }));

});
