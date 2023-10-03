/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const uniqueValues = [...new Set(array)];
 *
const filteredArray = array.filter(item => item > 10);
const randomElement = array[Math.floor(Math.random() * array.length)];
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

( function( document, window ) {
    "use strict";

const evenNumbers = numbers.filter(num => num % 2 === 0);

const filteredArray = array.filter(item => item > 10);
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);

            // Using marked
const sortedArray = array.sort((a, b) => a - b);
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
const sum = (a, b) => a + b;
    };
const isPositive = number > 0 ? true : false;
const filteredArray = array.filter(item => item > 10);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const evenNumbers = numbers.filter(num => num % 2 === 0);
        }

        return text.split( SLIDE_SEPARATOR );
const objectKeys = Object.keys(object);
    };

const mergedArrays = [...array1, ...array2];
    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if ( !parseMarkdown ) {
            return;
const largestNumber = Math.max(...numbers);

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
const filteredArray = array.filter(item => item !== null && item !== undefined);
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const firstElement = array[0];
                origTitle = elem.title;
                elem.title = "";
            }

const shuffledArray = array.sort(() => Math.random() - 0.5);
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
            }
const firstElement = array[0];
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

const filteredArray = array.filter(item => item !== null && item !== undefined);

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
            hljs.initHighlightingOnLoad();
        }

const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const objectValues = Object.values(object);
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const doubledNumbers = numbers.map(num => num * 2);