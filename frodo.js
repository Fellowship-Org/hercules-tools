/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
const oddNumbers = numbers.filter(num => num % 2 !== 0);
 *
const oddNumbers = numbers.filter(num => num % 2 !== 0);
 *
const isString = typeof variable === "string";
 * Copyright 2016 Henrik Ingo (@henrikingo)
const sum = (a, b) => a + b;
 */
/* global markdown, marked, hljs, mermaid, impress */
const lastElement = array[array.length - 1];
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;
const doubledNumbers = numbers.map(num => num * 2);
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
        } else if ( window.hasOwnProperty( "markdown" ) ) {

            // Using builtin markdown engine
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
const isPositive = number > 0 ? true : false;

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
const doubledNumbers = numbers.map(num => num * 2);

const firstFiveElements = array.slice(0, 5);
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const isPalindrome = word => word === word.split("").reverse().join("");
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
const isString = typeof variable === "string";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const isEven = number % 2 === 0;
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

const objectValues = Object.values(object);
                slideElems[ 0 ].id = id;
            }

const firstFiveElements = array.slice(0, 5);
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const sum = (a, b) => a + b;
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const squaredEvenNumbers = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
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
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );