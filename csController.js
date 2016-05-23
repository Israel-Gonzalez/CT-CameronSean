(function() {
    'use strict';

    angular
        .module('csApp')
        .controller('csCtrl', csCtrl);


    function csCtrl() {
        var vm = this;
        var i;
        vm.multiple = [];

        for (i = 1; i < 100; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                vm.multiple.push('CameronSean');
            } else if (i % 3 === 0) {
                vm.multiple.push('Cameron');
            } else if (i % 5 === 0) {
                vm.multiple.push('Sean');
            } else {
                vm.multiple.push(i);
            }

        }

        console.log(vm.multiple);
    };


})();
