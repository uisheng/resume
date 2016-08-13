window.myApp=angular.module('myApp',['ngRoute']);
	function routerconfig($routeProvider){
		var introduceconfig={
			templateUrl:"view/introduce.html",
			controller:'introduceCtrl'
		}
		var skillconfig={
			templateUrl:"view/skill.html",
			controller:'skillCtrl'
		}
		var experienceconfig={
			templateUrl:"view/experience.html",
			controller:'experienceCtrl'
		}
		var futureconfig={
			templateUrl:"view/future.html",
			controller:'futureCtrl'
		}
		var thanksconfig={
			templateUrl:"view/thanks.html",
			controller:'thanksCtrl'
		}
		var connectconfig={
			templateUrl:"view/connect.html",
			controller:'connectCtrl'
		};
		$routeProvider  .when('/',introduceconfig)
						.when('/skill',skillconfig)
						.when('/experience',experienceconfig)
						.when('/future',futureconfig)
						.when('/thanks',thanksconfig)
						.when('/connect',connectconfig)
						.otherwise({redirectTo:'/'});
	};	
		myApp.config(routerconfig);

		function zhuanFun(){
			if(window.screen.availHeight>window.screen.availWidth ){
				//$("body").addClass("xuanzhuan");
				
			};
		};
		//zhuanFun();
		//判断手机横竖屏状态：
		/*window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(){        
			if (window.orientation === 180 || window.orientation === 0) { 
		            $("body").addClass("xuanzhuan");
	        	}; 

			if (window.orientation === 90 || window.orientation === -90 ){
		            // alert('横屏状态！');
	        	}
      }, false);*/ 
//移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。
