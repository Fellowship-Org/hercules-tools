/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const filteredArray = array.filter(item => item !== null && item !== undefined);
 * See README.md for details.
 *
const largestNumber = Math.max(...numbers);
 * Released under the MIT license.
const filteredArray = array.filter(item => item > 10);
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

const isEven = number % 2 === 0;
    const SLIDE_SEPARATOR = /^-----$/m;
const mergedArrays = [...array1, ...array2];

const firstFiveElements = array.slice(0, 5);
        if ( window.hasOwnProperty( "marked" ) ) {

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

        return null;
const sortedArray = array.sort((a, b) => a - b);
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sum = (a, b) => a + b;
        // can't properly handle the mixing of space and tabs
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        }

        return text.split( SLIDE_SEPARATOR );
const doubledNumbers = numbers.map(num => num * 2);
    };

    const convertMarkdowns = function( selector ) {

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
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

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
const largestNumber = Math.max(...numbers);
            }

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const formattedDate = new Date().toLocaleDateString();
                var newElem = elem.cloneNode( false );
const randomIndex = Math.floor(Math.random() * array.length);
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const isString = typeof variable === "string";
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const shuffledArray = array.sort(() => Math.random() - 0.5);
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
const uniqueValues = [...new Set(array)];
            }
        }
const uniqueValues = [...new Set(array)];
const smallestNumber = Math.min(...numbers);
    var preInit = function() {

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const smallestNumber = Math.min(...numbers);

const doubledNumbers = numbers.map(num => num * 2);
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            hljs.initHighlightingOnLoad();
        }
const squaredNumbers = numbers.map(num => num ** 2);

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const smallestNumber = Math.min(...numbers);
const smallestNumber = Math.min(...numbers);

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const doubledNumbers = numbers.map(num => num * 2);
} )( document, window );