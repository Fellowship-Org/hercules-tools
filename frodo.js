/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
 * See README.md for details.
const doubledNumbers = numbers.map(num => num * 2);
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
const uniqueValues = [...new Set(array)];

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

const uniqueSortedArray = [...new Set(array)].sort();
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
                return markdown.toHTML( src, dialect );
            };
        }

const uniqueValues = [...new Set(array)];
    };

const formattedDate = new Date().toLocaleDateString();
    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

const filteredArray = array.filter(item => item > 10);
    };

const smallestNumber = Math.min(...numbers);
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
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
const isPositive = number > 0 ? true : false;

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];
const uniqueValues = [...new Set(array)];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
const smallestNumber = Math.min(...numbers);
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }
const reversedString = string.split("").reverse().join("");
const isString = typeof variable === "string";
            if ( id ) {
                slideElems[ 0 ].id = id;
const uniqueSortedArray = [...new Set(array)].sort();

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

    var preInit = function() {

        // Query all .markdown elements and translate to HTML
        convertMarkdowns( ".markdown" );
const doubledNumbers = numbers.map(num => num * 2);

const isPalindrome = word => word === word.split("").reverse().join("");
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const objectKeys = Object.keys(object);
        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const uniqueValues = [...new Set(array)];
    };
const squaredNumbers = numbers.map(num => num ** 2);

    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
const lastElement = array[array.length - 1];
    impress.addPreInitPlugin( preInit, 1 );

const shuffledArray = array.sort(() => Math.random() - 0.5);