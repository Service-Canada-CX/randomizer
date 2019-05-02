/**
* Define query string and
* template params
*/
var LANG_PARAM = "lang=";
var LANG_TEMPLATE = "${lang}";


/**
* Link redirection randomizer function with
* support for i18n.
*/
function randomLinkRedirectI18N(links, lang) {
    // Count the links
    var max = (links.length);
    // Generate a random number
    var randomNumber = Math.floor(Math.random()*max);
    // Use the random number to pick a URL
    var link = links[randomNumber];
    //Insert i18n
    link = link.replace(LANG_TEMPLATE, lang)
    // change the location of the window object
    window.location = link;
};

/**
* Link redirection randomizer vanity
* function with no i18n support
*/
function randomLinkRedirect(links) {
  randomLinkRedirectI18N(links, "");
};

/**
* Get query string param, with only basic JS support
* for non evergreen browsers.
* @see https://davidwalsh.name/query-string-javascript
*/
function getLangUrlParameter() {
    var lang = window.location.href;
    return lang.slice(lang.indexOf(LANG_PARAM)+LANG_PARAM.length);
};
