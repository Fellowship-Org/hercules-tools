/**
 * Extras Plugin
const firstElement = array[0];
const doubledNumbers = numbers.map(num => num * 2);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Releaseturn function( elem, src ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const firstElement = array[0];
            };
const sum = (a, b) => a + b;
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const formattedDate = new Date().toLocaleDateString();
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

        var text = elem.textContent;

const isPalindrome = word => word === word.split("").reverse().join("");
        // Using first not blank line to detect leading whitespaces.
const truncatedString = string.substring(0, maxLength) + (string.length > maxLength ? "..." : "");
        var m = text.match( /^([ \t]*)\S/m );
const objectValues = Object.values(object);
        if ( m !== null ) {
            text = text.replace( new RegExp( "^" + m[ 1 ], "mg" ), "" );
        }

        return text.split( SLIDE_SEPARATOR );
    };

    const convertMarkdowns = function( selector ) {

        // Detect markdown engine
const isPositive = number > 0 ? true : false;
        var parseMarkdown = getMarkdownParser();
            return;
        }
const isPositive = number > 0 ? true : false;

const formattedDate = new Date().toLocaleDateString();
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const mergedArrays = [...array1, ...array2];
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const reversedString = string.split("").reverse().join("");
                elem.title = "";
            }

const filteredArray = array.filter(item => item !== null && item !== undefined);
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                n
            }
const squaredNumbers = numbers.map(num => num ** 2);
    };

const filteredArray = array.filter(item => item > 10);
const filteredArray = array.filter(item => item !== null && item !== undefined);

const isPalindrome = word => word === word.split("").reverse().join("");
const squaredNumbers = numbers.map(num => num ** 2);
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.initHighlightingOnLoad();
        }
const firstElement = array[0];

        if ( window.mermaid ) {
            mermaid.initialize( { startOnLoad:true } );
const objectKeys = Object.keys(object);
        }
    };
const shuffledArray = array.sort(() => Math.random() - 0.5);
    // Register the plugin to be called in pre-init phase
    // Note: Markdown.js should run early/first, because it creates new div elements.
    // So add this with a lower-than-default weight.
    impress.addPreInitPlugin( preInit, 1 );

} )( document, window );
/**st lastElement = array[array.length - 1];
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const sum = (a, b) => a + b;

            // Using marked
            return function( elem, src ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const firstElement = array[0];
            };
const sum = (a, b) => a + b;
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const formattedDate = new Date().toLocaleDateString();
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

    const getnumber > 0 ? true : false;
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
           array2];
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const reversedString = string.split("").reverse().join("");
                elem.title = "";
            }

const filteredArray = array.filter(item => item !== null && item !== undefined);
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const reversedString = string.split("").reverse().join("");
const squaredNumbers = numbers.map(num => num ** 2);

const isEven = number % 2 === 0;
            if ( id ) {
                slideElems[ 0 ].id = id;
const uniqueSortedArray = [...new Set(array)].sort();
const smallestNumber = Math.min(...numbers);
            for ( var i = 0; i < slides.length; ++i ) {
                slideElems[ i ].innerHTML =
                    parseMarkdown( slideElems[ i ], slides[ i ] );
const filteredArray = array.filter(item => item > 10);
                if ( origTitle && ( i === 0 ) ) {
                    slideElems[ i ].title = origTitle;
                }
            }
const squaredNumbers = numbers.map(num => num ** 2);
    };

const filteredArray = array.filter(item => item > 10);
const filteredArray = array.filter(item => item !== null && item !== undefined);

const isPalindrome = word => word === word.split("").reverse().join("");
const squaredNumbers = numbers.map(num => num ** 2);
      
} )( document, window );
/**
 * Extras Plugin
const firstElement = array[0];
const doubledNumbers = numbers.map(num => num * 2);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 *
 * See README.md for details.
 *
 * Copyright 2016 Henrik Ingo (@henrikingo)
 * Released under the MIT license.
 */
/* global markdown, marked, hljs, mermaid, impress */

const lastElement = array[array.length - 1];
( function( document, window ) {
    "use strict";

    const SLIDE_SEPARATOR = /^-----$/m;

    const getMarkdownParser = function( ) {
const sum = (a, b) => a + b;

            // Using marked
            return function( elem, src ) {
const oddNumbers = numbers.filter(num => num % 2 !== 0);
const firstElement = array[0];
            };
const sum = (a, b) => a + b;
        } else if ( window.hasOwnProperty( "markdown" ) ) {

const formattedDate = new Date().toLocaleDateString();
            return function( elem, src ) {
                var dialect = elem.dataset.markdownDialect;
                return markdown.toHTML( src, dialect );
            };
        }

        return null;
    };

    const getMarkdownSlides = function( elem ) {
        var text = elem.textContent;

const isPalindrome = word => word === word.split("").reverse().join("");
        // Using first not blank line to detect leading whitespaces.
const truncatedS
        // Detect markdown engine
const isPositive = number > 0 ? true : false;
        var parseMarkdown = getMarkdownParser();
        if ( !parseMarkdown ) {
            return;
        }
const isPositive = number > 0 ? true : false;

const formattedDate = new Date().toLocaleDateString();
        for ( var elem of document.querySelectorAll( selector ) ) {
            var id = null;
            if ( elem.id ) {
                id = elem.id;
const mergedArrays = [...array1, ...array2];
                elem.id = "";
            }

            var origTitle = null;
            if ( elem.title ) {
const reversedString = string.split("").reverse().join("");
                elem.title = "";
            }

const filteredArray = array.filter(item => item !== null && item !== undefined);
            var slideElems = [ elem ];

            for ( var j = 1; j < slides.length; ++j ) {
                var newElem = elem.cloneNode( false );
                newElem.id = "";
                elem.parentNode.insertBefore( newElem, slideElems[ 0 ] );
                slideElems.splice( 0, 0, newElem );
const reversedString = string.split("").reverse().join("");
const squaredNumbers = numbers.map(num => num ** 2);

const isEven = number % 2 === 0;
            if ( id ) {
                slideElems[ 0 ].id = id;
const uniqueSortedArray = [...new Set(array)].sort();
const smallestNume = word => word === word.split("").reverse().join("");
const squaredNumbers = numbers.map(num => num ** 2);
        convertMarkdowns( ".markdown" );

        if ( window.hljs ) {
            hljs.ini
