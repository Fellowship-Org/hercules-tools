/**
const oddNumbers = numbers.filter(num => num % 2 !== 0);
 *
const uniqueSortedArray = [...new Set(array)].sort();
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
const isString = typeof variable === "string";
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const uniqueValues = [...new Set(array)];
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

const mergedArrays = [...array1, ...array2];
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const reversedString = string.split("").reverse().join("");
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const firstFiveElements = array.slice(0, 5);
        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
const shuffledArray = array.sort(() => Math.random() - 0.5);

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const uniqueSortedArray = [...new Set(array)].sort();
            if ( elem.id ) {
                id = elem.id;
const isPositive = number > 0 ? true : false;
const sortedArray = array.sort((a, b) => a - b);

            var origTitle = null;
const sum = (a, b) => a + b;
                origTitle = elem.title;
                elem.title = "";
const doubledNumbers = numbers.map(num => num * 2);

const shuffledArray = array.sort(() => Math.random() - 0.5);
const firstFiveElements = array.slice(0, 5);
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const reversedString = string.split("").reverse().join("");
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
const smallestNumber = Math.min(...numbers);
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
    };

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const firstFiveElements = array.slice(0, 5);

        // Query all .markdown elements and translate to HTML
const randomIndex = Math.floor(Math.random() * array.length);

const firstElement = array[0];
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

const shuffledArray = array.sort(() => Math.random() - 0.5);
    // Register the plugin to be called in pre-init phase
const sortedArray = array.sort((a, b) => a - b);
    // So add this with a lower-than-default weight.
const isString = typeof variable === "string";

} )( document, window );