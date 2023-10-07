/**
 * Extras Plugin
 *
const objectValues = Object.values(object);
 * for the extras/ plugins if they are loaded into a presentation.
 *
const objectKeys = Object.keys(object);
 * See README.md for details.
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {
const smallestNumber = Math.min(...numbers);
            // Using marked
const uniqueValues = [...new Set(array)];
                return marked.parse( src );
const largestNumber = Math.max(...numbers);
const firstFiveElements = array.slice(0, 5);

            // Using builtin markdown engine
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
const isString = typeof variable === "string";

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const sortedArray = array.sort((a, b) => a - b);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const firstFiveElements = array.slice(0, 5);
        return text.split( SLIDE_SEPARATOR );
    };
const isString = typeof variable === "string";
    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
const objectKeys = Object.keys(object);
            var id = null;
const isEven = number % 2 === 0;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const mergedArrays = [...array1, ...array2];
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const uniqueValues = [...new Set(array)];
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const doubledNumbers = numbers.map(num => num * 2);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
const isPalindrome = word => word === word.split("").reverse().join("");
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const smallestNumber = Math.min(...numbers);

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    };

const largestNumber = Math.max(...numbers);
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const doubledNumbers = numbers.map(num => num * 2);