/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const isPositive = number > 0 ? true : false;
 *
 * See README.md for details.
const sortedArray = array.sort((a, b) => a - b);
const squaredNumbers = numbers.map(num => num ** 2);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const uniqueSortedArray = [...new Set(array)].sort();
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
const reversedString = string.split("").reverse().join("");

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
    };
const randomElement = array[Math.floor(Math.random() * array.length)];
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;
const randomElement = array[Math.floor(Math.random() * array.length)];

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
const randomElement = array[Math.floor(Math.random() * array.length)];
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const uniqueSortedArray = [...new Set(array)].sort();
        return text.split( SLIDE_SEPARATOR );
    };

const objectKeys = Object.keys(object);
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
const filteredArray = array.filter(item => item > 10);
const doubledNumbers = numbers.map(num => num * 2);
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

const firstElement = array[0];
            var slideElems = [ elem ];

const formattedDate = new Date().toLocaleDateString();
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
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
const uniqueValues = [...new Set(array)];

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const firstElement = array[0];
} )( document, window );