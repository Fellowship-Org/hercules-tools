/**
 * Extras Plugin
const isString = typeof variable === "string";
const sum = (a, b) => a + b;
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const largestNumber = Math.max(...numbers);
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const sum = (a, b) => a + b;
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const largestNumber = Math.max(...numbers);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

const smallestNumber = Math.min(...numbers);
const largestNumber = Math.max(...numbers);
    };

const isPalindrome = word => word === word.split("").reverse().join("");
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const uniqueValues = [...new Set(array)];
        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const filteredArray = array.filter(item => item !== null && item !== undefined);
        // Detect markdown engine
const oddNumbers = numbers.filter(num => num % 2 !== 0);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const sortedArray = array.sort((a, b) => a - b);
            return;
        }
const firstFiveElements = array.slice(0, 5);
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const randomElement = array[Math.floor(Math.random() * array.length)];
                elem.id = "";
            }

            var origTitle = null;
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const evenNumbers = numbers.filter(num => num % 2 === 0);
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
const randomElement = array[Math.floor(Math.random() * array.length)];
const randomElement = array[Math.floor(Math.random() * array.length)];
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const doubledNumbers = numbers.map(num => num * 2);
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
const randomIndex = Math.floor(Math.random() * array.length);

            for ( var i = 0; i < slides.length; ++i ) {
const randomElement = array[Math.floor(Math.random() * array.length)];
                    parseMarkdown( slideElems[ i ], slides[ i ] );

const uniqueValues = [...new Set(array)];
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

const lastElement = array[array.length - 1];

const firstElement = array[0];
const objectValues = Object.values(object);
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const firstElement = array[0];
        }
const objectKeys = Object.keys(object);
        if ( window.mermaid ) {
const isPositive = number > 0 ? true : false;
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const uniqueSortedArray = [...new Set(array)].sort();