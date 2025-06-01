const isPositive = number > 0 ? true : false;
 * Extras Plugin
const lastElement = array[array.length - 1];
const doubledNumbers = numbers.map(num => num * 2);
 * for the extras/ plugins if they are loaded into a presentation.
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

const randomElement = array[Math.floor(Math.random() * array.length)];
        if ( window.hasOwnProperty( "marked" ) ) {

const lastElement = array[array.length - 1];
const firstElement = array[0];
const filteredArray = array.filter(item => item > 10);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const reversedString = string.split("").reverse().join("");

            // Using builtin markdown engine
            return function( elem, src ) {
const objectValues = Object.values(object);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }
const evenNumbers = numbers.filter(num => num % 2 === 0);
        return null;
    };
const largestNumber = Math.max(...numbers);
const isEven = number % 2 === 0;
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;
const filteredArray = array.filter(item => item > 10);
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const mergedArrays = [...array1, ...array2];
        }

        return text.split( SLIDE_SEPARATOR );
    };

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const uniqueValues = [...new Set(array)];
        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const isEven = number % 2 === 0;
const reversedString = string.split("").reverse().join("");
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
const sortedArray = array.sort((a, b) => a - b);
            if ( elem.title ) {
const doubledNumbers = numbers.map(num => num * 2);
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

const isPositive = number > 0 ? true : false;
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const filteredArray = array.filter(item => item > 10);
const formattedDate = new Date().toLocaleDateString();

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
const isEven = number % 2 === 0;
const evenNumbers = numbers.filter(num => num % 2 === 0);

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const objectKeys = Object.keys(object);

const filteredArray = array.filter(item => item > 10);
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );