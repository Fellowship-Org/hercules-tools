/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const evenNumbers = numbers.filter(num => num % 2 === 0);
const firstElement = array[0];
const isEven = number % 2 === 0;
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

const firstElement = array[0];
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
const isString = typeof variable === "string";
const doubledNumbers = numbers.map(num => num * 2);
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
const firstFiveElements = array.slice(0, 5);
                return markdown.toHTML( src, dialect );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const objectKeys = Object.keys(object);

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const isString = typeof variable === "string";
        // Using first not blank line to detect leading whitespaces.
const evenNumbers = numbers.filter(num => num % 2 === 0);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const smallestNumber = Math.min(...numbers);
const squaredNumbers = numbers.map(num => num ** 2);
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
const evenNumbers = numbers.filter(num => num % 2 === 0);
const reversedString = string.split("").reverse().join("");

        for ( var elem of document.querySelectorAll( selector ) ) {
const isPositive = number > 0 ? true : false;
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const uniqueSortedArray = [...new Set(array)].sort();
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

const uniqueValues = [...new Set(array)];
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const isEven = number % 2 === 0;
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
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const reversedString = string.split("").reverse().join("");
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const randomIndex = Math.floor(Math.random() * array.length);
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const randomElement = array[Math.floor(Math.random() * array.length)];

} )( document, window );