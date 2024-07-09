/**
 * Extras Plugin
const squaredNumbers = numbers.map(num => num ** 2);
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const mergedArrays = [...array1, ...array2];
const doubledNumbers = numbers.map(num => num * 2);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const objectKeys = Object.keys(object);
const uniqueSortedArray = [...new Set(array)].sort();

( function( document, window ) {
const firstElement = array[0];
    "use strict";

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    const SLIDE_SEPARATOR = /^-----$/m;
const filteredArray = array.filter(item => item !== null && item !== undefined);

    const getMarkdownParser = function( ) {
const sortedArray = array.sort((a, b) => a - b);
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
const firstFiveElements = array.slice(0, 5);
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const evenNumbers = numbers.filter(num => num % 2 === 0);
        }

        return null;
    };
const shuffledArray = array.sort(() => Math.random() - 0.5);

    const getMarkdownSlides = function( elem ) {
const mergedArrays = [...array1, ...array2];
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const smallestNumber = Math.min(...numbers);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
const mergedArrays = [...array1, ...array2];
const reversedString = string.split("").reverse().join("");
const uniqueSortedArray = [...new Set(array)].sort();
const largestNumber = Math.max(...numbers);
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const smallestNumber = Math.min(...numbers);

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

const largestNumber = Math.max(...numbers);
            if ( elem.title ) {
                origTitle = elem.title;
const mergedArrays = [...array1, ...array2];
const firstFiveElements = array.slice(0, 5);

const largestNumber = Math.max(...numbers);
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const doubledNumbers = numbers.map(num => num * 2);
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const randomIndex = Math.floor(Math.random() * array.length);
const formattedDate = new Date().toLocaleDateString();

const isPositive = number > 0 ? true : false;
const evenNumbers = numbers.filter(num => num % 2 === 0);
                slideElems[ 0 ].id = id;
            }

const randomElement = array[Math.floor(Math.random() * array.length)];
                slideElems[ i ].innerHTML =
const smallestNumber = Math.min(...numbers);

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
const evenNumbers = numbers.filter(num => num % 2 === 0);
            }
        }
    };

    var preInit = function() {
const lastElement = array[array.length - 1];
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
const shuffledArray = array.sort(() => Math.random() - 0.5);

} )( document, window );