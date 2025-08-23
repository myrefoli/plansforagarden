$(function() {

	var z = 50;

	/* make folders draggable (add mac highlight behavior) */
	$('.folder').draggable({
		containment: "window",
		scroll: false,
		start: function(){ 
			z = z + 1; 
			$(this).css({ 'z-index': z }); 
		},

		start: function(){
		},
        stop: function(e, ui) {
            var grid_x = 128;
            var grid_y = 128;
            var elem = $( this );
            var left = parseInt(elem.css('left'));
            var top = parseInt(elem.css('top'));
            var cx = (left % grid_x);
            var cy = (top % grid_y);
        
            var new_left = (Math.abs(cx)+0.5*grid_x >= grid_x) ? (left - cx + (left/Math.abs(left))*grid_x) : (left - cx);
            var new_top = (Math.abs(cy)+0.5*grid_y >= grid_y) ? (top - cy + (top/Math.abs(top))*grid_y) : (top - cy);
        
            ui.helper.stop(true).animate({
                left: new_left,
                top: new_top,
                opacity: 1,
            }, 200);
        }
	}).click(function(){ 
		z = z + 1; 
		$(this).css({ 'z-index': z }); 
	});		
});

function setPoem(clicked_id)
	{
		
		var main = document.getElementById("main");
		var title = document.getElementById("title");

		if (clicked_id === "lily1") {
			title.innerHTML = "For Kagome"
			main.innerHTML = "<p>I, too, was once a schoolgirl, floating through a life <br>of burnt toast & deadlines & pleated skirts.<br><br>I, too, broke something I could not fix<br>alone. I, too, began to hunt—earned this bow, these arrows.<br><br>I, too, learned the language of wolves & foxes & banyan trees<br>& when I found love, I, too, chose to leave.<br><br>I, too, tamed my body, lashing muscle to muscle,<br>growing calluses on my soles. I, too, saw death. <br><br>In the forest, I, too, was stalked by the ghost of who I once was.<br> Felt her anger, then felt mine. I, too, bathed in the moonlight <br><br>of a hundred lost souls. <br>I, too, struggled. I, too, prayed.</p>";
		}

		if (clicked_id === "lily2") {
			title.innerHTML = "Sonnet"
			main.innerHTML = "<p>Under the cherry blossoms, I want to grab<br>fistfuls of petals and stuff them in my mouth—<br>it’s beauty that I’m trying to hold onto, keep all to myself.<br>I mean, today, it feels like everything radiant in the world<br>is shining from me. I love the girls in their sparkling gowns<br>and baby bumps. I love the couple lying head to head<br>in the sun. I love the aunties with their padded<br>jackets. I love the security guard in his blue vest<br>whose only function seems to be stopping us<br>from using blankets on the grass. I love the children,<br>all of them, even the one that is shaking the bough<br>of the tree to make it weep. You see, when the light<br>passes through our fingertips, it tastes different.<br>At one point in time, we called our feelings uprisings.</p>"
		}

		if (clicked_id === "lily3") {
			title.innerHTML = "What's In My Bag"
			main.innerHTML = "<p>Chapstick—lip gloss—three Always pads wrapped in green plastic like secret leaves in case a stranger needs one, and another stranger needs one—the certain lines that come back unbidden—Virginia Woolf: “Life is not a series of gig lamps symmetrically arranged”—for four years I stood very still hoping no pain would touch me in my stillness—but still—Edith Wharton: “Even the stains of her grief became her as raindrops do the beaten rose”—many things swept across the surface of me, and I could no longer hold them inside—Thom Gunn: “I admire the understatement of feeling more than anything”—how brilliant the back of each dark leaf like a silver coin—I did not know wild green things could shine in the dark like that. </p>"
		}

		if (clicked_id === "lily4") {
			title.innerHTML = "ASCII Flowers"
			main.innerHTML = "<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;.&emsp;&ensp;.<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;\\&emsp;|<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;____|m____<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;/ &ensp;___\\ |&ensp;___\\<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;/ &ensp;/ &emsp;   (\\/) &emsp;&ensp; \\<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|&ensp;(|   &emsp;&ensp;|\\ &ensp;\\\\  &emsp;&ensp;\\<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\| \\ &ensp;&nbsp; | &nbsp;\\ &ensp;\\\\ &ensp; | &emsp; _ /|<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\ | &ensp; \\ &nbsp; \\\\ |&emsp;/ .‘ &ensp;&nbsp;|<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;) &ensp;)&ensp;/ &ensp;.’ &emsp;  /<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;________ &ensp; / &ensp;/ &emsp;..  &ensp; _/<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;/ &ensp; _ &nbsp; ..  &emsp;&nbsp; \\/ &nbsp; / &emsp;.’ &nbsp; _/<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;/ &ensp;/ &emsp;\\ &nbsp;\\ &emsp; | &ensp; | &nbsp; .’ &nbsp; /<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;  |/  &emsp;&emsp;&nbsp;  \\ &nbsp;\\ &ensp; | &ensp; | &nbsp;.’_/<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\\ &ensp;\\| &ensp; |&nbsp;./<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;\\ &nbsp; | &ensp; |/<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;~~~~~~~~~~~~~~~~~~</p>"
		}

		if (clicked_id === "lily5") {
			title.innerHTML = "Research"
			main.innerHTML = "<p>I find flowers beautiful. The work of French Mondernist painters as well. But, the aesthetic pleasure I experience with both is tinged with an undercurrent of unease. To me, they will always be haunted by the image of the Asian woman as “Lotus Blossom.” Elaine Hsieh Chou pokes fun at this stereotype in \"<a href='https://www.mcsweeneys.net/articles/acceptable-book-cover-subjects-for-books-written-by-east-asian-women-authors' target='_blank'>Acceptable Book Cover Subjects for Books Written by East Asian Woman Authors</a>\": the first item on her list is “Flowers. Just a shit ton of flowers. Preferably exotic-looking ones like orchids, not pedestrian flowers like daises—that would be confusing.” Anne Anlin Cheng’s <a href='https://global.oup.com/academic/product/ornamentalism-9780190604615?cc=us&lang=en&' target='_blank'><i>Ornamentalism</i></a> formally articulates a theory of “how Asian women have been discursively constituted through inanimate and decorative objects,” such as flowers. Especially as I began spending time in Monet and van Gogh’s letters, I learned both of them expressed admiration for Japanese art (sometimes veering into Orientalism) and that their work would be impossible without encountering ukiyo-e (were they the first weeaboos?) I still haven’t fully unentangled the beauty of flowers from their violence, but I hope this website can be a constellation of resonant elements.</p>"
		}

		if (clicked_id === "lily6") {
			title.innerHTML = "Self-Portrait as Princess Iron Fan"
			main.innerHTML = "<p>In your story, I will lose<br>my fan & my magic, my silks & jade.<br><br>But, my sisters can conjure rage<br>from only mud & grass, sing starlings’<br>black & blue song.<br><br>Together, we even rescued<br>the moon from a life of porcelain, cracked<br>open its yolk into a mirror, a window.<br><br>& when I look at it,<br>I see our clavicles unfurling<br>into rivers, silver carps<br>running down our thighs.<br><br>We have gone this far<br>to understand ourselves.</p>"
		}
  	}