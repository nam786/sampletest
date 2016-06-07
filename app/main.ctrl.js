angular.module('myApp').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.shows = [
        {
            title: 'Walk the heaven',
            year : 2000,
            favourite:true
        },
        {
            title: 'Game of thrones',
            year : 2004,
            favourite:false
        },
        {
            title: 'Hello Dolly',
            year : 1992,
            favourite:true
        },
        {
            title: 'Can you cook',
            year : 1992,
            favourite:false
        }
    ];

    vm.orders =[
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];


    vm.new = {};
    vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
    };

});
