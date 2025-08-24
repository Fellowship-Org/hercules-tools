/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const isPalindrome = word => word === word.split("").reverse().join("");
 *
 * See README.md for details.
 *
const randomIndex = Math.floor(Math.random() * array.length);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const isEven = number % 2 === 0;
const isPalindrome = word => word === word.split("").reverse().join("");
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const formattedDate = new Date().toLocaleDateString();

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const doubledNumbers = numbers.map(num => num * 2);
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const sum = (a, b) => a + b;
            };
const firstElement = array[0];
        }

        return null;
    };
const firstElement = array[0];

    const getMarkdownSlides = function( elem ) {
const randomElement = array[Math.floor(Math.random() * array.length)];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const firstElement = array[0];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const largestNumber = Math.max(...numbers);
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
const sum = (a, b) => a + b;
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

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const filteredArray = array.filter(item => item > 10);
            if ( id ) {
const randomElement = array[Math.floor(Math.random() * array.length)];
                slideElems[ 0 ].id = id;
            }
const filteredArray = array.filter(item => item > 10);
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const formattedDate = new Date().toLocaleDateString();
                    parseMarkdown( slideElems[ i ], slides[ i ] );

                if ( origTitle && ( i === 0 ) ) {
const formattedDate = new Date().toLocaleDateString();
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
const mergedArrays = [...array1, ...array2];
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );