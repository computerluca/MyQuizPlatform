'use strict';

angular.module('confusionApp')
        .service('menuFactory',function() {    
            
            var quiz = [
                {
                          id:0,
			titolo:"Quiz di merda",
			argomento:"generale",
			hash:"b36051603aefc721a6dbdd631e1753f2",
			sufficienza:60,
			ndomande:7,
			
          			domande:[
          			{
				id:0,
				titolo:"Quanto fa due più due",
				rispostacorretta:1,
				tipologia:"radio",
				punteggio:10,
				obbligatoria:0,
				risposte:
					[
                {
					id:0,
                    risposta: "Peter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter Pan",
                    
                },
                {
					id:1,
			risposta:"addddd",
		},
		{
			id:2,
			risposta:"flaksjldòfkj",
			
		},
		{
			id:3,
			risposta:"lsadjk",
			
		}
		]
	},
	{
				id:1,
				titolo:"Quanto fa due più due",
				rispostacorretta:2,
				tipologia:"radio",
				punteggio:10,
				obbligatoria:0,
				risposte:
					[
                {
					id:0,
                    risposta: "Peter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter Pan",
                    
                },
                {
					id:1,
			risposta:"addddd",
		},
		{
			id:2,
			risposta:"flaksjldòfkj",
			
		},
		{
			id:3,
			risposta:"lsadjk",
			
		}
		]
	},
	{
				id:2,
				titolo:"Quanto fa due più tre",
				testocorr:"merda",
				tipologia:"text",
				punteggio:10,
				risposte:
					[
              
		]
	},
	{
				id:3,
				titolo:"Quanto fa due più tre",
				punteggio:10,
				testocorr:"cazzo",
				tipologia:"text",
				risposte:
					[
              
		]
	},
	{
				id:4,
				titolo:"Quanto fa due più tre",
				punteggio:10,
				testocorr:"ciao",
				tipologia:"text",
				risposte:
					[
              
		]
	},

	{
				id:5,
				titolo:"Quanto fa due più tre",
				punteggio:10,
				testocorr:"ciao",
				tipologia:"text",
				risposte:
					[
              
		]
	},

	{
				id:6,
				titolo:"Quanto fa due più tre",
				punteggio:10,
				testocorr:"ciao",
				tipologia:"text",
				risposte:
					[
              
		]
	}]
},
 {
                          id:1,
			titolo:"Quiz di merda",
			argomento:"generale",
			hash:"b36051603aefc721a6dbdd631e1753f2",
			sufficienza:60,
			ndomande:5,
			
          			domande:[
          			{
				id:0,
				titolo:"Quanto fa due più due",
				rispostacorretta:1,
				tipologia:"radio",
				punteggio:10,
				obbligatoria:0,
				risposte:
					[
                {
					id:0,
                    risposta: "Peter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter Pan",
                    
                },
                {
					id:1,
			risposta:"addddd",
		},
		{
			id:2,
			risposta:"flaksjldòfkj",
			
		},
		{
			id:3,
			risposta:"lsadjk",
			
		}
		]
	},
	{
				id:1,
				titolo:"Quanto fa due più due",
				rispostacorretta:1,
				tipologia:"radio",
				punteggio:10,
				obbligatoria:0,
				risposte:
					[
                {
					id:0,
                    risposta: "Peter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter PanPeter Pan",
                    
                },
                {
					id:1,
			risposta:"addddd",
		},
		{
			id:2,
			risposta:"flaksjldòfkj",
			
		},
		{
			id:3,
			risposta:"lsadjk",
			
		}
		]
	},
	{
				id:2,
				titolo:"Quanto fa due più tre",
				rispostacorretta:2,
				tipologia:"text",
				risposte:
					[
              
		]
	},
	{
				id:3,
				titolo:"Quanto fa due più tre",
				rispostacorretta:2,
				tipologia:"text",
				risposte:
					[
              
		]
	},
	{
				id:4,
				titolo:"Quanto fa due più tre",
				rispostacorretta:2,
				tipologia:"text",
				risposte:
					[
              
		]
	}]
},
                {
                          id:2,
			titolo:"Quiz di merdone",
			argomento:"baglioni",
			hash:"d0bf12570e6ca6387403671968b81866",
			ndomande:3,
          			domande:[
          			{
				id:0,
				titolo:"Quanto fa due più due",
				rispostacorretta:2,
				tipologia:"text",
				risposte:
					[
                {
					id:0,
                    risposta: "Peter Pan",
                    
                },
                {
					id:1,
			risposta:"addddd",
		}
		]
	},
	{
				id:1,
				titolo:"Quanto fa due più due",
				rispostacorretta:2,
				tipologia:"radio",
				risposte:
					[
                {
					id:0,
                    risposta: "Peter Pan",
                    
                },
                {
					id:1,
			risposta:"addddd",
		}
		]
	},
	{
				id:2,
				titolo:"Quanto fa due più due",
				rispostacorretta:2,
				tipologia:"radio",
				risposte:
					[
                {
					id:0,
                    risposta: "Peter Pan",
                    
                },
                {
					id:1,
			risposta:"addddd",
		}
		]
	}]
}];

this.getQuiz=function(index){
	return quiz[index];
	
}
this.getQuizzes=function(){
	return quiz;
	
}
})
	
