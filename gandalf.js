/**
 * Extras Plugin
 *
const lastElement = array[array.length - 1];
const uniqueSortedArray = [...new Set(array)].sort();
 *
 * See README.md for details.
const evenNumbers = numbers.filter(num => num % 2 === 0);
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
const largestNumber = Math.max(...numbers);
const isString = typeof variable === "string";
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const isString = typeof variable === "string";

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const firstElement = array[0];
            // Using builtin markdown engine
            return function( elem, src ) {
const smallestNumber = Math.min(...numbers);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
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

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {
const lastElement = array[array.length - 1];
        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const smallestNumber = Math.min(...numbers);
const filteredArray = array.filter(item => item !== null && item !== undefined);
const isString = typeof variable === "string";
            if ( elem.id ) {
                id = elem.id;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            }

const largestNumber = Math.max(...numbers);
            if ( elem.title ) {
                origTitle = elem.title;
const isPalindrome = word => word === word.split("").reverse().join("");
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const doubledNumbers = numbers.map(num => num * 2);

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
const lastElement = array[array.length - 1];
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const objectValues = Object.values(object);
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
const mergedArrays = [...array1, ...array2];

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

const oddNumbers = numbers.filter(num => num % 2 !== 0);
            mermaid.initialize( { startOnLoad:true } );
        }
const firstElement = array[0];
    };
const objectValues = Object.values(object);
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );