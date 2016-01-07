'use strict';

angular.module('confusionApp')

.controller('QuizController', ['$scope', '$stateParams','menuFactory', function($scope,$stateParams, menuFactory) {

               
            var mydish= {};
            mydish = menuFactory.getQuiz($stateParams.id);
			$scope.mydish= mydish; 
            $scope.ndomande = mydish.ndomande;
 
			
        }])
        .controller('RisultatiController', ['$scope', '$stateParams','menuFactory', function($scope,$stateParams, menuFactory) {

               
            var mydish= menuFactory.getQuiz($stateParams.id); 
            $scope.mydish= mydish; 
            $scope.ndomande = mydish.ndomande;
			
           				$scope.totale =0;
           				$scope.passato =0;
				for(var i=0;i<$scope.ndomande;i++){
				console.log($scope.mydish.domande[i].scelta);
									console.log($scope.mydish.domande[i].fornita);

					if($scope.mydish.domande[i].tipologia=="text" && $scope.mydish.domande[i].fornita === 
					$scope.mydish.domande[i].testocorr){
						$scope.totale+=$scope.mydish.domande[i].punteggio;
					}
					
					if($scope.mydish.domande[i].tipologia=="radio" && $scope.mydish.domande[i].scelta === 
					$scope.mydish.domande[i].rispostacorretta){
						$scope.totale+=$scope.mydish.domande[i].punteggio;
					}
				}
				if(parseInt($scope.totale)/50>=0.6){
					$scope.passato = 1;
				}
        }])
        
        
.controller('QuizListController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

               
            var dishes= menuFactory.getQuizzes(); 
            $scope.piatti= dishes;   
        }])

;
