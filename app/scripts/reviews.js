/**
 * Created on 12.11.14.
 */

'use strict';

(function(){

    var app = angular.module('reviews', []);

    //
    // Form directive
    app.directive('reviews', function(){
        return {
            restrict : 'E',
            templateUrl : 'partials/reviews.html',

            controller : function($http){

                var list = this;
                list.reviews = [];

                $http
                    .get('static/reviews.json')
                    .success(function(data){
                        // assign data
                        list.reviews = data;
                    })
                    .error(function(){
                        window.alert('something crashed');
                    })
                ;

                this.review = {};

                this.addReview = function(){
                    this.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs : 'reviewCtrl'
        };
    });

})();