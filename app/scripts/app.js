'use strict';

angular.module('confusionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }
            })
                    // route for the aboutus page
            
                    // route for the contactus page
            

                       .state('app.listaquiz', {
                url: 'quiz/',
                views: {
                    'content@': {
                        templateUrl : 'views/quizlist.html',
                        controller  : 'QuizListController'
                   }
                }
            })
            

            // route for the dishdetail page
            .state('app.quiz', {
                url: 'quiz/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/quiz.html',
                        controller  : 'QuizController'
                   }
                }
            })
            .state('app.risultati', {
                url: 'risultati/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/risultati.html',
                        controller  : 'RisultatiController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
            
    })
