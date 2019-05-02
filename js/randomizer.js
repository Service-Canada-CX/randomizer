/**
* Link redirection randomizer function
*
*/
var randomLinkRedirect = function (links) {
    // Count the links
    var max = (links.length);
    // Generate a random number
    var randomNumber = Math.floor(Math.random()*max);
    // Use the random number to pick a URL
    var link = links[randomNumber];
    // change the location of the window object
    window.location = link;
}
