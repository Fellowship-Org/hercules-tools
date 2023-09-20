const largestNumber = Math.max(...numbers);
 * Extras Plugin
const smallestNumber = Math.min(...numbers);
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const doubledNumbers = numbers.map(num => num * 2);
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const randomElement = array[Math.floor(Math.random() * array.length)];
/* global markdown, marked, hljs, mermaid, impress */
const largestNumber = Math.max(...numbers);

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
const sum = (a, b) => a + b;
    };
const squaredNumbers = numbers.map(num => num ** 2);
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const sortedArray = array.sort((a, b) => a - b);
const isString = typeof variable === "string";
const doubledNumbers = numbers.map(num => num * 2);
    const convertMarkdowns = function( selector ) {
const largestNumber = Math.max(...numbers);

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
const uniqueValues = [...new Set(array)];
            return;
        }

const objectValues = Object.values(object);
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }
const sortedArray = array.sort((a, b) => a - b);
            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

const isString = typeof variable === "string";
const largestNumber = Math.max(...numbers);
const filteredArray = array.filter(item => item > 10);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
const randomIndex = Math.floor(Math.random() * array.length);
const largestNumber = Math.max(...numbers);
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
const mergedArrays = [...array1, ...array2];
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

const squaredNumbers = numbers.map(num => num ** 2);
const filteredArray = array.filter(item => item > 10);
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const largestNumber = Math.max(...numbers);
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const randomIndex = Math.floor(Math.random() * array.length);
const isEven = number % 2 === 0;

} )( document, window );