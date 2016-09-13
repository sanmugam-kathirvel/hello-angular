(function () {
    // define the app module **Modules
    // AngularJs/Application Name/Dependencies
    var app = angular.module('store', ['store-directives']);

    // creat ethe store controller **Controller
    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.product=[];

        // Get http call to get products.json
        $http.get('/angular-1.5/todo/products.json').success(function(data) {
            store.product = data.sampledata;
        });
        // this.products = [
        //     {
        //         name: "Product One",
        //         price: 118,
        //         description: "This is the test products..",
        //         canPurchase: true,
        //         image: "placeholder.png",
        //         reviews: [
        //             {
        //                 stars: 5,
        //                 body: "I love this product!",
        //                 author: "joe@thomas.com"
        //             },
        //             {
        //                 stars: 2,
        //                 body: "This product sucks",
        //                 author: "tim@hater.com"
        //             }
        //         ]
        //     },
        //     {
        //         name: "Product Two",
        //         price: 100,
        //         description: "This is the test products..",
        //         canPurchase: false,
        //         image: "placeholder.png",
        //         reviews: [
        //             {
        //                 stars: 4,
        //                 body: "I love this product!",
        //                 author: "joe@thomas.com"
        //             },
        //             {
        //                 stars: 3,
        //                 body: "This product sucks",
        //                 author: "tim@hater.com"
        //             }
        //         ]
        //     }
        // ];

    }]);


    // tabs Controller
    // creat ethe store controller **Controller
    app.controller("PanelController", function() {

        // init function to set default selected tab index
        this.init = function() {
            this.tab = 1;
        }
        this.init();

        // Show the tab
        this.selectTab = function(tabIndex) {
            this.tab = tabIndex;
        }

        // Show selected tab
        this.isSelected = function(tabIndex) {
            return this.tab === tabIndex;
        }

    });

    // Review controller to store the product review
    app.controller("ReviewController", ['$http', function($http){
        this.review = {};

        // Store review to the product reviews
        this.addReview = function(product) {
            // push submited review
            product.reviews.push(this.review);
            // clear the review to allow to enter new review

            // sending new review records
            $http.post('/product/review/add', { 'product' : product.id , 'review': this.review }).success(function(data) {
                console.log("data posted..");
            });

            this.review = {};
        }
    }]);

})();
