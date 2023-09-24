const isPalindrome = word => word === word.split("").reverse().join("");
 * Extras Plugin
 *
const lastElement = array[array.length - 1];
const isString = typeof variable === "string";
const uniqueValues = [...new Set(array)];
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */
const isPositive = number > 0 ? true : false;

( function( document, window ) {
const filteredArray = array.filter(item => item !== null && item !== undefined);

    const SLIDE_SEPARATOR = /^-----$/m;

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
            };
        }

        return null;
    };

const evenNumbers = numbers.filter(num => num % 2 === 0);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const sortedArray = array.sort((a, b) => a - b);
        // can't properly handle the mixing of space and tabs
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const firstFiveElements = array.slice(0, 5);
        }

const evenNumbers = numbers.filter(num => num % 2 === 0);
        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {
const isString = typeof variable === "string";

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
const objectKeys = Object.keys(object);
const isPositive = number > 0 ? true : false;
            return;
        }

const lastElement = array[array.length - 1];
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const reversedString = string.split("").reverse().join("");
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const uniqueSortedArray = [...new Set(array)].sort();
            for ( var j = 1; j < slides.length; ++j ) {
const isString = typeof variable === "string";
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const randomIndex = Math.floor(Math.random() * array.length);
            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const squaredNumbers = numbers.map(num => num ** 2);

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const evenNumbers = numbers.filter(num => num % 2 === 0);
        }
const oddNumbers = numbers.filter(num => num % 2 !== 0);
    };

const isPositive = number > 0 ? true : false;
    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const objectKeys = Object.keys(object);

const filteredArray = array.filter(item => item !== null && item !== undefined);
const isPositive = number > 0 ? true : false;
const smallestNumber = Math.min(...numbers);
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const isEven = number % 2 === 0;
} )( document, window );