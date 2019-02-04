---
path: "/journal/meetings-testing-party-time-dark-mode"
date: "2019-02-03"
title: "Meetings, Testing, Party Time, and Dark Mode"
intro: "So many meetings this week, ending with a celebration, and adding a dark mode to my personal website."
---

So many meetings this week, ending with a celebration, and adding a dark mode to my personal website.

## Meetings & Testing

I'm not really sure what more to say about this one. This week was packed with meetings. I really wasn't able to accomplish anything other than testing for the big launch on Friday. I did find a couple of bugs during testing, so those were fixed. All pretty minor, and the testing made for a smooth launch.

## Party Time

Friday was officially day one for the combined [Twilio](https://twilio.com/) [SendGrid](https://sendgrid.com/) family. My morning started pretty early with the launch of the website updates that had been in progress for the last couple of weeks. The launch went really smooth!

The rest of the day was pretty much a party with catered breakfast and lunch, champagne toasts, and meet and greets with a few Twilions.

I also had a chance to demo the taco recipe chatbot I built, and earned my [Twilio](https://twilio.com/) track jacket! I'm super excited about the future opportunities ahead.

## Dark Mode

This weekend I had some time to build out a quick dark mode for this website. Right now it only works in Safari Technology Preview, but as dark mode support grows I'm sure other browsers will follow suit.

Dark mode is surprisingly easy to implement, especially if you're using CSS custom properties. The hardest part is picking out the color scheme.

In order to implement dark mode, you can add the following prefers-color-scheme media query to any style declaration:

```css
    @media (prefers-color-scheme: dark) {

    }
```

If you're using CSS custom properties, adding dark mode can be a really simple task. You just need to reassign your custom properties using the prefers-color-scheme media query. Here is a simple example:

```css
    --white: #fff;
    --black: #000;

    @media (prefers-color-scheme: dark) {
    	--white: #000;
    	--black: #fff;
    }
```

In that example, we're assigning two custom properties, white and black. In dark mode, we can invert anything on our site using those custom properties by just changing the hex values in the prefers-color-scheme media query.

The challenging part is figuring out a color scheme that works well with your website design in dark mode, but that's also the fun part.

Another thing to consider is going with dark mode by default for accessibility reasons. You can do this using the opposite prefers-color-scheme media query below. This is something I may do in the future.

```css
    @media (prefers-color-scheme: light) {

    }
```

## This Week

I'll be digging into deconstructing some existing components for an updated design system. This deconstructed component will be a part of the design primitives project. More to come on that later.