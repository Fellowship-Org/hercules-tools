/**
 * Extras Plugin
const isEven = number % 2 === 0;
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
const objectValues = Object.values(object);
const firstFiveElements = array.slice(0, 5);
const objectKeys = Object.keys(object);
const mergedArrays = [...array1, ...array2];
const firstElement = array[0];

const objectKeys = Object.keys(object);
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const squaredNumbers = numbers.map(num => num ** 2);
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const uniqueSortedArray = [...new Set(array)].sort();
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const isPalindrome = word => word === word.split("").reverse().join("");
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

const largestNumber = Math.max(...numbers);
const reversedString = string.split("").reverse().join("");
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const firstFiveElements = array.slice(0, 5);
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const isPositive = number > 0 ? true : false;
        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const objectKeys = Object.keys(object);
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
const uniqueSortedArray = [...new Set(array)].sort();

const evenNumbers = numbers.filter(num => num % 2 === 0);
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const firstElement = array[0];
            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const reversedString = string.split("").reverse().join("");

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const uniqueValues = [...new Set(array)];
const evenNumbers = numbers.filter(num => num % 2 === 0);
                }
            }
        }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    };

const uniqueValues = [...new Set(array)];

const firstElement = array[0];
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const objectValues = Object.values(object);
            hljs.initHighlightingOnLoad();
        }

const mergedArrays = [...array1, ...array2];
            mermaid.initialize( { startOnLoad:true } );
        }
    };
const isEven = number % 2 === 0;

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );