angular.module("pure", ['ngRoute'])

angular.module("pure").config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '../html/landing.html'
		})
		.when('/products', {
			templateUrl : '/html/products.html'
		})
		.when('/contact', {
			templateUrl : '/html/contact.html'
		})
		.when('/blog', {
			templateUrl : '/html/blog.html'
		})
		.when('/party', {
			templateUrl : '/html/party.html'
		})
		.when('/videos', {
			templateUrl : '/html/videos.html'
		})
		// .when('/', {
		// 	templateUrl : '/html/landing.html'
		// })
		// .when('/', {
		// 	templateUrl : '/html/landing.html'
		// })
	
})