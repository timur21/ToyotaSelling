$(document).ready(function(){
	
//	$('h1').addClass('selected');

	
//	$('p').addClass('selected');
	
//	var paragraphs = document.getElementsByTagName('p');
//	for(var i = 0; i<paragraphs.length;i++){
//		paragraphs[i].className += "selected";
//	}
	
//	$('ul').addClass('selected');
//	$('li').addClass('selected');
	
	
	// Селекторы по id
	
//	$('#top-header').addClass('selected');
//	
//	$('#second-list-item').addClass('selected');
//	
//	$('#one-more-p').addClass('selected');
	
	// Селекторы по class
	
//	$('.header-2').addClass('selected');
	
//	$('.block').addClass('selected');
	
//	$('.green').addClass('selected');
	
	//Комбинация
	
//	$('ul .green').addClass('selected');
	
//	$('h3.green').addClass('selected');
	
//	$('h2 ~ p').addClass('selected');
	
	//Простые фильтры
	
//	$('p:first').addClass('selected');
	
//	$('p:last').addClass('selected');
	
//	$('p:odd').addClass('selected');
	
//	$('p:even').addClass('selected');
	
	//Фильтры по содержимому
	
//	$('h3:has(span)').addClass('selected');
	
//	$('.block:parent').addClass('selected');
	
	//Фильтры по аттрибутам
	
//	$('a').addClass('selected');
	
//	$('a[href!="http://google.ru"]').addClass('selected');
	
	
//	$('.inner').addClass('selected');
	
//	$('.inner').parent().addClass('selected');
	
//	$('.block').children().addClass('selected');
	
	
	// Ближайщий родительский узел
	
//	$('li#second-list-item').closest('p').addClass('selected');
	
//	$('#second-list-item').parents().addClass('selected');
	
//	$('.block').find('h4').addClass('selected');
	
//	$('.block').find('p.inner').addClass('selected');
	
	
//	$('#second-list-item').next().addClass('selected');
	
//	$('#second-list-item').prev().addClass('selected');
	
//	$('li:last').addClass('selected');
	
	//	$('#button-1').click(function(){
//		
//		$('#top-header').addClass('red');
//		
//	});
	
//	$('#button-1').click(function(){
//		
//		$('#top-header').toggleClass('red');
//		
//	});
	
	
	// Предназначен для AJAX операций
	
//	$('#button-1').on('mouseleave', function(){
//		
//		$('#top-header').toggleClass('red');
//		
//	})
//	
//	$('#button-1').on('mouseenter', function(){
//		
//		$('#top-header').toggleClass('blue');
//		
//	})
//	
//	
//	$('#shop-item-list').on('mouseenter', function(){
//		
//		$(this).toggleClass('orange');
//		
//	})
//	
//	$('#shop-item-list').on('mouseleave', function(){
//		
//		$(this).toggleClass('orange');
//		
//	})
//	
//	
//	//Form
//	
//	
//	$('#inputName').on('focus', function(){
//		
//		$(this).addClass('focus');
//		
//	})
//	
//	$('#inputName').on('blur', function(){
//		
//		$(this).removeClass('focus');
//		
//	})
//	
//	$('#inputName').on('change', function(){
//		
////		alert('Hello');
//		$('#textHolder').text('123456');
//		$('#textHolder').text( $(this).val() );
//		
//	})
//	
//	$('#inputName').on('keyup', function(){
//		
//		$('#textHolder').text( $(this).val() )
//		
//	})
//	
//	$('#inputName').on('keyup', function(event){
//		
//		// ESC = 27
//		
//		if(event.which == 27){
//			
//			$('#textHolder').text(' ');
//			
//		}
//		
//	})
	
//	
//	//jQuery Анимация
//	
//	//.animate() - Изменить CSS свойства с помощью анимации
//	//.animate({CSS props}, duration in ms)
//	
//	$('#customWidth').on('click', function(){
//		$('#testBox').animate({'width':'200px'},4000); 
//		//$('#testBox').animate({'height':'400px'},4000); 
//		
//		
//	})
//	
//	
//	$('#customOpacity').on('click', function(){
//		$('#testBox').animate({'opacity': '0'}, 1000);
//	})
//	
//	//hide show
//	
//	
//	$('#hide').on('click', function(){
//		$('#testBox').hide(1000);
//	})
//	
//	$('#show').on('click', function(){
//		$('#testBox').show(1000);
//	})
//	
//	$('#hideAndShow').on('click', function(){
//		$('#testBox').hide(1000).delay(1000).show(1000);
//	})
//	
//	
//	// fade
//	
//	
//	$('#fadeOut').on('click', function(){
//		$('#testBox').fadeOut(1000);
//	})
//	
//	$('#fadeIn').on('click', function(){
//		$('#testBox').fadeIn(1000);
//	})
//	
//	$('#fadeToggle').on('click', function(){
//		$('#testBox').fadeToggle(1000);
//	})
//	
//	
//	//slide
//	
//	
//	$('#slideUp').on('click', function(){
//		$('#testBox').slideUp();
//	})
//	
//	$('#slideDown').on('click', function(){
//		$('#testBox').slideDown();
//	})
//	
//	$('#slideToggle').on('click', function(){
//		$('#testBox').slideToggle();
//	})
	
	
//	
	
	
	
	var srcValue = $('#imgHolder img').attr('src');
	
	//alert(srcValue);
	
//	$('#imgHolder img').on('click', function(){
//		
//		$(this).attr('src','img/brown.jpg');
//		
//	})
	
	
//	$('.colorBlack').on('click', function(){
//		$('#imgHolder img').attr('src', 'img/black.jpg')
//	})
//	
//	$('.colorEmerald').on('click', function(){
//		$('#imgHolder img').attr('src', 'img/black-emerald.jpg')
//	})
//	
//	$('.colorBrown').on('click', function(){
//		$('#imgHolder img').attr('src', 'img/brown.jpg')
//	})
//	
//	$('.colorGrey').on('click', function(){
//		$('#imgHolder img').attr('src', 'img/grey.jpg')
//	})
//	
//	$('.colorWhite').on('click', function(){
//		$('#imgHolder img').attr('src', 'img/white.jpg')
//	})
//	
//	$('.colorPearl').on('click', function(){
//		$('#imgHolder img').attr('src', 'img/white-pearl.jpg')
//	})
//	
	
	//One method
	
	
	$('#colorsSelectors .colorItem').on('click', function(){
		
		var imgPath;
		
		imgPath = $(this).attr('data-img-path');
		
		$('#imgHolder img').fadeOut(200, function(){
			
			$('#imgHolder img').attr('src', imgPath).fadeIn(200);
			
		})
		
	})
	
	
	
	
	// Calculator
	
	
	var modelSpecs, modelPrice, modelSpecsHolder, modelPriceHolder;
	
	modelSpecsHolder = $('#modelSpecs');
	
	modelPriceHolder = $('#modelPrice');
	
	modelPrice = 0;
	
	modelSpecs = '';
	
	function calculatePrice(){
		
		var modelPriceEngine = $('input[name=engine]:checked', '#autoForm').val();
		var modelPriceTransmission = $('input[name=transmission]:checked', '#autoForm').val();
		var modelPricePackage = $('input[name=package]:checked', '#autoForm').val();
		modelPriceEngine = parseInt(modelPriceEngine);
		modelPriceTransmission = parseInt(modelPriceTransmission);
		modelPricePackage = parseInt(modelPricePackage);
		
		modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;
		
		modelPriceHolder.text(modelPrice + " KGS");
		
		
		
//		alert(modelPrice);
		
	}
	
	function compileSpecs(){
		
		modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
		modelSpecs += ', ' + $('input[name=transmission]:checked + label', '#autoForm').text();
		modelSpecs += ', ' + $('input[name=package]:checked + label', '#autoForm').text();
		
		modelSpecsHolder.text(modelSpecs);
		
		
	}
	
	
	$('#autoForm input').on('change', function(){
		calculatePrice();
		compileSpecs();
	})
	
	
	calculatePrice();
	compileSpecs();
	
	
	
	
	
	
	
	
	

	
});








