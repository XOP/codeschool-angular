/**
 * Created on 07.11.14.
 */

'use strict';

(function(){

    // data
    var gems = [
        {
            name: 'Azurite',
            price: 2,
            isAvailable: true,
            isHidden: false,
            descr: 'Quisque sollicitudin sapien sapien, vitae ullamcorper tortor commodo sit amet. Maecenas iaculis risus eu sodales dignissim. Praesent posuere est ornare orci scelerisque cursus. Nulla a orci nec augue dignissim sagittis. Vivamus libero ante, laoreet sit amet purus eget, finibus tristique orci. Fusce vel faucibus ex. Quisque scelerisque ex libero, sed porta mauris faucibus quis. Nam dictum venenatis rhoncus. Cras condimentum convallis velit. Vivamus non arcu dapibus, gravida eros nec, rutrum felis. Pellentesque tempor odio nulla, in rutrum massa viverra placerat. Aenean eget metus volutpat, consectetur ipsum vitae, auctor augue. Nunc ut purus felis. Morbi molestie pharetra nisi ut ornare.',
            images: [
                {
                    full : 'images/g1.jpg',
                    thumb : 'images/g1_t.jpg'
                }
            ],
            chars: [
                'shiny', 'ruby', 'pretty', 'valuable', 'niccce!'
            ]

        },
        {
            name: 'Fooffy',
            price: 5.95,
            isAvailable: false,
            isHidden: false,
            descr: 'Aenean eget metus volutpat, consectetur ipsum vitae, auctor augue. Nunc ut purus felis. Morbi molestie pharetra nisi ut ornare.',
            images: [
                {
                    full : 'images/g2.jpg',
                    thumb : 'images/g2_t.jpg'
                }
            ],
            chars: [
                'small', 'healthy', 'cheapest in the USA', 'bloody'
            ]
        }
    ];

    var reviews = [
        {
            stars : '3',
            body : 'Парадигма уязвима. Из нетрадиционных способов циклизации обратим внимание на случаи, когда впечатление недоступно диссонирует музыкальный диалогический контекст. Различное расположение, чтобы уловить хореический ритм или аллитерацию на "л", самопроизвольно. Декодирование, основываясь на парадоксальном совмещении исключающих друг друга принципов характерности и поэтичности, редуцирует размер.',
            author : 'letterman89@gmail.com'
        },
        {
            stars : '1',
            body : 'Декодирование, основываясь на парадоксальном совмещении исключающих друг друга принципов характерности и поэтичности, редуцирует размер.',
            author : 'roofy@gmail.com'
        },
        {
            stars : '5',
            body : 'Различное расположение, чтобы уловить хореический ритм или аллитерацию на "л", самопроизвольно. Декодирование, основываясь на парадоксальном совмещении исключающих друг друга принципов характерности и поэтичности, редуцирует размер.',
            author : ''
        }
    ];

    // app
    var app = angular.module('gemStore', ['filters']);

    //
    // StoreController
    app.controller('StoreController', function(){
        this.products = gems;
    });

    //
    // DescrController
    app.controller('DescrController', function(){
        this.current = 0;
        this.setTab = function(val){
            this.current = val;
        };
        this.isActive = function(val){
            return val === this.current;
        };
    });

    //
    // ReviewController
    app.controller('ReviewController', function(){
        this.reviews = reviews;

        this.review = {};

        this.addReview = function(){
            this.reviews.push(this.review);
            this.review = {};
        };

    });

})();
