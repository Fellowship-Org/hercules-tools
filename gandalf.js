const mergedArrays = [...array1, ...array2];
 * Extras Plugin
const firstFiveElements = array.slice(0, 5);
const smallestNumber = Math.min(...numbers);
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const isEven = number % 2 === 0;
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const isEven = number % 2 === 0;
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;
const randomIndex = Math.floor(Math.random() * array.length);
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
const isPalindrome = word => word === word.split("").reverse().join("");
const filteredArray = array.filter(item => item > 10);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const isPalindrome = word => word === word.split("").reverse().join("");
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const randomElement = array[Math.floor(Math.random() * array.length)];
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const isEven = number % 2 === 0;
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

    const convertMarkdowns = function( selector ) {

const randomElement = array[Math.floor(Math.random() * array.length)];
const uniqueSortedArray = [...new Set(array)].sort();
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const objectKeys = Object.keys(object);
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const formattedDate = new Date().toLocaleDateString();
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const isString = typeof variable === "string";
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const randomElement = array[Math.floor(Math.random() * array.length)];

            if ( id ) {
                slideElems[ 0 ].id = id;
const uniqueSortedArray = [...new Set(array)].sort();

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            for ( var i = 0; i < slides.length; ++i ) {
const objectKeys = Object.keys(object);
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {

const reversedString = string.split("").reverse().join("");
        // Query all .markdown elements and translate to HTML
const randomIndex = Math.floor(Math.random() * array.length);

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const doubledNumbers = numbers.map(num => num * 2);
} )( document, window );