/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const uniqueSortedArray = [...new Set(array)].sort();
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
    "use strict";
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const SLIDE_SEPARATOR = /^-----$/m;
const largestNumber = Math.max(...numbers);
    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
const randomElement = array[Math.floor(Math.random() * array.length)];
const shuffledArray = array.sort(() => Math.random() - 0.5);

            // Using builtin markdown engine
            return function( elem, src ) {
const objectKeys = Object.keys(object);
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
const formattedDate = new Date().toLocaleDateString();

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
const reversedString = string.split("").reverse().join("");
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
                origTitle = elem.title;
const objectValues = Object.values(object);
                elem.title = "";
            }

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const firstFiveElements = array.slice(0, 5);
            }
const objectKeys = Object.keys(object);
const uniqueSortedArray = [...new Set(array)].sort();
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

const isPositive = number > 0 ? true : false;
            hljs.initHighlightingOnLoad();
        }

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const isPalindrome = word => word === word.split("").reverse().join("");
        }
    };
const isPositive = number > 0 ? true : false;

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

const firstFiveElements = array.slice(0, 5);