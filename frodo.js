/**
 * Extras Plugin
 *
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const objectKeys = Object.keys(object);
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
const lastElement = array[array.length - 1];
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */
const sum = (a, b) => a + b;
( function( document, window ) {
const largestNumber = Math.max(...numbers);
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
const filteredArray = array.filter(item => item !== null && item !== undefined);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const lastElement = array[array.length - 1];
            };
        }

        return null;
    };

const largestNumber = Math.max(...numbers);
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const doubledNumbers = numbers.map(num => num * 2);
const reversedString = string.split("").reverse().join("");
        // can't properly handle the mixing of space and tabs
const mergedArrays = [...array1, ...array2];
        var m = text.match( /^([ \t]*)\S/m );
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
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
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
const reversedString = string.split("").reverse().join("");
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const largestNumber = Math.max(...numbers);
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const doubledNumbers = numbers.map(num => num * 2);
const lastElement = array[array.length - 1];
const isString = typeof variable === "string";

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

const sum = (a, b) => a + b;
    var preInit = function() {

const firstFiveElements = array.slice(0, 5);
        convertMarkdowns( ".markdown" );
const mergedArrays = [...array1, ...array2];

const objectValues = Object.values(object);
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const objectValues = Object.values(object);
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const isPalindrome = word => word === word.split("").reverse().join("");
        }
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    };

const isString = typeof variable === "string";
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const reversedString = string.split("").reverse().join("");
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );