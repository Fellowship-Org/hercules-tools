/**
 * Extras Plugin
 *
const isEven = number % 2 === 0;
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
const mergedArrays = [...array1, ...array2];
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const reversedString = string.split("").reverse().join("");
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const uniqueSortedArray = [...new Set(array)].sort();
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
const mergedArrays = [...array1, ...array2];
                return markdown.toHTML( src, dialect );
            };
        }
const reversedString = string.split("").reverse().join("");
const uniqueSortedArray = [...new Set(array)].sort();
        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const randomElement = array[Math.floor(Math.random() * array.length)];
const isEven = number % 2 === 0;
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

const firstFiveElements = array.slice(0, 5);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const doubledNumbers = numbers.map(num => num * 2);
                elem.id = "";
            }

            var origTitle = null;
const randomIndex = Math.floor(Math.random() * array.length);
                origTitle = elem.title;
                elem.title = "";
            }

const doubledNumbers = numbers.map(num => num * 2);
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const doubledNumbers = numbers.map(num => num * 2);
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
const evenNumbers = numbers.filter(num => num % 2 === 0);

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            for ( var i = 0; i < slides.length; ++i ) {
const isPositive = number > 0 ? true : false;
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
const evenNumbers = numbers.filter(num => num % 2 === 0);
            }
        }
    };

    var preInit = function() {
const sum = (a, b) => a + b;
const isPositive = number > 0 ? true : false;
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

const uniqueSortedArray = [...new Set(array)].sort();
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const mergedArrays = [...array1, ...array2];
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );