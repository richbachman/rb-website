---
path: "/journal/design-system-progress-and-volunteer-opportunity"
date: "2019-02-10"
title: "Design System Progress and Volunteer Opportunity"
intro: "Made some good progress on our design system. Mainly in the primitives/tokens area. Also signed up for a good volunteer opportunity."
---

Made some good progress on our design system. Mainly in the primitives/tokens area. Also signed up for a good volunteer opportunity.

## Design Primitives/Tokens

I keep going back and forth on what to call this project. Design Primitives or Design Tokens. I've seen both used pretty regularly. Maybe I'll just stick with the slash version for now. The primitives/tokens project is our source of truth for things like colors, spacing, and typography. I've taken it a step further and included primitives for our style guide and other product and web properties. The library contains JSON data that can be ingested into our products. Along with the JSON data, the library also generates CSS, SCSS, and JS module files for each variable.

This week I added [Lerna](https://github.com/lerna/lerna) to the project. This allows us to version each package within the mono-repo. Now our teams can use a specific package version with their projects. This change also allows the teams to use an individual package instead of pulling down the while mono-repo. Let's say they only want to use colors and spacing. Now they can, but just installing those two packages.

The next step is testing the primitives/tokens to makes sure they are working as expected.

## Volunteer Opportunity

A while ago, I signed up for some information from Tech for Campaigns. This a volunteer organization that helps the Democratic party with any tech projects for campaigns. I was put on my first project team this week, and am excited to get that kicked off. I'm not an overly political person, but this seems like a good way to help.

It looks like I'll be doing the front end dev on a campaign website. The project is still in its early phase, so no real work yet.

## This Week

I'll be working on a refactor of an existing component using the design primitive/token library. This will be a solid test for the project and will hopefully lead to good insights on how to work with the primitives/tokens.