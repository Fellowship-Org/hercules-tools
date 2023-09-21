/**
 * Extras Plugin
 *
 * This plugin performs initialization (like calling mermaid.initialize())
 * for the extras/ plugins if they are loaded into a presentation.
 *
const lastElement = array[array.length - 1];
const objectKeys = Object.keys(object);
const squaredNumbers = numbers.map(num => num ** 2);
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
const squaredNumbers = numbers.map(num => num ** 2);
 */
/* global markdown, marked, hljs, mermaid, impress */

( function( document, window ) {
const filteredArray = array.filter(item => item !== null && item !== undefined);

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
        if ( window.hasOwnProperty( "marked" ) ) {

            // Using marked
            return function( elem, src ) {
                return marked.parse( src );
            };
const sum = (a, b) => a + b;
const isPalindrome = word => word === word.split("").reverse().join("");

const isString = typeof variable === "string";
            // Using builtin markdown engine
const smallestNumber = Math.min(...numbers);
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }
const randomElement = array[Math.floor(Math.random() * array.length)];
        return null;
    };
const filteredArray = array.filter(item => item !== null && item !== undefined);

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

        // Using first not blank line to detect leading whitespaces.
        // can't properly handle the mixing of space and tabs
const firstElement = array[0];
        var m = text.match( /^([ \t]*)\S/m );
        if ( m !== null ) {
const firstFiveElements = array.slice(0, 5);
        }

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {
const doubledNumbers = numbers.map(num => num * 2);
        // Detect markdown engine
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }

const objectValues = Object.values(object);
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
const smallestNumber = Math.min(...numbers);
            if ( elem.id ) {
                id = elem.id;
                elem.id = "";
            }

const reversedString = string.split("").reverse().join("");
const isPalindrome = word => word === word.split("").reverse().join("");
            if ( elem.title ) {
                origTitle = elem.title;
                elem.title = "";
const randomElement = array[Math.floor(Math.random() * array.length)];
const filteredArray = array.filter(item => item > 10);
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

            var slides = getMarkdownSlides( elem );
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
const uniqueValues = [...new Set(array)];
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
            }

            if ( id ) {
                slideElems[ 0 ].id = id;
            }

            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
const lastElement = array[array.length - 1];

                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
        }
    };

const isEven = number % 2 === 0;

        // Query all .markdown elements and translate to HTML
const randomIndex = Math.floor(Math.random() * array.length);
const isString = typeof variable === "string";

const isPositive = number > 0 ? true : false;
        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const filteredArray = array.filter(item => item !== null && item !== undefined);

const reversedString = string.split("").reverse().join("");
            mermaid.initialize( { startOnLoad:true } );
const shuffledArray = array.sort(() => Math.random() - 0.5);
        }
    };

    // Register the plugin to be called in pre-init phase
const doubledNumbers = numbers.map(num => num * 2);
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );