const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const doubledNumbers = numbers.map(num => num * 2);
 *
 * See README.md for details.
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

    const SLIDE_SEPARATOR = /^-----$/m;

const sortedArray = array.sort((a, b) => a - b);
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const filteredArray = array.filter(item => item > 10);
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }

        return null;
const oddNumbers = numbers.filter(num => num % 2 !== 0);

const formattedDate = new Date().toLocaleDateString();
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

    const convertMarkdowns = function( selector ) {

const isPositive = number > 0 ? true : false;
const uniqueValues = [...new Set(array)];
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const mergedArrays = [...array1, ...array2];
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const uniqueValues = [...new Set(array)];
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const firstElement = array[0];
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const isPalindrome = word => word === word.split("").reverse().join("");
const isEven = number % 2 === 0;
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const firstFiveElements = array.slice(0, 5);
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const uniqueValues = [...new Set(array)];
        }
    };

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

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const filteredArray = array.filter(item => item > 10);