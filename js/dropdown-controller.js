// Angular dropdownApp model
var app = angular.module('dropdownApp', []);

app.controller('dropdownController', function($scope) {
  var vm = this;
  vm.totalRoom = 1;
  vm.options = [
      {
        id: 1,
        name: "Adult",
        age: "12",
        count: 2
      },
      {
        id: 2,
        name: "Child",
        age: "12",
        count: 0
      }
  ]
  
  vm.totalPeople = countTotalPeople();

  vm.increaseCount = function (id) {
    vm.options[id-1].count++;
    vm.totalPeople++;
  }

  vm.decreaseCount = function (id) {
    vm.options[id-1].count--;
    vm.totalPeople--;
  }

  function countTotalPeople () {
    var count = 0;

    for (i = 0; i < vm.options.length; i++) {
        count = count + vm.options[i].count;
      }
    return count;
  }

}).directive('popover', function($compile, $timeout){
  return {
    restrict: 'A',
    link:function(scope, el, attrs){
            var content = $("#popover-content").html();
            var compiledContent = $compile(content)(scope);
            var options = {
                content: compiledContent,
                html: true,
            };
            el.popover(options);
    }
  }
});
