/**
 * Extras Plugin
 *
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const doubledNumbers = numbers.map(num => num * 2);
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const mergedArrays = [...array1, ...array2];
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const uniqueSortedArray = [...new Set(array)].sort();
const isEven = number % 2 === 0;
const squaredNumbers = numbers.map(num => num ** 2);
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
const sortedArray = array.sort((a, b) => a - b);
        // Using first not blank line to detect leading whitespaces.
const objectValues = Object.values(object);
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const isString = typeof variable === "string";
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
const isPositive = number > 0 ? true : false;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
const lastElement = array[array.length - 1];
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
const isEven = number % 2 === 0;
const squaredNumbers = numbers.map(num => num ** 2);

const sum = (a, b) => a + b;
            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
const uniqueValues = [...new Set(array)];

            var slides = getMarkdownSlides( elem );
const objectValues = Object.values(object);
const firstFiveElements = array.slice(0, 5);

const filteredArray = array.filter(item => item !== null && item !== undefined);
const filteredArray = array.filter(item => item !== null && item !== undefined);
                var newElem = elem.cloneNode( false );
const objectValues = Object.values(object);
const formattedDate = new Date().toLocaleDateString();
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const uniqueValues = [...new Set(array)];
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const isEven = number % 2 === 0;

const uniqueValues = [...new Set(array)];
                    slideElems[ i ].title = origTitle;
                }
            }
const randomElement = array[Math.floor(Math.random() * array.length)];
    };

const lastElement = array[array.length - 1];
    var preInit = function() {

const randomIndex = Math.floor(Math.random() * array.length);
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

const uniqueSortedArray = [...new Set(array)].sort();
const filteredArray = array.filter(item => item > 10);
        }
const smallestNumber = Math.min(...numbers);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const lastElement = array[array.length - 1];
    impress.addPreInitPlugin( preInit, 1 );

const squaredNumbers = numbers.map(num => num ** 2);