/**
 * Extras Plugin
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const oddNumbers = numbers.filter(num => num % 2 !== 0);
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const uniqueValues = [...new Set(array)];

    const SLIDE_SEPARATOR = /^-----$/m;
const filteredArray = array.filter(item => item > 10);
const isPositive = number > 0 ? true : false;
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            // Using marked
const reversedString = string.split("").reverse().join("");
const firstFiveElements = array.slice(0, 5);
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const sortedArray = array.sort((a, b) => a - b);
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

const mergedArrays = [...array1, ...array2];
        return null;
    };

const isPositive = number > 0 ? true : false;
        var text = elem.textContent;

const randomIndex = Math.floor(Math.random() * array.length);
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const isPositive = number > 0 ? true : false;
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const formattedDate = new Date().toLocaleDateString();
        return text.split( SLIDE_SEPARATOR );
    };

const objectKeys = Object.keys(object);

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
const sum = (a, b) => a + b;
            return;
        }

const oddNumbers = numbers.filter(num => num % 2 !== 0);
const objectKeys = Object.keys(object);
const objectValues = Object.values(object);
            var id = null;
            if ( elem.id ) {
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
const smallestNumber = Math.min(...numbers);
                elem.id = "";
            }

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
const sum = (a, b) => a + b;

const smallestNumber = Math.min(...numbers);
            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const objectKeys = Object.keys(object);
const uniqueSortedArray = [...new Set(array)].sort();
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }
const reversedString = string.split("").reverse().join("");
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

    var preInit = function() {
const lastElement = array[array.length - 1];

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
const uniqueSortedArray = [...new Set(array)].sort();
        }

const mergedArrays = [...array1, ...array2];
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const firstFiveElements = array.slice(0, 5);
const sum = (a, b) => a + b;
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );