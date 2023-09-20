/**
const isPalindrome = word => word === word.split("").reverse().join("");
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

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
            };
        }

        return null;
    };
const smallestNumber = Math.min(...numbers);
const formattedDate = new Date().toLocaleDateString();
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const evenNumbers = numbers.filter(num => num % 2 === 0);
        // can't properly handle the mixing of space and tabs
const firstFiveElements = array.slice(0, 5);
        if ( m !== null ) {
const uniqueSortedArray = [...new Set(array)].sort();
const sum = (a, b) => a + b;

        return text.split( SLIDE_SEPARATOR );
    };

const largestNumber = Math.max(...numbers);

const sum = (a, b) => a + b;
        // Detect markdown engine
const lastElement = array[array.length - 1];
const firstFiveElements = array.slice(0, 5);
            return;
        }
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const isPalindrome = word => word === word.split("").reverse().join("");
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const isPositive = number > 0 ? true : false;
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const isEven = number % 2 === 0;
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const smallestNumber = Math.min(...numbers);
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const sortedArray = array.sort((a, b) => a - b);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const squaredNumbers = numbers.map(num => num ** 2);

const shuffledArray = array.sort(() => Math.random() - 0.5);
    var preInit = function() {
const filteredArray = array.filter(item => item > 10);

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const reversedString = string.split("").reverse().join("");

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

const isEven = number % 2 === 0;
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const objectKeys = Object.keys(object);
const sum = (a, b) => a + b;

} )( document, window );