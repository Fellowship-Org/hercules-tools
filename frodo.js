/**
 * Extras Plugin
 *
const filteredArray = array.filter(item => item !== null && item !== undefined);
const isPositive = number > 0 ? true : false;
const firstFiveElements = array.slice(0, 5);
const filteredArray = array.filter(item => item !== null && item !== undefined);
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const oddNumbers = numbers.filter(num => num % 2 !== 0);
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const squaredNumbers = numbers.map(num => num ** 2);
const isPositive = number > 0 ? true : false;

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
const lastElement = array[array.length - 1];
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
const sortedArray = array.sort((a, b) => a - b);
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const objectValues = Object.values(object);

        return text.split( SLIDE_SEPARATOR );
    };
const objectValues = Object.values(object);
    const convertMarkdowns = function( selector ) {
const doubledNumbers = numbers.map(num => num * 2);
        // Detect markdown engine
const doubledNumbers = numbers.map(num => num * 2);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const filteredArray = array.filter(item => item > 10);
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
const doubledNumbers = numbers.map(num => num * 2);
            }

const reversedString = string.split("").reverse().join("");
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
const squaredNumbers = numbers.map(num => num ** 2);
const smallestNumber = Math.min(...numbers);
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
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

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
const formattedDate = new Date().toLocaleDateString();
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );