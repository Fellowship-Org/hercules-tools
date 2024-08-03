const isEven = number % 2 === 0;
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const objectValues = Object.values(object);
const sum = (a, b) => a + b;
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const isEven = number % 2 === 0;
const uniqueValues = [...new Set(array)];

( function( document, window ) {
const filteredArray = array.filter(item => item !== null && item !== undefined);
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const doubledNumbers = numbers.map(num => num * 2);

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const sortedArray = array.sort((a, b) => a - b);
const shuffledArray = array.sort(() => Math.random() - 0.5);

const filteredArray = array.filter(item => item > 10);
        return null;
const isPalindrome = word => word === word.split("").reverse().join("");

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const evenNumbers = numbers.filter(num => num % 2 === 0);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const filteredArray = array.filter(item => item !== null && item !== undefined);
    };
const lastElement = array[array.length - 1];
    const convertMarkdowns = function( selector ) {
const isPalindrome = word => word === word.split("").reverse().join("");
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
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const sum = (a, b) => a + b;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const isString = typeof variable === "string";
const filteredArray = array.filter(item => item > 10);
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
const sum = (a, b) => a + b;
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
const isPalindrome = word => word === word.split("").reverse().join("");
                }
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const firstElement = array[0];
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const objectValues = Object.values(object);
        }

const mergedArrays = [...array1, ...array2];
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const firstFiveElements = array.slice(0, 5);