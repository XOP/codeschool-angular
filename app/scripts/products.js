/**
 * Created on 12.11.14.
 */

'use strict';

(function(){

    var app = angular.module('products', []);

    //
    // Name directive
    app.directive('productName', function(){
        return {
            restrict : 'A',
            templateUrl : 'partials/product_name.html'
        };
    });

    //
    // Description directive
    app.directive('productDescription', function(){
        return {
            restrict : 'E',
            templateUrl : 'partials/product_description.html',

            controller : function(){
                this.current = 0;
                this.setTab = function(val){
                    this.current = val;
                };
                this.isActive = function(val){
                    return val === this.current;
                };
            },
            controllerAs : 'descr'
        };
    });

})();