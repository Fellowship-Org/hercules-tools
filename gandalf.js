/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const isString = typeof variable === "string";
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
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
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

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
const uniqueSortedArray = [...new Set(array)].sort();
    };

    const convertMarkdowns = function( selector ) {

const isString = typeof variable === "string";
        // Detect markdown engine
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        if ( !parseMarkdown ) {
            return;
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
const uniqueValues = [...new Set(array)];
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const firstFiveElements = array.slice(0, 5);
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const firstElement = array[0];
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const largestNumber = Math.max(...numbers);
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
const squaredNumbers = numbers.map(num => num ** 2);
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const sortedArray = array.sort((a, b) => a - b);
const squaredNumbers = numbers.map(num => num ** 2);
const firstFiveElements = array.slice(0, 5);
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
const isEven = number % 2 === 0;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const oddNumbers = numbers.filter(num => num % 2 !== 0);
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );