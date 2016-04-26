
 window.onresize = function() {
            document.getElementById("size").innerHTML = window.innerWidth;
        };

	
		
		
		
$(document).ready(function() { //карусель mainMid


	$( window ).resize(function() {   // отключение кнопок меню и корзины
		if (window.innerWidth < 767){
			document.getElementById('dropDownBut').disabled=true; 
			document.getElementById('basketBtn').disabled=true;
		} 	
		
	});
		
	


	var valueOffsetRigh = 200;
	var valueOffsetLeft = 200;
	
	
    var leftUIEl = $('.toLeftClothes');
    var rightUIEl = $('.toRightClothes');
	var elementsList = $('.clothesList');
	
	var pixelsOffset = 200;
    var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
	
	var minimumOffset = -200; // - ((elementsCount - 5) * pixelsOffset);
	var maximumOffset = 0;
	
	
	$( window ).resize(function() { // Событие на изменение ширины экрана и корректеровка карусели (стоит на парнях в одежде) 
		if (window.innerWidth < 1310){
			valueOffsetRigh = 300;	
			valueOffsetLeft = 300;
			
			minimumOffset = -300;
			maximumOffset = 0;
		} 
		if(window.innerWidth < 1161){
			valueOffsetRigh = 400;	
			valueOffsetLeft = 400;
			
			minimumOffset = -400;
			maximumOffset = 0;
		}
		if(window.innerWidth < 950){
			valueOffsetRigh = 550;	
			valueOffsetLeft = 550;
			
			minimumOffset = -550;
			maximumOffset = 0;
		}
		if(window.innerWidth < 760){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -450;
			maximumOffset = 150;
		}
		if(window.innerWidth < 617){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -600;
			maximumOffset = 150;
		}
		if(window.innerWidth < 522){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -750;
			maximumOffset = 150;
		}
		if(window.innerWidth < 454){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -750;
			maximumOffset = 150;
		}
		if(window.innerWidth < 442){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -600;
			maximumOffset = 300;
		}
	});	                                      
	
		if(window.innerWidth < 1310){   // Чтение ширины экрана в данный момент и корректеровка карусели (стоит на парнях в одежде) 
			valueOffsetRigh = 300;
			valueOffsetLeft = 300;
		
			minimumOffset = -300;	
			maximumOffset = 0;
		}
		if(window.innerWidth < 1161){
			valueOffsetRigh = 400;	
			valueOffsetLeft = 400;
			
			minimumOffset = -400;
			maximumOffset = 0;
		}
		if(window.innerWidth < 950){
			valueOffsetRigh = 550;	
			valueOffsetLeft = 550;
			
			minimumOffset = -550;
			maximumOffset = 0;
		}
		if(window.innerWidth < 760){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -450;
			maximumOffset = 150;
		}
		if(window.innerWidth < 617){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -600;
			maximumOffset = 150;
		}
		if(window.innerWidth < 522){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -750;
			maximumOffset = 150;
		}
		if(window.innerWidth < 454){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -750;
			maximumOffset = 150;
		}
		if(window.innerWidth < 442){
			valueOffsetRigh = 150;	
			valueOffsetLeft = 150;
			
			minimumOffset = -750;
			maximumOffset = 300;
		}	
	
	
    leftUIEl.click(function() {
		if (currentLeftValue != maximumOffset) {
            currentLeftValue += valueOffsetLeft;
			
            elementsList.animate({ left : currentLeftValue + "px"}, 100);
			 
        }  
    });
 
    rightUIEl.click(function() {
		if (currentLeftValue != minimumOffset) {
			
            currentLeftValue -= valueOffsetRigh;
			
			
            elementsList.animate({ left : currentLeftValue + "px"}, 100);
			 
        }    
    });
 
});




$(document).ready(function() {
	
	
	
	var valueOffsetRigh = 200;
	var valueOffsetLeft = 200;
	
	
    var leftUIEl = $('.toLeftFighters');
    var rightUIEl = $('.toRightFighters');
	var elementsList = $('.fightersList');
	
	var pixelsOffset = 200;
    var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
	
	var minimumOffset = -200; // - ((elementsCount - 5) * pixelsOffset);
	var maximumOffset = 0;
	
	
		
		
		$( window ).resize(function() {  
		if (window.innerWidth < 437){
			valueOffsetRigh = 205;	
			valueOffsetLeft = 205;
			
			minimumOffset = -410;
			maximumOffset = 410;
		} 
		});
		
		
	
		if(window.innerWidth < 437){
			valueOffsetRigh = 205;	
			valueOffsetLeft = 205;
			
			minimumOffset = -410;
			maximumOffset = 410;
		}
	
	
	leftUIEl.click(function() {
		if (currentLeftValue != maximumOffset) {
            currentLeftValue += valueOffsetLeft;
			
            elementsList.animate({ left : currentLeftValue + "px"}, 100);
			 
        }  
    });
 
    rightUIEl.click(function() {
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= valueOffsetRigh;
			
            elementsList.animate({ left : currentLeftValue + "px"}, 100);
			 
        }    
    });
	
	
	// Guetta carousel
	var valueOffsetRighGuetta = 200;
	var valueOffsetLeftGuetta = 200;
	
	
    var leftUIElGuetta = $('.toLeftGuetta');
    var rightUIElGuetta = $('.toRightGuetta');
	var elementsListGuetta = $('.GuettaList');
	
	var pixelsOffsetGuetta = 200;
    var currentLeftValueGuetta = 0;
	var elementsCountGuetta = elementsListGuetta.find('li').length;
	
	var minimumOffsetGuetta = -200; // - ((elementsCount - 5) * pixelsOffset);
	var maximumOffsetGuetta = 0;
	
	
		
		
		$( window ).resize(function() {  
		if (window.innerWidth < 437){
			valueOffsetRighGuetta = 260;	
			valueOffsetLeftGuetta = 260;
			
			minimumOffsetGuetta = -520;
			maximumOffsetGuetta = 260;
		} 
		});
		
		
	
		if(window.innerWidth < 437){
			valueOffsetRighGuetta = 260;	
			valueOffsetLeftGuetta = 260;
			
			minimumOffsetGuetta = -520;
			maximumOffsetGuetta = 260;
		}
			
	
	
	leftUIElGuetta.click(function() {
		if (currentLeftValueGuetta != maximumOffsetGuetta) {
            currentLeftValueGuetta += valueOffsetLeftGuetta;
			
            elementsListGuetta.animate({ left : currentLeftValueGuetta + "px"}, 100);
			 
        }  
    });
 
    rightUIElGuetta.click(function() {
		if (currentLeftValueGuetta != minimumOffsetGuetta) {
			currentLeftValueGuetta -= valueOffsetRighGuetta;
			
            elementsListGuetta.animate({ left : currentLeftValueGuetta + "px"}, 100);
			 
        }    
    });
	
	
	
	
	
	
});




function hideShowDiv(){ // открываем/закрываем Левый выпадающий список
	$('.dropBlockArea').toggle();
	  
}

function hideShowDivRight(){ // открываем/закрываем Правый выпадающий список
	$('.dropBlockArea2').toggle();
	  
}


function closeLeftDropDown(){  //открываем/закрываем левый выпадающий список по Х
	$(".dropBlockArea").css('display', 'none');
	$('#dropDownBut').attr({'src':'images/headSlideMenu1.jpg'}).not(this).addClass('notActive').removeClass('Active')
	$(this).toggleClass('notActive Active');
	$(this).hasClass('Active') && (this.src = 'images/menu.jpg');
	
}



$(function (){ // меняем изображение выпадающего списка
    var $img = $('#dropDownBut')
	$img.click(function (){
		$img.attr({'src':'images/headSlideMenu1.jpg'}).not(this).addClass('notActive').removeClass('Active')
		$(this).toggleClass('notActive Active');
		$(this).hasClass('Active') && (this.src = 'images/menu.jpg');
	})
})

 
 


jQuery(document).ready(function(){
	var accordionsMenu = $('.cd-accordion-menu');

	if( accordionsMenu.length > 0 ) {
		
		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
			});
		});
	}
});

