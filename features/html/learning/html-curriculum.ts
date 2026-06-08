export interface CurriculumTopic {
  title: string
  slug: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  realWorldUseCase?: string
  realWorldScenario?: string
  seoNotes?: string
  whereItGoes?: string
  commonAttributes?: string[]
  syntax?: string
  commonMistakes?: string[]
  bestPractices?: string[]
  example: {
    title: string
    code: string
  }
  exercise: {
    title: string
    task: string
    starterCode?: string
    expectedOutput?: string
  }
  practicePrompt?: string
}

export interface CurriculumCategory {
  title: string
  slug: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  topics: CurriculumTopic[]
}

export const INTRODUCTION_AND_FUNDAMENTALS: CurriculumCategory[] = [
  {
    title: 'Introduction',
    slug: 'introduction',
    difficulty: 'Beginner',
    topics: [
      {
        title: 'What is HTML',
        slug: 'what-is-html',
        difficulty: 'Beginner',
        description: `
HTML (HyperText Markup Language) is the standard markup language used to create webpages and web applications. It defines the structure and meaning of content on the internet. Browsers read HTML documents and convert them into visual webpages that users can interact with.

HTML is not a programming language because it does not contain logic, loops, or conditions. Instead, it provides semantic structure using elements such as headings, paragraphs, links, images, forms, and tables.

Learning HTML is the first step toward becoming a frontend developer, web designer, freelancer, or software engineer.
        `,
        whereItGoes: 'HTML files are the entry point of every website — browsers load an .html file first before anything else.',
        syntax: `<!DOCTYPE html>\n<html>\n  <head>...</head>\n  <body>...</body>\n</html>`,
        realWorldUseCase:
          'Every website including Google, Amazon, Facebook, GitHub, and YouTube uses HTML to structure content.',
        seoNotes:
          'Semantic HTML improves search engine understanding, indexing, accessibility, and ranking potential.',
        bestPractices: [
          'Always start with a DOCTYPE declaration.',
          'Use semantic elements over generic divs.',
          'Keep HTML structure clean and indented.',
          'Validate your HTML using the W3C Validator.'
        ],
        example: {
          title: 'Basic HTML Page',
          code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This page was created using HTML.</p>
  </body>
</html>`
        },
        exercise: {
          title: 'Create Your First Webpage',
          task: 'Create an HTML page containing one heading, two paragraphs, and a page title.',
          starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This page was created using HTML.</p>
  </body>
</html>`,
          expectedOutput: 'A page with the heading "Welcome to HTML" and a paragraph below it.'
        },
        practicePrompt: 'Build a small HTML page that has a title, a heading, and two paragraphs describing your favorite hobby. Remember to include the DOCTYPE and html structure.'
      },

      {
        title: 'History of HTML',
        slug: 'history-of-html',
        difficulty: 'Beginner',
        description: `
HTML was created by Tim Berners-Lee in 1991 to share scientific documents across the internet. Over the years, HTML evolved significantly:

• HTML 1.0 – Basic document structure
• HTML 2.0 – Standardized version
• HTML 3.2 – Added tables and scripting support
• HTML 4.01 – Improved styling and accessibility
• XHTML – XML-based HTML version
• HTML5 – Modern standard with semantic elements, multimedia, APIs, and improved accessibility

Today HTML5 is the global standard for web development and is supported by all modern browsers.
        `,
        whereItGoes: 'Understanding HTML history helps you appreciate why modern best practices exist and how the web platform evolved.',
        realWorldUseCase:
          'Modern websites rely on HTML5 features such as video playback, semantic elements, and responsive design support.',
        seoNotes:
          'HTML5 semantic elements help search engines better understand page structure and content hierarchy.',
        bestPractices: [
          'Always use the HTML5 DOCTYPE.',
          'Leverage new HTML5 semantic elements (header, nav, main, footer).',
          'Use native HTML5 form validation where possible.',
          'Prefer HTML5 audio/video over Flash or plugins.'
        ],
        example: {
          title: 'Modern HTML5 Document',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML5 Example</title>
  </head>
  <body>
    <header>
      <h1>HTML5 Website</h1>
    </header>
    <main>
      <p>Built using modern HTML5 standards.</p>
    </main>
  </body>
</html>`
        },
        exercise: {
          title: 'HTML Timeline',
          task: 'Research HTML versions and create a webpage showing a timeline from HTML 1.0 to HTML5.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Timeline</title>
  </head>
  <body>
    <h1>History of HTML</h1>
    <ul>
      <li>1991 - HTML 1.0</li>
      <li>1995 - HTML 2.0</li>
      <li>2014 - HTML5</li>
    </ul>
  </body>
</html>`,
          expectedOutput: 'A page listing HTML versions as a timeline with years and descriptions.'
        },
        practicePrompt: 'Create a timeline page that lists all major HTML versions. Use an ordered list and include a brief description for each version.'
      },

      {
        title: 'How Websites Work',
        slug: 'how-websites-work',
        difficulty: 'Beginner',
        description: `
When a user enters a URL into a browser:

1. The browser sends a request to a web server.
2. The server returns HTML, CSS, JavaScript, images, and other resources.
3. The browser parses the HTML.
4. The browser builds the DOM (Document Object Model).
5. CSS styles are applied.
6. JavaScript adds interactivity.
7. The final page is rendered on screen.

Understanding this process helps developers create faster and more efficient websites.
        `,
        whereItGoes: 'This is a conceptual topic — understanding the request/response cycle informs how you write HTML.',
        realWorldUseCase:
          'Every ecommerce store, blog, SaaS platform, and portfolio website follows this request-response cycle.',
        seoNotes:
          'Fast loading pages improve user experience, Core Web Vitals, and search rankings.',
        bestPractices: [
          'Minimize HTTP requests by combining files.',
          'Use compression (gzip/brotli) for faster transfers.',
          'Place CSS in <head> and JS before </body>.',
          'Optimize images and use lazy loading.'
        ],
        example: {
          title: 'Basic Website Request Flow',
          code: `<!-- The browser requests this file from the server -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>How Websites Work</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Page loaded successfully!</h1>
    <script src="app.js"></script>
  </body>
</html>`
        },
        exercise: {
          title: 'Website Flow Diagram',
          task: 'Create an HTML page that demonstrates the basic file structure a browser would receive from a server.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>How Websites Work</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Page loaded successfully!</h1>
    <script src="app.js"></script>
  </body>
</html>`,
          expectedOutput: 'A page showing "Page loaded successfully!" — demonstrating the file a server sends.'
        },
        practicePrompt: 'Create a complete HTML page with linked CSS and JS files. Think about where each resource goes and why — this mirrors what a real server delivers to browsers.'
      },

      {
        title: 'Browser Rendering Basics',
        slug: 'browser-rendering-basics',
        difficulty: 'Beginner',
        description: `
Browsers convert HTML into a visual webpage through a rendering process:

• Parse HTML → Create DOM Tree
• Parse CSS → Create CSSOM
• Combine DOM + CSSOM → Build Render Tree
• Layout Elements (calculate positions)
• Paint Pixels (draw to screen)

Efficient HTML improves rendering performance and user experience.
        `,
        whereItGoes: 'This is a conceptual topic — understanding rendering helps you write performant HTML.',
        realWorldUseCase:
          'Large ecommerce websites optimize rendering to reduce loading times and increase conversions.',
        seoNotes:
          'Reducing render-blocking resources improves Core Web Vitals and search visibility.',
        bestPractices: [
          'Avoid deeply nested DOM structures.',
          'Minimize render-blocking CSS and JS.',
          'Use async/defer attributes on script tags.',
          'Keep the DOM tree as shallow as possible.'
        ],
        example: {
          title: 'Simple Rendered HTML',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rendering Demo</title>
    <style>
      h1 { color: navy; }
      p { font-size: 18px; }
    </style>
  </head>
  <body>
    <h1>Browser Rendering</h1>
    <p>The browser converts HTML into visual content.</p>
  </body>
</html>`
        },
        exercise: {
          title: 'Rendering Observation',
          task: 'Open Chrome DevTools and inspect the DOM tree of any website. Create a simple page to see how the browser renders it.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rendering Demo</title>
    <style>
      h1 { color: navy; }
      p { font-size: 18px; }
    </style>
  </head>
  <body>
    <h1>Browser Rendering</h1>
    <p>The browser converts HTML into visual content.</p>
  </body>
</html>`,
          expectedOutput: 'A page with a navy-colored heading and styled paragraph — rendered by the browser pipeline.'
        },
        practicePrompt: 'Create an HTML page with inline styles. Open DevTools (F12) and observe how the DOM tree maps to your HTML structure. Try adding and removing elements to see how the render tree changes.'
      },

      {
        title: 'Setting Up VS Code for HTML Development',
        slug: 'vs-code-setup',
        difficulty: 'Beginner',
        description: `
Visual Studio Code is one of the most popular code editors for web development.

Recommended extensions:

• HTML CSS Support
• Prettier
• Live Server
• Auto Rename Tag
• IntelliSense Extensions

Using VS Code increases productivity and improves code quality.
        `,
        whereItGoes: 'This is a setup topic — your editor is where you write and preview all HTML code.',
        realWorldUseCase:
          'Most professional frontend developers use VS Code for HTML, CSS, JavaScript, React, Angular, and Vue projects.',
        seoNotes:
          'Well-structured code improves maintainability and site quality.',
        bestPractices: [
          'Install Live Server for instant browser preview.',
          'Enable format-on-save with Prettier.',
          'Use Emmet abbreviations for faster HTML writing.',
          'Organize files in folders: css/, js/, images/.'
        ],
        example: {
          title: 'Project Structure',
          code: `project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── images/
    └── logo.png`
        },
        exercise: {
          title: 'Editor Setup',
          task: 'Install VS Code, Live Server, and create your first HTML project folder.',
          starterCode: `<!-- Create this as index.html in your project folder -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Project</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1>Project is ready!</h1>
  </body>
</html>`,
          expectedOutput: 'A page showing "Project is ready!" — served via Live Server with hot reload.'
        },
        practicePrompt: 'Create a project folder with index.html, a css folder with style.css, and a js folder with app.js. Open it in VS Code and use Live Server to preview your page.'
      }
    ]
  },

  {
    title: 'HTML Fundamentals',
    slug: 'html-fundamentals',
    difficulty: 'Beginner',
    topics: [
      {
        title: 'DOCTYPE Declaration',
        slug: 'doctype-declaration',
        difficulty: 'Beginner',
        description: `
The DOCTYPE declaration tells browsers which version of HTML the document uses.

Modern HTML5 uses:

<!DOCTYPE html>

Without a DOCTYPE declaration, browsers may enter Quirks Mode, causing inconsistent rendering behavior.
        `,
        whereItGoes: 'Must be the very first line in any HTML file — before the <html> tag.',
        syntax: `<!DOCTYPE html>`,
        realWorldUseCase:
          'Every professional website begins with a valid DOCTYPE declaration.',
        seoNotes:
          'Ensures standards-compliant rendering which improves user experience and technical quality.',
        bestPractices: [
          'Always place DOCTYPE as the first line.',
          'Use the HTML5 short form: <!DOCTYPE html>.',
          'Never omit it — Quirks Mode causes layout bugs.',
          'DOCTYPE is case-insensitive but convention uses uppercase.'
        ],
        example: {
          title: 'HTML5 DOCTYPE',
          code: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Page</title>
  </head>
  <body>
    <p>Standards mode activated!</p>
  </body>
</html>`
        },
        exercise: {
          title: 'Add DOCTYPE',
          task: 'Create a webpage and ensure the HTML5 DOCTYPE is the first line.',
          starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Page</title>
  </head>
  <body>
    <p>Standards mode activated!</p>
  </body>
</html>`,
          expectedOutput: 'A standards-mode page with "Standards mode activated!" displayed.'
        },
        practicePrompt: 'Create a complete HTML page with the correct DOCTYPE. Add a heading and paragraph to verify the page renders in standards mode.'
      },

      {
        title: '<html> Tag',
        slug: 'html-element',
        difficulty: 'Beginner',
        description: `
The <html> element is the root element of every HTML document. It is typically placed after the DOCTYPE declaration and wraps the entire document — there is exactly one <html> per page.

The lang attribute improves accessibility and search engine understanding.
        `,
        whereItGoes: 'Wraps the entire document — there is exactly one <html> per page.',
        commonAttributes: ['lang', 'dir'],
        syntax: `<html lang="..." dir="...">...</html>`,
        realWorldUseCase:
          'All websites use the html element as the document root.',
        seoNotes:
          'Always specify a language using the lang attribute for accessibility and SEO.',
        bestPractices: [
          'Always include the lang attribute.',
          'Set dir="rtl" for right-to-left languages.',
          'There should be exactly one <html> element per page.',
          'Place it immediately after the DOCTYPE declaration.'
        ],
        example: {
          title: 'HTML Root Element',
          code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>`
        },
        exercise: {
          title: 'Language Setup',
          task: 'Use <html> in a small snippet that demonstrates a real use case — the root element of every HTML document.',
          starterCode: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>`,
          expectedOutput: 'A complete page with a heading "Hello, world!"'
        },
        practicePrompt: 'Build a small example that combines <html> with two or three other elements you have already learnt. Remember it wraps the entire document — there is exactly one <html> per page.'
      },

      {
        title: '<head> Element',
        slug: 'head-element',
        difficulty: 'Beginner',
        description: `
The head element contains metadata about the webpage — information that browsers, search engines, and social media platforms need but that is not displayed as page content.

Common elements inside head include title, meta, link, style, and script. This is where you configure SEO, character encoding, viewport settings, and external resources.
        `,
        whereItGoes: 'Sits inside <html>, before <body>. Contains metadata, not visible content.',
        commonAttributes: ['lang (inherited)', 'profile (deprecated)'],
        syntax: `<head>\n  <meta charset="UTF-8" />\n  <title>Page Title</title>\n</head>`,
        realWorldUseCase:
          'SEO metadata, CSS files, favicons, and scripts are configured inside the head section.',
        seoNotes:
          'The title tag and meta description are critical ranking and click-through-rate factors.',
        bestPractices: [
          'Always include <meta charset="UTF-8"> first.',
          'Add a descriptive <title> for every page.',
          'Include viewport meta for responsive design.',
          'Load CSS in head, scripts at end of body.'
        ],
        example: {
          title: 'Head Section Example',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn HTML</title>
    <meta name="description" content="HTML tutorial for beginners">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello!</h1>
  </body>
</html>`
        },
        exercise: {
          title: 'SEO Head Setup',
          task: 'Create a complete <head> section with charset, viewport, title, and a meta description.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Learn HTML</title>
    <meta name="description" content="HTML tutorial for beginners">
  </head>
  <body>
    <h1>Hello!</h1>
  </body>
</html>`,
          expectedOutput: 'A page that shows "Hello!" — the head metadata is invisible but drives SEO.'
        },
        practicePrompt: 'Build a page with a proper <head> section. Include charset, viewport, title, description, and an external stylesheet link. Then add a heading in the body to verify it works.'
      },

      {
        title: '<body> Element',
        slug: 'body-element',
        difficulty: 'Beginner',
        description: `
The body element contains all visible content displayed in the browser window. Everything users see and interact with — headings, paragraphs, images, videos, forms, navigation menus — appears inside the body element.

There is exactly one <body> per page, and it must be a direct child of <html>.
        `,
        whereItGoes: 'Direct child of <html>, comes after <head>. Contains all visible page content.',
        commonAttributes: ['onload', 'onunload', 'class', 'id'],
        syntax: `<body>\n  <!-- All visible content goes here -->\n</body>`,
        realWorldUseCase:
          'Landing pages, blogs, ecommerce stores, and web applications place content inside the body.',
        seoNotes:
          'Use semantic HTML inside the body for improved search engine understanding.',
        bestPractices: [
          'Place all visible content inside <body>.',
          'Use semantic structure: header, main, footer.',
          'Load JavaScript at the end of body for performance.',
          'Avoid inline styles — use external CSS.'
        ],
        example: {
          title: 'Body Example',
          code: `<body>
  <header>
    <h1>Learn HTML</h1>
  </header>
  <main>
    <p>Start building websites today.</p>
    <a href="/courses">Browse courses</a>
  </main>
  <footer>
    <p>&copy; 2024 VCoding</p>
  </footer>
</body>`
        },
        exercise: {
          title: 'Build a Page Body',
          task: 'Create a body containing a header with heading, a main area with paragraph and link, and a footer.',
          starterCode: `<body>
  <header>
    <h1>Learn HTML</h1>
  </header>
  <main>
    <p>Start building websites today.</p>
    <a href="/courses">Browse courses</a>
  </main>
  <footer>
    <p>&copy; 2024 VCoding</p>
  </footer>
</body>`,
          expectedOutput: 'A structured page with a heading, paragraph, link, and footer text.'
        },
        practicePrompt: 'Build a complete page body with a navigation menu, a main content area containing a heading and two paragraphs, and a footer with copyright information.'
      },

      {
        title: 'HTML Comments',
        slug: 'html-comments',
        difficulty: 'Beginner',
        description: `
Comments allow developers to leave notes inside HTML code. Comments are ignored by browsers and are not visible to visitors.

They improve maintainability and collaboration in team projects.
        `,
        whereItGoes: 'Anywhere in the HTML document. Browsers skip them completely.',
        syntax: `<!-- Your comment here -->`,
        realWorldUseCase:
          'Development teams use comments to document sections and explain complex markup.',
        seoNotes:
          'Avoid placing sensitive information inside comments because source code is publicly visible.',
        commonMistakes: [
          'Nesting comments inside comments (causes parsing errors).',
          'Leaving TODO comments in production code.',
          'Putting passwords or API keys in HTML comments.'
        ],
        bestPractices: [
          'Use comments to label major page sections.',
          'Remove unnecessary comments before deployment.',
          'Never store sensitive data in comments.',
          'Keep comments concise and meaningful.'
        ],
        example: {
          title: 'Comment Example',
          code: `<!-- Main Navigation -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<!-- Hero Section -->
<section>
  <h1>Welcome</h1>
  <p>Learn HTML today.</p>
</section>

<!-- Footer -->
<footer>
  <p>&copy; 2024</p>
</footer>`
        },
        exercise: {
          title: 'Document a Page',
          task: 'Create a page with comments identifying the header, main content, and footer sections.',
          starterCode: `<!-- Main Navigation -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<!-- Hero Section -->
<section>
  <h1>Welcome</h1>
  <p>Learn HTML today.</p>
</section>

<!-- Footer -->
<footer>
  <p>&copy; 2024</p>
</footer>`,
          expectedOutput: 'A page with navigation, hero section, and footer — comments are invisible in output.'
        },
        practicePrompt: 'Build a multi-section page and add descriptive comments before each section. Practice using comments to create a clear map of your page structure.'
      },

      {
        title: 'Character Encoding',
        slug: 'character-encoding',
        difficulty: 'Beginner',
        description: `
Character encoding determines how text characters are stored and displayed.

UTF-8 is the modern standard because it supports virtually every language and symbol.

Always include <meta charset="UTF-8"> as the first element in your <head>.
        `,
        whereItGoes: 'Inside <head>, ideally as the very first child element.',
        syntax: `<meta charset="UTF-8">`,
        realWorldUseCase:
          'Global websites serving multiple languages depend on UTF-8 encoding.',
        seoNotes:
          'Proper encoding prevents broken characters and improves user experience.',
        bestPractices: [
          'Always use UTF-8 for modern web pages.',
          'Place charset declaration as the first element in <head>.',
          'Save your HTML files with UTF-8 encoding in your editor.',
          'Test with special characters (accents, emojis, non-Latin scripts).'
        ],
        example: {
          title: 'UTF-8 Setup',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Character Encoding</title>
  </head>
  <body>
    <p>English: Hello World</p>
    <p>French: Café, résumé</p>
    <p>Tamil: வணக்கம்</p>
    <p>Emoji: 🌍 🚀 ✨</p>
  </body>
</html>`
        },
        exercise: {
          title: 'Unicode Test',
          task: 'Create a page displaying English, French, Tamil, and emoji characters using UTF-8.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Character Encoding</title>
  </head>
  <body>
    <p>English: Hello World</p>
    <p>French: Café, résumé</p>
    <p>Tamil: வணக்கம்</p>
    <p>Emoji: 🌍 🚀 ✨</p>
  </body>
</html>`,
          expectedOutput: 'A page showing text in multiple languages and emoji — all rendered correctly thanks to UTF-8.'
        },
        practicePrompt: 'Create a multilingual page with content in at least three different languages. Include some emoji. Verify all characters display correctly by opening in a browser.'
      },

      {
        title: 'Metadata Fundamentals',
        slug: 'metadata-fundamentals',
        difficulty: 'Beginner',
        description: `
Metadata provides information about a webpage that is not displayed visually.

Common metadata includes:

• Character encoding
• Viewport settings
• Page description
• Author information
• Search engine instructions

Metadata helps browsers, search engines, and social media platforms understand pages.
        `,
        whereItGoes: 'Inside <head>. Each <meta> tag describes one piece of page metadata.',
        commonAttributes: ['name', 'content', 'charset', 'http-equiv'],
        syntax: `<meta name="..." content="...">`,
        realWorldUseCase:
          'Every SEO-optimized website relies on metadata to improve discoverability.',
        seoNotes:
          'Unique metadata improves indexing, rankings, and click-through rates.',
        bestPractices: [
          'Always include charset, viewport, and description.',
          'Keep meta descriptions under 160 characters.',
          'Use unique titles and descriptions per page.',
          'Add Open Graph meta for social media sharing.'
        ],
        example: {
          title: 'Metadata Example',
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Complete HTML tutorial for beginners">
    <meta name="author" content="VCoding">
    <meta name="robots" content="index, follow">
    <title>Learn HTML - Free Tutorial</title>
  </head>
  <body>
    <h1>Metadata configured!</h1>
  </body>
</html>`
        },
        exercise: {
          title: 'Metadata Optimization',
          task: 'Add metadata for charset, viewport, description, author, and robots to a webpage.',
          starterCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Complete HTML tutorial for beginners">
    <meta name="author" content="VCoding">
    <meta name="robots" content="index, follow">
    <title>Learn HTML - Free Tutorial</title>
  </head>
  <body>
    <h1>Metadata configured!</h1>
  </body>
</html>`,
          expectedOutput: 'A page showing "Metadata configured!" — all metadata is invisible but improves SEO.'
        },
        practicePrompt: 'Build a full <head> section with all essential metadata: charset, viewport, title, description, author, robots directive, and an Open Graph image tag for social sharing.'
      }
    ]
  }
]

export const htmlTextElementsSection = {
  title: 'HTML Text Elements',
  slug: 'html-text-elements',
  difficulty: 'Beginner',
  description:
    'Learn every HTML text-related element used to structure, format, emphasize, quote, annotate, and present textual content. This section covers semantic HTML, accessibility best practices, SEO considerations, and real-world usage patterns used by professional websites.',

  topics: [
    {
      title: 'HTML Headings (h1-h6)',
      slug: 'html-headings',
      difficulty: 'Beginner',
      description:
        'The heading elements h1 through h6 define content hierarchy on a webpage. Search engines, screen readers, and users rely on headings to understand page structure. The h1 element represents the primary page topic, while h2-h6 create logical subsections.',

      whereItGoes: 'Inside <body>, used to structure content into titled sections. They create a document outline.',
      commonAttributes: ['id', 'class'],
      syntax: `<h1>Main title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>`,

      realWorldUseCase:
        'Blog posts, product pages, documentation sites, news articles, and landing pages use headings to organize content and improve readability.',

      commonMistakes: [
        'Using multiple h1 elements without a clear structure.',
        'Skipping heading levels (h1 directly to h4).',
        'Using headings only for visual styling.',
        'Placing entire paragraphs inside heading tags.'
      ],

      bestPractices: [
        'Use one primary h1 per page.',
        'Maintain logical heading hierarchy.',
        'Include important keywords naturally.',
        'Keep headings descriptive and concise.',
        'Use CSS for styling instead of choosing heading levels based on size.'
      ],

      example: {
        title: 'Blog Article Structure',
        code: `<h1>Complete HTML Tutorial</h1>

<h2>Introduction</h2>
<p>Learn HTML fundamentals.</p>

<h2>HTML Elements</h2>

<h3>Text Elements</h3>
<p>Working with text content.</p>

<h3>Form Elements</h3>
<p>Collecting user input.</p>`
      },

      exercise: {
        title: 'Create Article Hierarchy',
        task:
          'Build a tutorial page using one h1, three h2 elements, and at least two h3 subsections.',
        starterCode: `<h1>Complete HTML Tutorial</h1>

<h2>Introduction</h2>
<p>Learn HTML fundamentals.</p>

<h2>HTML Elements</h2>

<h3>Text Elements</h3>
<p>Working with text content.</p>

<h3>Form Elements</h3>
<p>Collecting user input.</p>`,
        expectedOutput: 'A page with a clear heading hierarchy showing main title, sections, and subsections.'
      },
      practicePrompt: 'Create a blog article structure with one h1 for the title, three h2 sections, and at least two h3 subsections under one of the h2 elements. Add a paragraph after each heading.'
    },

    {
      title: 'Paragraph Element (<p>)',
      slug: 'html-paragraph',
      difficulty: 'Beginner',
      description:
        'The paragraph element represents blocks of textual content. Browsers automatically add spacing before and after paragraphs, making content easier to read.',

      whereItGoes: 'Inside <body> or any block container. Used for flowing text content.',
      commonAttributes: ['class', 'id', 'style'],
      syntax: `<p>Your text content here.</p>`,

      realWorldUseCase:
        'Articles, blogs, product descriptions, documentation, and educational websites use paragraphs extensively.',

      commonMistakes: [
        'Using multiple br tags instead of paragraphs.',
        'Placing block-level elements inside p tags.',
        'Creating excessively long paragraphs.'
      ],

      bestPractices: [
        'Keep paragraphs concise.',
        'Separate ideas into different paragraphs.',
        'Use semantic structure.',
        'Improve readability for mobile users.'
      ],

      example: {
        title: 'Basic Paragraph',
        code: `<p>
  HTML is the foundation of every modern website.
</p>

<p>
  It provides structure and meaning to web content.
</p>

<p>
  Combined with CSS and JavaScript, HTML forms the web platform.
</p>`
      },

      exercise: {
        title: 'Write Content',
        task:
          'Create three paragraphs explaining what HTML, CSS, and JavaScript are.',
        starterCode: `<p>
  HTML is the foundation of every modern website.
</p>

<p>
  CSS controls the visual appearance of web pages.
</p>

<p>
  JavaScript adds interactivity and dynamic behavior.
</p>`,
        expectedOutput: 'Three separate paragraphs, each explaining one of the core web technologies.'
      },
      practicePrompt: 'Write a short "About Me" section using three or four paragraphs. Focus on making each paragraph cover one specific idea.'
    },

    {
      title: 'Line Break Element (<br>)',
      slug: 'html-br',
      difficulty: 'Beginner',
      description:
        'The br element inserts a single line break within text content. It is a void element (no closing tag). Use it when line separation is required without creating a new paragraph.',

      whereItGoes: 'Inside inline or block text content where a line break is semantically meaningful.',
      syntax: `Text before<br>\nText after`,

      realWorldUseCase:
        'Poetry, addresses, song lyrics, and formatted text blocks often use br tags.',

      commonMistakes: [
        'Using multiple br tags for page layout.',
        'Replacing paragraphs with br tags.',
        'Creating large vertical spaces using repeated breaks.'
      ],

      bestPractices: [
        'Use only when line breaks have semantic meaning.',
        'Use CSS for spacing.',
        'Prefer paragraph elements for content separation.'
      ],

      example: {
        title: 'Address Formatting',
        code: `<address>
  123 Main Street<br>
  London, EC1A 1BB<br>
  United Kingdom
</address>`
      },

      exercise: {
        title: 'Create Address Block',
        task:
          'Display a company address using line breaks between each address line.',
        starterCode: `<address>
  123 Main Street<br>
  London, EC1A 1BB<br>
  United Kingdom
</address>`,
        expectedOutput: 'An address displayed on three separate lines without extra paragraph spacing.'
      },
      practicePrompt: 'Write a poem or song lyric using <br> to separate lines within a single <p>. Then write an address block. Notice how <br> differs from using multiple <p> elements.'
    },

    {
      title: 'Horizontal Rule (<hr>)',
      slug: 'html-hr',
      difficulty: 'Beginner',
      description:
        'The hr element represents a thematic break between sections of content. It renders as a horizontal line and provides semantic meaning — indicating a shift in topic.',

      whereItGoes: 'Between block-level content to indicate a topic change or thematic break.',
      syntax: `<hr>`,

      realWorldUseCase:
        'Blog sections, chapter breaks, article separators, and content transitions.',

      commonMistakes: [
        'Using hr purely for decoration.',
        'Using multiple hr elements for spacing.',
        'Using hr inside headings or paragraphs.'
      ],

      bestPractices: [
        'Use hr only for meaningful content separation.',
        'Style hr with CSS when needed.',
        'Pair with headings to denote new sections.'
      ],

      example: {
        title: 'Content Separation',
        code: `<h2>Chapter 1</h2>
<p>Introduction to the web platform.</p>

<hr>

<h2>Chapter 2</h2>
<p>Advanced HTML techniques.</p>

<hr>

<h2>Chapter 3</h2>
<p>Semantic markup and accessibility.</p>`
      },

      exercise: {
        title: 'Divide Sections',
        task:
          'Create an article with three sections separated using horizontal rules.',
        starterCode: `<h2>Chapter 1</h2>
<p>Introduction to the web platform.</p>

<hr>

<h2>Chapter 2</h2>
<p>Advanced HTML techniques.</p>

<hr>

<h2>Chapter 3</h2>
<p>Semantic markup and accessibility.</p>`,
        expectedOutput: 'Three titled sections separated by horizontal lines.'
      },
      practicePrompt: 'Create a multi-chapter article with at least three sections. Use <hr> between chapters and include a heading and paragraph in each section.'
    },

    {
      title: 'Preformatted Text (<pre>)',
      slug: 'html-pre',
      difficulty: 'Beginner',
      description:
        'The pre element preserves whitespace, indentation, and line breaks exactly as written in the source code. Unlike most HTML elements, spaces and newlines are rendered literally.',

      whereItGoes: 'Inside <body>. Used for code blocks, ASCII art, and pre-formatted data.',
      commonAttributes: ['class', 'id'],
      syntax: `<pre>\n  Preserved\n    whitespace\n</pre>`,

      realWorldUseCase:
        'Code examples, ASCII art, configuration files, and terminal output.',

      commonMistakes: [
        'Using pre for general text formatting.',
        'Forgetting responsive design considerations.',
        'Not escaping HTML entities inside pre.'
      ],

      bestPractices: [
        'Use for content requiring preserved formatting.',
        'Combine with code element for code snippets.',
        'Add overflow-x: auto in CSS for long lines.',
        'Escape < and > as &lt; and &gt; inside pre.'
      ],

      example: {
        title: 'Preserved Formatting',
        code: `<pre><code>
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("World"));
</code></pre>`
      },

      exercise: {
        title: 'Create Terminal Output',
        task:
          'Display a formatted terminal command output using the pre element.',
        starterCode: `<pre><code>
$ npm install
$ npm run dev

> Server running at http://localhost:3000
</code></pre>`,
        expectedOutput: 'A monospaced block showing terminal commands with preserved spacing and line breaks.'
      },
      practicePrompt: 'Create a page that shows a code snippet using <pre> and <code> together. Then display an ASCII art below it. Notice how all whitespace is preserved exactly as written.'
    },

    {
      title: 'Block Quote (<blockquote>)',
      slug: 'html-blockquote',
      difficulty: 'Beginner',
      description:
        'The blockquote element represents a quotation from another source and is typically displayed as a block-level section.',

      realWorldUseCase:
        'Testimonials, citations, interviews, research papers, and articles.',

      commonMistakes: [
        'Using blockquote for styling.',
        'Failing to cite the original source.'
      ],

      bestPractices: [
        'Use for actual quotations.',
        'Provide source attribution whenever possible.'
      ],

      example: {
        title: 'Quote Example',
        code: `<blockquote>
  The best way to predict the future is to invent it.
</blockquote>`
      },

      exercise: {
        title: 'Create Testimonial',
        task:
          'Add a customer testimonial using the blockquote element.'
      }
    },

    {
      title: 'Inline Quote (q)',
      slug: 'html-q',
      difficulty: 'Beginner',
      description:
        'The q element represents short inline quotations embedded within surrounding text.',

      realWorldUseCase:
        'Quotes within articles, interviews, and documentation.',

      commonMistakes: [
        'Adding manual quotation marks around q content.'
      ],

      bestPractices: [
        'Allow browsers to handle quotation marks automatically.'
      ],

      example: {
        title: 'Inline Quote',
        code: `<p>
  Steve Jobs said <q>Stay hungry, stay foolish.</q>
</p>`
      },

      exercise: {
        title: 'Quote a Famous Person',
        task:
          'Create a paragraph containing an inline quotation using q.'
      }
    },

    {
      title: 'Citation Element (cite)',
      slug: 'html-cite',
      difficulty: 'Beginner',
      description:
        'The cite element identifies the title of a creative work such as a book, movie, article, or research paper.',

      realWorldUseCase:
        'Academic writing, reviews, references, and citations.',

      commonMistakes: [
        'Using cite for author names.',
        'Using cite for generic emphasis.'
      ],

      bestPractices: [
        'Use only for titles of creative works.'
      ],

      example: {
        title: 'Book Citation',
        code: `<p>
  I recently read <cite>The Pragmatic Programmer</cite>.
</p>`
      },

      exercise: {
        title: 'Reference a Book',
        task:
          'Mention your favorite book using the cite element.'
      }
    },

    {
      title: 'Abbreviation Element (abbr)',
      slug: 'html-abbr',
      difficulty: 'Beginner',
      description:
        'The abbr element represents abbreviations or acronyms and can provide expanded meanings through the title attribute.',

      realWorldUseCase:
        'Technical documentation, educational content, and government websites.',

      commonMistakes: [
        'Not providing expanded meanings.'
      ],

      bestPractices: [
        'Use the title attribute whenever possible.'
      ],

      example: {
        title: 'Abbreviation Example',
        code: `<abbr title="HyperText Markup Language">
  HTML
</abbr>`
      },

      exercise: {
        title: 'Create Acronyms',
        task:
          'Add abbreviations for HTML, CSS, and JavaScript using abbr.'
      }
    },

    {
      title: 'Address Element (address)',
      slug: 'html-address',
      difficulty: 'Beginner',
      description:
        'The address element provides contact information for an individual, company, article author, or organization.',

      realWorldUseCase:
        'Business websites, contact pages, and author profiles.',

      commonMistakes: [
        'Using address for non-contact information.'
      ],

      bestPractices: [
        'Include meaningful contact details.'
      ],

      example: {
        title: 'Company Address',
        code: `<address>
  ABC Technologies<br>
  London, United Kingdom<br>
  support@example.com
</address>`
      },

      exercise: {
        title: 'Contact Section',
        task:
          'Create a company contact block using the address element.'
      }
    },

    {
      title: 'Text Formatting Elements',
      slug: 'html-formatting-elements',
      difficulty: 'Beginner',
      description:
        'HTML provides formatting and semantic text elements including b, strong, i, em, mark, small, sub, sup, del, ins, code, kbd, samp, var, and time.',

      realWorldUseCase:
        'Articles, educational platforms, technical documentation, and ecommerce websites.',

      commonMistakes: [
        'Using b instead of strong.',
        'Using i instead of em for emphasis.',
        'Ignoring semantic meaning.'
      ],

      bestPractices: [
        'Prefer semantic elements over visual formatting.',
        'Use formatting elements only when appropriate.'
      ],

      example: {
        title: 'Formatting Elements Example',
        code: `<p><strong>Important:</strong> Read instructions carefully.</p>

<p><em>Emphasized text</em></p>

<p><mark>Highlighted keyword</mark></p>

<p>H<sub>2</sub>O</p>

<p>X<sup>2</sup></p>

<p><del>$100</del> $75</p>

<p><ins>New content added</ins></p>

<p><code>console.log('Hello');</code></p>

<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd></p>

<p><samp>Command executed successfully</samp></p>

<p><var>x</var> = 10</p>

<time datetime="2026-01-01">
  January 1, 2026
</time>`
      },

      exercise: {
        title: 'Formatting Showcase',
        task:
          'Create a page demonstrating every formatting element from b through time.'
      }
    }
  ]
}

export const htmlLinksSection = {
  title: 'HTML Links',
  slug: 'html-links',
  difficulty: 'Beginner',
  description:
    'Learn how to create hyperlinks in HTML using the anchor (a) element. This section covers internal navigation, external links, email links, phone links, downloadable resources, SEO best practices, accessibility standards, and professional linking strategies used by modern websites.',

  topics: [
    {
      title: 'Anchor Element (a)',
      slug: 'html-anchor-element',
      difficulty: 'Beginner',

      description: `
The anchor (a) element is one of the most important HTML elements. It creates hyperlinks that allow users to navigate between pages, websites, documents, sections, and resources.

Links are the foundation of the World Wide Web because they connect content together.

The anchor element becomes a hyperlink when the href attribute is provided.
      `,

      realWorldUseCase:
        'Navigation menus, blog article references, product links, documentation websites, social media links, and internal website navigation.',

      commonMistakes: [
        'Using "Click Here" as link text.',
        'Creating links without href.',
        'Using links as buttons.',
        'Opening every link in a new tab unnecessarily.',
        'Using generic anchor text that provides no context.'
      ],

      bestPractices: [
        'Use descriptive anchor text.',
        'Make link purpose clear without surrounding content.',
        'Link only when it provides value.',
        'Use semantic HTML.',
        'Ensure links are keyboard accessible.'
      ],

      seoNotes: [
        'Use descriptive anchor text.',
        'Avoid generic phrases such as "Click Here".',
        'Internal links help search engines discover pages.',
        'Relevant anchor text improves topic understanding.',
        'Create logical site architecture through internal linking.'
      ],

      accessibilityNotes: [
        'Ensure links can be reached using keyboard navigation.',
        'Use meaningful link text.',
        'Maintain sufficient color contrast.',
        'Avoid relying solely on color to indicate links.'
      ],

      example: {
        title: 'Basic Link',
        code: `<a href="https://example.com">
  Visit Example Website
</a>`
      },

      exercise: {
        title: 'Create Navigation Links',
        task:
          'Create a navigation menu containing Home, About, Services, and Contact links.'
      }
    },

    {
      title: 'href Attribute',
      slug: 'html-href-attribute',
      difficulty: 'Beginner',

      description: `
The href (Hypertext Reference) attribute specifies the destination URL of a hyperlink.

Without href, an anchor element behaves like ordinary text and cannot navigate users to another location.
      `,

      realWorldUseCase:
        'Website navigation, external references, downloads, contact actions, and document links.',

      commonMistakes: [
        'Leaving href empty.',
        'Using invalid URLs.',
        'Using # as a placeholder in production.'
      ],

      bestPractices: [
        'Always use valid destinations.',
        'Test links regularly.',
        'Use descriptive URLs.'
      ],

      seoNotes: [
        'Search engines use href values to discover and crawl pages.'
      ],

      accessibilityNotes: [
        'Links should always have a clear destination.'
      ],

      example: {
        title: 'href Example',
        code: `<a href="/about-us">
  About Us
</a>`
      },

      exercise: {
        title: 'Internal Navigation',
        task:
          'Create links to three different pages of your website using href.'
      }
    },

    {
      title: 'Absolute Links',
      slug: 'html-absolute-links',
      difficulty: 'Beginner',

      description: `
Absolute links contain the complete URL including protocol, domain, and path.

They are commonly used when linking to external websites.
      `,

      realWorldUseCase:
        'Linking to social media profiles, external resources, partner websites, and documentation.',

      commonMistakes: [
        'Forgetting https://',
        'Using outdated URLs.',
        'Linking to non-secure websites.'
      ],

      bestPractices: [
        'Prefer HTTPS links.',
        'Verify destination websites.',
        'Use trusted sources.'
      ],

      seoNotes: [
        'External links to authoritative resources can improve content quality.'
      ],

      accessibilityNotes: [
        'Inform users when leaving your website if necessary.'
      ],

      example: {
        title: 'Absolute URL',
        code: `<a href="https://developer.mozilla.org">
  MDN Documentation
</a>`
      },

      exercise: {
        title: 'Resource Page',
        task:
          'Create a page containing links to five trusted web development resources.'
      }
    },

    {
      title: 'Relative Links',
      slug: 'html-relative-links',
      difficulty: 'Beginner',

      description: `
Relative links reference pages within the same website without specifying the full domain.

They are commonly used for internal website navigation.
      `,

      realWorldUseCase:
        'Menus, breadcrumbs, category pages, product pages, and blog navigation.',

      commonMistakes: [
        'Using incorrect folder paths.',
        'Breaking links after moving files.'
      ],

      bestPractices: [
        'Maintain a consistent folder structure.',
        'Use relative links for internal pages.'
      ],

      seoNotes: [
        'Internal linking helps distribute authority throughout the website.'
      ],

      accessibilityNotes: [
        'Provide clear descriptions of destination pages.'
      ],

      example: {
        title: 'Relative URL',
        code: `<a href="contact.html">
  Contact Us
</a>`
      },

      exercise: {
        title: 'Multi-Page Website',
        task:
          'Create Home, About, and Contact pages linked using relative URLs.'
      }
    },

    {
      title: 'target Attribute',
      slug: 'html-target-attribute',
      difficulty: 'Beginner',

      description: `
The target attribute specifies where a linked document should open.

Common values:

_self  → Current tab
_blank → New tab
_parent → Parent frame
_top → Top frame
      `,

      realWorldUseCase:
        'Opening external resources in new tabs while keeping users on your website.',

      commonMistakes: [
        'Using _blank for every link.',
        'Not informing users about new tab behavior.'
      ],

      bestPractices: [
        'Use _blank only when appropriate.',
        'Consider user expectations.'
      ],

      seoNotes: [
        'Target attribute does not directly impact rankings.'
      ],

      accessibilityNotes: [
        'Inform users when a link opens in a new tab.'
      ],

      example: {
        title: 'Open in New Tab',
        code: `<a href="https://example.com" target="_blank">
  External Resource
</a>`
      },

      exercise: {
        title: 'External Resources',
        task:
          'Create three external links that open in a new browser tab.'
      }
    },

    {
      title: 'rel Attribute',
      slug: 'html-rel-attribute',
      difficulty: 'Beginner',

      description: `
The rel attribute defines the relationship between the current page and the linked resource.

Common values:

noopener
noreferrer
nofollow
ugc
sponsored
      `,

      realWorldUseCase:
        'External links, affiliate links, user-generated content, and sponsored content.',

      commonMistakes: [
        'Using target="_blank" without rel="noopener".',
        'Applying nofollow incorrectly.'
      ],

      bestPractices: [
        'Use noopener with target="_blank".',
        'Use sponsored for paid links.',
        'Use ugc for user-generated content.'
      ],

      seoNotes: [
        'nofollow tells search engines not to transfer ranking signals.',
        'sponsored identifies paid links.',
        'ugc identifies community-generated links.'
      ],

      accessibilityNotes: [
        'No direct accessibility impact.'
      ],

      example: {
        title: 'Secure External Link',
        code: `<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Website
</a>`
      },

      exercise: {
        title: 'Secure Linking',
        task:
          'Convert all external links on a page to use appropriate rel values.'
      }
    },

    {
      title: 'Download Links',
      slug: 'html-download-links',
      difficulty: 'Beginner',

      description: `
The download attribute tells the browser to download a file instead of opening it.

Useful for PDFs, documents, images, templates, and resources.
      `,

      realWorldUseCase:
        'Resume downloads, product brochures, ebooks, invoices, and templates.',

      commonMistakes: [
        'Using download on external domains.',
        'Not testing browser behavior.'
      ],

      bestPractices: [
        'Provide clear file names.',
        'Indicate file type and size.'
      ],

      seoNotes: [
        'Downloadable resources can improve user engagement.'
      ],

      accessibilityNotes: [
        'Clearly indicate that clicking starts a download.'
      ],

      example: {
        title: 'Download PDF',
        code: `<a href="guide.pdf" download>
  Download HTML Guide
</a>`
      },

      exercise: {
        title: 'Resource Center',
        task:
          'Create a downloads page containing three downloadable files.'
      }
    },

    {
      title: 'Email Links (mailto)',
      slug: 'html-mailto-links',
      difficulty: 'Beginner',

      description: `
The mailto protocol opens the user's default email application and prepares a new email message.

It can also prefill subject lines and recipients.
      `,

      realWorldUseCase:
        'Contact pages, support links, sales inquiries, and feedback forms.',

      commonMistakes: [
        'Using invalid email addresses.',
        'Not providing alternative contact methods.'
      ],

      bestPractices: [
        'Use valid email addresses.',
        'Include meaningful subjects when appropriate.'
      ],

      seoNotes: [
        'Improves user communication opportunities.'
      ],

      accessibilityNotes: [
        'Clearly identify email actions.'
      ],

      example: {
        title: 'Email Link',
        code: `<a href="mailto:support@example.com">
  Contact Support
</a>`
      },

      exercise: {
        title: 'Support Section',
        task:
          'Create three mailto links for Sales, Support, and Careers.'
      }
    },

    {
      title: 'Telephone Links (tel)',
      slug: 'html-telephone-links',
      difficulty: 'Beginner',

      description: `
The tel protocol allows users to initiate phone calls directly from compatible devices.

It is especially useful on mobile devices.
      `,

      realWorldUseCase:
        'Business websites, restaurants, emergency services, and local businesses.',

      commonMistakes: [
        'Using improperly formatted phone numbers.'
      ],

      bestPractices: [
        'Use international phone formats.',
        'Keep numbers readable.'
      ],

      seoNotes: [
        'Supports local SEO and user engagement.'
      ],

      accessibilityNotes: [
        'Provide visible phone numbers alongside links.'
      ],

      example: {
        title: 'Phone Link',
        code: `<a href="tel:+442012345678">
  Call Us
</a>`
      },

      exercise: {
        title: 'Contact Page',
        task:
          'Add telephone links for customer support and sales departments.'
      }
    },

    {
      title: 'Anchor Links (Page Navigation)',
      slug: 'html-anchor-links',
      difficulty: 'Beginner',

      description: `
Anchor links allow users to jump directly to a specific section within the same webpage.

They use element IDs as destinations.
      `,

      realWorldUseCase:
        'Documentation websites, FAQs, long-form articles, and table-of-contents navigation.',

      commonMistakes: [
        'Using duplicate IDs.',
        'Linking to IDs that do not exist.'
      ],

      bestPractices: [
        'Use descriptive IDs.',
        'Create table-of-contents navigation for long pages.'
      ],

      seoNotes: [
        'Improves user experience and content discoverability.'
      ],

      accessibilityNotes: [
        'Makes navigation easier for keyboard users.'
      ],

      example: {
        title: 'Jump to Section',
        code: `<a href="#contact">
  Go to Contact Section
</a>

<section id="contact">
  <h2>Contact Us</h2>
  <p>Get in touch with us.</p>
</section>`
      },

      exercise: {
        title: 'Single Page Navigation',
        task:
          'Create a one-page website with navigation links that jump to different sections.'
      }
    }
  ]
}

export const htmlImagesSection = {
  title: 'HTML Images',
  slug: 'html-images',
  difficulty: 'Beginner',

  description:
    'Master HTML images from fundamentals to advanced optimization techniques. Learn how to display, optimize, make images responsive, improve accessibility, enhance SEO, and deliver high-performance image experiences for modern websites.',

  topics: [
    {
      title: 'Introduction to Images',
      slug: 'introduction-to-images',
      difficulty: 'Beginner',
      description:
        'Images are visual assets used to communicate information, improve engagement, demonstrate products, support branding, and enhance user experience. Images are one of the most important components of modern websites and significantly influence usability, accessibility, SEO, and performance.',

      whyItMatters:
        'Images improve engagement, increase conversions, and help users understand content faster.',

      realWorldUseCase:
        'Product photos on ecommerce stores, blog illustrations, company branding, portfolio showcases, and educational diagrams.',

      commonMistakes: [
        'Using oversized images.',
        'Missing alternative text.',
        'Uploading poor-quality images.',
        'Ignoring responsive design.'
      ],

      bestPractices: [
        'Optimize image sizes.',
        'Use modern image formats.',
        'Provide descriptive alt text.',
        'Use responsive image techniques.'
      ],

      seoConsiderations:
        'Optimized images improve rankings, image search visibility, and page speed metrics.',

      accessibilityConsiderations:
        'Images should include meaningful alternative text when they convey information.',

      browserSupport:
        'Supported by all modern browsers.',

      example: {
        title: 'Simple Image',
        code: `<img src="laptop.jpg" alt="Modern laptop on a desk">`
      },

      exercise: {
        title: 'Add Website Images',
        task:
          'Create a homepage containing three images with meaningful alt text.'
      }
    },

    {
      title: 'img Tag',
      slug: 'img-tag',
      difficulty: 'Beginner',
      description:
        'The img element embeds images into HTML documents. It is one of the most frequently used HTML elements and supports numerous attributes for accessibility, responsiveness, and performance.',

      whyItMatters:
        'Without the img element, browsers cannot display image content.',

      realWorldUseCase:
        'Product galleries, blog images, team photos, logos, banners, and hero sections.',

      commonMistakes: [
        'Missing alt attributes.',
        'Using large unoptimized images.',
        'Incorrect file paths.'
      ],

      bestPractices: [
        'Always provide alt text.',
        'Specify dimensions.',
        'Optimize images before uploading.'
      ],

      seoConsiderations:
        'Search engines use image metadata and alt text to understand image content.',

      accessibilityConsiderations:
        'Alternative text is required for screen reader users.',

      browserSupport:
        'Fully supported across all browsers.',

      example: {
        title: 'Basic img Element',
        code: `<img src="product.jpg" alt="Blue running shoes">`
      },

      exercise: {
        title: 'Display Product Images',
        task:
          'Add five product images to a page using the img element.'
      }
    },

    {
      title: 'src Attribute',
      slug: 'src-attribute',
      difficulty: 'Beginner',
      description:
        'The src attribute specifies the image file location that browsers should load and display.',

      whyItMatters:
        'Without src, the image cannot be loaded.',

      realWorldUseCase:
        'Displaying images from local folders, CDNs, and cloud storage.',

      commonMistakes: [
        'Broken image paths.',
        'Incorrect file names.',
        'Wrong folder structure.'
      ],

      bestPractices: [
        'Use meaningful file names.',
        'Organize images into dedicated folders.'
      ],

      seoConsiderations:
        'Descriptive image filenames improve image search visibility.',

      accessibilityConsiderations:
        'Combine src with meaningful alt text.',

      browserSupport:
        'Universal browser support.',

      example: {
        title: 'Image Source',
        code: `<img src="/images/team-photo.jpg" alt="Development team">`
      },

      exercise: {
        title: 'Image Paths',
        task:
          'Create images using both relative and absolute paths.'
      }
    },

    {
      title: 'alt Attribute',
      slug: 'alt-attribute',
      difficulty: 'Beginner',
      description:
        'The alt attribute provides alternative text describing an image when the image cannot be displayed or when assistive technologies are used.',

      whyItMatters:
        'Critical for accessibility and image SEO.',

      realWorldUseCase:
        'Screen reader support, broken image fallback, image indexing.',

      commonMistakes: [
        'Leaving alt empty unnecessarily.',
        'Keyword stuffing.',
        'Using generic descriptions.'
      ],

      bestPractices: [
        'Describe image purpose.',
        'Keep text concise.',
        'Use empty alt for decorative images.'
      ],

      seoConsiderations:
        'Alt text helps search engines understand image content.',

      accessibilityConsiderations:
        'Essential for visually impaired users.',

      browserSupport:
        'Supported everywhere.',

      example: {
        title: 'Accessible Image',
        code: `<img src="dog.jpg" alt="Golden Retriever running in a park">`
      },

      exercise: {
        title: 'Write Alt Text',
        task:
          'Add meaningful alt descriptions for ten different images.'
      }
    },

    {
      title: 'width Attribute',
      slug: 'width-attribute',
      difficulty: 'Beginner',
      description:
        'Defines the image width in pixels or CSS units.',

      whyItMatters:
        'Prevents layout shifts and improves page stability.',

      realWorldUseCase:
        'Product cards, galleries, profile images.',

      commonMistakes: [
        'Stretching images disproportionately.'
      ],

      bestPractices: [
        'Maintain aspect ratios.',
        'Use responsive CSS when appropriate.'
      ],

      seoConsiderations:
        'Proper dimensions improve Core Web Vitals.',

      accessibilityConsiderations:
        'No direct impact.',

      browserSupport:
        'Universal support.',

      example: {
        title: 'Width Example',
        code: `<img src="photo.jpg" alt="Landscape" width="400">`
      },

      exercise: {
        title: 'Image Sizing',
        task:
          'Display images at three different widths.'
      }
    },

    {
      title: 'height Attribute',
      slug: 'height-attribute',
      difficulty: 'Beginner',
      description:
        'Defines image height and reserves layout space before loading.',

      whyItMatters:
        'Reduces layout shifts and improves UX.',

      realWorldUseCase:
        'Blog images, thumbnails, banners.',

      commonMistakes: [
        'Distorting image proportions.'
      ],

      bestPractices: [
        'Maintain natural aspect ratio.'
      ],

      seoConsiderations:
        'Improves Core Web Vitals performance.',

      accessibilityConsiderations:
        'No direct impact.',

      browserSupport:
        'Supported everywhere.',

      example: {
        title: 'Height Example',
        code: `<img src="photo.jpg" alt="Landscape" height="300">`
      },

      exercise: {
        title: 'Dimension Control',
        task:
          'Add explicit width and height values to all images.'
      }
    },

    {
      title: 'title Attribute',
      slug: 'title-attribute',
      difficulty: 'Beginner',
      description:
        'Provides additional advisory information displayed as a tooltip in many browsers.',

      whyItMatters:
        'Can provide supplementary context.',

      realWorldUseCase:
        'Image galleries, product previews.',

      commonMistakes: [
        'Using title instead of alt text.'
      ],

      bestPractices: [
        'Use title as supplemental information only.'
      ],

      seoConsiderations:
        'Minimal SEO impact.',

      accessibilityConsiderations:
        'Should never replace alt text.',

      browserSupport:
        'Supported across browsers.',

      example: {
        title: 'Tooltip Example',
        code: `<img src="camera.jpg" alt="Professional camera" title="Canon EOS Camera">`
      },

      exercise: {
        title: 'Image Tooltips',
        task:
          'Add helpful title attributes to a gallery.'
      }
    },

    {
      title: 'Loading Images',
      slug: 'loading-images',
      difficulty: 'Beginner',
      description:
        'Understanding how browsers fetch, decode, and display images.',

      whyItMatters:
        'Impacts page speed and user experience.',

      realWorldUseCase:
        'News sites, ecommerce stores, media platforms.',

      commonMistakes: [
        'Loading huge files immediately.'
      ],

      bestPractices: [
        'Optimize images.',
        'Use lazy loading where appropriate.'
      ],

      seoConsiderations:
        'Fast loading pages rank better.',

      accessibilityConsiderations:
        'Ensure important content loads correctly.',

      browserSupport:
        'Supported universally.',

      example: {
        title: 'Basic Loading',
        code: `<img src="hero.jpg" alt="Hero image">`
      },

      exercise: {
        title: 'Performance Testing',
        task:
          'Measure loading times of different image sizes.'
      }
    },

    {
      title: 'Responsive Images',
      slug: 'responsive-images',
      difficulty: 'Intermediate',
      description:
        'Responsive images adapt to screen size, resolution, and device capabilities.',

      whyItMatters:
        'Improves mobile experience and performance.',

      realWorldUseCase:
        'Responsive ecommerce, blogs, SaaS websites.',

      commonMistakes: [
        'Serving desktop images to mobile devices.'
      ],

      bestPractices: [
        'Use srcset and sizes.'
      ],

      seoConsiderations:
        'Improves mobile-first indexing performance.',

      accessibilityConsiderations:
        'Maintain readability across devices.',

      browserSupport:
        'Supported by modern browsers.',

      example: {
        title: 'Responsive Image',
        code: `<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
  alt="Responsive image">`
      },

      exercise: {
        title: 'Mobile Optimization',
        task:
          'Create a responsive image setup using srcset.'
      }
    },

    {
      title: 'srcset Attribute',
      slug: 'srcset-attribute',
      difficulty: 'Intermediate',
      description:
        'Provides multiple image versions for different screen sizes and resolutions.',

      whyItMatters:
        'Reduces bandwidth usage and improves speed.',

      realWorldUseCase:
        'Responsive product catalogs and galleries.',

      commonMistakes: [
        'Incorrect width descriptors.'
      ],

      bestPractices: [
        'Provide properly optimized image variants.'
      ],

      seoConsiderations:
        'Improves page speed scores.',

      accessibilityConsiderations:
        'No direct impact.',

      browserSupport:
        'Modern browser support.',

      example: {
        title: 'srcset Example',
        code: `<img
  src="image-small.jpg"
  srcset="
    image-small.jpg 480w,
    image-medium.jpg 768w,
    image-large.jpg 1200w"
  alt="Responsive example">`
      },

      exercise: {
        title: 'Multiple Sizes',
        task:
          'Create three image versions and connect them using srcset.'
      }
    },

    {
      title: 'sizes Attribute',
      slug: 'sizes-attribute',
      difficulty: 'Intermediate',
      description:
        'Works with srcset to tell browsers the intended image display size.',

      whyItMatters:
        'Helps browsers choose the optimal image resource.',

      realWorldUseCase:
        'Responsive layouts and image-heavy sites.',

      commonMistakes: [
        'Using incorrect viewport calculations.'
      ],

      bestPractices: [
        'Match sizes to actual CSS layouts.'
      ],

      seoConsiderations:
        'Improves performance metrics.',

      accessibilityConsiderations:
        'No direct impact.',

      browserSupport:
        'Supported by modern browsers.',

      example: {
        title: 'sizes Example',
        code: `<img
  srcset="small.jpg 480w, large.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Responsive image">`
      },

      exercise: {
        title: 'Responsive Layout',
        task:
          'Configure sizes for mobile and desktop layouts.'
      }
    },

    {
      title: 'picture Element',
      slug: 'picture-element',
      difficulty: 'Intermediate',
      description:
        'Provides advanced responsive image delivery and art direction.',

      whyItMatters:
        'Allows different images for different devices.',

      realWorldUseCase:
        'Hero banners and responsive marketing pages.',

      commonMistakes: [
        'Missing fallback img element.'
      ],

      bestPractices: [
        'Always include a fallback image.'
      ],

      seoConsiderations:
        'Supports performance optimization.',

      accessibilityConsiderations:
        'Fallback image must include alt text.',

      browserSupport:
        'Modern browsers.',

      example: {
        title: 'Picture Example',
        code: `<picture>
  <source media="(max-width:768px)" srcset="mobile.jpg">
  <img src="desktop.jpg" alt="Hero banner">
</picture>`
      },

      exercise: {
        title: 'Art Direction',
        task:
          'Create separate mobile and desktop images using picture.'
      }
    },

    {
      title: 'source Element',
      slug: 'source-element',
      difficulty: 'Intermediate',
      description:
        'Defines alternative image sources within picture.',

      whyItMatters:
        'Supports responsive image selection.',

      realWorldUseCase:
        'Adaptive image delivery.',

      commonMistakes: [
        'Missing fallback image.'
      ],

      bestPractices: [
        'Combine with picture.'
      ],

      seoConsiderations:
        'Performance improvements support SEO.',

      accessibilityConsiderations:
        'Fallback image should contain alt text.',

      browserSupport:
        'Modern browsers.',

      example: {
        title: 'Source Example',
        code: `<source media="(max-width:600px)" srcset="mobile.jpg">`
      },

      exercise: {
        title: 'Responsive Source',
        task:
          'Create multiple source elements for different breakpoints.'
      }
    },

    {
      title: 'figure Element',
      slug: 'figure-element',
      difficulty: 'Beginner',
      description:
        'Represents self-contained media content such as images, diagrams, and illustrations.',

      whyItMatters:
        'Adds semantic meaning.',

      realWorldUseCase:
        'Articles, tutorials, documentation.',

      commonMistakes: [
        'Using figure without meaningful content.'
      ],

      bestPractices: [
        'Pair with figcaption.'
      ],

      seoConsiderations:
        'Improves content structure.',

      accessibilityConsiderations:
        'Supports contextual understanding.',

      browserSupport:
        'Universal support.',

      example: {
        title: 'Figure Example',
        code: `<figure>
  <img src="chart.png" alt="Sales chart">
</figure>`
      },

      exercise: {
        title: 'Article Figure',
        task:
          'Add a figure element to a blog article.'
      }
    },

    {
      title: 'figcaption Element',
      slug: 'figcaption-element',
      difficulty: 'Beginner',
      description:
        'Provides captions for figures.',

      whyItMatters:
        'Adds context and improves comprehension.',

      realWorldUseCase:
        'Photography sites, reports, educational content.',

      commonMistakes: [
        'Using captions unrelated to the image.'
      ],

      bestPractices: [
        'Keep captions concise and informative.'
      ],

      seoConsiderations:
        'Adds supporting contextual content.',

      accessibilityConsiderations:
        'Improves image understanding.',

      browserSupport:
        'Fully supported.',

      example: {
        title: 'Caption Example',
        code: `<figure>
  <img src="mountain.jpg" alt="Mountain landscape">
  <figcaption>Sunrise over the Alps.</figcaption>
</figure>`
      },

      exercise: {
        title: 'Image Gallery',
        task:
          'Create a gallery where every image has a caption.'
      }
    },

    {
      title: 'Image Formats (JPEG, PNG, GIF, SVG, WebP, AVIF)',
      slug: 'image-formats',
      difficulty: 'Intermediate',
      description:
        'Understanding modern image formats and when to use each one.',

      whyItMatters:
        'Choosing the correct format impacts quality and performance.',

      realWorldUseCase:
        'Logos, photography, animations, ecommerce images.',

      commonMistakes: [
        'Using PNG for large photos.',
        'Using JPEG for transparent graphics.'
      ],

      bestPractices: [
        'JPEG for photos.',
        'PNG for transparency.',
        'SVG for icons.',
        'WebP and AVIF for performance.'
      ],

      seoConsiderations:
        'Modern formats improve page speed.',

      accessibilityConsiderations:
        'No direct impact.',

      browserSupport:
        'WebP widely supported, AVIF supported in modern browsers.',

      example: {
        title: 'Modern Format',
        code: `<img src="product.webp" alt="Product image">`
      },

      exercise: {
        title: 'Format Comparison',
        task:
          'Compare file sizes across JPEG, PNG, WebP, and AVIF.'
      }
    },

    {
      title: 'Lazy Loading',
      slug: 'lazy-loading-images',
      difficulty: 'Intermediate',
      description:
        'Delays loading images until they are near the viewport.',

      whyItMatters:
        'Improves page speed and reduces bandwidth usage.',

      realWorldUseCase:
        'Image galleries, ecommerce catalogs, blogs.',

      commonMistakes: [
        'Lazy loading above-the-fold images.'
      ],

      bestPractices: [
        'Lazy load off-screen content.'
      ],

      seoConsiderations:
        'Improves Core Web Vitals.',

      accessibilityConsiderations:
        'Ensure content remains accessible.',

      browserSupport:
        'Supported by modern browsers.',

      example: {
        title: 'Lazy Loading',
        code: `<img
  src="gallery.jpg"
  alt="Gallery image"
  loading="lazy">`
      },

      exercise: {
        title: 'Optimize Gallery',
        task:
          'Apply lazy loading to a gallery containing twenty images.'
      }
    },

    {
      title: 'Image Optimization',
      slug: 'image-optimization',
      difficulty: 'Intermediate',
      description:
        'Reducing image size without sacrificing quality.',

      whyItMatters:
        'Improves performance and user experience.',

      realWorldUseCase:
        'Every production website.',

      commonMistakes: [
        'Uploading images directly from cameras.'
      ],

      bestPractices: [
        'Compress images before deployment.'
      ],

      seoConsiderations:
        'Page speed influences rankings.',

      accessibilityConsiderations:
        'Maintain adequate image quality.',

      browserSupport:
        'Universal.',

      example: {
        title: 'Optimized WebP',
        code: `<img src="optimized.webp" alt="Optimized image">`
      },

      exercise: {
        title: 'Compression Test',
        task:
          'Optimize five images and compare file sizes.'
      }
    },

    {
      title: 'Responsive Design Techniques',
      slug: 'responsive-image-techniques',
      difficulty: 'Intermediate',
      description:
        'Techniques for ensuring images adapt to all screen sizes.',

      whyItMatters:
        'Mobile traffic dominates the modern web.',

      realWorldUseCase:
        'Responsive ecommerce and SaaS websites.',

      commonMistakes: [
        'Fixed-width images.'
      ],

      bestPractices: [
        'Use max-width: 100%.'
      ],

      seoConsiderations:
        'Supports mobile-first indexing.',

      accessibilityConsiderations:
        'Prevent content overflow.',

      browserSupport:
        'Universal.',

      example: {
        title: 'Responsive CSS',
        code: `img {
  max-width: 100%;
  height: auto;
}
`
      },

      exercise: {
        title: 'Mobile Layout',
        task:
          'Make all images responsive on mobile devices.'
      }
    },

    {
      title: 'Retina Images',
      slug: 'retina-images',
      difficulty: 'Intermediate',
      description:
        'High-density images optimized for modern displays.',

      whyItMatters:
        'Improves visual quality on Retina and high-DPI devices.',

      realWorldUseCase:
        'Premium brands, portfolios, photography websites.',

      commonMistakes: [
        'Serving overly large files.'
      ],

      bestPractices: [
        'Use srcset density descriptors.'
      ],

      seoConsiderations:
        'Balance quality and performance.',

      accessibilityConsiderations:
        'No direct impact.',

      browserSupport:
        'Supported through srcset.',

      example: {
        title: 'Retina Support',
        code: `<img
  src="logo.png"
  srcset="logo.png 1x, logo@2x.png 2x"
  alt="Company logo">`
      },

      exercise: {
        title: 'High-DPI Assets',
        task:
          'Create Retina versions for website logos.'
      }
    },

    {
      title: 'Background Images vs HTML Images',
      slug: 'background-images-vs-html-images',
      difficulty: 'Intermediate',
      description:
        'Understanding when to use CSS background images versus HTML image elements.',

      whyItMatters:
        'Improves semantics, accessibility, and maintainability.',

      realWorldUseCase:
        'Hero sections, banners, decorative graphics.',

      commonMistakes: [
        'Using CSS backgrounds for important content.'
      ],

      bestPractices: [
        'Use HTML images for meaningful content.'
      ],

      seoConsiderations:
        'Search engines understand img content better.',

      accessibilityConsiderations:
        'Screen readers cannot interpret CSS background images.',

      browserSupport:
        'Universal.',

      example: {
        title: 'Content Image',
        code: `<img src="product.jpg" alt="Running shoes">`
      },

      exercise: {
        title: 'Content Audit',
        task:
          'Identify which images should be HTML images and which should be CSS backgrounds.'
      }
    },

    {
      title: 'Accessibility for Images',
      slug: 'image-accessibility',
      difficulty: 'Intermediate',
      description:
        'Making images usable for all users, including those using assistive technologies.',

      whyItMatters:
        'Accessibility is a legal and ethical requirement.',

      realWorldUseCase:
        'Government, education, healthcare, ecommerce.',

      commonMistakes: [
        'Missing alt text.',
        'Keyword-stuffed descriptions.'
      ],

      bestPractices: [
        'Provide meaningful alternatives.',
        'Use empty alt for decorative images.'
      ],

      seoConsiderations:
        'Alt text supports image search visibility.',

      accessibilityConsiderations:
        'Essential for screen reader users.',

      browserSupport:
        'Universal.',

      example: {
        title: 'Accessible Image',
        code: `<img
  src="doctor.jpg"
  alt="Doctor speaking with a patient">`
      },

      exercise: {
        title: 'Accessibility Review',
        task:
          'Audit ten images and improve their accessibility.'
      }
    },

    {
      title: 'SEO for Images',
      slug: 'image-seo',
      difficulty: 'Intermediate',
      description:
        'Optimizing images for search engines and image search visibility.',

      whyItMatters:
        'Images can generate additional organic traffic.',

      realWorldUseCase:
        'Blogs, ecommerce stores, recipe websites.',

      commonMistakes: [
        'Generic file names.',
        'Missing alt text.'
      ],

      bestPractices: [
        'Use descriptive filenames.',
        'Compress images.',
        'Provide alt text.'
      ],

      seoConsiderations:
        'Strong impact on image search rankings.',

      accessibilityConsiderations:
        'SEO and accessibility benefit from quality alt text.',

      browserSupport:
        'Universal.',

      example: {
        title: 'SEO-Friendly Image',
        code: `<img
  src="blue-running-shoes.webp"
  alt="Blue running shoes for men">`
      },

      exercise: {
        title: 'SEO Optimization',
        task:
          'Optimize filenames and alt text for a product gallery.'
      }
    },

    {
      title: 'Image Performance Optimization',
      slug: 'image-performance-optimization',
      difficulty: 'Advanced',
      description:
        'Advanced techniques for delivering high-performance image experiences.',

      whyItMatters:
        'Images are often the largest page assets.',

      realWorldUseCase:
        'Large-scale ecommerce and media platforms.',

      commonMistakes: [
        'Ignoring image compression.'
      ],

      bestPractices: [
        'Use WebP.',
        'Use AVIF.',
        'Lazy load.',
        'Use responsive images.'
      ],

      seoConsiderations:
        'Core Web Vitals depend heavily on image optimization.',

      accessibilityConsiderations:
        'Performance benefits all users.',

      browserSupport:
        'Modern browser support.',

      example: {
        title: 'Optimized Image',
        code: `<img
  src="hero.avif"
  loading="lazy"
  width="1200"
  height="800"
  alt="Modern SaaS dashboard">`
      },

      exercise: {
        title: 'Performance Audit',
        task:
          'Improve image performance score on an existing webpage.'
      }
    },

    {
      title: 'Common Image Mistakes',
      slug: 'common-image-mistakes',
      difficulty: 'Beginner',
      description:
        'Common issues developers encounter when working with images.',

      whyItMatters:
        'Avoiding mistakes improves quality and performance.',

      realWorldUseCase:
        'All websites.',

      commonMistakes: [
        'Missing alt text.',
        'Huge image files.',
        'Wrong format selection.',
        'Broken paths.',
        'Missing dimensions.'
      ],

      bestPractices: [
        'Audit image implementation regularly.'
      ],

      seoConsiderations:
        'Poor image practices harm rankings.',

      accessibilityConsiderations:
        'Many image mistakes affect accessibility.',

      browserSupport:
        'Universal.',

      example: {
        title: 'Correct Implementation',
        code: `<img
  src="product.webp"
  alt="Wireless headphones"
  width="400"
  height="400"
  loading="lazy">`
      },

      exercise: {
        title: 'Error Detection',
        task:
          'Find and fix five image implementation mistakes.'
      }
    },

    {
      title: 'Image Best Practices',
      slug: 'image-best-practices',
      difficulty: 'Intermediate',
      description:
        'A complete summary of professional image implementation standards.',

      whyItMatters:
        'Combines performance, accessibility, SEO, and maintainability.',

      realWorldUseCase:
        'Production websites.',

      commonMistakes: [
        'Ignoring performance audits.'
      ],

      bestPractices: [
        'Use modern formats.',
        'Provide alt text.',
        'Optimize file sizes.',
        'Use responsive images.',
        'Specify dimensions.',
        'Apply lazy loading.'
      ],

      seoConsiderations:
        'Supports image search visibility and Core Web Vitals.',

      accessibilityConsiderations:
        'Ensures inclusive user experiences.',

      browserSupport:
        'Compatible with all modern browsers.',

      example: {
        title: 'Production Ready Image',
        code: `<img
  src="product.webp"
  alt="Wireless noise cancelling headphones"
  width="600"
  height="600"
  loading="lazy">`
      },

      exercise: {
        title: 'Production Checklist',
        task:
          'Build an image gallery following all image best practices.'
      }
    }
  ]
}

export const htmlFormsSection = {
  title: 'HTML Forms',
  slug: 'html-forms',
  difficulty: 'Beginner',

  description:
    'Master HTML forms from basic data collection to advanced validation, accessibility, security, and user experience optimization. Learn how to create professional forms used in modern web applications, ecommerce platforms, SaaS products, and enterprise systems.',

  topics: [
    {
      title: 'Introduction to Forms',
      slug: 'introduction-to-forms',
      difficulty: 'Beginner',
      description:
        'HTML forms collect user input and send data to servers for processing. Forms power registrations, logins, contact pages, checkout systems, surveys, bookings, and countless web interactions.',
      realWorldScenario:
        'A user completes a registration form to create an account on an ecommerce website.',
      commonMistakes: [
        'Missing labels.',
        'Poor field organization.',
        'Collecting unnecessary information.'
      ],
      bestPractices: [
        'Keep forms simple.',
        'Use clear labels.',
        'Group related fields.'
      ],
      accessibilityNotes:
        'Every form control should have an accessible label.',
      seoNotes:
        'Well-structured forms improve user experience and engagement metrics.',
      example: {
        title: 'Basic Form',
        code: `<form>
  <label for="name">Name</label>
  <input type="text" id="name">
</form>`
      },
      exercise: {
        title: 'Contact Form',
        task: 'Create a basic contact form with name and email fields.'
      }
    },

    {
      title: 'form Element',
      slug: 'form-element',
      difficulty: 'Beginner',
      description:
        'The form element acts as a container for collecting and submitting user data.',
      realWorldScenario:
        'A checkout page wraps billing and shipping inputs inside a form.',
      commonMistakes: [
        'Placing fields outside the form element.'
      ],
      bestPractices: [
        'Wrap all related controls inside a form.'
      ],
      accessibilityNotes:
        'Use semantic grouping within forms.',
      seoNotes:
        'No direct SEO impact but improves UX.',
      example: {
        title: 'Form Container',
        code: `<form>
  <input type="text">
</form>`
      },
      exercise: {
        title: 'Create Form Container',
        task: 'Build a registration form using a form element.'
      }
    },

    {
      title: 'action Attribute',
      slug: 'form-action-attribute',
      difficulty: 'Beginner',
      description:
        'The action attribute specifies where form data is submitted.',
      realWorldScenario:
        'Submitting a login form to an authentication endpoint.',
      commonMistakes: [
        'Using incorrect URLs.'
      ],
      bestPractices: [
        'Use valid server endpoints.'
      ],
      accessibilityNotes:
        'No direct accessibility impact.',
      seoNotes:
        'No direct SEO impact.',
      example: {
        title: 'Action Example',
        code: `<form action="/submit-form">
</form>`
      },
      exercise: {
        title: 'Action Practice',
        task: 'Create a form with a custom action URL.'
      }
    },

    {
      title: 'method Attribute',
      slug: 'form-method-attribute',
      difficulty: 'Beginner',
      description:
        'Defines how form data is sent to the server using GET or POST.',
      realWorldScenario:
        'Search forms use GET while registration forms use POST.',
      commonMistakes: [
        'Using GET for sensitive information.'
      ],
      bestPractices: [
        'Choose the appropriate HTTP method.'
      ],
      accessibilityNotes:
        'No direct accessibility impact.',
      seoNotes:
        'Search forms commonly use GET for shareable URLs.',
      example: {
        title: 'Method Example',
        code: `<form method="post">
</form>`
      },
      exercise: {
        title: 'Method Selection',
        task: 'Create forms using both GET and POST methods.'
      }
    },

    {
      title: 'GET Method',
      slug: 'get-method',
      difficulty: 'Beginner',
      description:
        'GET appends form data to the URL and is commonly used for searches and filtering.',
      realWorldScenario:
        'Search engines and product filters.',
      commonMistakes: [
        'Using GET for passwords.'
      ],
      bestPractices: [
        'Use GET only for non-sensitive data.'
      ],
      accessibilityNotes:
        'No direct impact.',
      seoNotes:
        'URLs generated by GET requests can be indexed.',
      example: {
        title: 'GET Form',
        code: `<form method="get">
  <input type="search" name="query">
</form>`
      },
      exercise: {
        title: 'Search Form',
        task: 'Create a search form using GET.'
      }
    },

    {
      title: 'POST Method',
      slug: 'post-method',
      difficulty: 'Beginner',
      description:
        'POST sends data within the request body and is used for sensitive or large data submissions.',
      realWorldScenario:
        'User registration and checkout forms.',
      commonMistakes: [
        'Using GET for confidential information.'
      ],
      bestPractices: [
        'Use POST for sensitive data.'
      ],
      accessibilityNotes:
        'No direct impact.',
      seoNotes:
        'POST requests are generally not indexable.',
      example: {
        title: 'POST Form',
        code: `<form method="post">
  <input type="password">
</form>`
      },
      exercise: {
        title: 'Registration Form',
        task: 'Create a registration form using POST.'
      }
    },

    {
      title: 'Input Element Overview',
      slug: 'input-overview',
      difficulty: 'Beginner',
      description:
        'The input element creates interactive controls for collecting user information.',
      realWorldScenario:
        'Forms across all websites.',
      commonMistakes: [
        'Using incorrect input types.'
      ],
      bestPractices: [
        'Select the most appropriate input type.'
      ],
      accessibilityNotes:
        'Always associate labels.',
      seoNotes:
        'Improves user experience.',
      example: {
        title: 'Input Example',
        code: `<input type="text">`
      },
      exercise: {
        title: 'Input Collection',
        task: 'Create one input of each common type.'
      }
    },

    {
      title: 'Input Type: text',
      slug: 'input-type-text',
      difficulty: 'Beginner',
      description:
        'Collects general text input from users.',
      example: {
        title: 'Text Input',
        code: `<input type="text" name="fullname">`
      },
      exercise: {
        title: 'Full Name Field',
        task: 'Create a full name input.'
      }
    },

    {
      title: 'Input Type: password',
      slug: 'input-type-password',
      difficulty: 'Beginner',
      description:
        'Masks entered characters for secure password entry.',
      example: {
        title: 'Password Input',
        code: `<input type="password" name="password">`
      },
      exercise: {
        title: 'Login Form',
        task: 'Add a password field to a login form.'
      }
    },

    {
      title: 'Input Type: email',
      slug: 'input-type-email',
      difficulty: 'Beginner',
      description:
        'Validates email addresses automatically.',
      example: {
        title: 'Email Input',
        code: `<input type="email" name="email">`
      },
      exercise: {
        title: 'Email Collection',
        task: 'Create an email signup field.'
      }
    },

    {
      title: 'Input Type: tel',
      slug: 'input-type-tel',
      difficulty: 'Beginner',
      description:
        'Collects telephone numbers and improves mobile keyboard layouts.',
      example: {
        title: 'Telephone Input',
        code: `<input type="tel" name="phone">`
      },
      exercise: {
        title: 'Contact Form',
        task: 'Add a telephone number field.'
      }
    },

    {
      title: 'Input Type: url',
      slug: 'input-type-url',
      difficulty: 'Beginner',
      description:
        'Collects website addresses.',
      example: {
        title: 'URL Input',
        code: `<input type="url" name="website">`
      },
      exercise: {
        title: 'Portfolio Submission',
        task: 'Collect portfolio URLs.'
      }
    },

    {
      title: 'Input Type: search',
      slug: 'input-type-search',
      difficulty: 'Beginner',
      description:
        'Designed specifically for search functionality.',
      example: {
        title: 'Search Input',
        code: `<input type="search" name="search">`
      },
      exercise: {
        title: 'Search Box',
        task: 'Create a website search field.'
      }
    },

    {
      title: 'Input Type: number',
      slug: 'input-type-number',
      difficulty: 'Beginner',
      description:
        'Restricts input to numerical values.',
      example: {
        title: 'Number Input',
        code: `<input type="number" min="1" max="100">`
      },
      exercise: {
        title: 'Age Field',
        task: 'Create an age input.'
      }
    },

    {
      title: 'Input Type: range',
      slug: 'input-type-range',
      difficulty: 'Beginner',
      description:
        'Creates a slider control.',
      example: {
        title: 'Range Input',
        code: `<input type="range" min="0" max="100">`
      },
      exercise: {
        title: 'Rating Slider',
        task: 'Build a satisfaction rating slider.'
      }
    },

    {
      title: 'Input Type: color',
      slug: 'input-type-color',
      difficulty: 'Beginner',
      description:
        'Provides a color picker interface.',
      example: {
        title: 'Color Picker',
        code: `<input type="color">`
      },
      exercise: {
        title: 'Theme Selector',
        task: 'Allow users to choose a theme color.'
      }
    },

    {
      title: 'Input Type: date',
      slug: 'input-type-date',
      difficulty: 'Beginner',
      description:
        'Allows users to select dates.',
      example: {
        title: 'Date Input',
        code: `<input type="date">`
      },
      exercise: {
        title: 'Birthday Field',
        task: 'Collect a date of birth.'
      }
    },

    {
      title: 'Input Type: datetime-local',
      slug: 'input-type-datetime-local',
      difficulty: 'Intermediate',
      description:
        'Collects date and time values together.',
      example: {
        title: 'Date Time Input',
        code: `<input type="datetime-local">`
      },
      exercise: {
        title: 'Appointment Booking',
        task: 'Collect appointment date and time.'
      }
    },

    {
      title: 'Input Type: month',
      slug: 'input-type-month',
      difficulty: 'Beginner',
      description:
        'Allows month and year selection.',
      example: {
        title: 'Month Input',
        code: `<input type="month">`
      },
      exercise: {
        title: 'Subscription Month',
        task: 'Collect a preferred month.'
      }
    },

    {
      title: 'Input Type: week',
      slug: 'input-type-week',
      difficulty: 'Intermediate',
      description:
        'Allows week selection.',
      example: {
        title: 'Week Input',
        code: `<input type="week">`
      },
      exercise: {
        title: 'Schedule Week',
        task: 'Collect a project week.'
      }
    },

    {
      title: 'Input Type: time',
      slug: 'input-type-time',
      difficulty: 'Beginner',
      description:
        'Allows time selection.',
      example: {
        title: 'Time Input',
        code: `<input type="time">`
      },
      exercise: {
        title: 'Meeting Time',
        task: 'Collect a meeting time.'
      }
    },

    {
      title: 'Input Type: checkbox',
      slug: 'input-type-checkbox',
      difficulty: 'Beginner',
      description:
        'Allows multiple selections.',
      example: {
        title: 'Checkbox',
        code: `<input type="checkbox">`
      },
      exercise: {
        title: 'Interests Form',
        task: 'Create multiple interest checkboxes.'
      }
    },

    {
      title: 'Input Type: radio',
      slug: 'input-type-radio',
      difficulty: 'Beginner',
      description:
        'Allows selecting one option from a group.',
      example: {
        title: 'Radio Button',
        code: `<input type="radio" name="gender">`
      },
      exercise: {
        title: 'Single Choice',
        task: 'Create a payment method selection.'
      }
    },

    {
      title: 'Input Type: file',
      slug: 'input-type-file',
      difficulty: 'Beginner',
      description:
        'Allows users to upload files.',
      example: {
        title: 'File Upload',
        code: `<input type="file">`
      },
      exercise: {
        title: 'Resume Upload',
        task: 'Create a resume upload form.'
      }
    },

    {
      title: 'Input Type: hidden',
      slug: 'input-type-hidden',
      difficulty: 'Intermediate',
      description:
        'Stores data invisible to users.',
      example: {
        title: 'Hidden Field',
        code: `<input type="hidden" value="123">`
      },
      exercise: {
        title: 'Tracking Data',
        task: 'Store a hidden form value.'
      }
    },

    {
      title: 'Input Type: image',
      slug: 'input-type-image',
      difficulty: 'Intermediate',
      description:
        'Uses an image as a submit button.',
      example: {
        title: 'Image Button',
        code: `<input type="image" src="submit.png" alt="Submit">`
      },
      exercise: {
        title: 'Custom Submit',
        task: 'Create an image submit button.'
      }
    },

    {
      title: 'Input Type: submit',
      slug: 'input-type-submit',
      difficulty: 'Beginner',
      description:
        'Submits form data.',
      example: {
        title: 'Submit Button',
        code: `<input type="submit" value="Submit">`
      },
      exercise: {
        title: 'Submit Form',
        task: 'Add a submit button to a form.'
      }
    },

    {
      title: 'Input Type: reset',
      slug: 'input-type-reset',
      difficulty: 'Beginner',
      description:
        'Resets form fields.',
      example: {
        title: 'Reset Button',
        code: `<input type="reset">`
      },
      exercise: {
        title: 'Reset Form',
        task: 'Add a reset control.'
      }
    },

    {
      title: 'Input Type: button',
      slug: 'input-type-button',
      difficulty: 'Beginner',
      description:
        'Creates a generic clickable button.',
      example: {
        title: 'Button Input',
        code: `<input type="button" value="Click Me">`
      },
      exercise: {
        title: 'Custom Action',
        task: 'Create a custom action button.'
      }
    },

    {
      title: 'textarea',
      slug: 'textarea-element',
      difficulty: 'Beginner',
      description:
        'Collects multi-line text input.',
      example: {
        title: 'Textarea',
        code: `<textarea rows="5"></textarea>`
      },
      exercise: {
        title: 'Feedback Form',
        task: 'Create a comments section.'
      }
    },

    {
      title: 'select, option and optgroup',
      slug: 'select-option-optgroup',
      difficulty: 'Beginner',
      description:
        'Creates dropdown menus and grouped choices.',
      example: {
        title: 'Dropdown',
        code: `<select>
  <optgroup label="Europe">
    <option>UK</option>
  </optgroup>
</select>`
      },
      exercise: {
        title: 'Country Selector',
        task: 'Create a grouped country dropdown.'
      }
    },

    {
      title: 'datalist',
      slug: 'datalist-element',
      difficulty: 'Intermediate',
      description:
        'Provides autocomplete suggestions.',
      example: {
        title: 'Datalist',
        code: `<input list="cities">
<datalist id="cities">
  <option value="London">
</datalist>`
      },
      exercise: {
        title: 'Autocomplete',
        task: 'Create city suggestions.'
      }
    },

    {
      title: 'button Element',
      slug: 'button-element',
      difficulty: 'Beginner',
      description:
        'Creates interactive buttons.',
      example: {
        title: 'Button',
        code: `<button type="submit">Save</button>`
      },
      exercise: {
        title: 'Action Buttons',
        task: 'Create submit and reset buttons.'
      }
    },

    {
      title: 'label Element',
      slug: 'label-element',
      difficulty: 'Beginner',
      description:
        'Associates text labels with form controls.',
      example: {
        title: 'Label',
        code: `<label for="email">Email</label>`
      },
      exercise: {
        title: 'Accessible Labels',
        task: 'Label every field in a form.'
      }
    },

    {
      title: 'fieldset and legend',
      slug: 'fieldset-and-legend',
      difficulty: 'Beginner',
      description:
        'Groups related form controls.',
      example: {
        title: 'Fieldset',
        code: `<fieldset>
  <legend>Personal Details</legend>
</fieldset>`
      },
      exercise: {
        title: 'Grouped Inputs',
        task: 'Group contact information fields.'
      }
    },

    {
      title: 'output',
      slug: 'output-element',
      difficulty: 'Intermediate',
      description:
        'Displays calculation results.',
      example: {
        title: 'Output',
        code: `<output>100</output>`
      },
      exercise: {
        title: 'Calculator Result',
        task: 'Display a calculated value.'
      }
    },

    {
      title: 'meter',
      slug: 'meter-element',
      difficulty: 'Intermediate',
      description:
        'Represents measurements within a known range.',
      example: {
        title: 'Meter',
        code: `<meter value="0.7">70%</meter>`
      },
      exercise: {
        title: 'Skill Meter',
        task: 'Display skill percentages.'
      }
    },

    {
      title: 'progress',
      slug: 'progress-element',
      difficulty: 'Intermediate',
      description:
        'Represents task completion progress.',
      example: {
        title: 'Progress Bar',
        code: `<progress value="50" max="100"></progress>`
      },
      exercise: {
        title: 'Upload Progress',
        task: 'Display upload progress.'
      }
    },

    {
      title: 'Validation Attributes',
      slug: 'validation-attributes',
      difficulty: 'Intermediate',
      description:
        'required, minlength, maxlength, pattern, readonly, disabled, autocomplete, autofocus, placeholder, and multiple provide built-in validation and behavior controls.',
      example: {
        title: 'Validation Example',
        code: `<input
  required
  minlength="3"
  maxlength="20"
  placeholder="Username">`
      },
      exercise: {
        title: 'Validated Form',
        task: 'Create a validated registration form.'
      }
    },

    {
      title: 'Form Validation',
      slug: 'form-validation',
      difficulty: 'Intermediate',
      description:
        'Ensures user data is complete and correctly formatted before submission.',
      example: {
        title: 'Required Email',
        code: `<input type="email" required>`
      },
      exercise: {
        title: 'Validation Rules',
        task: 'Validate all required fields.'
      }
    },

    {
      title: 'Client Side Validation',
      slug: 'client-side-validation',
      difficulty: 'Intermediate',
      description:
        'Uses browser validation before submission.',
      example: {
        title: 'Pattern Validation',
        code: `<input pattern="[A-Za-z]{3,}">`
      },
      exercise: {
        title: 'Custom Rules',
        task: 'Apply validation patterns.'
      }
    },

    {
      title: 'Accessibility in Forms',
      slug: 'form-accessibility',
      difficulty: 'Intermediate',
      description:
        'Creates forms that are usable by everyone including screen reader and keyboard users.',
      example: {
        title: 'Accessible Input',
        code: `<label for="name">Name</label>
<input id="name">`
      },
      exercise: {
        title: 'Accessibility Audit',
        task: 'Improve form accessibility.'
      }
    },

    {
      title: 'Mobile Friendly Forms',
      slug: 'mobile-friendly-forms',
      difficulty: 'Intermediate',
      description:
        'Optimizes forms for smartphones and tablets.',
      example: {
        title: 'Mobile Keyboard',
        code: `<input type="tel">`
      },
      exercise: {
        title: 'Responsive Form',
        task: 'Create a mobile-friendly form.'
      }
    },

    {
      title: 'Security Best Practices',
      slug: 'form-security',
      difficulty: 'Advanced',
      description:
        'Protects forms against misuse, attacks, and sensitive data exposure.',
      example: {
        title: 'Secure Password Field',
        code: `<input type="password" autocomplete="new-password">`
      },
      exercise: {
        title: 'Security Review',
        task: 'Identify security risks in a form.'
      }
    },

    {
      title: 'UX Best Practices',
      slug: 'form-ux-best-practices',
      difficulty: 'Intermediate',
      description:
        'Improves usability, completion rates, and user satisfaction.',
      example: {
        title: 'Helpful Placeholder',
        code: `<input placeholder="Enter your email">`
      },
      exercise: {
        title: 'UX Improvement',
        task: 'Redesign a long form for better usability.'
      }
    },

    {
      title: 'SEO Considerations for Forms',
      slug: 'form-seo-considerations',
      difficulty: 'Intermediate',
      description:
        'Ensures forms support user engagement and search visibility.',
      example: {
        title: 'Lead Generation Form',
        code: `<form>
  <input type="email">
</form>`
      },
      exercise: {
        title: 'SEO-Friendly Form',
        task: 'Build a lead capture form.'
      }
    },

    {
      title: 'Form Performance',
      slug: 'form-performance',
      difficulty: 'Advanced',
      description:
        'Optimizing forms for speed and responsiveness.',
      example: {
        title: 'Efficient Form',
        code: `<form autocomplete="on"></form>`
      },
      exercise: {
        title: 'Performance Audit',
        task: 'Optimize a large form.'
      }
    },

    {
      title: 'Common Form Mistakes',
      slug: 'common-form-mistakes',
      difficulty: 'Beginner',
      description:
        'Learn common errors developers make when building forms.',
      example: {
        title: 'Missing Label',
        code: `<input type="email">`
      },
      exercise: {
        title: 'Mistake Detection',
        task: 'Find and fix form issues.'
      }
    },

    {
      title: 'HTML Form Best Practices',
      slug: 'html-form-best-practices',
      difficulty: 'Intermediate',
      description:
        'Production-ready guidelines for building accessible, secure, and user-friendly forms.',
      example: {
        title: 'Best Practice Form',
        code: `<label for="email">Email</label>
<input
  id="email"
  type="email"
  required
  autocomplete="email">`
      },
      exercise: {
        title: 'Production Form',
        task: 'Build a complete professional registration form.'
      }
    }
  ]
}

export const htmlSemanticElementsSection = {
  title: 'HTML Semantic Elements',
  slug: 'html-semantic-elements',
  difficulty: 'Beginner',

  description:
    'Learn how semantic HTML improves website structure, accessibility, maintainability, SEO performance, screen reader compatibility, and search engine understanding. Master modern HTML5 semantic elements used in professional websites, blogs, SaaS applications, ecommerce stores, documentation platforms, and enterprise web applications.',

  topics: [
    {
      title: 'Introduction to Semantic HTML',
      slug: 'introduction-to-semantic-html',
      difficulty: 'Beginner',
      description:
        'Semantic HTML uses meaningful elements that clearly describe the purpose and structure of content. Unlike generic containers, semantic elements communicate meaning to browsers, search engines, developers, and assistive technologies.',
      whyItExists:
        'To create meaningful, understandable, and accessible web content.',
      realWorldUseCase:
        'Modern websites use semantic elements to organize navigation, articles, content sections, and page layouts.',
      seoBenefits:
        'Improves search engine understanding of content hierarchy and page structure.',
      accessibilityBenefits:
        'Provides better navigation for screen readers and assistive technologies.',
      commonMistakes: [
        'Using div elements for everything.',
        'Ignoring semantic meaning.',
        'Creating unclear document structures.'
      ],
      bestPractices: [
        'Choose elements based on meaning.',
        'Use semantic layout patterns.',
        'Avoid unnecessary div wrappers.'
      ],
      example: {
        title: 'Basic Semantic Structure',
        code: `<header>Website Header</header>
<main>
  <article>Main Content</article>
</main>
<footer>Website Footer</footer>`
      },
      exercise: {
        title: 'Convert Div Layout',
        task:
          'Replace a div-based webpage structure with semantic HTML elements.'
      }
    },

    {
      title: 'header Element',
      slug: 'header-element',
      difficulty: 'Beginner',
      description:
        'Represents introductory content for a page or section and commonly contains logos, branding, navigation, and headings.',
      whyItExists:
        'Provides a dedicated semantic container for introductory content.',
      realWorldUseCase:
        'Website headers containing logos and navigation menus.',
      seoBenefits:
        'Helps search engines identify important introductory content.',
      accessibilityBenefits:
        'Improves navigation landmarks for assistive technologies.',
      commonMistakes: [
        'Using multiple unrelated headers incorrectly.'
      ],
      bestPractices: [
        'Include branding and navigation where appropriate.'
      ],
      example: {
        title: 'Website Header',
        code: `<header>
  <h1>My Website</h1>
</header>`
      },
      exercise: {
        title: 'Create Header',
        task:
          'Build a website header containing a logo and heading.'
      }
    },

    {
      title: 'nav Element',
      slug: 'nav-element',
      difficulty: 'Beginner',
      description:
        'Represents a section containing major navigation links.',
      whyItExists:
        'Identifies primary navigation areas.',
      realWorldUseCase:
        'Main menus, sidebar navigation, footer navigation.',
      seoBenefits:
        'Helps search engines understand site structure.',
      accessibilityBenefits:
        'Screen readers can quickly locate navigation areas.',
      commonMistakes: [
        'Wrapping every link in a nav element.'
      ],
      bestPractices: [
        'Use nav only for major navigation sections.'
      ],
      example: {
        title: 'Navigation Menu',
        code: `<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>`
      },
      exercise: {
        title: 'Build Navigation',
        task:
          'Create a navigation menu with five links.'
      }
    },

    {
      title: 'main Element',
      slug: 'main-element',
      difficulty: 'Beginner',
      description:
        'Represents the primary content area of a document.',
      whyItExists:
        'Identifies the most important content on a page.',
      realWorldUseCase:
        'Blog content, product information, documentation pages.',
      seoBenefits:
        'Helps search engines identify primary page content.',
      accessibilityBenefits:
        'Allows screen reader users to skip repetitive content.',
      commonMistakes: [
        'Using multiple main elements.'
      ],
      bestPractices: [
        'Only use one main element per page.'
      ],
      example: {
        title: 'Main Content',
        code: `<main>
  <h1>Article Title</h1>
</main>`
      },
      exercise: {
        title: 'Page Layout',
        task:
          'Add a main content area to a webpage.'
      }
    },

    {
      title: 'section Element',
      slug: 'section-element',
      difficulty: 'Beginner',
      description:
        'Represents a thematic grouping of content.',
      whyItExists:
        'Organizes content into logical sections.',
      realWorldUseCase:
        'Features sections, services sections, FAQ areas.',
      seoBenefits:
        'Improves content organization and hierarchy.',
      accessibilityBenefits:
        'Creates meaningful document structure.',
      commonMistakes: [
        'Using section instead of div without thematic grouping.'
      ],
      bestPractices: [
        'Include headings inside sections.'
      ],
      example: {
        title: 'Content Section',
        code: `<section>
  <h2>Services</h2>
</section>`
      },
      exercise: {
        title: 'Services Section',
        task:
          'Create three themed sections for a company website.'
      }
    },

    {
      title: 'article Element',
      slug: 'article-element',
      difficulty: 'Beginner',
      description:
        'Represents self-contained content that can stand independently.',
      whyItExists:
        'Defines independent and reusable content.',
      realWorldUseCase:
        'Blog posts, news articles, forum posts.',
      seoBenefits:
        'Search engines identify standalone content more effectively.',
      accessibilityBenefits:
        'Improves content segmentation.',
      commonMistakes: [
        'Using article for unrelated layout containers.'
      ],
      bestPractices: [
        'Use article for independently meaningful content.'
      ],
      example: {
        title: 'Blog Post',
        code: `<article>
  <h2>HTML Tutorial</h2>
</article>`
      },
      exercise: {
        title: 'Create Blog Post',
        task:
          'Build a semantic blog article.'
      }
    },

    {
      title: 'aside Element',
      slug: 'aside-element',
      difficulty: 'Beginner',
      description:
        'Represents supplementary content related to surrounding content.',
      whyItExists:
        'Separates supporting information from main content.',
      realWorldUseCase:
        'Sidebars, advertisements, author bios.',
      seoBenefits:
        'Clarifies supporting versus primary content.',
      accessibilityBenefits:
        'Helps assistive technologies distinguish secondary content.',
      commonMistakes: [
        'Using aside for primary content.'
      ],
      bestPractices: [
        'Reserve aside for related supporting content.'
      ],
      example: {
        title: 'Sidebar',
        code: `<aside>
  <h3>Related Articles</h3>
</aside>`
      },
      exercise: {
        title: 'Create Sidebar',
        task:
          'Add a related articles sidebar.'
      }
    },

    {
      title: 'footer Element',
      slug: 'footer-element',
      difficulty: 'Beginner',
      description:
        'Represents footer information for a page or section.',
      whyItExists:
        'Provides a semantic area for closing content.',
      realWorldUseCase:
        'Copyright notices, contact information, legal links.',
      seoBenefits:
        'Improves overall page organization.',
      accessibilityBenefits:
        'Creates a recognizable landmark.',
      commonMistakes: [
        'Placing important content only in the footer.'
      ],
      bestPractices: [
        'Include copyright, legal, and contact information.'
      ],
      example: {
        title: 'Website Footer',
        code: `<footer>
  <p>© 2026 Example Company</p>
</footer>`
      },
      exercise: {
        title: 'Footer Design',
        task:
          'Create a complete website footer.'
      }
    },

    {
      title: 'figure Element',
      slug: 'figure-element-semantic',
      difficulty: 'Beginner',
      description:
        'Represents self-contained media content.',
      whyItExists:
        'Associates media with related content.',
      realWorldUseCase:
        'Charts, screenshots, images, diagrams.',
      seoBenefits:
        'Improves contextual understanding of media.',
      accessibilityBenefits:
        'Supports meaningful content grouping.',
      commonMistakes: [
        'Using figure without contextual content.'
      ],
      bestPractices: [
        'Use with images and diagrams.'
      ],
      example: {
        title: 'Figure Example',
        code: `<figure>
  <img src="chart.png" alt="Sales chart">
</figure>`
      },
      exercise: {
        title: 'Documentation Figure',
        task:
          'Add a figure containing a screenshot.'
      }
    },

    {
      title: 'figcaption Element',
      slug: 'figcaption-element-semantic',
      difficulty: 'Beginner',
      description:
        'Provides captions for figure content.',
      whyItExists:
        'Adds context to media content.',
      realWorldUseCase:
        'Image descriptions, chart explanations.',
      seoBenefits:
        'Adds supporting contextual information.',
      accessibilityBenefits:
        'Improves understanding of media.',
      commonMistakes: [
        'Using irrelevant captions.'
      ],
      bestPractices: [
        'Keep captions concise and informative.'
      ],
      example: {
        title: 'Caption Example',
        code: `<figcaption>Monthly sales report.</figcaption>`
      },
      exercise: {
        title: 'Media Captions',
        task:
          'Add captions to three figures.'
      }
    },

    {
      title: 'details Element',
      slug: 'details-element',
      difficulty: 'Intermediate',
      description:
        'Creates expandable and collapsible content sections.',
      whyItExists:
        'Provides native disclosure functionality.',
      realWorldUseCase:
        'FAQs and help documentation.',
      seoBenefits:
        'Keeps content organized while remaining accessible.',
      accessibilityBenefits:
        'Built-in accessibility support.',
      commonMistakes: [
        'Using custom JavaScript unnecessarily.'
      ],
      bestPractices: [
        'Use for expandable information.'
      ],
      example: {
        title: 'Details Example',
        code: `<details>
  <summary>Read More</summary>
  <p>Content goes here.</p>
</details>`
      },
      exercise: {
        title: 'FAQ Section',
        task:
          'Create three expandable FAQ items.'
      }
    },

    {
      title: 'summary Element',
      slug: 'summary-element',
      difficulty: 'Intermediate',
      description:
        'Provides a visible heading for details content.',
      whyItExists:
        'Labels collapsible content.',
      realWorldUseCase:
        'FAQ headings.',
      seoBenefits:
        'Improves content structure.',
      accessibilityBenefits:
        'Improves navigation of hidden content.',
      commonMistakes: [
        'Omitting summary from details.'
      ],
      bestPractices: [
        'Use clear summary labels.'
      ],
      example: {
        title: 'Summary Example',
        code: `<summary>Shipping Information</summary>`
      },
      exercise: {
        title: 'FAQ Labels',
        task:
          'Create summaries for FAQ content.'
      }
    },

    {
      title: 'dialog Element',
      slug: 'dialog-element',
      difficulty: 'Intermediate',
      description:
        'Represents modal and popup dialog windows.',
      whyItExists:
        'Provides a native dialog solution.',
      realWorldUseCase:
        'Login popups and confirmation windows.',
      seoBenefits:
        'No direct SEO benefit.',
      accessibilityBenefits:
        'Better accessibility than custom modal implementations.',
      commonMistakes: [
        'Improper focus management.'
      ],
      bestPractices: [
        'Ensure keyboard accessibility.'
      ],
      example: {
        title: 'Dialog Example',
        code: `<dialog open>
  <p>Welcome</p>
</dialog>`
      },
      exercise: {
        title: 'Modal Window',
        task:
          'Create a confirmation dialog.'
      }
    },

    {
      title: 'address Element',
      slug: 'address-element-semantic',
      difficulty: 'Beginner',
      description:
        'Represents contact information.',
      whyItExists:
        'Provides semantic contact details.',
      realWorldUseCase:
        'Business contact sections.',
      seoBenefits:
        'Supports local business relevance.',
      accessibilityBenefits:
        'Clearly identifies contact information.',
      commonMistakes: [
        'Using address for non-contact content.'
      ],
      bestPractices: [
        'Use only for contact details.'
      ],
      example: {
        title: 'Address Example',
        code: `<address>
  support@example.com
</address>`
      },
      exercise: {
        title: 'Contact Section',
        task:
          'Create a business contact block.'
      }
    },

    {
      title: 'time Element',
      slug: 'time-element-semantic',
      difficulty: 'Beginner',
      description:
        'Represents dates and times in machine-readable formats.',
      whyItExists:
        'Allows browsers and search engines to understand dates.',
      realWorldUseCase:
        'Blog publishing dates and event schedules.',
      seoBenefits:
        'Improves understanding of temporal content.',
      accessibilityBenefits:
        'Provides structured date information.',
      commonMistakes: [
        'Missing datetime attributes.'
      ],
      bestPractices: [
        'Use valid datetime values.'
      ],
      example: {
        title: 'Time Example',
        code: `<time datetime="2026-06-08">June 8, 2026</time>`
      },
      exercise: {
        title: 'Article Date',
        task:
          'Add publishing dates using the time element.'
      }
    },

    {
      title: 'Semantic Page Layout',
      slug: 'semantic-page-layout',
      difficulty: 'Intermediate',
      description:
        'Build complete semantic page structures using HTML5 layout elements.',
      example: {
        title: 'Semantic Layout',
        code: `<header></header>
<nav></nav>
<main></main>
<footer></footer>`
      },
      exercise: {
        title: 'Website Structure',
        task:
          'Build a complete semantic website layout.'
      }
    },

    {
      title: 'Building Modern Website Structure',
      slug: 'modern-website-structure',
      difficulty: 'Intermediate',
      description:
        'Combine semantic elements into scalable website architectures.',
      example: {
        title: 'Modern Structure',
        code: `<header></header>
<main>
  <section></section>
</main>`
      },
      exercise: {
        title: 'Corporate Website',
        task:
          'Create a semantic company homepage.'
      }
    },

    {
      title: 'Semantic Blog Layout',
      slug: 'semantic-blog-layout',
      difficulty: 'Intermediate',
      description:
        'Build professional blog structures using semantic HTML.',
      example: {
        title: 'Blog Layout',
        code: `<article>
  <header></header>
</article>`
      },
      exercise: {
        title: 'Blog Page',
        task:
          'Create a complete semantic blog page.'
      }
    },

    {
      title: 'Semantic E-commerce Layout',
      slug: 'semantic-ecommerce-layout',
      difficulty: 'Intermediate',
      description:
        'Structure ecommerce pages using semantic HTML.',
      example: {
        title: 'Product Layout',
        code: `<main>
  <article>
    Product Details
  </article>
</main>`
      },
      exercise: {
        title: 'Product Page',
        task:
          'Build a semantic product detail page.'
      }
    },

    {
      title: 'Semantic Landing Pages',
      slug: 'semantic-landing-pages',
      difficulty: 'Intermediate',
      description:
        'Create conversion-focused landing pages using semantic structure.',
      example: {
        title: 'Landing Page',
        code: `<header></header>
<section></section>
<footer></footer>`
      },
      exercise: {
        title: 'Marketing Page',
        task:
          'Build a semantic SaaS landing page.'
      }
    },

    {
      title: 'Semantic HTML and SEO',
      slug: 'semantic-html-and-seo',
      difficulty: 'Intermediate',
      description:
        'Understand how semantic HTML improves search engine understanding and rankings.',
      example: {
        title: 'SEO Structure',
        code: `<article>
  <h1>Guide</h1>
</article>`
      },
      exercise: {
        title: 'SEO Audit',
        task:
          'Improve semantic structure on a webpage.'
      }
    },

    {
      title: 'Search Engine Understanding',
      slug: 'search-engine-understanding',
      difficulty: 'Intermediate',
      description:
        'Learn how search engines interpret semantic markup.',
      example: {
        title: 'Structured Content',
        code: `<main>
  <article></article>
</main>`
      },
      exercise: {
        title: 'Search Intent',
        task:
          'Structure content for better search understanding.'
      }
    },

    {
      title: 'Structured Content',
      slug: 'structured-content',
      difficulty: 'Intermediate',
      description:
        'Organize content logically for users and search engines.',
      example: {
        title: 'Structured Article',
        code: `<article>
  <section></section>
</article>`
      },
      exercise: {
        title: 'Content Organization',
        task:
          'Structure a long article using semantic sections.'
      }
    },

    {
      title: 'Semantic HTML and Screen Readers',
      slug: 'semantic-html-screen-readers',
      difficulty: 'Intermediate',
      description:
        'Understand how screen readers use semantic HTML landmarks.',
      example: {
        title: 'Accessible Layout',
        code: `<nav></nav>
<main></main>`
      },
      exercise: {
        title: 'Accessibility Review',
        task:
          'Test a page using semantic landmarks.'
      }
    },

    {
      title: 'Semantic HTML and Keyboard Navigation',
      slug: 'semantic-html-keyboard-navigation',
      difficulty: 'Intermediate',
      description:
        'Improve navigation experiences for keyboard users.',
      example: {
        title: 'Navigation Landmark',
        code: `<nav>
  <a href="/">Home</a>
</nav>`
      },
      exercise: {
        title: 'Keyboard Testing',
        task:
          'Verify keyboard navigation across a page.'
      }
    },

    {
      title: 'ARIA vs Semantic HTML',
      slug: 'aria-vs-semantic-html',
      difficulty: 'Advanced',
      description:
        'Learn when native semantic HTML should replace ARIA roles and when ARIA is necessary.',
      example: {
        title: 'Prefer Semantic HTML',
        code: `<nav></nav>`
      },
      exercise: {
        title: 'ARIA Audit',
        task:
          'Replace unnecessary ARIA roles with semantic elements.'
      }
    },

    {
      title: 'Common Semantic Mistakes',
      slug: 'common-semantic-mistakes',
      difficulty: 'Beginner',
      description:
        'Identify and avoid common semantic HTML implementation errors.',
      example: {
        title: 'Incorrect Structure',
        code: `<div id="header"></div>`
      },
      exercise: {
        title: 'Fix Mistakes',
        task:
          'Convert non-semantic markup into semantic HTML.'
      }
    },

    {
      title: 'Semantic HTML Checklist',
      slug: 'semantic-html-checklist',
      difficulty: 'Intermediate',
      description:
        'A professional checklist for validating semantic HTML implementations.',
      example: {
        title: 'Checklist Item',
        code: `<main></main>`
      },
      exercise: {
        title: 'Website Audit',
        task:
          'Review a webpage using a semantic checklist.'
      }
    },

    {
      title: 'Real World Semantic Examples',
      slug: 'real-world-semantic-examples',
      difficulty: 'Intermediate',
      description:
        'Analyze production-quality semantic structures used by modern websites.',
      example: {
        title: 'Production Layout',
        code: `<header></header>
<nav></nav>
<main>
  <article></article>
</main>
<footer></footer>`
      },
      exercise: {
        title: 'Full Website',
        task:
          'Build a complete semantic website using all major semantic elements.'
      }
    }
  ]
}

export const htmlSeoSection = {
  title: 'HTML SEO',
  slug: 'html-seo',
  difficulty: 'Beginner',
  description:
    'Learn how to optimize HTML documents for search engines, improve rankings, increase organic traffic, enhance user experience, and build Google-friendly websites that follow modern SEO and Google AdSense best practices.',

  topics: [
    {
      title: 'Introduction to SEO',
      slug: 'introduction-to-seo',
      difficulty: 'Beginner',
      description:
        'Search Engine Optimization (SEO) is the process of improving website visibility in search engines like Google and Bing. HTML plays a critical role because search engines rely heavily on HTML structure to understand content, relevance, and user experience.',
      example: {
        title: 'Basic SEO-Friendly Page',
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HTML SEO Guide</title>
  </head>
  <body>
    <h1>Learn HTML SEO</h1>
  </body>
</html>`
      },
      exercise: {
        title: 'Identify SEO Elements',
        task:
          'Create a webpage and identify all HTML elements that can impact SEO.'
      }
    },

    {
      title: 'Title Tag',
      slug: 'title-tag',
      difficulty: 'Beginner',
      description:
        'The title tag is one of the most important SEO elements. It appears in search engine results, browser tabs, and social shares. Well-written titles improve click-through rates and help search engines understand page topics.',
      example: {
        title: 'Optimized Title Tag',
        code: `<title>HTML Tutorial for Beginners | Complete Learning Guide</title>`
      },
      exercise: {
        title: 'Write SEO Titles',
        task:
          'Create optimized title tags for a blog, portfolio, and ecommerce product page.'
      }
    },

    {
      title: 'Meta Description',
      slug: 'meta-description',
      difficulty: 'Beginner',
      description:
        'Meta descriptions summarize page content for search engines and users. Although not a direct ranking factor, compelling descriptions can significantly improve click-through rates.',
      example: {
        title: 'Meta Description',
        code: `<meta name="description" content="Learn HTML from beginner to advanced with examples, exercises, and real-world projects.">`
      },
      exercise: {
        title: 'Create Descriptions',
        task:
          'Write unique meta descriptions for three different webpages.'
      }
    },

    {
      title: 'Meta Keywords (Historical Context)',
      slug: 'meta-keywords',
      difficulty: 'Beginner',
      description:
        'Meta keywords were once used by search engines but are now largely ignored by Google due to abuse and keyword stuffing. Understanding their history helps developers avoid outdated SEO practices.',
      example: {
        title: 'Historical Example',
        code: `<meta name="keywords" content="html, css, javascript">`
      },
      exercise: {
        title: 'SEO Research',
        task:
          'Research which search engines still acknowledge meta keywords and document your findings.'
      }
    },

    {
      title: 'Heading Structure (H1-H6)',
      slug: 'heading-structure-seo',
      difficulty: 'Beginner',
      description:
        'Heading tags create content hierarchy and improve readability for both users and search engines. Proper heading structure helps search engines understand topic relationships.',
      example: {
        title: 'Heading Hierarchy',
        code: `<h1>HTML SEO Guide</h1>
<h2>Meta Tags</h2>
<h3>Title Tag</h3>`
      },
      exercise: {
        title: 'Build Content Hierarchy',
        task:
          'Create a blog article using proper H1-H6 heading structure.'
      }
    },

    {
      title: 'Robots Meta Tag',
      slug: 'robots-meta-tag',
      difficulty: 'Intermediate',
      description:
        'The robots meta tag instructs search engines whether pages should be indexed and whether links should be followed.',
      example: {
        title: 'Robots Tag',
        code: `<meta name="robots" content="index, follow">`
      },
      exercise: {
        title: 'Control Indexing',
        task:
          'Create robots meta tags for public pages and private pages.'
      }
    },

    {
      title: 'Canonical Tags',
      slug: 'canonical-tags',
      difficulty: 'Intermediate',
      description:
        'Canonical tags help prevent duplicate content issues by telling search engines which URL should be considered the primary version.',
      example: {
        title: 'Canonical URL',
        code: `<link rel="canonical" href="https://example.com/html-seo-guide">`
      },
      exercise: {
        title: 'Duplicate Content Prevention',
        task:
          'Add canonical tags to a set of similar product pages.'
      }
    },

    {
      title: 'Internal Linking',
      slug: 'internal-linking',
      difficulty: 'Intermediate',
      description:
        'Internal links help users navigate websites and help search engines discover content, understand relationships, and distribute authority across pages.',
      example: {
        title: 'Internal Link',
        code: `<a href="/html-images">Learn HTML Images</a>`
      },
      exercise: {
        title: 'Build Link Structure',
        task:
          'Create a learning path with internal links connecting related topics.'
      }
    },

    {
      title: 'Image SEO',
      slug: 'image-seo',
      difficulty: 'Intermediate',
      description:
        'Image SEO improves discoverability, accessibility, and page performance through optimized file names, alt text, responsive images, and efficient formats.',
      example: {
        title: 'SEO-Friendly Image',
        code: `<img src="html-seo-guide.webp" alt="HTML SEO tutorial guide">`
      },
      exercise: {
        title: 'Optimize Images',
        task:
          'Improve SEO for five images using proper filenames and alt text.'
      }
    },

    {
      title: 'Semantic HTML for SEO',
      slug: 'semantic-html-for-seo',
      difficulty: 'Intermediate',
      description:
        'Semantic HTML elements provide meaning and structure, helping search engines understand content importance, page sections, and relationships between content blocks.',
      example: {
        title: 'Semantic Layout',
        code: `<main>
  <article>
    <h1>HTML SEO</h1>
  </article>
</main>`
      },
      exercise: {
        title: 'Semantic Optimization',
        task:
          'Convert a div-based layout into a semantic HTML structure.'
      }
    },

    {
      title: 'Open Graph Tags',
      slug: 'open-graph-tags',
      difficulty: 'Intermediate',
      description:
        'Open Graph tags control how pages appear when shared on social media platforms such as Facebook, LinkedIn, and messaging apps.',
      example: {
        title: 'Open Graph Metadata',
        code: `<meta property="og:title" content="HTML SEO Guide">
<meta property="og:type" content="website">`
      },
      exercise: {
        title: 'Social Sharing',
        task:
          'Add Open Graph tags to a blog article page.'
      }
    },

    {
      title: 'Twitter Cards',
      slug: 'twitter-cards',
      difficulty: 'Intermediate',
      description:
        'Twitter Cards enhance shared content by displaying rich previews including titles, descriptions, and images.',
      example: {
        title: 'Twitter Card',
        code: `<meta name="twitter:card" content="summary_large_image">`
      },
      exercise: {
        title: 'Rich Preview Setup',
        task:
          'Configure Twitter Card metadata for a landing page.'
      }
    },

    {
      title: 'Structured Data Basics',
      slug: 'structured-data-basics',
      difficulty: 'Advanced',
      description:
        'Structured data helps search engines understand page content more accurately and can improve eligibility for enhanced search results.',
      example: {
        title: 'Basic JSON-LD',
        code: `<script type="application/ld+json">
{
  "@context":"https://schema.org"
}
</script>`
      },
      exercise: {
        title: 'Content Markup',
        task:
          'Add structured data to a tutorial article.'
      }
    },

    {
      title: 'Schema Markup Introduction',
      slug: 'schema-markup-introduction',
      difficulty: 'Advanced',
      description:
        'Schema markup provides standardized vocabulary that search engines use to understand products, articles, organizations, events, and other entities.',
      example: {
        title: 'Article Schema',
        code: `<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Article"
}
</script>`
      },
      exercise: {
        title: 'Schema Implementation',
        task:
          'Create schema markup for an educational tutorial page.'
      }
    },

    {
      title: 'Mobile-Friendly HTML',
      slug: 'mobile-friendly-html',
      difficulty: 'Advanced',
      description:
        'Mobile-friendly websites provide excellent experiences across devices. Search engines prioritize mobile usability when evaluating pages.',
      example: {
        title: 'Viewport Meta Tag',
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      },
      exercise: {
        title: 'Mobile Optimization',
        task:
          'Make an existing webpage mobile-friendly using responsive HTML practices.'
      }
    },

    {
      title: 'Core Web Vitals Overview',
      slug: 'core-web-vitals-overview',
      difficulty: 'Advanced',
      description:
        'Core Web Vitals measure loading performance, visual stability, and responsiveness. These metrics contribute to user experience and search visibility.',
      example: {
        title: 'Performance-Oriented Image',
        code: `<img src="hero.webp" alt="Hero image" loading="lazy">`
      },
      exercise: {
        title: 'Performance Review',
        task:
          'Identify HTML improvements that could positively impact Core Web Vitals.'
      }
    },

    {
      title: 'SEO Best Practices',
      slug: 'seo-best-practices',
      difficulty: 'Advanced',
      description:
        'A collection of proven SEO techniques including semantic markup, descriptive metadata, quality content structure, accessibility improvements, and performance optimization.',
      example: {
        title: 'SEO-Friendly Structure',
        code: `<header>
  <h1>HTML Course</h1>
</header>
<main>
  <article>
    <h2>Introduction</h2>
  </article>
</main>`
      },
      exercise: {
        title: 'SEO Audit',
        task:
          'Review a webpage and apply SEO best practices to improve its structure.'
      }
    },

    {
      title: 'Common SEO Mistakes',
      slug: 'common-seo-mistakes',
      difficulty: 'Advanced',
      description:
        'Learn how to avoid issues such as duplicate titles, missing descriptions, poor heading structures, inaccessible content, broken links, and thin content.',
      example: {
        title: 'Poor SEO Example',
        code: `<title>Home</title>
<h1>Welcome</h1>`
      },
      exercise: {
        title: 'Fix SEO Issues',
        task:
          'Identify and correct at least ten SEO mistakes on a sample webpage.'
      }
    }
  ]
};

export const htmlProjectsSection = {
  title: 'HTML Projects',
  slug: 'html-projects',
  difficulty: 'Beginner',
  description:
    'Build real-world HTML projects that reinforce core concepts, improve problem-solving skills, strengthen portfolio quality, and prepare learners for freelance work, internships, junior developer roles, and professional frontend development careers.',

  topics: [
    {
      title: 'Personal Profile Page',
      slug: 'personal-profile-page-project',
      difficulty: 'Beginner',
      description:
        'Create a personal profile webpage showcasing basic information, skills, hobbies, achievements, and contact details using semantic HTML.',
      projectOverview:
        'Build a single-page profile website similar to a personal introduction page.',
      learningObjectives: [
        'Create a complete HTML document structure',
        'Use headings and paragraphs effectively',
        'Add images with proper alt text',
        'Practice semantic HTML',
        'Create navigation links'
      ],
      requirements: [
        'Profile image',
        'About section',
        'Skills section',
        'Hobbies section',
        'Contact information',
        'Semantic HTML structure'
      ],
      exercise: {
        title: 'Create Your Profile',
        task:
          'Build a personal profile page using only HTML and semantic elements.'
      }
    },

    {
      title: 'Resume Website',
      slug: 'resume-website-project',
      difficulty: 'Beginner',
      description:
        'Create a professional online resume suitable for job applications in the UK and US markets.',
      projectOverview:
        'Build a structured resume webpage containing education, experience, skills, and certifications.',
      learningObjectives: [
        'Organize professional information',
        'Use lists and sections effectively',
        'Create accessible content structures',
        'Practice semantic document layouts'
      ],
      requirements: [
        'Professional summary',
        'Education section',
        'Work experience section',
        'Skills section',
        'Certifications section',
        'Contact information'
      ],
      exercise: {
        title: 'Build Resume Website',
        task:
          'Create a professional resume website that could be used during a job search.'
      }
    },

    {
      title: 'Simple Blog Page',
      slug: 'simple-blog-page-project',
      difficulty: 'Beginner',
      description:
        'Create a blog article page using semantic HTML elements and SEO-friendly content structure.',
      projectOverview:
        'Build a blog page with article content, author details, publishing date, and related articles.',
      learningObjectives: [
        'Use article elements correctly',
        'Create proper heading hierarchies',
        'Apply semantic HTML principles',
        'Structure content for readability'
      ],
      requirements: [
        'Blog title',
        'Author information',
        'Published date',
        'Article content',
        'Related posts section',
        'Footer'
      ],
      exercise: {
        title: 'Create Blog Layout',
        task:
          'Build a blog page containing a complete article and related content.'
      }
    },

    {
      title: 'Restaurant Landing Page',
      slug: 'restaurant-landing-page-project',
      difficulty: 'Beginner',
      description:
        'Develop a restaurant homepage featuring menu highlights, contact information, opening hours, and location details.',
      projectOverview:
        'Create a promotional restaurant webpage designed to attract customers.',
      learningObjectives: [
        'Structure marketing content',
        'Use images effectively',
        'Create clear content sections',
        'Improve accessibility and readability'
      ],
      requirements: [
        'Hero section',
        'Menu section',
        'Opening hours',
        'Location information',
        'Contact section',
        'Footer'
      ],
      exercise: {
        title: 'Restaurant Website',
        task:
          'Build a landing page for a fictional restaurant using semantic HTML.'
      }
    },

    {
      title: 'Contact Page',
      slug: 'contact-page-project',
      difficulty: 'Beginner',
      description:
        'Build a dedicated contact page featuring business information and accessible contact forms.',
      projectOverview:
        'Create a professional contact page commonly used by businesses and portfolios.',
      learningObjectives: [
        'Build accessible forms',
        'Use labels correctly',
        'Create structured contact information',
        'Improve user experience'
      ],
      requirements: [
        'Contact form',
        'Address section',
        'Email information',
        'Phone number',
        'Business hours',
        'Form labels'
      ],
      exercise: {
        title: 'Business Contact Page',
        task:
          'Create a complete contact page with an accessible contact form.'
      }
    },

    {
      title: 'Product Landing Page',
      slug: 'product-landing-page-project',
      difficulty: 'Intermediate',
      description:
        'Create a product-focused landing page designed to showcase features, benefits, testimonials, and calls to action.',
      projectOverview:
        'Build a conversion-oriented product marketing page.',
      learningObjectives: [
        'Structure marketing content',
        'Create strong information hierarchy',
        'Use semantic HTML for SEO',
        'Improve accessibility'
      ],
      requirements: [
        'Hero section',
        'Features section',
        'Benefits section',
        'Testimonials',
        'Call-to-action section',
        'FAQ section'
      ],
      exercise: {
        title: 'Launch Page',
        task:
          'Build a landing page for a fictional software product.'
      }
    },

    {
      title: 'Registration Form',
      slug: 'registration-form-project',
      difficulty: 'Intermediate',
      description:
        'Create a complete user registration form with accessibility and validation considerations.',
      projectOverview:
        'Build a realistic signup experience for a website or application.',
      learningObjectives: [
        'Work with form elements',
        'Use validation attributes',
        'Improve accessibility',
        'Create user-friendly forms'
      ],
      requirements: [
        'Full name field',
        'Email field',
        'Password field',
        'Terms acceptance',
        'Accessible labels',
        'Validation attributes'
      ],
      exercise: {
        title: 'Registration Experience',
        task:
          'Build a registration form suitable for a SaaS platform.'
      }
    },

    {
      title: 'Login Page',
      slug: 'login-page-project',
      difficulty: 'Intermediate',
      description:
        'Develop a professional login interface using semantic and accessible HTML.',
      projectOverview:
        'Create an authentication page similar to modern web applications.',
      learningObjectives: [
        'Build authentication forms',
        'Improve form accessibility',
        'Structure login workflows',
        'Practice semantic HTML'
      ],
      requirements: [
        'Email input',
        'Password input',
        'Remember me checkbox',
        'Forgot password link',
        'Submit button',
        'Accessible labels'
      ],
      exercise: {
        title: 'Authentication Form',
        task:
          'Create a modern login page for a web application.'
      }
    },

    {
      title: 'News Website Layout',
      slug: 'news-website-layout-project',
      difficulty: 'Intermediate',
      description:
        'Build a news website homepage featuring categories, headlines, featured stories, and article previews.',
      projectOverview:
        'Create a content-heavy layout commonly used by online publications.',
      learningObjectives: [
        'Organize large content structures',
        'Use semantic article layouts',
        'Improve SEO structure',
        'Build scalable page layouts'
      ],
      requirements: [
        'Top stories section',
        'Categories navigation',
        'Featured article',
        'Latest news section',
        'Sidebar content',
        'Footer'
      ],
      exercise: {
        title: 'Online Newspaper',
        task:
          'Build a homepage for a digital news website.'
      }
    },

    {
      title: 'Portfolio Website',
      slug: 'portfolio-website-project',
      difficulty: 'Intermediate',
      description:
        'Create a professional portfolio website suitable for developers, designers, and freelancers.',
      projectOverview:
        'Build a personal portfolio to showcase skills and projects.',
      learningObjectives: [
        'Present projects professionally',
        'Create personal branding',
        'Improve content organization',
        'Apply accessibility principles'
      ],
      requirements: [
        'Hero section',
        'About section',
        'Projects section',
        'Skills section',
        'Contact section',
        'Navigation menu'
      ],
      exercise: {
        title: 'Developer Portfolio',
        task:
          'Create a professional portfolio website for job applications.'
      }
    },

    {
      title: 'Documentation Website',
      slug: 'documentation-website-project',
      difficulty: 'Advanced',
      description:
        'Develop a documentation website similar to professional developer documentation platforms.',
      projectOverview:
        'Build a structured learning and documentation portal.',
      learningObjectives: [
        'Design large content hierarchies',
        'Improve navigation structure',
        'Enhance accessibility',
        'Apply semantic organization'
      ],
      requirements: [
        'Sidebar navigation',
        'Table of contents',
        'Documentation articles',
        'Code examples',
        'Search placeholder',
        'Footer'
      ],
      exercise: {
        title: 'Developer Docs',
        task:
          'Create documentation pages for a fictional software product.'
      }
    },

    {
      title: 'SaaS Landing Page',
      slug: 'saas-landing-page-project',
      difficulty: 'Advanced',
      description:
        'Build a modern SaaS marketing website focused on lead generation and customer conversion.',
      projectOverview:
        'Create a startup-style landing page similar to leading SaaS companies.',
      learningObjectives: [
        'Create conversion-focused layouts',
        'Apply SEO-friendly structure',
        'Build scalable marketing pages',
        'Improve content hierarchy'
      ],
      requirements: [
        'Hero section',
        'Features section',
        'Pricing preview',
        'Testimonials',
        'FAQ section',
        'Call-to-action sections'
      ],
      exercise: {
        title: 'SaaS Marketing Site',
        task:
          'Create a complete landing page for a fictional SaaS business.'
      }
    },

    {
      title: 'E-Commerce Homepage',
      slug: 'ecommerce-homepage-project',
      difficulty: 'Advanced',
      description:
        'Build an ecommerce homepage featuring products, promotions, categories, and marketing content.',
      projectOverview:
        'Create the homepage of an online retail store.',
      learningObjectives: [
        'Structure ecommerce content',
        'Improve product discoverability',
        'Use semantic product sections',
        'Apply SEO best practices'
      ],
      requirements: [
        'Hero banner',
        'Featured products',
        'Product categories',
        'Promotional offers',
        'Newsletter section',
        'Footer'
      ],
      exercise: {
        title: 'Online Store Homepage',
        task:
          'Build a complete ecommerce homepage for a fictional brand.'
      }
    },

    {
      title: 'Multi-Page Business Website',
      slug: 'multi-page-business-website-project',
      difficulty: 'Advanced',
      description:
        'Develop a multi-page business website including Home, About, Services, Contact, and FAQ pages.',
      projectOverview:
        'Create a realistic business website structure used by agencies and companies.',
      learningObjectives: [
        'Build multi-page navigation systems',
        'Create consistent page structures',
        'Improve internal linking',
        'Apply SEO and accessibility standards'
      ],
      requirements: [
        'Homepage',
        'About page',
        'Services page',
        'Contact page',
        'FAQ page',
        'Shared navigation'
      ],
      exercise: {
        title: 'Company Website',
        task:
          'Build a complete business website with at least five linked pages.'
      }
    },

    {
      title: 'Accessibility-Focused Website',
      slug: 'accessibility-focused-website-project',
      difficulty: 'Advanced',
      description:
        'Create a fully accessible website following WCAG recommendations and accessibility best practices.',
      projectOverview:
        'Build a production-ready website that prioritizes inclusive design.',
      learningObjectives: [
        'Implement accessibility standards',
        'Improve keyboard navigation',
        'Support screen readers',
        'Build inclusive user experiences'
      ],
      requirements: [
        'Semantic HTML',
        'Accessible forms',
        'Keyboard navigation',
        'Skip links',
        'Image alt text',
        'Proper heading structure'
      ],
      exercise: {
        title: 'WCAG-Compliant Website',
        task:
          'Build a website that passes accessibility audits and follows WCAG best practices.'
      }
    }
  ]
};


// ---------------------------------------------------------------------------
// Compatibility layer
//
// The consuming components (HtmlLearningPage, TopicArticle, Sidebar, etc.)
// rely on CATEGORIES / FLAT_TOPICS / findTopic / TOTAL_TOPICS helpers that
// use a slightly different shape (id-based instead of slug-based, HTML
// content strings, prev/next navigation).  This section derives those
// structures from the curriculum data above.
// ---------------------------------------------------------------------------

export interface Topic {
  id: string
  title: string
  summary?: string
  content?: string
  whereItGoes?: string
  commonAttributes?: string[]
  syntax?: string
  example?: { code: string }
  exercise?: { title: string; task: string; starterCode?: string; expectedOutput?: string }
  practicePrompt?: string
  realWorld?: string
  commonMistakes?: string
  bestPractices?: string
  recap?: string
}

export interface Category {
  id: string
  title: string
  topics: Topic[]
}

export interface FlatTopic extends Topic {
  categoryId: string
  categoryTitle: string
  globalIndex: number
  prev: { categoryId: string; topicId: string } | null
  next: { categoryId: string; topicId: string } | null
}

export interface FlatTopicEntry extends Topic {
  categoryId: string
  categoryTitle: string
  globalIndex: number
}

function descriptionToHtml(raw?: string): string | undefined {
  if (!raw) return undefined
  const trimmed = raw.trim()
  if (!trimmed) return undefined
  return trimmed
    .split(/\n\n+/)
    .map((p) => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('\n')
}

function arrayToUl(items?: string[]): string | undefined {
  if (!items || items.length === 0) return undefined
  return `<ul>${items.map((m) => `<li>${m}</li>`).join('')}</ul>`
}

function mapTopic(t: any): Topic {
  return {
    id: t.slug,
    title: t.title,
    summary: typeof t.description === 'string' ? t.description.trim().split(/\n/)[0].trim() : undefined,
    content: descriptionToHtml(t.description),
    whereItGoes: t.whereItGoes || undefined,
    commonAttributes: t.commonAttributes || undefined,
    syntax: t.syntax || undefined,
    example: t.example ? { code: t.example.code } : undefined,
    exercise: t.exercise ? {
      title: t.exercise.title,
      task: t.exercise.task,
      starterCode: t.exercise.starterCode || t.example?.code || undefined,
      expectedOutput: t.exercise.expectedOutput || undefined,
    } : undefined,
    practicePrompt: t.practicePrompt || undefined,
    realWorld:
      t.realWorldUseCase ? `<p>${t.realWorldUseCase}</p>`
      : t.realWorldScenario ? `<p>${t.realWorldScenario}</p>`
      : undefined,
    commonMistakes: arrayToUl(t.commonMistakes),
    bestPractices: arrayToUl(t.bestPractices),
    recap: undefined,
  }
}

function sectionToCategory(section: any): Category {
  return {
    id: section.slug,
    title: section.title,
    topics: (section.topics ?? []).map(mapTopic),
  }
}

export const CATEGORIES: Category[] = [
  ...INTRODUCTION_AND_FUNDAMENTALS.map((cat) => ({
    id: cat.slug,
    title: cat.title,
    topics: cat.topics.map(mapTopic),
  })),
  sectionToCategory(htmlTextElementsSection),
  sectionToCategory(htmlLinksSection),
  sectionToCategory(htmlImagesSection),
  sectionToCategory(htmlFormsSection),
  sectionToCategory(htmlSemanticElementsSection),
  sectionToCategory(htmlSeoSection),
  sectionToCategory(htmlProjectsSection),
]

const topicIndex = new Map<string, number>()

export const FLAT_TOPICS: FlatTopicEntry[] = (() => {
  const out: FlatTopicEntry[] = []
  let idx = 0
  for (const cat of CATEGORIES) {
    for (const t of cat.topics) {
      topicIndex.set(`${cat.id}::${t.id}`, idx)
      out.push({
        ...t,
        categoryId: cat.id,
        categoryTitle: cat.title,
        globalIndex: idx,
      })
      idx++
    }
  }
  return out
})()

export const TOTAL_TOPICS = FLAT_TOPICS.length

export const DEFAULT_SELECTION = {
  categoryId: CATEGORIES[0].id,
  topicId: CATEGORIES[0].topics[0].id,
}

export function findTopic(categoryId: string, topicId: string): FlatTopic {
  const key = `${categoryId}::${topicId}`
  let idx = topicIndex.get(key)
  if (idx === undefined) idx = 0

  const hit = FLAT_TOPICS[idx]
  const prevItem = FLAT_TOPICS[idx - 1] ?? null
  const nextItem = FLAT_TOPICS[idx + 1] ?? null

  return {
    ...hit,
    prev: prevItem
      ? { categoryId: prevItem.categoryId, topicId: prevItem.id }
      : null,
    next: nextItem
      ? { categoryId: nextItem.categoryId, topicId: nextItem.id }
      : null,
  }
}

export { topicIndex as topicLookup }
