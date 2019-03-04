---
path: "/journal/full-speed-ahead-for-design-primitive-and-svg-icon-integration"
date: "2019-03-03"
title: "Full Speed Ahead for Design Primitive and SVG Icon Integration"
intro: "After successful tests, its time to dive into the design primitive integration, and might as well throw in the SVG icons."
---

After successful tests, its time to dive into the design primitive integration, and might as well throw in the SVG icons.

## Ahoy, Design Primitives

After testing the design primitives library and finding some bugs/typos, I decided to move forward with full integration. Accomplishing this simply involved replacing the projects variables files with the new primitives base file.

In order to accomplish this, I really just had to play the find and replace game. In the primitives library, some of the variable names changed for structure/category reasons. For example, `$slate` changed to `$color-slate`.Thankfully software like VSCode made this an easy task.

Once all variables were renamed in the project, the build succeeded, and I was good to go.

As simple as I made that sound, I did find a few errors along the way. Mainly typos or variables I missed when I was transferring the data into JSON files. Luckily the build tools in the projects were able to detail these errors so they were easily fixed.

I also integrated the primitives library into one of our website projects. This involved the same sort of find/replace methods. That integrations also allowed me to test the CSS custom properties version of the token files.

So now that I have two projects consuming the primitives, I'm hungry for more and will be working to integrate into more projects soon.

## SVG Icon Integration

While I was integrating the design primitives, I decided to go ahead and integrate the SVG icon system I have been working on into our style guide project. Since I set that project up as an NPM package, the integration was just a simple install. After installation, I just verified I could load the SVG sprite as expected and made sure nothing broke. The next step will be a fairly heavy lift that involves swapping existing icons with the new SVG system.

## This Week

I may have to pause on the SVG icon system, as I'll be helping write stories for a full site rebuild, which will take some time. I'll also be working on a couple of new components for our design system. Oh, I'm also working on design primitives talk. More on that to come.