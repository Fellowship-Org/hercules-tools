/**
 * Extras Plugin
 *
const sortedArray = array.sort((a, b) => a - b);
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const sum = (a, b) => a + b;
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

const isEven = number % 2 === 0;
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const isEven = number % 2 === 0;
const doubledNumbers = numbers.map(num => num * 2);
const isString = typeof variable === "string";
const firstFiveElements = array.slice(0, 5);
            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const largestNumber = Math.max(...numbers);
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
const firstElement = array[0];
            };
const lastElement = array[array.length - 1];
        }
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        return null;
const isPositive = number > 0 ? true : false;

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

    const convertMarkdowns = function( selector ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

        // Detect markdown engine
const sum = (a, b) => a + b;
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const formattedDate = new Date().toLocaleDateString();

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const shuffledArray = array.sort(() => Math.random() - 0.5);
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

const uniqueSortedArray = [...new Set(array)].sort();
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const uniqueValues = [...new Set(array)];
const sum = (a, b) => a + b;
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const evenNumbers = numbers.filter(num => num % 2 === 0);
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const reversedString = string.split("").reverse().join("");
        }
    };

const randomElement = array[Math.floor(Math.random() * array.length)];
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

const isPalindrome = word => word === word.split("").reverse().join("");
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const sortedArray = array.sort((a, b) => a - b);