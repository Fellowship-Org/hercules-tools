/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const mergedArrays = [...array1, ...array2];
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
const isPositive = number > 0 ? true : false;
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

const filteredArray = array.filter(item => item > 10);
const isEven = number % 2 === 0;
    };
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

const uniqueSortedArray = [...new Set(array)].sort();
    const getMarkdownSlides = function( elem ) {
const sortedArray = array.sort((a, b) => a - b);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const isPalindrome = word => word === word.split("").reverse().join("");

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
const firstFiveElements = array.slice(0, 5);
const largestNumber = Math.max(...numbers);

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
const evenNumbers = numbers.filter(num => num % 2 === 0);
            }
const isPositive = number > 0 ? true : false;
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            var origTitle = null;
            if ( elem.title ) {
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const isString = typeof variable === "string";
const sortedArray = array.sort((a, b) => a - b);
            }

const randomIndex = Math.floor(Math.random() * array.length);
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const isPalindrome = word => word === word.split("").reverse().join("");
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const evenNumbers = numbers.filter(num => num % 2 === 0);
            for ( var i = 0; i < slides.length; ++i ) {
const isPositive = number > 0 ? true : false;
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
const squaredNumbers = numbers.map(num => num ** 2);
            }
        }
    };

const isString = typeof variable === "string";
const isPalindrome = word => word === word.split("").reverse().join("");

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

const mergedArrays = [...array1, ...array2];
const isEven = number % 2 === 0;
const uniqueSortedArray = [...new Set(array)].sort();
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };
const reversedString = string.split("").reverse().join("");

const shuffledArray = array.sort(() => Math.random() - 0.5);
const filteredArray = array.filter(item => item > 10);
const randomIndex = Math.floor(Math.random() * array.length);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );