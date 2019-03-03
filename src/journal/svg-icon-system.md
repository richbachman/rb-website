---
path: "/journal/svg-icon-system"
date: "2019-02-24"
title: "SVG Icon System"
intro: "Reworking our existing icon font system into an SVG based icon system, without breaking anything."
---

Reworking our existing icon font system into an SVG based icon system, without breaking anything.

## Current Icon System

While I've been working on rebuilding our design system, I felt like it'd be a good idea to review how we're using icons in the system. Currently, we're using an icon font for all of the icons in the system. This seems to work so far, but there are some hiccups.

The hiccups mainly live in the icon font generation and deploy process. There are also a few other issues, like accessibility. Since the icon font method uses pseudo-elements, they're really not accessible.

## New SVG Icon System

The new system I've been developing works by inlining SVG directly into the element. This gives us a few new capabilities like accessibility and more semantic markup.

Since our icon library is rather large, I've set up an [Gulp task]([https://www.npmjs.com/package/gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite)) that compiles all of our SVG files into one SVG sprite. This allows us to load the one SVG a single time and reuse the different SVG elements within it in all of the various icons on the page. The basic code looks a little something like this:

    <!-- SVG sprite loaded inline -->
    <svg><symbol id="airplane" ... </symbol></svg>

    <!-- reusable SVG symbol from the sprite -->
    <svg>
    	<use xlink:href="#airplane" />
    </svg>

When the document loads, the `<use>` element will load the SVG symbol inline. This also helps keep our source code easily readable since the inlining happens in the browser.

In order to better show this off, I've set up a CodePen showing all of the various ways to use the icons in our design system. Example: [SVG Icon System]([https://codepen.io/richbachman/pen/XOPrKY](https://codepen.io/richbachman/pen/XOPrKY))

Setting up our icon system using the method above also gives us the chance to build it a React component. In the React component, we can use a prop to programmatically choose which icon to display. Something like this:

    const Icon = ({ extraClass, type }) => (
      <svg class={ `${ extraClass }` }>
        <use xlinkHref={ `#${ type }` }></use>
      </svg>
    );

I've also built a React prototype to show how this would work. Example: [React Icon Component]([https://repl.it/@RichBachman/react-icon-component](https://repl.it/@RichBachman/react-icon-component))

## This Week

I'll be integrating the new icon system into the design system. I'll also be working on moving the design system over to using the design primitive library completely.