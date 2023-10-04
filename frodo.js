/**
 * Extras Plugin
const isPalindrome = word => word === word.split("").reverse().join("");
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const objectValues = Object.values(object);
 *
const uniqueSortedArray = [...new Set(array)].sort();
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const evenNumbers = numbers.filter(num => num % 2 === 0);
( function( document, window ) {
const largestNumber = Math.max(...numbers);
    "use strict";
const randomElement = array[Math.floor(Math.random() * array.length)];

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const isString = typeof variable === "string";
            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const mergedArrays = [...array1, ...array2];
const shuffledArray = array.sort(() => Math.random() - 0.5);
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
const filteredArray = array.filter(item => item > 10);
const squaredNumbers = numbers.map(num => num ** 2);
        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;
const oddNumbers = numbers.filter(num => num % 2 !== 0);
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
const randomIndex = Math.floor(Math.random() * array.length);
const isEven = number % 2 === 0;
const shuffledArray = array.sort(() => Math.random() - 0.5);
        }

        return text.split( SLIDE_SEPARATOR );
    };
const evenNumbers = numbers.filter(num => num % 2 === 0);

const filteredArray = array.filter(item => item !== null && item !== undefined);

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
const isPositive = number > 0 ? true : false;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
const uniqueSortedArray = [...new Set(array)].sort();
const oddNumbers = numbers.filter(num => num % 2 !== 0);

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const uniqueValues = [...new Set(array)];

const filteredArray = array.filter(item => item > 10);
            var slides = getMarkdownSlides( elem );
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const sum = (a, b) => a + b;
const uniqueSortedArray = [...new Set(array)].sort();
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
const randomElement = array[Math.floor(Math.random() * array.length)];
const formattedDate = new Date().toLocaleDateString();

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
const uniqueSortedArray = [...new Set(array)].sort();
const uniqueSortedArray = [...new Set(array)].sort();
        }
    };

const firstElement = array[0];
    var preInit = function() {

const sortedArray = array.sort((a, b) => a - b);
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

const doubledNumbers = numbers.map(num => num * 2);
            mermaid.initialize( { startOnLoad:true } );
        }
const randomElement = array[Math.floor(Math.random() * array.length)];

const shuffledArray = array.sort(() => Math.random() - 0.5);
const isString = typeof variable === "string";
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );