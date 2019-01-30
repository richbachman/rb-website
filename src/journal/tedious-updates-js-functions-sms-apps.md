---
path: "/journal/tedious-updates-js-functions-sms-apps"
date: "2019-01-21"
title: "Tedious Updates, JavaScript Functions, SMS Apps"
intro: "A solid week of updates, wrapping my head around JavaScript functions and building a couple of SMS chatbot apps."
---

A solid week of updates, wrapping my head around JavaScript functions and building a couple of SMS chatbot apps.

## Tedious Updates

I spent a lot of the week working through the not-so-fun, but necessary aspects of front end development: minor content updates and PHP upgrades.

The minor content updates were pretty straightforward, and I was able to complete them without any major issues. These were mostly text changes and overall page structure updates. Nothing very exciting to report on this one.

The PHP upgrades were a little more exciting. I build the occasional Wordpress theme for a Portland-based digital agency. A few of those needed to be shored up for PHP 7.2. At first, this sounded like a pretty large task, since the themes were built a few years ago. Luckily, there were only some minor function changes. The rest of my time on this project was spent testing the sites after the upgrade.

## JavaScript Functions

Admit-ably, JS (JavaScript) is one of my weaker areas of front end development so one of my goals this year is to improve that. I'm ok with basic JS but struggle comprehending more advanced functions. My first course of action was to attend a free basic JS class at Galvanize. The class turned out to be a very basic intro class, but luckily toward the end, we reviewed basic JS functions. This was a big help, as it gave me a better understanding of how JS functions work.

The class also introduced me to a nice online JS tool called [Repl](https://repl.it/). Repl is a great online resource that allows you to write, compile, and run code in numerous programming languages.

Next step: Find and go through tutorials that include real-world examples.

## SMS Apps

For the [SendGrid](https://sendgrid.com) Q1 Hackathon, I was tasked to set up an SMS chatbot tutorial so the team could build their own chatbots.

This was a challenging task for me since I hadn't really worked with any chatbot technologies before. I ended up running across a software named [TextEverything](https://github.com/DanielCordell/TextEverything). This turned out to be a great find since the software does some of the initial setup work and allows us to focus on writing actual chatbot plugins. TextEverything integrates with [Twilio](https://www.twilio.com/) to send SMS messages.

The plugins can be simple or as complex as you want them. On the complex side, we can request git commit history via SMS message. I, however, went the simple route and created three different chatbot plugins.

Each of the three plugins makes a request to a public API. My favorite one sent a request to a [Ron Swanson quote API](https://github.com/jamesseanwright/ron-swanson-quotes) when I sent the keyword "ron" to my Twilio phone number. The plugin would then use Twilio's Programmable SMS API to send a random Ron Swanson quote back to me. Each one made me laugh.

During the hackathon, we were able to figure out how to send MMS using the same plugin. The team really enjoyed the tutorial, so I'd say it was a success.

## This Week

My main focus this week is to continue wrapping my head around JS. Along with that, I'm going to continue work on the design primitives library I've been working on for [SendGrid](https://sendgrid.com). Hopefully, I'll be able to get that integrated into our style guide and UI components.