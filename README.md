
CSARCH2 Case Study 1 - Group 2

*Note: The entire project has revised*

# Title: Made in Asia: Contributions of East Asia in Computing

**Group Roster:**

*Rance Laus*

*Justine Aniko Po Major*

*Jonah Pajarillo*

*Aaron Zander Romero*

*Luis Andre Vito*

---
# Final Submission Report

## Final Features

- Hero section with exhibit introduction
- Country information regarding contributions
- Interactive East Asia Map
- Country-information panel based on selected country from map
- Scrollable timeline
- Interactive 10-question trivia with scoring, navigation, and restart functionality
- Exhibit goals
- Reference citations

## Discussions

### Technical

Given the topic, the group decided on proper work distribution as well as the layout of the 
website. After gathering multiple resources and information, the group collectively chose not to
include North Korea, Macau, Mongolia, and Hong Kong due to the limited availability of well-documented 
contributions directly related to the exhibit's focus on computing and computer architecture.

Astro and MDX were utilized to organize, build, and write the virtual exhibit whilst retaining the
provided layouts to preserve compatibility with other webpages. Additionally, React was used for components
which required changing the state and those that responded to user input. The map component used
SVG shapes with each country being selectable through mouse interaction. The timeline presents the contributions
of the countries in a chronological manner, allowing users to browse through the timeline using previous and next arrow buttons. 
Additionally, the trivia quiz tests the information learned by the user within
the virtual exhibit, giving them a score as well as the ability to restart the quiz. The use of Astro components together with React also 
allowed static content and interactive elements to coexist within a single webpage.
Finally, to improve maintainability, the group dvided the website into different parts which allowed group members 
to work separately whilst reducing merge conflicts during the development of the website.

### Creative

After researching different ways to alter the design of the webpage without conflicting with the code for the layout 
as well as the group trying to replicate the proposed sample as much as possible, the group decided on a uniform theme 
within the entire exhibit. The group also experimented with different layouts before deciding the final format. Usability was
highly considered whilst aesthetically improving the website to ensure that users have an appropriate experience.
Through the use of !important and css, the group was able to change the color of the background
for the containers. The original template given was still preserved for consistency, whilst the internal sections were 
customized to become unique. Visual accents are also present to make them the information easier to identify and remember.

## Development Process

### Aha! Moments

- Found a way to turn the Trivia Questions into carousel form.
- Learned how to add scoring to the Trivia Questions and a way to restart.
- Finding a way to show the correct answer after answering a trivia question.
- Turning the timeline into a scroll box.
- Using !important to change colors and overwrite previously written css codes.
- A horizontal timeline requires careful control of overflow, flex sizing, parent width, and scrollbar behavior.
- Learned how to properly scope CSS so that modifications only affected the intended exhibit.

### Challenges Encountered

- Changing the format of the Trivia Questions.
- Was unable to implement a scoring feature for the Trivia Questions at first.
- Figuring out how to get around the overflow because the texts were getting cut off.
- Preventing the timeline from forcefully expand the webpage horizontally to fit the entire timeline into one panel.
- Color-coding the timeline.
- Trying to see if North Korea, Macau, Mongolia, and Hong Kong had relevant contributions to include.
- Testing compatibility between components created by different group members.
- Finding reliable academic and official sources for historical computing contributions.
- Maintaining a consistent style in writing information within the website.
- Figuring out the SVG for every country and how to apply it to the website.
- Styling and trying to figure out what looks best.
- Trying to figure out how to put paragraph breaks on a non-html file

## AI/LLM Disclosure

Generative AI tools, including ChatGPT & Claude, were used to assist with framework
    explanations, troubleshooting, and understanding Astro 6, Node, React, & mdx. 
    All AI-generated information and suggestions were thoroughly reviewed, tested, and modified before
    being implemented within the group's website. 

AI was used to:
- Help separate the referenced entire map SVG (Due to large size) into only the east asian maps that the group is working on.
- Suggest CSS and responsive-layout fixes.
- Explain horizontal timeline overflow.
- Check possible conflicting code with provided layout.

---

# Mid-milestone Report

## Current Progress

### Completed

The initial exhibit page structure has been completed using Astro and MDX. The exhibit currently contains:

- Hero section introducing the exhibit
- Country Information
- Interactive Map
- Timeline
- Trivia Game 
- Exhibit Goals
- References section
- Responsive page layout

---

## Development Process

### Aha! Moments

- Learned how Astro organizes pages using `.mdx` files and layouts.
- Table of Contents is automatically generated from Markdown headings in `ExhibitLayout.astro`.
- Learned how Astro combines Markdown with React components, allowing interactive elements to be embedded directly into an exhibit page.
- Understood the Git workflow for collaborative development, including cloning repositories, pulling changes, committing, and pushing updates.
- Finding a way to override the article page color.
- Finding a way to turn References into a list-style.

### Challenges Encountered

- Minor bugs that messed with the website because of a single line of code.
- Studying a new type of framework within a limited amount of time.
- Fixing the layout of timeline.
- Fixing layout of styles and colors within the article.
- Unable to find significant contributions in North Korea and Mongolia compared to other East Asia countries listed.

---

## Remaining Tasks (Final Submission)

- Improve overall functionality
- Populate computing contributions for all countries
- Develop Trivia Game functionality and add more questions
- Improve styling and overall visual design
- Perform final testing and polish
- Adjust timeline from expanding page

---

# Initial Proposal

**Topic Theme:**

  When we talk about the history of computing, we usually recognize the inventions of the Americans or the Europeans: Silicon Valley, IBM, Apple, and other companies that have had an impact on the digital world. However, there is much more to the story than what is obvious. East Asia wasn't just a mere contributor; it revolutionized the world of technology and allowed it to reach the point it is at today.

  This exhibit explores different countries, specifically those located in East Asia, and their often unrecognized contributions to computing and computer architecture. Starting from the earliest contributions up to the latest, the group shall present these contributions chronologically and categorized by country. Each contribution shall be exhibited along with visuals and concise yet relevant information.

  The countries within East Asia are as follows: China, Hong Kong, Macau, Japan, North Korea, South Korea, Taiwan, and Mongolia. Each country had a defining role in computing history, shaping the technological world. For example, Japan has some famous tech companies that come to mind: Sony & Toshiba. These companies were able to commercialize transistors, with the latter even inventing the NAND flash memory, which is the technology used within USBs, SSDs, and device storage to this day. Along with that, South Korea also has Samsung as its powerhouse, continuously spreading production of different computer parts globally. 

  Through this topic, the group plans on shining a light on the uncredited inventions done within countries in East Asia. It serves to prove that the computing world is as much an East Asian story as it is a Western one; it showcases that the technological world and how we deal with our lives each and every day would not be the same without these innovations.

**Tech Stack Plan:**
- Astro 6
- Node.js 26
- React
- Markdown Extended (.mdx)


**Interactive Element:**

1. Interactive Map - An interactive and selectable map of the East Asian region will be displayed on the page, allowing the user to click and select any part of the country as long as it is within its border, making it a selectable interface element. Clicking the country would update another box layout with the country's name, information, and its hardware and architectural contributions.
    
2. Trivia Game - A trivia question or fun fact about the country's computing that the user can answer. 

**Sample Page View:**
<img width="418" height="354" alt="Screenshot 2026-06-13 at 12 17 38 AM" src="https://github.com/user-attachments/assets/e8f7e7ed-96f2-4d4c-a941-fbe4da21710c" />
