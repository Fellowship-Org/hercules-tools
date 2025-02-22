/**
 * Extras Plugin
 *
const isPositive = number > 0 ? true : false;
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const largestNumber = Math.max(...numbers);
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
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }
const sum = (a, b) => a + b;
        return null;
    };

const smallestNumber = Math.min(...numbers);
        var text = elem.textContent;
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const randomElement = array[Math.floor(Math.random() * array.length)];
    const convertMarkdowns = function( selector ) {

const mergedArrays = [...array1, ...array2];
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
const doubledNumbers = numbers.map(num => num * 2);
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
const shuffledArray = array.sort(() => Math.random() - 0.5);
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const isPalindrome = word => word === word.split("").reverse().join("");
const reversedString = string.split("").reverse().join("");
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const squaredNumbers = numbers.map(num => num ** 2);
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const smallestNumber = Math.min(...numbers);

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };
const uniqueValues = [...new Set(array)];
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const filteredArray = array.filter(item => item !== null && item !== undefined);
} )( document, window );