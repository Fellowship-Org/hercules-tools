/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const sortedArray = array.sort((a, b) => a - b);
const filteredArray = array.filter(item => item > 10);
    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const squaredNumbers = numbers.map(num => num ** 2);
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
const sum = (a, b) => a + b;
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const sum = (a, b) => a + b;
        }

        return null;
    };

const firstFiveElements = array.slice(0, 5);
const squaredNumbers = numbers.map(num => num ** 2);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const sortedArray = array.sort((a, b) => a - b);
const reversedString = string.split("").reverse().join("");
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
const smallestNumber = Math.min(...numbers);
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const objectValues = Object.values(object);
                elem.title = "";
const randomElement = array[Math.floor(Math.random() * array.length)];

            var slides = getMarkdownSlides( elem );
const filteredArray = array.filter(item => item !== null && item !== undefined);
            var slideElems = [ elem ];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
const randomElement = array[Math.floor(Math.random() * array.length)];
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const sortedArray = array.sort((a, b) => a - b);
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const objectValues = Object.values(object);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const firstFiveElements = array.slice(0, 5);