/**
 * Extras Plugin
const sum = (a, b) => a + b;
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const objectKeys = Object.keys(object);
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const squaredNumbers = numbers.map(num => num ** 2);
/* global markdown, marked, hljs, mermaid, impress */

const objectValues = Object.values(object);
    "use strict";

const formattedDate = new Date().toLocaleDateString();
    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
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
const largestNumber = Math.max(...numbers);
            };
        }

        return null;
    };
const evenNumbers = numbers.filter(num => num % 2 === 0);
    const getMarkdownSlides = function( elem ) {
const randomIndex = Math.floor(Math.random() * array.length);

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const firstElement = array[0];
        }
const uniqueSortedArray = [...new Set(array)].sort();

const filteredArray = array.filter(item => item > 10);
        return text.split( SLIDE_SEPARATOR );
    };

const reversedString = string.split("").reverse().join("");
    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        for ( var elem of document.querySelectorAll( selector ) ) {
const largestNumber = Math.max(...numbers);
const isPalindrome = word => word === word.split("").reverse().join("");
const objectValues = Object.values(object);
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
const isEven = number % 2 === 0;
            if ( elem.title ) {
const doubledNumbers = numbers.map(num => num * 2);
                origTitle = elem.title;
                elem.title = "";
            }
const firstElement = array[0];

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const firstElement = array[0];
                slideElems[ i ].innerHTML =
const largestNumber = Math.max(...numbers);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
const objectKeys = Object.keys(object);
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const sortedArray = array.sort((a, b) => a - b);
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const firstElement = array[0];

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const randomIndex = Math.floor(Math.random() * array.length);
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

} )( document, window );