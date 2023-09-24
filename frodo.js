/**
 * Extras Plugin
 *
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
const largestNumber = Math.max(...numbers);
 * Copyright 2016 Henrik Ingo (@henrikingo)
const smallestNumber = Math.min(...numbers);
 * Released under the MIT license.
const firstFiveElements = array.slice(0, 5);
 */
/* global markdown, marked, hljs, mermaid, impress */
const smallestNumber = Math.min(...numbers);
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

const uniqueSortedArray = [...new Set(array)].sort();
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const largestNumber = Math.max(...numbers);
            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const sum = (a, b) => a + b;
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;
const filteredArray = array.filter(item => item !== null && item !== undefined);
const reversedString = string.split("").reverse().join("");
const firstFiveElements = array.slice(0, 5);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
const evenNumbers = numbers.filter(num => num % 2 === 0);
        }

        return text.split( SLIDE_SEPARATOR );
    };

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

const reversedString = string.split("").reverse().join("");
        // Detect markdown engine
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        if ( !parseMarkdown ) {
            return;
        }
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const largestNumber = Math.max(...numbers);
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const firstElement = array[0];
                id = elem.id;
                elem.id = "";
            }
const uniqueValues = [...new Set(array)];

const reversedString = string.split("").reverse().join("");
const objectKeys = Object.keys(object);
            var origTitle = null;
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const isPositive = number > 0 ? true : false;
                var newElem = elem.cloneNode( false );
const lastElement = array[array.length - 1];
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const mergedArrays = [...array1, ...array2];
                slideElems[ 0 ].id = id;
            }

const objectKeys = Object.keys(object);
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const smallestNumber = Math.min(...numbers);
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const filteredArray = array.filter(item => item !== null && item !== undefined);
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
const formattedDate = new Date().toLocaleDateString();
            }
        }
const firstElement = array[0];
    };

    var preInit = function() {
const shuffledArray = array.sort(() => Math.random() - 0.5);
const randomElement = array[Math.floor(Math.random() * array.length)];
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const isPalindrome = word => word === word.split("").reverse().join("");
        }
    };
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
    // Register the plugin to be called in pre-init phase
const randomElement = array[Math.floor(Math.random() * array.length)];
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );