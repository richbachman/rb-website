---
path: "/journal/design-primitive-token-integration"
date: "2019-02-17"
title: "Design Primitive/Token Integration"
intro: "Finally, a chance to test the design primitives/tokens I've been working on the past few months. Time to rebuild a component."
---

Finally, a chance to test the design primitives/tokens I've been working on the past few months. Time to rebuild a component.

## Integrating Design Primitives/Tokens

Its time to finally test the design primitive/token work. In order to do so, I decided it would be best to just rebuild an existing component using the design primitives/tokens. The lucky component: card.

I chose the card component because it allowed me to test a few different variables that are generated from the design primitive/token library.

In an effort to minimize any conflicts, I chose to give the refactored card a class which identifies it as a refactor:

    .rf-card

Using the "rf-" prefix, I can quickly identify what component is a refactor. This also allowed me to reset any styles that might conflict with the refactor styles.

The card component consists of an outer div, badge, headline, text, and a button. The badge, text, and button styles will remain the same for this example, as I'm just focused on refactoring the outer card.

For the refactor I used the div and spacing primitives. Here's a look at what the div primitives look like:

    "div-border-width": {
    	  "value": "1px",
        "type": "number"
      },
      "div-border-color": {
        "value": "{!slate-10}",
        "type": "color/hex"
      },
      "div-border-color-dark": {
        "value": "{!slate-20}",
        "type": "color/hex"
      },
      "div-border-solid": {
        "value": "solid",
        "type": "border"
      },
      "div-border-dashed": {
        "value": "dashed",
        "type": "border"
      },
      "div-border-radius": {
        "value": "2px",
        "type": "number"
      }

Which then compiles to:

    $div-border-color: #e9ecef;
    $div-border-color-dark: #d4dadf;
    $div-border-dashed: dashed;
    $div-border-radius: 2px;
    $div-border-solid: solid;
    $div-border-width: 1px;

Once I pulled in the primitives library into the project, I was able to use the compiled variables to refactor the card. Basically like this:

    rf-card {
      padding: $spacing-xxl $spacing-lg;
      border-color: $div-border-color;
      border-style: $div-border-solid;
      border-width: $div-border-width;
      border-radius: $div-border-radius;
    }

So now the variables making up the styles tie all the way back to the primitives library, the source of truth. If that library is ever updated, I can just pull the latest and rebuild the stylesheet.

As you can see, this will make any major style updates much easier across multiple products. Once implemented, there will be no more find and replace tasks in each project. In theory, it should just work with on the next build.

## This Week

I'll be continuing testing and integrating the primitives library to find any errors. I'll also be working on re-building our icon font into a component using inline SVG.