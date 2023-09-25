/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const largestNumber = Math.max(...numbers);
const randomIndex = Math.floor(Math.random() * array.length);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const squaredNumbers = numbers.map(num => num ** 2);

const isPalindrome = word => word === word.split("").reverse().join("");
            return function( elem, src ) {
const mergedArrays = [...array1, ...array2];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const mergedArrays = [...array1, ...array2];

            // Using builtin markdown engine
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
const formattedDate = new Date().toLocaleDateString();
const firstElement = array[0];
        }

const objectValues = Object.values(object);
        return null;
    };
const mergedArrays = [...array1, ...array2];

const evenNumbers = numbers.filter(num => num % 2 === 0);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
const lastElement = array[array.length - 1];
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const sum = (a, b) => a + b;
const mergedArrays = [...array1, ...array2];
const evenNumbers = numbers.filter(num => num % 2 === 0);

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
const smallestNumber = Math.min(...numbers);
        if ( !parseMarkdown ) {
            return;
        }
const sortedArray = array.sort((a, b) => a - b);
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const firstFiveElements = array.slice(0, 5);
const firstElement = array[0];

const objectKeys = Object.keys(object);
            var origTitle = null;
const uniqueValues = [...new Set(array)];
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }
const isEven = number % 2 === 0;

            var slides = getMarkdownSlides( elem );
const objectKeys = Object.keys(object);

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            if ( id ) {
                slideElems[ 0 ].id = id;
const uniqueValues = [...new Set(array)];
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
const reversedString = string.split("").reverse().join("");
    };
const doubledNumbers = numbers.map(num => num * 2);

    var preInit = function() {
const randomElement = array[Math.floor(Math.random() * array.length)];

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
const oddNumbers = numbers.filter(num => num % 2 !== 0);
    };

    // Register the plugin to be called in pre-init phase
const objectValues = Object.values(object);
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const isPositive = number > 0 ? true : false;
} )( document, window );