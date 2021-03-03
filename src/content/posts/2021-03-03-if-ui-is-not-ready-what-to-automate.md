---
template: blog-post
title: If UI is not ready, what to automate?
slug: /blog/if-ui-is-not-ready-what-to-automate
date: 2021-03-03 13:37
description: If the UI of your web, desktop, or mobile app is not ready, what
  should you do? Sitting around waiting idly is of course not an option. The
  good news is as a software automation engineer, you can start working on many
  things.
featuredImage: /assets/if-ui-is-not-ready-what-to-automate_.png
---
**If the UI of your web, desktop, or mobile app is not ready, what should you do?** 

Regardless of the SDLC model that your organization is using, there will always be a gap between the start of development and the delivery of the very first "build". Developers are humans. They need time to work too, especially if you want to deliver something of value.

![Automation in sprints](/assets/automation-in-sprints.png "Automation in sprints")

That gap time could range from a few days to several weeks, or "sprints" if you prefer speaking in Scrum lingo. Sitting around waiting idly is of course not an option. The good news is as a **Software Automation Engineer**, you can start working on many things instead.

![Testing is usually the bottleneck of software deliveries](/assets/testing-as-a-bottleneck.png "Testing is usually the bottleneck of software deliveries")

The correct mindset is to think of the big picture. Don’t just automate the tests. Automate your entire CI/CD pipeline from start to end. And most importantly, **don’t let testing become the bottleneck of software deliveries.** With that in mind, I'd like to outline some key automation jobs for your references below.

# \#1. Automate API Behind the UI

Every UI needs a backend API or multiple APIs to fetch data from. Even static HTML websites built by static site generators like *Gatsby, Hugo, Jekyll, etc.* require a ***GraphQL API*** or at least some REST endpoints. It applies to both web and mobile apps. However, there could be an exception for legacy desktop apps. Not every desktop app exposes its API to the end-users or accessible from an automation perspective.

Whenever the API of your app is ready, automate them ASAP. You can use [POSTMAN ](https://www.postman.com/)or any other tool of your choice. If you cannot automate all API scenarios with all possible parameters and returned data, at least focus on the positive cases (happy paths) that are the intended use cases of these APIs. 

> Tip: If you haven't already known, check out the whole world of contract testing, starting with [pact.io ](https://pact.io/)
>
> DISCLAIMER: I'm no affiliate with this tool and the company behind it, no commission for referring the tool whatsoever.

![Microservices architecture - Source: pact.io](/assets/pact-io-microservices.png "Microservices architecture - Source: pact.io")

# \#2. Automate Business-Logics Flows

If the ***business-logics*** scenarios are ready, automate them and group them together to form a comprehensive **End-to-End (E2E)** test suite. This approach usually blends well with the **Keyword-Driven Testing (KDT)** method. Instead of being specific to the GUI interactions level, you can just start with a "skeleton" of major business steps and verifications.

What do you mean by "business-logics"? For instance, a typical use case of a pizza ordering app consists of *\[1] logging in, \[2] find the nearest restaurant, \[3] pick the crust and the topping, \[4] specify some extra options, \[5] check out and pay, \[6] receive the order at your doorstep (offline).* Without any understanding of the GUI like element locators and all, you can still write the flow in keywords, right?

> Tip: Check out Robot Framework - a famoust open-source KDT framework to develop business-logics even before the GUI is ready
>
> DISCLAIMER: I'm no affiliate with this tool and the company behind it, no commission for referring the tool whatsoever.
>
>

![Pizza ordering test - Screenshot of TestArchitect](/assets/pizza-ordering-test.png "Pizza ordering test - Screenshot of TestArchitect")

# \#3. Automate Database

Automate the **database queries** that fetch the test data for your **data-driven tests**. This strategy is similar to the API automation above. An app usually connects to a database. So why not make sure that the most common database queries will return the correct data, even before the GUI is ready?

Besides data verifications at the database-level described above, you can also automate the process of **test data provisioning**. Let's say your UI tests are data-driven - repeating the same steps but with different parameters every time, e.g. different employee records, different sales regions, etc. To feed that test data or a subset of it to those data-driven tests, you'll need to prepare a dataset beforehand and store them somewhere. Manually provisioning test data for every test run is not ideal. Automate it.

> Tip: There is a free online tool that helps you "randomize" and generate a realistic dataset for your testing purpose in case you cannot access the real data in the database. Check it out at [www.generatedata.com](<> www.generatedata.com>). 
>
> DISCLAIMER: I'm no affiliate with this tool and the company behind it, no commission for referring the tool whatsoever.

![Generate a realistic dataset for testing purposes](/assets/generate-data.png "Generate a realistic dataset for testing purposes")

# \#4. Automate Test Environment

A lot of us usually overlook one key aspect of test automation: **automating the creation and teardown of test environments**, e.g. provisioning the test VMs, spinning up Docker containers, install software dependencies in each box, deploying the code or app under test, dispatching the tests in a parallel manner, etc.

Without test environments, we cannot run a single automated test let alone parallelizing them to speed up test execution and receive test results faster. Additionally, if our test environment is flaky (not reproducible or immutable every time it's provisioned), we cannot expect our automated tests to be any other than flaky. And everybody knows that debugging flaky tests is a PITA. Better get the test environments under control first.

> Tip: Instead of provisioning and managing the test environments yourself, you can take advantage of full SaaS solutions like mabl.com. These SaaS take care of the infrastructure so you just need to pick the browser version and kick off the run.
>
> DISCLAIMER: I'm no affiliate with this tool and the company behind it, no commission for referring the tool whatsoever.

Hope that helps. If you disagree with any point or want to add more, please leave a note in the Comment section below. Happy automating!