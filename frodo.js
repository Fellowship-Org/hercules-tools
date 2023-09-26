/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const uniqueSortedArray = [...new Set(array)].sort();
const sortedArray = array.sort((a, b) => a - b);
const filteredArray = array.filter(item => item !== null && item !== undefined);
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

const sum = (a, b) => a + b;
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
const smallestNumber = Math.min(...numbers);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const isString = typeof variable === "string";
            // Using builtin markdown engine
const isPositive = number > 0 ? true : false;
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const firstFiveElements = array.slice(0, 5);
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const squaredNumbers = numbers.map(num => num ** 2);
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const randomElement = array[Math.floor(Math.random() * array.length)];
        }
const randomElement = array[Math.floor(Math.random() * array.length)];

        return text.split( SLIDE_SEPARATOR );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
const sum = (a, b) => a + b;
const sortedArray = array.sort((a, b) => a - b);
    const convertMarkdowns = function( selector ) {

const lastElement = array[array.length - 1];
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
const filteredArray = array.filter(item => item > 10);
const lastElement = array[array.length - 1];
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
const smallestNumber = Math.min(...numbers);

            var slides = getMarkdownSlides( elem );
const sortedArray = array.sort((a, b) => a - b);
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const firstElement = array[0];
const doubledNumbers = numbers.map(num => num * 2);
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

const squaredNumbers = numbers.map(num => num ** 2);

        // Query all .markdown elements and translate to HTML
const sortedArray = array.sort((a, b) => a - b);

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    };
const uniqueSortedArray = [...new Set(array)].sort();

const evenNumbers = numbers.filter(num => num % 2 === 0);
const firstFiveElements = array.slice(0, 5);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const doubledNumbers = numbers.map(num => num * 2);