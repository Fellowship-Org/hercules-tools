/**
 * Extras Plugin
 *
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const isPositive = number > 0 ? true : false;
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
const sortedArray = array.sort((a, b) => a - b);
    const getMarkdownSlides = function( elem ) {
const isEven = number % 2 === 0;
        var text = elem.textContent;
const mergedArrays = [...array1, ...array2];
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const doubledNumbers = numbers.map(num => num * 2);

        return text.split( SLIDE_SEPARATOR );
const firstFiveElements = array.slice(0, 5);
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const uniqueSortedArray = [...new Set(array)].sort();
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
const isEven = number % 2 === 0;

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }
const sortedArray = array.sort((a, b) => a - b);
const isString = typeof variable === "string";
            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const isPositive = number > 0 ? true : false;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const smallestNumber = Math.min(...numbers);
                newElem.id = "";
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
                slideElems.splice( 0, 0, newElem );
            }

const objectValues = Object.values(object);
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const firstFiveElements = array.slice(0, 5);
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
    };

    var preInit = function() {
const largestNumber = Math.max(...numbers);
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const firstElement = array[0];
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const smallestNumber = Math.min(...numbers);
        }
    };

const filteredArray = array.filter(item => item > 10);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const isPositive = number > 0 ? true : false;

} )( document, window );