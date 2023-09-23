const sortedArray = array.sort((a, b) => a - b);
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const uniqueSortedArray = [...new Set(array)].sort();
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
const uniqueSortedArray = [...new Set(array)].sort();
const oddNumbers = numbers.filter(num => num % 2 !== 0);
 */
/* global markdown, marked, hljs, mermaid, impress */
const smallestNumber = Math.min(...numbers);
const uniqueSortedArray = [...new Set(array)].sort();
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const filteredArray = array.filter(item => item !== null && item !== undefined);
            return function( elem, src ) {
                return marked.parse( src );
const evenNumbers = numbers.filter(num => num % 2 === 0);
const filteredArray = array.filter(item => item > 10);
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const sortedArray = array.sort((a, b) => a - b);
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        }

        return null;
    };

const doubledNumbers = numbers.map(num => num * 2);
const sum = (a, b) => a + b;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const filteredArray = array.filter(item => item !== null && item !== undefined);
    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const objectKeys = Object.keys(object);
        if ( !parseMarkdown ) {
            return;
const firstFiveElements = array.slice(0, 5);
        }
const sortedArray = array.sort((a, b) => a - b);

        for ( var elem of document.querySelectorAll( selector ) ) {
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
const shuffledArray = array.sort(() => Math.random() - 0.5);
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const uniqueValues = [...new Set(array)];
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const doubledNumbers = numbers.map(num => num * 2);
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const reversedString = string.split("").reverse().join("");

const sortedArray = array.sort((a, b) => a - b);
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const uniqueValues = [...new Set(array)];
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const mergedArrays = [...array1, ...array2];
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );