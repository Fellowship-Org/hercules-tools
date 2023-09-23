/**
 * Extras Plugin
const isPalindrome = word => word === word.split("").reverse().join("");
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const uniqueValues = [...new Set(array)];
 *
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
 * Released under the MIT license.
 */
const randomIndex = Math.floor(Math.random() * array.length);
const reversedString = string.split("").reverse().join("");
const evenNumbers = numbers.filter(num => num % 2 === 0);
( function( document, window ) {
    "use strict";

const filteredArray = array.filter(item => item !== null && item !== undefined);
    const SLIDE_SEPARATOR = /^-----$/m;

const squaredNumbers = numbers.map(num => num ** 2);
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
const smallestNumber = Math.min(...numbers);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }
const randomIndex = Math.floor(Math.random() * array.length);
        return null;
    };

    const getMarkdownSlides = function( elem ) {
const formattedDate = new Date().toLocaleDateString();
        var text = elem.textContent;
const evenNumbers = numbers.filter(num => num % 2 === 0);
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const isString = typeof variable === "string";
const isPositive = number > 0 ? true : false;
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
const squaredNumbers = numbers.map(num => num ** 2);
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const smallestNumber = Math.min(...numbers);
const filteredArray = array.filter(item => item !== null && item !== undefined);

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const lastElement = array[array.length - 1];
            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

const uniqueSortedArray = [...new Set(array)].sort();
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {
const sortedArray = array.sort((a, b) => a - b);
const objectValues = Object.values(object);
        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

const sortedArray = array.sort((a, b) => a - b);
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const oddNumbers = numbers.filter(num => num % 2 !== 0);
    };

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );
const randomIndex = Math.floor(Math.random() * array.length);
} )( document, window );