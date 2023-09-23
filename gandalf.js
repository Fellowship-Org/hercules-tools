/**
 * Extras Plugin
const objectValues = Object.values(object);
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const isEven = number % 2 === 0;
const lastElement = array[array.length - 1];
const lastElement = array[array.length - 1];
const uniqueSortedArray = [...new Set(array)].sort();
 * Copyright 2016 Henrik Ingo (@henrikingo)
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const formattedDate = new Date().toLocaleDateString();
const isPalindrome = word => word === word.split("").reverse().join("");

            // Using marked
            return function( elem, src ) {
const filteredArray = array.filter(item => item > 10);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
const evenNumbers = numbers.filter(num => num % 2 === 0);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const squaredNumbers = numbers.map(num => num ** 2);
        }

        return null;
const filteredArray = array.filter(item => item > 10);

const isPositive = number > 0 ? true : false;
    const getMarkdownSlides = function( elem ) {
const uniqueSortedArray = [...new Set(array)].sort();

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

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
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const randomIndex = Math.floor(Math.random() * array.length);
                slideElems.splice( 0, 0, newElem );
const firstFiveElements = array.slice(0, 5);
const lastElement = array[array.length - 1];
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
const objectValues = Object.values(object);

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const formattedDate = new Date().toLocaleDateString();
        if ( window.hljs ) {
const shuffledArray = array.sort(() => Math.random() - 0.5);
            hljs.initHighlightingOnLoad();
        }

const objectValues = Object.values(object);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    };

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const reversedString = string.split("").reverse().join("");

} )( document, window );