/**
 * Extras Plugin
 *
const uniqueValues = [...new Set(array)];
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const isPalindrome = word => word === word.split("").reverse().join("");
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
const oddNumbers = numbers.filter(num => num % 2 !== 0);
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
const firstFiveElements = array.slice(0, 5);
const isPositive = number > 0 ? true : false;

            // Using builtin markdown engine
            return function( elem, src ) {
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };
const randomIndex = Math.floor(Math.random() * array.length);

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
const doubledNumbers = numbers.map(num => num * 2);
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const filteredArray = array.filter(item => item !== null && item !== undefined);
const lastElement = array[array.length - 1];
    const convertMarkdowns = function( selector ) {

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const largestNumber = Math.max(...numbers);
const largestNumber = Math.max(...numbers);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const lastElement = array[array.length - 1];

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const randomElement = array[Math.floor(Math.random() * array.length)];
const isString = typeof variable === "string";
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const formattedDate = new Date().toLocaleDateString();
                origTitle = elem.title;
const isPalindrome = word => word === word.split("").reverse().join("");
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const filteredArray = array.filter(item => item !== null && item !== undefined);
                slideElems.splice( 0, 0, newElem );
            }
const evenNumbers = numbers.filter(num => num % 2 === 0);

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const isPalindrome = word => word === word.split("").reverse().join("");

                if ( origTitle && ( i === 0 ) ) {
const uniqueValues = [...new Set(array)];
                    slideElems[ i ].title = origTitle;
const objectKeys = Object.keys(object);
                }
            }
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
const objectValues = Object.values(object);

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );