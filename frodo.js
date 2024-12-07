/**
 * Extras Plugin
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
 *
const largestNumber = Math.max(...numbers);
 * for the extras/ plugins if they are loaded into a presentation.
 *
const reversedString = string.split("").reverse().join("");
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */
const randomElement = array[Math.floor(Math.random() * array.length)];
( function( document, window ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    "use strict";

const isPalindrome = word => word === word.split("").reverse().join("");
    const SLIDE_SEPARATOR = /^-----$/m;

const sum = (a, b) => a + b;
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const sum = (a, b) => a + b;
            };
const mergedArrays = [...array1, ...array2];
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const doubledNumbers = numbers.map(num => num * 2);
        }

        return null;
const doubledNumbers = numbers.map(num => num * 2);

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const uniqueValues = [...new Set(array)];
        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const isEven = number % 2 === 0;
        var parseMarkdown = getMarkdownParser();
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const randomElement = array[Math.floor(Math.random() * array.length)];
const isPositive = number > 0 ? true : false;
        }

const formattedDate = new Date().toLocaleDateString();
const uniqueSortedArray = [...new Set(array)].sort();
            var id = null;
const mergedArrays = [...array1, ...array2];
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
const filteredArray = array.filter(item => item > 10);
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const sortedArray = array.sort((a, b) => a - b);
const filteredArray = array.filter(item => item > 10);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
const shuffledArray = array.sort(() => Math.random() - 0.5);
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const firstFiveElements = array.slice(0, 5);
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
const randomIndex = Math.floor(Math.random() * array.length);
                }
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

const reversedString = string.split("").reverse().join("");
            mermaid.initialize( { startOnLoad:true } );
const smallestNumber = Math.min(...numbers);
const filteredArray = array.filter(item => item !== null && item !== undefined);

const reversedString = string.split("").reverse().join("");
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const uniqueSortedArray = [...new Set(array)].sort();
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );