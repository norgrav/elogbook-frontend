(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobUpdateController', ['jobUpdateResponse', JobUpdateController])

    function JobUpdateController(jobUpdateResponse) {
        var vm = this;
        vm.job = jobUpdateResponse;
        vm.update = update;

        function update() {
            $http.put('http://localhost:8001/job', vm.job).then(function (response) {
                $state.go('jobs.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed');
            });
        }
    }
})();