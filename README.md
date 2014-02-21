# How to use Jquery Simple Quote


## Have you used Jquery Plugins before ?
### Yes. Download and use.

### No.
Include Jquery and the plugin. < Please use the right folder structure. >
``` html
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js"></script>
<script type="text/javascript" src="js/jquery.simpleQuote.js"></script>	
```

Add the quotes/attributions.
```
<div id="container">
			<ul id="simpleQuote">
				<li id="display"> </li>	<!-- Do not miss this -->
				
				<li author="Chanakya"> Before you start some work, always ask yourself three questions - Why am I doing it, What the results might be and Will I be successful. Only when you think deeply and find satisfactory answers to these questions, go ahead. </li>

				<li author="DV Gundappa"> Life is a Horse driven cart, Fate its driver. You are the horse, Passengers - as allotted by God. Sometimes rides to a wedding, sometimes to the graveyard. On stumbling, there is always the earth.  </li>

				<li author="Srinivasa Ramanujan"> An equation means nothing to me unless it expresses a thought of God.  </li>	

				<li author="Patanjali">  Undisturbed calmness of mind is attained by cultivating friendliness toward the happy, compassion for the unhappy, delight in the virtuous, and indifference toward the wicked. </li>

			</ul>
</div>

```

Start the carousel.
```html
	$("#simpleQuote").simpleQuote( { speed : 5000 } , { includeAuthor : true } );
```



