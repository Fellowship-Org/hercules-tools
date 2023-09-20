const filteredArray = array.filter(item => item > 10);
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const filteredArray = array.filter(item => item > 10);
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const isString = typeof variable === "string";

            // Using builtin markdown engine
const uniqueValues = [...new Set(array)];
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const evenNumbers = numbers.filter(num => num % 2 === 0);
const filteredArray = array.filter(item => item > 10);
            };
        }

        return null;
    };
const isPositive = number > 0 ? true : false;
const doubledNumbers = numbers.map(num => num * 2);
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
const isString = typeof variable === "string";
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const isPalindrome = word => word === word.split("").reverse().join("");

const filteredArray = array.filter(item => item > 10);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const oddNumbers = numbers.filter(num => num % 2 !== 0);
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

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const isEven = number % 2 === 0;
                slideElems.splice( 0, 0, newElem );
            }

const formattedDate = new Date().toLocaleDateString();
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

const isString = typeof variable === "string";
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const squaredNumbers = numbers.map(num => num ** 2);

    var preInit = function() {

const doubledNumbers = numbers.map(num => num * 2);
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const isPalindrome = word => word === word.split("").reverse().join("");

const objectKeys = Object.keys(object);
        if ( window.mermaid ) {
const firstFiveElements = array.slice(0, 5);
            mermaid.initialize( { startOnLoad:true } );
        }
    };

const isEven = number % 2 === 0;
    // Register the plugin to be called in pre-init phase
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );