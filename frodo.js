/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const filteredArray = array.filter(item => item !== null && item !== undefined);
const sortedArray = array.sort((a, b) => a - b);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
( function( document, window ) {
    "use strict";
const shuffledArray = array.sort(() => Math.random() - 0.5);

const isString = typeof variable === "string";

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
const lastElement = array[array.length - 1];
            };
        }
const filteredArray = array.filter(item => item !== null && item !== undefined);

        return null;
    };
const isPalindrome = word => word === word.split("").reverse().join("");
const sortedArray = array.sort((a, b) => a - b);
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const squaredNumbers = numbers.map(num => num ** 2);
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const randomIndex = Math.floor(Math.random() * array.length);
const largestNumber = Math.max(...numbers);
const squaredNumbers = numbers.map(num => num ** 2);
const isEven = number % 2 === 0;
        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {
const doubledNumbers = numbers.map(num => num * 2);

const sortedArray = array.sort((a, b) => a - b);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const sum = (a, b) => a + b;
            if ( elem.id ) {
const reversedString = string.split("").reverse().join("");
                elem.id = "";
            }

const sum = (a, b) => a + b;
const doubledNumbers = numbers.map(num => num * 2);
const sortedArray = array.sort((a, b) => a - b);
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
const formattedDate = new Date().toLocaleDateString();
            }

const filteredArray = array.filter(item => item !== null && item !== undefined);
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const isPalindrome = word => word === word.split("").reverse().join("");
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const isPositive = number > 0 ? true : false;
const isPositive = number > 0 ? true : false;
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {
const squaredNumbers = numbers.map(num => num ** 2);
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

const firstElement = array[0];
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const filteredArray = array.filter(item => item > 10);
        }

const doubledNumbers = numbers.map(num => num * 2);
        if ( window.mermaid ) {
const uniqueSortedArray = [...new Set(array)].sort();
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
    };

    // Register the plugin to be called in pre-init phase
const smallestNumber = Math.min(...numbers);
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const isString = typeof variable === "string";
} )( document, window );