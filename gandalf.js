/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const objectValues = Object.values(object);
const sortedArray = array.sort((a, b) => a - b);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;
const doubledNumbers = numbers.map(num => num * 2);
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
const isEven = number % 2 === 0;
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const objectKeys = Object.keys(object);
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const reversedString = string.split("").reverse().join("");
        var m = text.match( /^([ \t]*)\S/m );
const doubledNumbers = numbers.map(num => num * 2);
const isPalindrome = word => word === word.split("").reverse().join("");
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const sortedArray = array.sort((a, b) => a - b);

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
const isEven = number % 2 === 0;
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
const filteredArray = array.filter(item => item > 10);
const largestNumber = Math.max(...numbers);

const sortedArray = array.sort((a, b) => a - b);
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }
const isString = typeof variable === "string";
            var slides = getMarkdownSlides( elem );
const isPalindrome = word => word === word.split("").reverse().join("");
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const largestNumber = Math.max(...numbers);
const firstFiveElements = array.slice(0, 5);
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const randomIndex = Math.floor(Math.random() * array.length);
const formattedDate = new Date().toLocaleDateString();
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const isString = typeof variable === "string";
    var preInit = function() {
const reversedString = string.split("").reverse().join("");
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const objectKeys = Object.keys(object);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const smallestNumber = Math.min(...numbers);
    // So add this with a lower-than-default weight.
const uniqueSortedArray = [...new Set(array)].sort();
const isEven = number % 2 === 0;

} )( document, window );