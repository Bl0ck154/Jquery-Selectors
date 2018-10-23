
function resetBorder() {
	$('*').removeAttr('style');
}

function task1(item) {
	resetBorder();
	switch(item) {
		case 1: 
			$('h1,h2').css('border', '2px dashed red');
			break;
		case 2:
			$('.container span').css('border', '2px dashed #A00');
			break;
		case 3:
			$('.container > span').css('border', '2px dashed #770');
			break;
		case 4:
			$('h2 + *').css('border', '2px dashed #0A0');
			break;
		case 5:
			$('h2 ~ *').css('border', '2px dashed #00A');
			break;
	}
}

function task2(item) {
	resetBorder();
	switch(item) {
		case 1: 
			$('[href]').css('border', '2px dashed red');
			break;
		case 2:
			$('[href="http://google.com"]').css('border', '2px dashed #A00');
			break;
		case 3:
			$('[src^="img/"]').css('border', '2px dashed #770');
			break;
		case 4:
			$('[src$=".js"]').css('border', '2px dashed #0A0');
			break;
		case 5:
			$('[src][title]').css('border', '2px dashed #00A');
			break;
	}
}

function task3(item) {
	resetBorder();
	switch(item) {
		case 1: 
		// использую first-child вместо first, чтоб выделить первый li из КАЖДОГО ul
			$('ul li:first-child').css('border', '2px dashed red');
			break;
		case 2:
		// использую last-child вместо last, чтоб выделить последний li из КАЖДОГО ul
			$('ul li:last-child').css('border', '2px dashed #A00');
			break;
		case 3:
		// использую nth-child(odd) вместо odd, чтоб выделить четный li из КАЖДОГО ul
			$('ul li:nth-child(odd)').css('border', '3px solid #770');
			break;
		case 4:
			$('ul li:gt(3)').css('background', 'red');
			break;
	}
}

function task4(item) {
	resetBorder();
	switch(item) {
		case 1: 
			$('li:contains(Пользователь)').css('border', '2px dashed red');
			break;
		case 2:
			$('li:empty').text('Пусто');
			break;
	}
}

function task5(item) {
	resetBorder();
	$('.main-form').fadeIn();
	switch(item) {
		case 1: 
			$('.main-form .form-control').css('border', '2px dashed red');
			break;
		case 2:
			$('.btn').css({'border': '2px solid red', 'background': 'yellow'});
			break;
		case 3:
			$('input[type="radio"][name="gender"]').parent().css('border', '2px dashed red');
			break;
	}
}

$('#testButton1').click(function(event) {
	alert('Приветствую, пользователь!');
});

$('#testButton2').dblclick(function(event) {
	$(this).addClass('active');
});

function hideallDropdowns() {
	$(".dropped .drop-menu-main-sub").hide();
	$(".dropped").removeClass('dropped');
}
function showDropdown(el) {
	var el_li = $(el).parent().addClass('dropped');
	
	el_li.find('.drop-menu-main-sub').show();
}
 $(".drop-down").mouseenter(function(){
	showDropdown(this);
});
 
$(".drop-down").mouseleave(function () {
	hideallDropdowns();
});


$('input[name="Name"]').keyup(function() {
	let length = $(this).val().length;
	$('.nameLenght').text(length);
	console.log(length);
});