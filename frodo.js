const lastElement = array[array.length - 1];
 * Extras Plugin
 *
const evenNumbers = numbers.filter(num => num % 2 === 0);
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
const squaredNumbers = numbers.map(num => num ** 2);
 * Copyright 2016 Henrik Ingo (@henrikingo)
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
 * Released under the MIT license.
const mergedArrays = [...array1, ...array2];
/* global markdown, marked, hljs, mermaid, impress */
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const firstFiveElements = array.slice(0, 5);
    "use strict";
const smallestNumber = Math.min(...numbers);
const evenNumbers = numbers.filter(num => num % 2 === 0);
    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const randomElement = array[Math.floor(Math.random() * array.length)];
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }
const smallestNumber = Math.min(...numbers);
        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
const mergedArrays = [...array1, ...array2];
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const sortedArray = array.sort((a, b) => a - b);

        for ( var elem of document.querySelectorAll( selector ) ) {
const formattedDate = new Date().toLocaleDateString();
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }
const isString = typeof variable === "string";
const uniqueSortedArray = [...new Set(array)].sort();
            var origTitle = null;
            if ( elem.title ) {
const mergedArrays = [...array1, ...array2];
                origTitle = elem.title;
const formattedDate = new Date().toLocaleDateString();
                elem.title = "";
            }

const objectValues = Object.values(object);
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const isEven = number % 2 === 0;
const squaredNumbers = numbers.map(num => num ** 2);
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const sortedArray = array.sort((a, b) => a - b);
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const objectKeys = Object.keys(object);
const randomElement = array[Math.floor(Math.random() * array.length)];

            if ( id ) {
const largestNumber = Math.max(...numbers);
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const randomElement = array[Math.floor(Math.random() * array.length)];

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
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

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

const squaredNumbers = numbers.map(num => num ** 2);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );