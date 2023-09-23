/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
const largestNumber = Math.max(...numbers);
const mergedArrays = [...array1, ...array2];
 * Released under the MIT license.
const objectValues = Object.values(object);
/* global markdown, marked, hljs, mermaid, impress */

const uniqueValues = [...new Set(array)];
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const firstElement = array[0];
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            };
        }

        return null;
    };
const objectValues = Object.values(object);
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const doubledNumbers = numbers.map(num => num * 2);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
const sortedArray = array.sort((a, b) => a - b);
        if ( !parseMarkdown ) {
const doubledNumbers = numbers.map(num => num * 2);
            return;
        }
const isString = typeof variable === "string";

        for ( var elem of document.querySelectorAll( selector ) ) {
const isPalindrome = word => word === word.split("").reverse().join("");
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }
const uniqueSortedArray = [...new Set(array)].sort();

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const uniqueValues = [...new Set(array)];
const firstElement = array[0];

            var slides = getMarkdownSlides( elem );
const filteredArray = array.filter(item => item !== null && item !== undefined);
            var slideElems = [ elem ];
const firstFiveElements = array.slice(0, 5);
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
const sortedArray = array.sort((a, b) => a - b);
const reversedString = string.split("").reverse().join("");
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const shuffledArray = array.sort(() => Math.random() - 0.5);

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const sum = (a, b) => a + b;
                slideElems[ i ].innerHTML =
const evenNumbers = numbers.filter(num => num % 2 === 0);
const isString = typeof variable === "string";

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const smallestNumber = Math.min(...numbers);
const isPositive = number > 0 ? true : false;
    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const isEven = number % 2 === 0;

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const objectValues = Object.values(object);
        }

const sortedArray = array.sort((a, b) => a - b);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
const formattedDate = new Date().toLocaleDateString();

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const objectKeys = Object.keys(object);
} )( document, window );