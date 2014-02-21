
/*
  There is no damn license on this. Use it however you want to.
  Adding it to your website ?? Send me a message on twitter, it can light up my day.

  Prashanth Raghu on twitter -> http://twitter.com/prashanthraghu
*/

$.fn.simpleQuote = function(){
	for( var arg = 0 ; arg < arguments.length ; arg++ )
		for( var key in arguments[arg] ){
			simpleQuoteFuncManager[key] = arguments[arg][key];
		}

	simpleQuoteFuncManager.setElement(this);
	simpleQuoteFuncManager.initCache();
	simpleQuoteFuncManager.startRolling();
}

/*
	Declare simpleQuote functionality.
	Includes all configurable parameters.
*/

var simpleQuoteFunc = function(){
	this.element = '';
	this.speed = 4500;
	this.currentElement = 0;
	this.isRolling = false;
	this.displayElement = '';
	this.quoteCache = []
	this.authorCache = []
	this.includeAuthor = true;
}

simpleQuoteFunc.prototype.setElement = function(element){
	this.element = element;
	this.displayElement = $('#display');
}

simpleQuoteFunc.prototype.initCache = function(){
	sqfm = this;
	this.element.children().each(function(index){
		if(!$(this).attr("id")){
			sqfm.quoteCache[index-1] = $(this).html();
			if($(this).attr("author"))
				sqfm.authorCache[index-1] = $(this).attr("author");
			else
				sqfm.authorCache[index-1] = "Anonymous";

			$(this).hide();
		}	
	});
	this.displayElement.html(sqfm.quoteCache[0] + this.appendAuthor(0));
}

simpleQuoteFunc.prototype.startRolling = function(){
	/* Due to context change I will forced to use the object name 
	   Welcome to add a wrapper.	
	*/
	window.simpleQuoteFuncManager = this;
	setInterval(this.roll , this.speed );
}

simpleQuoteFunc.prototype.roll = function(){
	sqfm = this.simpleQuoteFuncManager;
	sqfm.currentElement = (sqfm.currentElement + 1) % sqfm.quoteCache.length;
	sqfm.displayElement.hide( ).html(sqfm.quoteCache[sqfm.currentElement] + sqfm.appendAuthor(sqfm.currentElement)).fadeIn(1000);
}

simpleQuoteFunc.prototype.appendAuthor = function(index){
	if(this.includeAuthor)
		return "<p id='author'> - "+ this.authorCache[index] + "</p>";
	else
		return "";
}

/*
	Manages all carousel functionality.
*/

var simpleQuoteFuncManager = new simpleQuoteFunc();