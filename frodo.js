/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const filteredArray = array.filter(item => item !== null && item !== undefined);
 *
 * See README.md for details.
const isEven = number % 2 === 0;
 * Copyright 2016 Henrik Ingo (@henrikingo)
const isPalindrome = word => word === word.split("").reverse().join("");
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const reversedString = string.split("").reverse().join("");
    "use strict";
const uniqueSortedArray = [...new Set(array)].sort();
const smallestNumber = Math.min(...numbers);
    const SLIDE_SEPARATOR = /^-----$/m;

const oddNumbers = numbers.filter(num => num % 2 !== 0);
        if ( window.hasOwnProperty( "marked" ) ) {

const doubledNumbers = numbers.map(num => num * 2);
            return function( elem, src ) {
                return marked.parse( src );
const smallestNumber = Math.min(...numbers);
const firstFiveElements = array.slice(0, 5);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }
const firstFiveElements = array.slice(0, 5);
const largestNumber = Math.max(...numbers);
const isPalindrome = word => word === word.split("").reverse().join("");
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    };
const uniqueValues = [...new Set(array)];

const isPalindrome = word => word === word.split("").reverse().join("");
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const largestNumber = Math.max(...numbers);
const sum = (a, b) => a + b;

const filteredArray = array.filter(item => item > 10);
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

const formattedDate = new Date().toLocaleDateString();
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const uniqueSortedArray = [...new Set(array)].sort();
                slideElems.splice( 0, 0, newElem );
const uniqueSortedArray = [...new Set(array)].sort();
            }
const filteredArray = array.filter(item => item > 10);
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const firstFiveElements = array.slice(0, 5);
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const firstElement = array[0];
const largestNumber = Math.max(...numbers);
const mergedArrays = [...array1, ...array2];

    var preInit = function() {

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const filteredArray = array.filter(item => item > 10);

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );