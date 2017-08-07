/**
 * Main js.
 *
 */
(function ($) {
    var body = $('body'),
        _window = $(window);


    $(function () {

        $('.carousel').carousel({
            interval: 2000
        });


        // $(window).load(function () {
        //     $('.autoshow').modal('show');
        // });

    });





})(jQuery);

// var myApp = angular.module('myApp', []);
// myApp.controller('myctrl',['$scope',function($scope){
//     $('#myModal').modal('show');
// }]);