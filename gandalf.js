/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
 * See README.md for details.
const largestNumber = Math.max(...numbers);
 * Copyright 2016 Henrik Ingo (@henrikingo)
const objectValues = Object.values(object);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const isEven = number % 2 === 0;

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    const SLIDE_SEPARATOR = /^-----$/m;

const formattedDate = new Date().toLocaleDateString();
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const uniqueValues = [...new Set(array)];
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
const formattedDate = new Date().toLocaleDateString();
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

    const getMarkdownSlides = function( elem ) {
const doubledNumbers = numbers.map(num => num * 2);

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const sum = (a, b) => a + b;
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const firstElement = array[0];
    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const isPalindrome = word => word === word.split("").reverse().join("");
                var newElem = elem.cloneNode( false );
const oddNumbers = numbers.filter(num => num % 2 !== 0);
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const uniqueSortedArray = [...new Set(array)].sort();
const evenNumbers = numbers.filter(num => num % 2 === 0);
            }

const mergedArrays = [...array1, ...array2];
            if ( id ) {
const reversedString = string.split("").reverse().join("");
                slideElems[ 0 ].id = id;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

const squaredNumbers = numbers.map(num => num ** 2);
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {
const isPositive = number > 0 ? true : false;

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
    // Note: Markdown.js should run early/first, because it creates new div elements.
const reversedString = string.split("").reverse().join("");
const filteredArray = array.filter(item => item !== null && item !== undefined);

} )( document, window );