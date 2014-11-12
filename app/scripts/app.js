/**
 * Created on 07.11.14.
 */

'use strict';

(function(){

    var app = angular.module('gemStore', ['filters', 'products', 'reviews']);

    //
    // StoreController
    app.controller('StoreController', ['$http', '$filter', function($http, $filter){

        var store = this;
        store.products = [];

        $http
            .get('static/products.json')
            .success(function(data){
                // assign data
                store.products = data;

                // randomizing chars
                var c = store.products.length;
                while(c--){
                    for (var key in store.products[c]) {
                        if(key === 'chars'){
                            store.products[c].chars = $filter('randomize')(store.products[c].chars);
                        }
                    }
                }
            })
            .error(function(){
                window.alert('something crashed');
            })
        ;

    }]);

})();
