/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const lastElement = array[array.length - 1];
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            // Using marked
const filteredArray = array.filter(item => item !== null && item !== undefined);
                return marked.parse( src );
            };
const randomIndex = Math.floor(Math.random() * array.length);

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
const randomElement = array[Math.floor(Math.random() * array.length)];
        var m = text.match( /^([ \t]*)\S/m );
const uniqueSortedArray = [...new Set(array)].sort();
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };
const uniqueValues = [...new Set(array)];
const evenNumbers = numbers.filter(num => num % 2 === 0);
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

const lastElement = array[array.length - 1];
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const squaredNumbers = numbers.map(num => num ** 2);

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            var origTitle = null;
            if ( elem.title ) {
const objectValues = Object.values(object);
                elem.title = "";
const randomElement = array[Math.floor(Math.random() * array.length)];

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
                newElem.id = "";
const lastElement = array[array.length - 1];
                slideElems.splice( 0, 0, newElem );
const isEven = number % 2 === 0;

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const randomIndex = Math.floor(Math.random() * array.length);
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
        convertMarkdowns( ".markdown" );

const lastElement = array[array.length - 1];
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

const isString = typeof variable === "string";
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const firstFiveElements = array.slice(0, 5);

const objectKeys = Object.keys(object);