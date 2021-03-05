---
template: blog-post
title: "TestProject vs. CloudQA: Which One Better for Web Testing?"
slug: /blog/testproject-cloudqa-which-one-better-for-web-testing
date: 2021-03-05 14:48
description: TestProject and CloudQA are both new kids on the block competing
  with strong incumbents in the web testing market. If you're looking for tools
  to jump start your your web testing project, which one is better? This article
  discusses the pros and cons of each tool and deliver a somewhat biased
  verdict.
featuredImage: /assets/testproject-vs-cloudqa.png
---
A lot of ink and paper have been spent on popular tools like [Selenium](www.selenium.dev), [Cypress](www.cypress.io), [Robot Framework](www.robotframework.org), [WebDriverIO](www.webdriver.io), etc. but not so much about these two new and underrated kids on the block: [TestProject ](www.testproject.io)and [CloudQA](www.cloudqa.io). Today I'd like to analyze the **Pros** and **Cons** of these tools to help you select the winner for your upcoming web testing project.

# TestProject

I'm absolutely impressed and pleasantly delighted by the UX of TestProject. New users like me are onboarded smoothly. Except a quite "fat" **TestProject Agent** (weighing 267 MB), the installation process is a breeze. You can get up to speed quick. 

## Pros

* FREE FOREVER
* AI self healing is very smart so it helps the test run very smooth
* Adaptive waits make my tests extremely stable
* Supports XPath and CSS selector with many fallback locators

## Cons

* A lot of unnecessary scrolling recorded 
* Web Recorder is embedded within the web app so you might encounter conflicts with the web app under test
* You have to manage the test execution infrastructure
* Very frustrating when adding assertions

![TestProject supports a lot more platforms than CloudQA](/assets/testproject-2.png "TestProject supports a lot more platforms than CloudQA")

# CloudQA

The strongest selling point for CloudQA is of course its cloud nature. Test execution happens on CloudQA's infrastructure so you don't have to manage that infrastructure yourself. One less task to worry about. Besides, creating assertions is very easy unlike TestProject. You simply click the "Assertion" button and hold the mouse over an element.

However, I have to be honest that CloudQA is quite flaky. A simple record & playback on [www.amazon.com](www.amazon.com) doesn't work. The CSS selectors (worth mentioning that they only supports CSS, no XPath) recorded by CloudQA's Chrome extension don't work. On top of that, you cannot specify the location that your test will be run from. It auto starts in **Virginia, USA**. This causes my test to fail since Amazon displays different products and promotions for different locations.

## Pros

* They provide infrastructure on the cloud
* Auto detect app under test instead of having to create the app on TestProject
* Allow users to set a step as optional 
* Easy to add assertions

## Cons

* Only supports Chrome and Firefox while TestProject offers a lot more, e.g. Docker, Headless Chrome, Headless Firefox, Edge, IE, etc.
* Auto suggestion of CSS selector is bad
* Only supports CSS selector
* Got interrupted a lot by salesy offer
* Don’t auto highlight elements during recording
* Cannot select the location that the test will be run from

![CloudQA interrupts your test run constantly with this annoying salesy message](/assets/cloudqa-1.png "CloudQA interrupts your test run constantly with this annoying salesy message")

# Verdict

The clear winner between these two tools is of course: **TestProject**. Its stable automation is admirable and much appreciated. I'd argue that their **Adaptive Waits** and **AI Self-Healing** are the state-of-the-art best in class technology on the market right now, even compared with commercial incumbents like Tricentis Tosca, Ranorex, TestComplete, etc. If you're searching for a tool for your next web testing project, pick TestProject. Any other ideas or more tool suggestions, put it in the Comment section below.

> DISCLAIMER: I'm not affiliated with or sponsored by any of the tools mentioned in this article or the companies behind them. I receive no commission for directing traffic to those tools whatsoever. All product and company names are the registered trademarks of their original owners. The use of any trade name or trademark is for identification and reference purposes only and does not imply any association with the trademark holder or their brands.