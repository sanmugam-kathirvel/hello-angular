(function () {
    /** Directives **/
    var app = angular.module('store-directives', []);
    app.directive('productPanelsTab', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html'
        };
    });
})();
