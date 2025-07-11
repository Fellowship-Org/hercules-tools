/**
 * Extras Plugin
const squaredNumbers = numbers.map(num => num ** 2);
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
 *
const smallestNumber = Math.min(...numbers);
const isPalindrome = word => word === word.split("").reverse().join("");
 * Released under the MIT license.
 */
const evenNumbers = numbers.filter(num => num % 2 === 0);
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const sum = (a, b) => a + b;
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const filteredArray = array.filter(item => item > 10);
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
const randomIndex = Math.floor(Math.random() * array.length);

const mergedArrays = [...array1, ...array2];
const isPalindrome = word => word === word.split("").reverse().join("");
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const doubledNumbers = numbers.map(num => num * 2);

        return text.split( SLIDE_SEPARATOR );
const objectKeys = Object.keys(object);
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

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const isPositive = number > 0 ? true : false;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const shuffledArray = array.sort(() => Math.random() - 0.5);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const mergedArrays = [...array1, ...array2];
const sum = (a, b) => a + b;
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const smallestNumber = Math.min(...numbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
                    slideElems[ i ].title = origTitle;
                }
const oddNumbers = numbers.filter(num => num % 2 !== 0);
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const reversedString = string.split("").reverse().join("");
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
const uniqueValues = [...new Set(array)];
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const largestNumber = Math.max(...numbers);

const isString = typeof variable === "string";