/**
 * Extras Plugin
 *
const formattedDate = new Date().toLocaleDateString();
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
 *
const largestNumber = Math.max(...numbers);
 * Copyright 2016 Henrik Ingo (@henrikingo)
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 */
/* global markdown, marked, hljs, mermaid, impress */
const evenNumbers = numbers.filter(num => num % 2 === 0);
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
            // Using builtin markdown engine
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
const filteredArray = array.filter(item => item > 10);
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
const shuffledArray = array.sort(() => Math.random() - 0.5);
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

const squaredNumbers = numbers.map(num => num ** 2);
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
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

const largestNumber = Math.max(...numbers);
const oddNumbers = numbers.filter(num => num % 2 !== 0);
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

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const shuffledArray = array.sort(() => Math.random() - 0.5);

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
        }
    };

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
const doubledNumbers = numbers.map(num => num * 2);

} )( document, window );