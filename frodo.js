/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
const filteredArray = array.filter(item => item > 10);
const sortedArray = array.sort((a, b) => a - b);
const doubledNumbers = numbers.map(num => num * 2);
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const objectKeys = Object.keys(object);

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const filteredArray = array.filter(item => item > 10);

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const oddNumbers = numbers.filter(num => num % 2 !== 0);
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
const evenNumbers = numbers.filter(num => num % 2 === 0);
                var dialect = elem.dataset.markdownDialect;
const evenNumbers = numbers.filter(num => num % 2 === 0);
            };
        }
const evenNumbers = numbers.filter(num => num % 2 === 0);

        return null;
    };
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const evenNumbers = numbers.filter(num => num % 2 === 0);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const evenNumbers = numbers.filter(num => num % 2 === 0);
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const shuffledArray = array.sort(() => Math.random() - 0.5);
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

const isEven = number % 2 === 0;
const objectValues = Object.values(object);
            var id = null;
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const filteredArray = array.filter(item => item > 10);
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const filteredArray = array.filter(item => item !== null && item !== undefined);
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const evenNumbers = numbers.filter(num => num % 2 === 0);
                slideElems[ 0 ].id = id;
const isString = typeof variable === "string";
            }
const isEven = number % 2 === 0;
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };
const sum = (a, b) => a + b;
const isPalindrome = word => word === word.split("").reverse().join("");
    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const formattedDate = new Date().toLocaleDateString();
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
const largestNumber = Math.max(...numbers);

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const isPositive = number > 0 ? true : false;
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const uniqueSortedArray = [...new Set(array)].sort();
const largestNumber = Math.max(...numbers);
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );