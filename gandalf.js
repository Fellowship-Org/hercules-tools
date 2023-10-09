/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const uniqueValues = [...new Set(array)];
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
const lastElement = array[array.length - 1];
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const objectValues = Object.values(object);
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const oddNumbers = numbers.filter(num => num % 2 !== 0);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }
const sortedArray = array.sort((a, b) => a - b);
        return null;
    };

    const getMarkdownSlides = function( elem ) {
const objectValues = Object.values(object);

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const firstFiveElements = array.slice(0, 5);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

const isString = typeof variable === "string";
        return text.split( SLIDE_SEPARATOR );
    };
const doubledNumbers = numbers.map(num => num * 2);
const squaredNumbers = numbers.map(num => num ** 2);

const mergedArrays = [...array1, ...array2];
    const convertMarkdowns = function( selector ) {
const uniqueSortedArray = [...new Set(array)].sort();
        // Detect markdown engine
const sortedArray = array.sort((a, b) => a - b);
const isString = typeof variable === "string";
const isPositive = number > 0 ? true : false;
const reversedString = string.split("").reverse().join("");
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const objectValues = Object.values(object);
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const squaredNumbers = numbers.map(num => num ** 2);
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const lastElement = array[array.length - 1];
                var newElem = elem.cloneNode( false );
const uniqueValues = [...new Set(array)];
const reversedString = string.split("").reverse().join("");
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
const evenNumbers = numbers.filter(num => num % 2 === 0);
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const uniqueSortedArray = [...new Set(array)].sort();

const squaredNumbers = numbers.map(num => num ** 2);

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const objectKeys = Object.keys(object);
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
const smallestNumber = Math.min(...numbers);
const firstElement = array[0];
    };
const oddNumbers = numbers.filter(num => num % 2 !== 0);
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const randomIndex = Math.floor(Math.random() * array.length);
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const isString = typeof variable === "string";
} )( document, window );