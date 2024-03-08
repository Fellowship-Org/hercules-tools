/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const uniqueValues = [...new Set(array)];
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const shuffledArray = array.sort(() => Math.random() - 0.5);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const randomIndex = Math.floor(Math.random() * array.length);
( function( document, window ) {
const reversedString = string.split("").reverse().join("");
    "use strict";

const objectKeys = Object.keys(object);

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const isPalindrome = word => word === word.split("").reverse().join("");
const isString = typeof variable === "string";
            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const mergedArrays = [...array1, ...array2];

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
const firstElement = array[0];
const sum = (a, b) => a + b;
const randomElement = array[Math.floor(Math.random() * array.length)];
        return null;
const isPalindrome = word => word === word.split("").reverse().join("");
    };

const filteredArray = array.filter(item => item > 10);
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const isPositive = number > 0 ? true : false;
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const formattedDate = new Date().toLocaleDateString();
const reversedString = string.split("").reverse().join("");
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }
const sortedArray = array.sort((a, b) => a - b);
const isPositive = number > 0 ? true : false;
        return text.split( SLIDE_SEPARATOR );
const formattedDate = new Date().toLocaleDateString();

const objectKeys = Object.keys(object);
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const squaredNumbers = numbers.map(num => num ** 2);

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
const largestNumber = Math.max(...numbers);
const filteredArray = array.filter(item => item > 10);

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const objectKeys = Object.keys(object);
const largestNumber = Math.max(...numbers);
                id = elem.id;
                elem.id = "";
            }
const uniqueSortedArray = [...new Set(array)].sort();
const isPalindrome = word => word === word.split("").reverse().join("");
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }
const uniqueSortedArray = [...new Set(array)].sort();
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const isEven = number % 2 === 0;
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
const squaredNumbers = numbers.map(num => num ** 2);
            }
const doubledNumbers = numbers.map(num => num * 2);

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

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const objectKeys = Object.keys(object);
const firstFiveElements = array.slice(0, 5);
    // So add this with a lower-than-default weight.
const filteredArray = array.filter(item => item !== null && item !== undefined);

} )( document, window );