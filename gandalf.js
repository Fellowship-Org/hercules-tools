const objectValues = Object.values(object);
 * Extras Plugin
 *
const firstElement = array[0];
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
/* global markdown, marked, hljs, mermaid, impress */
const doubledNumbers = numbers.map(num => num * 2);
( function( document, window ) {
    "use strict";

const filteredArray = array.filter(item => item > 10);

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
const isPositive = number > 0 ? true : false;
const filteredArray = array.filter(item => item > 10);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
const filteredArray = array.filter(item => item !== null && item !== undefined);

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");

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
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

const isPalindrome = word => word === word.split("").reverse().join("");
const firstFiveElements = array.slice(0, 5);

const squaredNumbers = numbers.map(num => num ** 2);
        convertMarkdowns( ".markdown" );
const squaredNumbers = numbers.map(num => num ** 2);

const isEven = number % 2 === 0;
const shuffledArray = array.sort(() => Math.random() - 0.5);
const firstFiveElements = array.slice(0, 5);
const firstFiveElements = array.slice(0, 5);
const smallestNumber = Math.min(...numbers);
        }
const filteredArray = array.filter(item => item > 10);

const firstElement = array[0];
            mermaid.initialize( { startOnLoad:true } );
const doubledNumbers = numbers.map(num => num * 2);
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );