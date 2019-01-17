(function(){
	var app ={
		visibleCards: {},
		cardTemplate: document.querySelector('.cardTemplate'),
		container: document.querySelector('.main')
	};
	
	
	 var data =[
	 {
		key: '1',
		destination:{
			from: 'Malta',
			to: 'Amsterdam'
		},
		departure: '8:45',
		status: 'ON TIME',
	},
	{
		key:'2',
		destination:{
			from: 'Malta',
			to: 'London'
		},
		departure: '9:45',
		status: 'DELAYED',
	},
	{
		key:'3',
		destination:{
			from: 'Malta',
			to: 'Poznan'
		},
		departure: '10:00',
		status: 'ON TIME',
	},
	{
		key:'4',
		destination:{
			from: 'Malta',
			to: 'London'
		},
		departure: '11:45',
		status: 'ON TIME',
	},
	{
		key:'5',
		destination:{
			from: 'Malta',
			to: 'Rome'
		},
		departure: '12:05',
		status: 'ON TIME',
	},
	{
		key:'6',
		destination:{
			from: 'Malta',
			to: 'Paris'
		},
		departure: '12:35',
		status: 'DELAYED',
	}
	];
	
	app.fillData = function(data){
		console.log(data);
		data.forEach(function(datas){
			var key = datas.key;
			app.updateCards(datas);
		});
	};
	app.updateCards = function(datas){
		var key = datas.key;
		var from = datas.destination.from;
		var to = datas.destination.to;
		var time = datas.departure;
		var status = datas.status;
		var card = app.visibleCards[datas.key];
			if (!card) {
				card = app.cardTemplate.cloneNode(true);
				card.removeAttribute('hidden');
				app.container.appendChild(card);
				app.visibleCards[data.key] = card;
				card.querySelector('.from').textContent = from;
				card.querySelector('.to').textContent = to;
				card.querySelector('.time').textContent = time;
				card.querySelector('.status').textContent = status;
			}
	};
	app.fillData(data);
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); })
			 .catch(function (err) {
				console.log("Service worker registration failed:", err);
			});
  }

}());