(function() {
	var app = angular.module('Digestalia', ['ui.bootstrap']);

	app.controller("TabController", function() {
		this.tab = 1;
		this.banner = "img/logoDigestalia.png";

		/* definicio de les diferents gallery */

		this.galleryOlla = [
		                    { src:"img/gallery/circuits/olla1.jpg"},
		                    { src:"img/gallery/circuits/olla2.jpg"} ];

		this.galleryColomer = [
		                       { src:"img/gallery/circuits/colomer1.jpg"},
		                       { src:"img/gallery/circuits/colomer2.jpg"} ];

		this.galleryFalco = [
		                     { src:"img/gallery/circuits/falco1.jpg"},
		                     { src:"img/gallery/circuits/falco2.jpg"} ];

		this.galleryTosca = [ { src:"img/gallery/circuits/tosca2.jpg"} ];

		this.galleryBauma = [
		                     { src:"img/gallery/circuits/bauma1.jpg"},
		                     { src:"img/gallery/circuits/bauma2.jpg"} ];

		this.galleryEmpreses = [ { src:"img/gallery/activitats/banner_empreses.jpg"} ];

		this.galleryEscoles = [ { src:"img/gallery/activitats/banner_escoles.jpg"} ];

		this.galleryFestes = [ { src:"img/gallery/activitats/banner_festes.jpg"} ];

		this.galleryComiats = [ { src:"img/gallery/activitats/banner_comiats.jpg"} ];

		this.gallery = [
		                { src:"img/gallery/banner_foto1.jpg"},
		                { src:"img/gallery/banner_foto2.jpg"},
		                { src:"img/gallery/banner_foto3.jpg"},
		                { src:"img/gallery/banner_foto4.jpg"},
		                { src:"img/gallery/banner_foto5.jpg"},
		                { src:"img/gallery/banner_foto6.jpg"} ];

		/* definicio de les imatges e compromis ecologic */ 
		this.compromis = [
		                  { src:"img/inici/compostweb.jpg"},
		                  { src:"img/inici/lavabosweb.jpg"},
		                  { src:"img/inici/plaquesweb.jpg"},
		                  { src:"img/inici/bateriesweb.jpg"},
		                  { src:"img/inici/ovellaweb.jpg"},
		                  { src:"img/inici/extracfustaweb.jpg"},
		                  { src:"img/inici/boletweb.jpg"},
		                  { src:"img/inici/aprofherba.jpg"} ];

		/* funció que defineix quin banner i quin fons te cada pagina */ 
		this.setTab = function(setTab) {
			this.tab = setTab;
			if ((setTab==1)||(setTab==7)) {
				this.background="img/fons_web.jpg";
				this.banner ="img/banner_web.jpg";
				if (setTab==7)  {
					this.fons = "col-centre-faq"
				} else {
					this.fons="col-centre-portada";	
				}
			} else if  ((setTab>=9) || setTab<=13){
				this.fons="col-centre-circuits";
			} else if ((setTab>=15)&& (setTab <=18) ) {
				this.background="img/fons_activitats.jpg";
				this.banner ="img/banner_activitats.jpg";
				this.fons="col-centre-activitats"
			} else if ((setTab==20) ||(setTab==14)) {
				this.background="img/fons_tarifes.jpg";
				this.banner ="img/banner_tarifes.jpg";
				this.fons = "col-centre-tarifes";
			} else if (setTab==21)  {
				this.fons = "col-centre-tiquet";
			}
		};
	});

	/* Controlador Modal (abans que s'obri) */ 
	app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

		$scope.open = function (photo) {

			var modalInstance = $modal.open({
				templateUrl: 'popUp.html',
				scope: $scope,
				controller: ModalInstanceCtrl,
				resolve: {
					items: function () {
						return $scope.items;
					},
					// this returns as undefined
					photo: function(){
						return photo;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	});
	
	/* controlador finestra modal un cop oberta */
	var ModalInstanceCtrl = function ($scope, $modalInstance, photo) {

		$scope.photo = photo;

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		console.log($scope);
	};

	/* Controlador de Dropdown */ 
	app.controller('DropdownCtrl', function ($scope, $log) {
		/* definicio dels menus dropdown. link i titol*/
		$scope.inici = [
		                {src:'quisom.html', desc:'Qui Som?'},
		                {src:'aquivadirigit.html', desc: 'A qui va dirigit?'},
		                {src:'onsom.html', desc:'On som?'},
		                {src:'seguretat.html', desc:'Seguretat'},
		                {src:'compromis.html', desc:'Compromís ecològic'},
		                {src:'faq.html', desc:'Preguntes Freqüents'}
		                ];
		$scope.tarifes = [
		                  {src:'horaris.html', desc:'Horaris i Calendari 2015 '},
		                  {src:'tarifes.html', desc: 'Tarifes '},
		                  {src:'tiquetRegal.html', desc:'Tiquet Regal'}
		                  ];

		$scope.status = {
				isopen: false
		};

		$scope.toggled = function(open) {
			$log.log('Dropdown is now: ', open);
		};

		$scope.toggleDropdown = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.status.isopen = !$scope.status.isopen;
		};
	});
	/* controlador de Carrusel */
	app.controller('CarouselDemoCtrl', function ($scope) {
		  $scope.myInterval = 5000;
		  var slides = $scope.slides = [];
		});

})();
