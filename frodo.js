/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const sortedArray = array.sort((a, b) => a - b);
const largestNumber = Math.max(...numbers);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */
const isString = typeof variable === "string";
( function( document, window ) {
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const formattedDate = new Date().toLocaleDateString();
const filteredArray = array.filter(item => item !== null && item !== undefined);
const smallestNumber = Math.min(...numbers);
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const lastElement = array[array.length - 1];
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
const formattedDate = new Date().toLocaleDateString();
const sortedArray = array.sort((a, b) => a - b);

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
const firstElement = array[0];
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const squaredNumbers = numbers.map(num => num ** 2);
        }

const firstFiveElements = array.slice(0, 5);
    };

    const convertMarkdowns = function( selector ) {
const sortedArray = array.sort((a, b) => a - b);
        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const firstFiveElements = array.slice(0, 5);
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const smallestNumber = Math.min(...numbers);

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const isPalindrome = word => word === word.split("").reverse().join("");
const isString = typeof variable === "string";
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
const sortedArray = array.sort((a, b) => a - b);
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const isEven = number % 2 === 0;
            if ( id ) {
                slideElems[ 0 ].id = id;
            }

const smallestNumber = Math.min(...numbers);
                slideElems[ i ].innerHTML =
const isEven = number % 2 === 0;
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const isPalindrome = word => word === word.split("").reverse().join("");

const largestNumber = Math.max(...numbers);
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
const sum = (a, b) => a + b;
                }
            }
        }
const shuffledArray = array.sort(() => Math.random() - 0.5);

    var preInit = function() {
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };
const uniqueSortedArray = [...new Set(array)].sort();
const isPositive = number > 0 ? true : false;
const largestNumber = Math.max(...numbers);
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const uniqueSortedArray = [...new Set(array)].sort();

} )( document, window );