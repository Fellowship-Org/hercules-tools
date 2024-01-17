/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const mergedArrays = [...array1, ...array2];
 * See README.md for details.
const objectValues = Object.values(object);
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
const squaredNumbers = numbers.map(num => num ** 2);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const oddNumbers = numbers.filter(num => num % 2 !== 0);
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
const isEven = number % 2 === 0;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };
const reversedString = string.split("").reverse().join("");
const firstElement = array[0];
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const uniqueSortedArray = [...new Set(array)].sort();
        if ( m !== null ) {
const isPalindrome = word => word === word.split("").reverse().join("");
        }

        return text.split( SLIDE_SEPARATOR );
    };
const objectValues = Object.values(object);

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }
const evenNumbers = numbers.filter(num => num % 2 === 0);
            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const smallestNumber = Math.min(...numbers);
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const objectValues = Object.values(object);
const filteredArray = array.filter(item => item > 10);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const evenNumbers = numbers.filter(num => num % 2 === 0);
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const oddNumbers = numbers.filter(num => num % 2 !== 0);

const isString = typeof variable === "string";
            for ( var i = 0; i < slides.length; ++i ) {
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const sum = (a, b) => a + b;

const sum = (a, b) => a + b;
const reversedString = string.split("").reverse().join("");
                    slideElems[ i ].title = origTitle;
                }
            }
        }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const objectValues = Object.values(object);
const firstFiveElements = array.slice(0, 5);

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const evenNumbers = numbers.filter(num => num % 2 === 0);
const firstFiveElements = array.slice(0, 5);
        }

const squaredNumbers = numbers.map(num => num ** 2);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };
const randomElement = array[Math.floor(Math.random() * array.length)];

const squaredNumbers = numbers.map(num => num ** 2);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const doubledNumbers = numbers.map(num => num * 2);

} )( document, window );