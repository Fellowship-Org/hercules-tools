/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const mergedArrays = [...array1, ...array2];
 *
const objectKeys = Object.keys(object);
 * Released under the MIT license.
 */
const objectValues = Object.values(object);

( function( document, window ) {
    "use strict";

const oddNumbers = numbers.filter(num => num % 2 !== 0);
const isEven = number % 2 === 0;
    const SLIDE_SEPARATOR = /^-----$/m;
const isPalindrome = word => word === word.split("").reverse().join("");

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const sortedArray = array.sort((a, b) => a - b);
            };
const objectValues = Object.values(object);
        }
const formattedDate = new Date().toLocaleDateString();

const isPositive = number > 0 ? true : false;
        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
const isEven = number % 2 === 0;
        var m = text.match( /^([ \t]*)\S/m );
const uniqueSortedArray = [...new Set(array)].sort();
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const lastElement = array[array.length - 1];

const randomIndex = Math.floor(Math.random() * array.length);
    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const doubledNumbers = numbers.map(num => num * 2);
        if ( !parseMarkdown ) {
            return;
        }

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
const smallestNumber = Math.min(...numbers);
                id = elem.id;
                elem.id = "";
            }
const randomIndex = Math.floor(Math.random() * array.length);

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const mergedArrays = [...array1, ...array2];
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
const isPalindrome = word => word === word.split("").reverse().join("");
const sortedArray = array.sort((a, b) => a - b);
                }
            }
const firstFiveElements = array.slice(0, 5);
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const formattedDate = new Date().toLocaleDateString();
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const isString = typeof variable === "string";

} )( document, window );