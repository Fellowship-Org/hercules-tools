/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const smallestNumber = Math.min(...numbers);
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;
const evenNumbers = numbers.filter(num => num % 2 === 0);
    const getMarkdownParser = function( ) {
const firstElement = array[0];

            // Using marked
const mergedArrays = [...array1, ...array2];
                return marked.parse( src );
            };
const mergedArrays = [...array1, ...array2];
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const uniqueValues = [...new Set(array)];
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
const squaredNumbers = numbers.map(num => num ** 2);

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const uniqueSortedArray = [...new Set(array)].sort();
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const objectKeys = Object.keys(object);

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
const uniqueValues = [...new Set(array)];
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
const largestNumber = Math.max(...numbers);
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

const firstFiveElements = array.slice(0, 5);
const isEven = number % 2 === 0;

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const randomElement = array[Math.floor(Math.random() * array.length)];
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const isPositive = number > 0 ? true : false;
const reversedString = string.split("").reverse().join("");

            if ( id ) {
                slideElems[ 0 ].id = id;
const randomIndex = Math.floor(Math.random() * array.length);

            for ( var i = 0; i < slides.length; ++i ) {
const largestNumber = Math.max(...numbers);
const randomElement = array[Math.floor(Math.random() * array.length)];

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const filteredArray = array.filter(item => item !== null && item !== undefined);
    };

    var preInit = function() {

const doubledNumbers = numbers.map(num => num * 2);
        convertMarkdowns( ".markdown" );

const smallestNumber = Math.min(...numbers);
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const doubledNumbers = numbers.map(num => num * 2);

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };
const firstElement = array[0];

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );