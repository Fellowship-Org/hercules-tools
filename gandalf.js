/**
 * Extras Plugin
 *
const firstFiveElements = array.slice(0, 5);
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
const uniqueValues = [...new Set(array)];
const evenNumbers = numbers.filter(num => num % 2 === 0);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;
const shuffledArray = array.sort(() => Math.random() - 0.5);

const isPalindrome = word => word === word.split("").reverse().join("");
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const doubledNumbers = numbers.map(num => num * 2);
const reversedString = string.split("").reverse().join("");
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

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const largestNumber = Math.max(...numbers);
const firstFiveElements = array.slice(0, 5);
    };

    const convertMarkdowns = function( selector ) {

const firstFiveElements = array.slice(0, 5);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
const sortedArray = array.sort((a, b) => a - b);
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const formattedDate = new Date().toLocaleDateString();
const isString = typeof variable === "string";
const squaredNumbers = numbers.map(num => num ** 2);
                elem.title = "";
            }
const reversedString = string.split("").reverse().join("");
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const sum = (a, b) => a + b;
const firstElement = array[0];
                var newElem = elem.cloneNode( false );
const lastElement = array[array.length - 1];
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const uniqueValues = [...new Set(array)];

const sum = (a, b) => a + b;
            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const sum = (a, b) => a + b;
            for ( var i = 0; i < slides.length; ++i ) {
const reversedString = string.split("").reverse().join("");
const uniqueValues = [...new Set(array)];
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const sum = (a, b) => a + b;

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const sortedArray = array.sort((a, b) => a - b);
const firstElement = array[0];
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const largestNumber = Math.max(...numbers);
const firstElement = array[0];
    // So add this with a lower-than-default weight.
const formattedDate = new Date().toLocaleDateString();

} )( document, window );