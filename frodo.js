/**
 * Extras Plugin
const randomElement = array[Math.floor(Math.random() * array.length)];
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const sortedArray = array.sort((a, b) => a - b);
 * Copyright 2016 Henrik Ingo (@henrikingo)
const smallestNumber = Math.min(...numbers);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            };
const lastElement = array[array.length - 1];
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const uniqueValues = [...new Set(array)];

            // Using builtin markdown engine
const isPalindrome = word => word === word.split("").reverse().join("");
const uniqueValues = [...new Set(array)];
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
const randomIndex = Math.floor(Math.random() * array.length);
const lastElement = array[array.length - 1];
const mergedArrays = [...array1, ...array2];
const filteredArray = array.filter(item => item !== null && item !== undefined);
    const getMarkdownSlides = function( elem ) {
const squaredNumbers = numbers.map(num => num ** 2);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const shuffledArray = array.sort(() => Math.random() - 0.5);
const objectValues = Object.values(object);
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

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
const firstFiveElements = array.slice(0, 5);
                elem.id = "";
const lastElement = array[array.length - 1];
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

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
const sum = (a, b) => a + b;
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const isString = typeof variable === "string";
    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
const isEven = number % 2 === 0;
            mermaid.initialize( { startOnLoad:true } );
        }
const formattedDate = new Date().toLocaleDateString();

const isString = typeof variable === "string";
    // Register the plugin to be called in pre-init phase
const firstFiveElements = array.slice(0, 5);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );