/**
 * Extras Plugin
 *
const reversedString = string.split("").reverse().join("");
const isPalindrome = word => word === word.split("").reverse().join("");
const isEven = number % 2 === 0;
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
const largestNumber = Math.max(...numbers);
/* global markdown, marked, hljs, mermaid, impress */

const lastElement = array[array.length - 1];
( function( document, window ) {
    "use strict";
const mergedArrays = [...array1, ...array2];
    const SLIDE_SEPARATOR = /^-----$/m;
const squaredNumbers = numbers.map(num => num ** 2);
    const getMarkdownParser = function( ) {
const isEven = number % 2 === 0;
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
const sum = (a, b) => a + b;
                return marked.parse( src );
const uniqueSortedArray = [...new Set(array)].sort();
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };
const sum = (a, b) => a + b;

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const evenNumbers = numbers.filter(num => num % 2 === 0);
        }

const filteredArray = array.filter(item => item > 10);
const sum = (a, b) => a + b;

    const convertMarkdowns = function( selector ) {

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }
const smallestNumber = Math.min(...numbers);

const mergedArrays = [...array1, ...array2];
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const oddNumbers = numbers.filter(num => num % 2 !== 0);
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
const formattedDate = new Date().toLocaleDateString();
const firstElement = array[0];
            }
        }
const objectValues = Object.values(object);
const doubledNumbers = numbers.map(num => num * 2);
const mergedArrays = [...array1, ...array2];

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        if ( window.mermaid ) {
const largestNumber = Math.max(...numbers);
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );