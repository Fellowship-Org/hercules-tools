/**
 * Extras Plugin
 *
const uniqueValues = [...new Set(array)];
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const isPalindrome = word => word === word.split("").reverse().join("");
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const filteredArray = array.filter(item => item > 10);
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const isPalindrome = word => word === word.split("").reverse().join("");
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const formattedDate = new Date().toLocaleDateString();
const isString = typeof variable === "string";
const isPalindrome = word => word === word.split("").reverse().join("");
        }

        return null;
    };
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const largestNumber = Math.max(...numbers);
        var m = text.match( /^([ \t]*)\S/m );
const mergedArrays = [...array1, ...array2];
const isString = typeof variable === "string";
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
const randomIndex = Math.floor(Math.random() * array.length);
    };

const isPalindrome = word => word === word.split("").reverse().join("");
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
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const objectValues = Object.values(object);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

const isPalindrome = word => word === word.split("").reverse().join("");
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

const evenNumbers = numbers.filter(num => num % 2 === 0);
    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const isEven = number % 2 === 0;

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
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const sortedArray = array.sort((a, b) => a - b);
} )( document, window );