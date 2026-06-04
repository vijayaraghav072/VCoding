/**
 * features/html/learning/html-curriculum.ts
 *
 * Single source of truth for the HTML learning curriculum.
 * Uses a tree-based structure (per Rules.ts DSA requirement) for
 * hierarchical topic categorisation, with a flattened linear sequence
 * for O(1) prev/next navigation via a HashMap lookup.
 *
 * Exports:
 *   CATEGORIES        – tree of categories → topics (sidebar data)
 *   FLAT_TOPICS        – linear sequence with globalIndex + prev/next
 *   TOTAL_TOPICS       – count of all learnable items
 *   DEFAULT_SELECTION  – { categoryId, topicId } for the first topic
 *   findTopic(catId, topicId) – O(1) lookup via Map
 *   topicLookup        – Map<compositeKey, FlatTopic> for external O(1) access
 */

export interface TopicExample {
  code: string
}

export interface Topic {
  id: string
  title: string
  summary?: string
  content?: string
  example?: TopicExample
  realWorld?: string
  commonMistakes?: string
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

export const CATEGORIES: Category[] = [
  {
    id: 'basics',
    title: 'General / Basics',
    topics: [
      {
        id: 'intro',
        title: 'Introduction to HTML',
        summary:
          'HTML is the standard markup language used to describe the structure of every page on the web.',
        content: `
          <p><strong>HTML</strong> stands for <em>HyperText Markup Language</em>.
          It is the language browsers read to know what to render — headings,
          paragraphs, images, links, forms, and more.</p>

          <h4>What HTML is for</h4>
          <ul>
            <li>Describe the <strong>structure</strong> and meaning of content.</li>
            <li>Embed media: images, audio, video.</li>
            <li>Connect documents through <strong>hyperlinks</strong>.</li>
          </ul>

          <h4>What HTML is NOT</h4>
          <ul>
            <li>Not a programming language — it has no logic, loops, or variables.</li>
            <li>Not responsible for visuals (that's <code>CSS</code>) or behavior (that's <code>JavaScript</code>).</li>
          </ul>
        `,
        example: {
          code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`,
        },
        realWorld: `<p>Every website you visit — from Google to GitHub — is built on HTML. Even complex single-page applications ultimately render HTML elements in the browser.</p>`,
        commonMistakes: `<ul>
          <li>Confusing HTML with a programming language — HTML has no variables, loops, or conditionals.</li>
          <li>Forgetting the <code>&lt;!DOCTYPE html&gt;</code> declaration, which can trigger quirks mode.</li>
        </ul>`,
        recap: `<ul>
          <li>HTML = HyperText Markup Language.</li>
          <li>It describes structure, not visuals or behavior.</li>
          <li>Every page needs a doctype, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</li>
        </ul>`,
      },
      {
        id: 'editors',
        title: 'HTML Editors',
        summary: 'You only need a text editor and a browser to write HTML.',
        content: `
          <p>Any plain-text editor can write HTML. Save the file with a
          <code>.html</code> extension and open it in any browser.</p>

          <h4>Popular editors</h4>
          <ul>
            <li><strong>VS Code</strong> — free, fast, great extensions.</li>
            <li><strong>Sublime Text</strong> — minimal and snappy.</li>
            <li><strong>WebStorm</strong> — full IDE with refactoring tools.</li>
          </ul>

          <h4>Online playgrounds</h4>
          <ul>
            <li>CodePen, JSFiddle, StackBlitz — write and preview instantly.</li>
          </ul>
        `,
        example: {
          code: `// 1. Create a file called index.html
// 2. Paste this in:

<!DOCTYPE html>
<html>
  <body>
    <h1>It works!</h1>
  </body>
</html>

// 3. Double-click the file to open it in your browser.`,
        },
      },
      {
        id: 'structure',
        title: 'Basic Structure',
        summary: 'Every HTML document follows the same skeleton.',
        content: `
          <p>An HTML document is made up of a <strong>doctype</strong>, an
          <code>&lt;html&gt;</code> root, a <code>&lt;head&gt;</code> for
          metadata, and a <code>&lt;body&gt;</code> for visible content.</p>

          <h4>The skeleton</h4>
          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code> — tells the browser this is HTML5.</li>
            <li><code>&lt;html&gt;</code> — the root element.</li>
            <li><code>&lt;head&gt;</code> — title, character set, links to CSS, etc.</li>
            <li><code>&lt;body&gt;</code> — everything the user sees.</li>
          </ul>
        `,
        example: {
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page title</title>
  </head>
  <body>
    <h1>Visible heading</h1>
    <p>Visible paragraph.</p>
  </body>
</html>`,
        },
      },
      {
        id: 'elements',
        title: 'Elements',
        summary:
          'An element is a tag pair plus its content — the building block of HTML.',
        content: `
          <p>An <strong>element</strong> usually has an opening tag, content,
          and a closing tag.</p>

          <h4>Anatomy</h4>
          <ul>
            <li><code>&lt;p&gt;</code> — opening tag.</li>
            <li><code>This is content.</code> — text content.</li>
            <li><code>&lt;/p&gt;</code> — closing tag.</li>
          </ul>

          <h4>Void (self-closing) elements</h4>
          <p>Some elements have no content and no closing tag:
          <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>,
          <code>&lt;input&gt;</code>, <code>&lt;hr&gt;</code>,
          <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>.</p>
        `,
        example: {
          code: `<p>This is a paragraph element.</p>
<a href="/about">About</a>
<img src="logo.png" alt="Logo" />
<br />`,
        },
      },
      {
        id: 'attributes',
        title: 'Attributes',
        summary:
          'Attributes give elements extra information — links, images, ids, classes, and more.',
        content: `
          <p>Attributes are written on the <em>opening tag</em> as
          <code>name="value"</code> pairs.</p>

          <h4>Common attributes</h4>
          <ul>
            <li><code>href</code> — destination of a link.</li>
            <li><code>src</code> — source of an image, audio, or video.</li>
            <li><code>alt</code> — text alternative for an image.</li>
            <li><code>id</code> — unique identifier on the page.</li>
            <li><code>class</code> — one or more class names for styling.</li>
            <li><code>title</code> — tooltip text on hover.</li>
          </ul>
        `,
        example: {
          code: `<a href="https://example.com" title="Visit example">
  Example
</a>

<img
  src="/images/cat.jpg"
  alt="A grey cat sitting on a windowsill"
  width="320"
/>`,
        },
      },
      {
        id: 'headings',
        title: 'Headings',
        summary:
          'Headings (h1–h6) describe the outline of your page and are essential for accessibility and SEO.',
        content: `
          <p>HTML offers six levels of headings, from <code>&lt;h1&gt;</code>
          (most important) to <code>&lt;h6&gt;</code>.</p>

          <h4>Rules of thumb</h4>
          <ul>
            <li>Use exactly one <code>&lt;h1&gt;</code> per page — it names the page.</li>
            <li>Don't skip levels (h1 → h2 → h3, not h1 → h4).</li>
            <li>Headings are <strong>structure</strong>, not styling. Use CSS to size them.</li>
          </ul>
        `,
        example: {
          code: `<h1>Page title</h1>

<h2>Section</h2>
  <h3>Subsection</h3>
  <h3>Another subsection</h3>

<h2>Another section</h2>`,
        },
      },
      {
        id: 'paragraphs',
        title: 'Paragraphs',
        summary: 'The <p> element marks a block of running text.',
        content: `
          <p>The <code>&lt;p&gt;</code> element groups a chunk of text into a
          paragraph. The browser adds default vertical spacing between
          paragraphs.</p>

          <h4>Useful inline siblings</h4>
          <ul>
            <li><code>&lt;br&gt;</code> — line break inside a paragraph.</li>
            <li><code>&lt;hr&gt;</code> — thematic break (a horizontal rule).</li>
          </ul>

          <p><strong>Tip:</strong> never use empty <code>&lt;p&gt;</code>
          tags for spacing — use CSS margins instead.</p>
        `,
        example: {
          code: `<p>HTML markup describes structure.</p>
<p>
  Each paragraph is its own block.<br />
  A line break stays inside the same paragraph.
</p>
<hr />
<p>A new section begins below the rule.</p>`,
        },
      },
    ],
  },
  {
    id: 'text',
    title: 'Text & Formatting',
    topics: [
      {
        id: 'formatting',
        title: 'Text Formatting',
        summary:
          'Inline elements add meaning to text — emphasis, importance, code, marks, and more.',
        content: `
          <p>Use the right element for the right meaning, not just for visual
          effect (CSS handles visuals).</p>

          <h4>Common formatting elements</h4>
          <ul>
            <li><code>&lt;strong&gt;</code> — strong importance (usually bold).</li>
            <li><code>&lt;em&gt;</code> — emphasis (usually italic).</li>
            <li><code>&lt;mark&gt;</code> — highlighted text.</li>
            <li><code>&lt;small&gt;</code> — fine print.</li>
            <li><code>&lt;code&gt;</code> — inline code.</li>
            <li><code>&lt;sub&gt;</code> / <code>&lt;sup&gt;</code> — subscript / superscript.</li>
          </ul>
        `,
        example: {
          code: `<p>
  This is <strong>important</strong> and this is <em>emphasized</em>.
</p>
<p>
  Use <code>const</code> in modern JavaScript.
  H<sub>2</sub>O and E = mc<sup>2</sup>.
</p>`,
        },
      },
      {
        id: 'quotations',
        title: 'Quotations',
        summary: 'HTML has dedicated elements for inline and block quotations.',
        content: `
          <p>Use semantic quote elements so screen readers and search engines
          can identify quoted material.</p>

          <h4>Quotation elements</h4>
          <ul>
            <li><code>&lt;q&gt;</code> — short, inline quote (browsers add quotes).</li>
            <li><code>&lt;blockquote&gt;</code> — a longer, block-level quote.</li>
            <li><code>&lt;cite&gt;</code> — title of a referenced work.</li>
            <li><code>&lt;abbr&gt;</code> — abbreviation, with a tooltip via <code>title</code>.</li>
          </ul>
        `,
        example: {
          code: `<p>
  As Dijkstra said,
  <q>Simplicity is prerequisite for reliability.</q>
</p>

<blockquote cite="https://example.com/essay">
  <p>The best way to predict the future is to invent it.</p>
  <cite>— Alan Kay</cite>
</blockquote>

<p>I write <abbr title="HyperText Markup Language">HTML</abbr> daily.</p>`,
        },
      },
      {
        id: 'comments',
        title: 'Comments',
        summary:
          'Comments document your markup and are ignored by the browser.',
        content: `
          <p>HTML comments are wrapped in
          <code>&lt;!-- ... --&gt;</code>. They are visible in <em>View
          Source</em> but never rendered on the page.</p>

          <h4>Good uses</h4>
          <ul>
            <li>Mark major page sections.</li>
            <li>Leave <em>TODO</em> notes for teammates.</li>
            <li>Temporarily disable a block of markup.</li>
          </ul>

          <p><strong>Don't</strong> put secrets, API keys, or sensitive data
          in HTML comments — anyone can read them.</p>
        `,
        example: {
          code: `<!-- Site header -->
<header>
  <h1>My Site</h1>
</header>

<!-- TODO: replace with real navigation once API is ready -->
<nav>...</nav>

<!--
<aside>
  Temporarily disabled.
</aside>
-->`,
        },
      },
    ],
  },
  {
    id: 'media',
    title: 'Links & Media',
    topics: [
      {
        id: 'links',
        title: 'Links',
        summary:
          'Hyperlinks connect documents together — the original superpower of the web.',
        content: `
          <p>The anchor element <code>&lt;a&gt;</code> creates a link. The
          <code>href</code> attribute holds the destination.</p>

          <h4>Useful patterns</h4>
          <ul>
            <li><code>href="/about"</code> — same-site, absolute path.</li>
            <li><code>href="page.html"</code> — relative path.</li>
            <li><code>href="#section"</code> — jump to an id on the page.</li>
            <li><code>href="mailto:hi@example.com"</code> — open the user's mail client.</li>
            <li><code>href="tel:+15551234"</code> — start a phone call on mobile.</li>
            <li><code>target="_blank" rel="noopener"</code> — open in a new tab safely.</li>
          </ul>
        `,
        example: {
          code: `<a href="/about">About this site</a>
<a href="#contact">Jump to contact section</a>
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>External site</a>
<a href="mailto:hello@example.com">Email me</a>`,
        },
      },
      {
        id: 'images',
        title: 'Images',
        summary:
          'The <img> element embeds an image and must always include an alt attribute.',
        content: `
          <p>An image without <code>alt</code> text is invisible to screen
          readers and broken for users on slow connections.</p>

          <h4>Important attributes</h4>
          <ul>
            <li><code>src</code> — path to the image.</li>
            <li><code>alt</code> — text alternative describing the image.</li>
            <li><code>width</code> / <code>height</code> — reserve space and prevent layout shift.</li>
            <li><code>loading="lazy"</code> — defer offscreen images.</li>
          </ul>
        `,
        example: {
          code: `<img
  src="/images/team.jpg"
  alt="The four-person engineering team smiling at a whiteboard"
  width="640"
  height="400"
  loading="lazy"
/>

<!-- Decorative image: empty alt hides it from screen readers. -->
<img src="/images/divider.svg" alt="" />`,
        },
      },
      {
        id: 'favicon',
        title: 'Favicon',
        summary: 'The tiny icon shown in browser tabs and bookmarks.',
        content: `
          <p>A <strong>favicon</strong> is the small icon next to your page
          title in browser tabs. It also shows up in bookmarks and on phone
          home screens.</p>

          <h4>How to add one</h4>
          <ul>
            <li>Place a file at <code>/favicon.ico</code> — most browsers find it automatically.</li>
            <li>Or link to one from <code>&lt;head&gt;</code> using <code>&lt;link rel="icon"&gt;</code>.</li>
            <li>Provide PNGs at multiple sizes (16, 32, 180) for sharper rendering.</li>
          </ul>
        `,
        example: {
          code: `<head>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</head>`,
        },
      },
      {
        id: 'audio',
        title: 'Audio',
        summary: 'Embed playable sound with the <audio> element.',
        content: `
          <p>Provide a <code>controls</code> attribute so the browser shows
          play/pause/volume UI. Offer multiple <code>&lt;source&gt;</code>
          elements for cross-browser format support.</p>
        `,
        example: {
          code: `<audio controls preload="metadata">
  <source src="/media/song.mp3" type="audio/mpeg" />
  <source src="/media/song.ogg" type="audio/ogg" />
  Your browser does not support audio playback.
</audio>`,
        },
      },
      {
        id: 'video',
        title: 'Video',
        summary: 'Embed playable video with the <video> element.',
        content: `
          <p><code>&lt;video&gt;</code> works just like
          <code>&lt;audio&gt;</code> — give it
          <code>controls</code>, set a <code>poster</code> image to show
          before playback, and provide multiple sources.</p>
        `,
        example: {
          code: `<video
  controls
  width="640"
  poster="/images/preview.jpg"
  preload="metadata"
>
  <source src="/media/clip.webm" type="video/webm" />
  <source src="/media/clip.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>`,
        },
      },
    ],
  },
  {
    id: 'lists-tables',
    title: 'Lists & Tables',
    topics: [
      {
        id: 'lists',
        title: 'Lists',
        summary:
          'HTML offers ordered, unordered, and description lists for grouping items.',
        content: `
          <p>Pick the list that matches the meaning of your data:</p>
          <ul>
            <li><code>&lt;ul&gt;</code> — unordered list (bullets).</li>
            <li><code>&lt;ol&gt;</code> — ordered list (numbers).</li>
            <li><code>&lt;dl&gt;</code> — description list (term / definition pairs).</li>
          </ul>

          <h4>Lists can be nested</h4>
          <p>Place a child <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>
          inside an <code>&lt;li&gt;</code> to create sub-items.</p>
        `,
        example: {
          code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Plan</li>
  <li>Build</li>
  <li>Ship</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>Markup language for web pages.</dd>
  <dt>CSS</dt>
  <dd>Styling language for web pages.</dd>
</dl>`,
        },
      },
      {
        id: 'tables',
        title: 'Tables',
        summary:
          'Tables present tabular data — rows and columns with clear relationships.',
        content: `
          <p>Use a <code>&lt;table&gt;</code> only for actual tabular data,
          never for layout.</p>

          <h4>Core elements</h4>
          <ul>
            <li><code>&lt;thead&gt;</code> / <code>&lt;tbody&gt;</code> / <code>&lt;tfoot&gt;</code> — semantic groupings.</li>
            <li><code>&lt;tr&gt;</code> — a row.</li>
            <li><code>&lt;th&gt;</code> — a header cell.</li>
            <li><code>&lt;td&gt;</code> — a data cell.</li>
            <li><code>&lt;caption&gt;</code> — short table title for accessibility.</li>
          </ul>
        `,
        example: {
          code: `<table>
  <caption>Q1 sales by region</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">North</th>
      <td>$12,400</td>
    </tr>
    <tr>
      <th scope="row">South</th>
      <td>$9,800</td>
    </tr>
  </tbody>
</table>`,
        },
      },
    ],
  },
  {
    id: 'forms',
    title: 'Forms',
    topics: [
      {
        id: 'forms-intro',
        title: 'Forms',
        summary: 'Forms collect user input and submit it to a server.',
        content: `
          <p>The <code>&lt;form&gt;</code> element wraps a group of controls.
          When the user submits, the browser sends the form's data to the
          URL given in <code>action</code> using the
          <code>method</code> verb.</p>

          <h4>Always pair inputs with labels</h4>
          <p>Use <code>&lt;label for="id"&gt;</code> so clicking the label
          focuses the input — and screen readers announce them together.</p>
        `,
        example: {
          code: `<form action="/api/contact" method="post">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <button type="submit">Send</button>
</form>`,
        },
      },
      {
        id: 'input-types',
        title: 'Input Types',
        summary:
          'The type attribute changes the keyboard, validation, and UI of an input.',
        content: `
          <p>Modern HTML ships with many specialized input types. Pick the
          right one and the browser does most of the work for you.</p>

          <h4>Common types</h4>
          <ul>
            <li><code>text</code>, <code>email</code>, <code>url</code>, <code>tel</code>, <code>password</code>, <code>search</code></li>
            <li><code>number</code>, <code>range</code></li>
            <li><code>date</code>, <code>time</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code></li>
            <li><code>checkbox</code>, <code>radio</code></li>
            <li><code>color</code>, <code>file</code>, <code>hidden</code></li>
          </ul>
        `,
        example: {
          code: `<input type="email"    placeholder="you@site.com" />
<input type="tel"      placeholder="+1 555 123 4567" />
<input type="number"   min="0" max="100" step="1" />
<input type="range"    min="0" max="100" value="50" />
<input type="date" />
<input type="color"    value="#12408e" />
<input type="checkbox" id="news" />
<label for="news">Send me updates</label>`,
        },
      },
      {
        id: 'form-attributes',
        title: 'Form Attributes',
        summary:
          'Validation, autofill, and UX hints — all driven by attributes.',
        content: `
          <p>Lean on built-in attributes before reaching for JavaScript.</p>

          <h4>Validation</h4>
          <ul>
            <li><code>required</code> — field must be filled.</li>
            <li><code>minlength</code> / <code>maxlength</code> — string length limits.</li>
            <li><code>min</code> / <code>max</code> — numeric / date range limits.</li>
            <li><code>pattern</code> — regex the value must match.</li>
          </ul>

          <h4>Autofill &amp; UX</h4>
          <ul>
            <li><code>autocomplete</code> — let browsers prefill (e.g. <code>email</code>, <code>cc-number</code>).</li>
            <li><code>placeholder</code> — short hint shown when the field is empty.</li>
            <li><code>autofocus</code> — focus on page load.</li>
            <li><code>readonly</code> / <code>disabled</code> — non-editable / inactive.</li>
          </ul>
        `,
        example: {
          code: `<form>
  <label for="user">Username</label>
  <input
    id="user"
    name="user"
    type="text"
    required
    minlength="3"
    maxlength="20"
    pattern="[a-zA-Z0-9_]+"
    autocomplete="username"
    autofocus
  />

  <label for="pw">Password</label>
  <input
    id="pw"
    name="pw"
    type="password"
    required
    minlength="8"
    autocomplete="new-password"
  />

  <button type="submit">Create account</button>
</form>`,
        },
      },
    ],
  },
  {
    id: 'semantic',
    title: 'Semantic & Layout',
    topics: [
      {
        id: 'semantic-elements',
        title: 'Semantic Elements',
        summary:
          'Semantic tags describe what a region means, not just how it looks.',
        content: `
          <p>Semantic markup helps assistive tech, search engines, and
          future-you understand a page at a glance.</p>

          <h4>Page-level landmarks</h4>
          <ul>
            <li><code>&lt;header&gt;</code> — introductory content of a page or section.</li>
            <li><code>&lt;nav&gt;</code> — primary navigation links.</li>
            <li><code>&lt;main&gt;</code> — the main content (one per page).</li>
            <li><code>&lt;article&gt;</code> — self-contained content (post, card).</li>
            <li><code>&lt;section&gt;</code> — a thematic grouping with a heading.</li>
            <li><code>&lt;aside&gt;</code> — tangentially related content.</li>
            <li><code>&lt;footer&gt;</code> — closing content of a page or section.</li>
          </ul>
        `,
        example: {
          code: `<header>
  <h1>My Blog</h1>
  <nav><a href="/">Home</a> · <a href="/about">About</a></nav>
</header>

<main>
  <article>
    <h2>How HTML stays useful</h2>
    <p>...</p>
  </article>

  <aside>
    <h3>Related</h3>
    <ul><li><a href="/posts/1">Earlier post</a></li></ul>
  </aside>
</main>

<footer>© 2026 My Blog</footer>`,
        },
      },
      {
        id: 'layout',
        title: 'Layout',
        summary:
          'Combine semantic landmarks and CSS to build clear, responsive layouts.',
        content: `
          <p>HTML defines the <strong>regions</strong>; CSS positions them.
          A typical page has a header, a main content area, optionally a
          sidebar, and a footer.</p>

          <h4>Best practices</h4>
          <ul>
            <li>Use one <code>&lt;main&gt;</code> per page — it's the primary landmark.</li>
            <li>Don't replace landmarks with <code>&lt;div&gt;</code> when a semantic tag fits.</li>
            <li>Style with CSS Grid or Flexbox — never use tables for layout.</li>
          </ul>
        `,
        example: {
          code: `<body>
  <header>...</header>
  <nav>...</nav>

  <div class="layout">
    <main>...</main>
    <aside>...</aside>
  </div>

  <footer>...</footer>
</body>

<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 24px;
  }
</style>`,
        },
      },
      {
        id: 'div-span',
        title: 'Div & Span',
        summary:
          'Generic containers — reach for them only when no semantic tag applies.',
        content: `
          <p><code>&lt;div&gt;</code> is a block-level generic container.
          <code>&lt;span&gt;</code> is its inline counterpart. They have
          <strong>no inherent meaning</strong> — they exist purely to hook
          CSS or JavaScript onto a region.</p>

          <h4>Rule of thumb</h4>
          <p>If a semantic element exists for what you're building (a
          <code>&lt;nav&gt;</code>, a <code>&lt;button&gt;</code>, an
          <code>&lt;article&gt;</code>) — use it. Use
          <code>&lt;div&gt;</code> / <code>&lt;span&gt;</code> only when
          nothing else fits.</p>
        `,
        example: {
          code: `<!-- Generic block wrapper used as a styling hook -->
<div class="card">
  <h3>Card title</h3>
  <p>
    This card has a <span class="highlight">highlighted word</span>
    inside the paragraph.
  </p>
</div>`,
        },
      },
    ],
  },
  {
    id: 'a11y',
    title: 'Accessibility & Best Practices',
    topics: [
      {
        id: 'accessibility',
        title: 'Accessibility (ARIA basics)',
        summary:
          'Make your pages usable by everyone — including people who navigate by keyboard or screen reader.',
        content: `
          <p>The <strong>first rule of ARIA</strong>: don't use ARIA. Reach
          for a native HTML element first — it's accessible by default.</p>

          <h4>Quick wins</h4>
          <ul>
            <li>Always include <code>alt</code> text on images.</li>
            <li>Always use <code>&lt;label&gt;</code> with form inputs.</li>
            <li>Use <code>&lt;button&gt;</code> for actions and <code>&lt;a&gt;</code> for navigation.</li>
            <li>Maintain a logical heading order (h1 → h2 → h3).</li>
            <li>Ensure keyboard focus is visible and follows reading order.</li>
          </ul>

          <h4>When you do need ARIA</h4>
          <ul>
            <li><code>aria-label</code> — gives an element an accessible name when no visible label exists.</li>
            <li><code>aria-hidden="true"</code> — hides decorative content from assistive tech.</li>
            <li><code>role</code> — overrides an element's implicit role (rarely needed if you use semantic HTML).</li>
          </ul>
        `,
        example: {
          code: `<!-- Icon-only button: aria-label gives it an accessible name. -->
<button type="button" aria-label="Close dialog">
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
</button>

<!-- Decorative image: empty alt + aria-hidden. -->
<img src="/divider.svg" alt="" aria-hidden="true" />`,
        },
      },
      {
        id: 'seo',
        title: 'SEO Basics',
        summary:
          'Help search engines understand and rank your content with simple, repeatable hygiene.',
        content: `
          <p>Search engines read your HTML to figure out what your page is
          about. A few small tags do most of the heavy lifting.</p>

          <h4>Essentials in &lt;head&gt;</h4>
          <ul>
            <li><code>&lt;title&gt;</code> — the most important on-page SEO tag.</li>
            <li><code>&lt;meta name="description"&gt;</code> — short summary shown in search results.</li>
            <li><code>&lt;link rel="canonical"&gt;</code> — preferred URL when content is reachable from multiple paths.</li>
            <li><code>&lt;meta property="og:..."&gt;</code> — Open Graph tags for social sharing previews.</li>
          </ul>

          <h4>On-page essentials</h4>
          <ul>
            <li>One clear <code>&lt;h1&gt;</code>.</li>
            <li>Descriptive link text — never <em>"click here"</em>.</li>
            <li>Image <code>alt</code> text that describes the content.</li>
            <li>Fast load times and mobile-friendly layout.</li>
          </ul>
        `,
        example: {
          code: `<head>
  <title>Learn HTML — A practical guide</title>
  <meta
    name="description"
    content="A friendly, structured guide to HTML — from your first tag to accessible, semantic layouts."
  />
  <link rel="canonical" href="https://example.com/learn/html" />

  <meta property="og:title"       content="Learn HTML — A practical guide" />
  <meta property="og:description" content="From first tag to accessible layouts." />
  <meta property="og:image"       content="https://example.com/og/learn-html.png" />
  <meta property="og:type"        content="article" />
</head>`,
        },
      },
      {
        id: 'best-practices',
        title: 'Best Practices',
        summary:
          'A short, opinionated checklist for clean, professional HTML.',
        content: `
          <h4>Structure</h4>
          <ul>
            <li>Always start with <code>&lt;!DOCTYPE html&gt;</code> and set <code>&lt;html lang="en"&gt;</code>.</li>
            <li>Use semantic landmarks instead of generic <code>&lt;div&gt;</code> soup.</li>
            <li>Maintain a logical heading hierarchy.</li>
          </ul>

          <h4>Quality</h4>
          <ul>
            <li>Validate your markup (the W3C validator catches a lot for free).</li>
            <li>Keep indentation consistent (2 spaces is plenty).</li>
            <li>Lower-case tag and attribute names.</li>
            <li>Quote attribute values: <code>class="card"</code>, not <code>class=card</code>.</li>
          </ul>

          <h4>Performance &amp; UX</h4>
          <ul>
            <li>Set <code>width</code> and <code>height</code> on images to avoid layout shift.</li>
            <li>Use <code>loading="lazy"</code> for offscreen media.</li>
            <li>Defer non-critical scripts with <code>defer</code> or <code>async</code>.</li>
            <li>Always include the viewport meta tag for mobile.</li>
          </ul>
        `,
        example: {
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Clean HTML Starter</title>
    <link rel="stylesheet" href="/styles/main.css" />
    <script src="/app.js" defer></script>
  </head>
  <body>
    <header>...</header>
    <main>
      <h1>Page heading</h1>
      <p>Welcome.</p>
    </main>
    <footer>...</footer>
  </body>
</html>`,
        },
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced HTML',
    topics: [
      {
        id: 'classes',
        title: 'HTML Classes',
        summary: 'The class attribute groups elements together so CSS and JavaScript can target them.',
        content: `
          <p>The <code>class</code> attribute attaches one or more space-separated names to an element. Classes are <strong>reusable</strong> — many elements can share the same class.</p>

          <h4>How they're used</h4>
          <ul>
            <li><strong>CSS</strong>: <code>.card { ... }</code> styles every element with <code>class="card"</code>.</li>
            <li><strong>JavaScript</strong>: <code>document.querySelectorAll('.card')</code>.</li>
            <li>An element can carry multiple classes: <code>class="card card--featured"</code>.</li>
          </ul>
        `,
        example: {
          code: `<article class="card card--featured">
  <h3 class="card__title">Pinned post</h3>
  <p class="card__body">Reusable styles via class names.</p>
</article>

<style>
  .card { padding: 16px; border-radius: 8px; }
  .card--featured { border: 2px solid gold; }
</style>`,
        },
      },
      {
        id: 'id',
        title: 'HTML Id',
        summary: 'The id attribute uniquely identifies a single element on the page.',
        content: `
          <p>An <code>id</code> must be <strong>unique</strong> within the document. Use it to link directly to a section, label a form control, or grab a specific element from JavaScript.</p>

          <h4>Where ids shine</h4>
          <ul>
            <li>Anchor links: <code>href="#pricing"</code> jumps to <code>id="pricing"</code>.</li>
            <li>Pairing labels with inputs: <code>&lt;label for="email"&gt;</code>.</li>
            <li>Quick lookup: <code>document.getElementById('app')</code>.</li>
          </ul>
        `,
        example: {
          code: `<a href="#pricing">Jump to pricing</a>

<section id="pricing">
  <h2>Pricing</h2>
  <p>Three simple plans...</p>
</section>

<label for="email">Email</label>
<input id="email" type="email" />`,
        },
      },
      {
        id: 'iframes',
        title: 'HTML Iframes',
        summary: 'Embed another HTML document inside the current page using an inline frame.',
        content: `
          <p>An <code>&lt;iframe&gt;</code> renders a separate document — a map, a video, a third-party widget — inside your page.</p>

          <h4>Important attributes</h4>
          <ul>
            <li><code>src</code> — URL to load.</li>
            <li><code>title</code> — accessible name for screen readers.</li>
            <li><code>loading="lazy"</code> — defer loading until visible.</li>
            <li><code>sandbox</code> — restrict what the embedded page can do.</li>
            <li><code>allow</code> — grant features (camera, fullscreen, etc.).</li>
          </ul>
        `,
        example: {
          code: `<iframe
  src="https://www.openstreetmap.org/export/embed.html"
  title="Map of Berlin"
  width="600"
  height="400"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
></iframe>`,
        },
      },
      {
        id: 'javascript',
        title: 'HTML JavaScript',
        summary: 'Use the <script> element to add behavior to your HTML pages.',
        content: `
          <p>Scripts can be inline or loaded from a URL. Always prefer external files — they cache and stay tidy.</p>

          <h4>Loading attributes</h4>
          <ul>
            <li><code>defer</code> — download in parallel, run after parsing. Best for most scripts.</li>
            <li><code>async</code> — download in parallel, run as soon as ready (order not guaranteed).</li>
            <li><code>type="module"</code> — modern ES modules with <code>import</code> / <code>export</code>.</li>
          </ul>

          <p>The <code>&lt;noscript&gt;</code> element shows fallback content when JavaScript is disabled.</p>
        `,
        example: {
          code: `<head>
  <script src="/js/analytics.js" async></script>
  <script src="/js/app.js" defer></script>
</head>

<body>
  <button id="hi">Say hi</button>

  <script>
    document.getElementById('hi').addEventListener('click', () => {
      alert('Hello!');
    });
  </script>

  <noscript>
    <p>This site works best with JavaScript enabled.</p>
  </noscript>
</body>`,
        },
      },
      {
        id: 'file-paths',
        title: 'HTML File Paths',
        summary: 'Tell the browser where to find files using absolute or relative paths.',
        content: `
          <p>Paths describe how to locate a file from the current document.</p>

          <h4>Path types</h4>
          <ul>
            <li><code>/images/logo.png</code> — <strong>root-relative</strong>: starts at the site root.</li>
            <li><code>images/logo.png</code> — <strong>document-relative</strong>: relative to the current file.</li>
            <li><code>../images/logo.png</code> — <code>..</code> goes up one folder.</li>
            <li><code>./images/logo.png</code> — <code>.</code> is the current folder (optional).</li>
            <li><code>https://example.com/logo.png</code> — <strong>absolute</strong> URL.</li>
          </ul>
        `,
        example: {
          code: `<!-- Same folder -->
<img src="logo.png" alt="Logo" />

<!-- Subfolder -->
<img src="images/logo.png" alt="Logo" />

<!-- One folder up -->
<img src="../shared/logo.png" alt="Logo" />

<!-- Site root -->
<img src="/assets/logo.png" alt="Logo" />

<!-- Absolute -->
<img src="https://cdn.example.com/logo.png" alt="Logo" />`,
        },
      },
      {
        id: 'head',
        title: 'HTML Head',
        summary: 'The <head> holds metadata about the page — invisible to readers but vital for browsers and search engines.',
        content: `
          <p>Anything in <code>&lt;head&gt;</code> describes the document itself: title, character set, viewport, links to stylesheets, scripts, and meta tags for SEO and social previews.</p>

          <h4>Most common head children</h4>
          <ul>
            <li><code>&lt;title&gt;</code> — the tab title.</li>
            <li><code>&lt;meta charset&gt;</code> — character encoding (always UTF-8).</li>
            <li><code>&lt;meta name="viewport"&gt;</code> — responsive scaling on mobile.</li>
            <li><code>&lt;link rel="stylesheet"&gt;</code> — load a CSS file.</li>
            <li><code>&lt;link rel="icon"&gt;</code> — favicon.</li>
            <li><code>&lt;script&gt;</code> — load JavaScript.</li>
          </ul>
        `,
        example: {
          code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Page</title>
  <meta name="description" content="A short page description." />

  <link rel="icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/styles/main.css" />
  <script src="/app.js" defer></script>
</head>`,
        },
      },
      {
        id: 'responsive',
        title: 'HTML Responsive',
        summary: 'A handful of HTML hooks make pages adapt cleanly to phones, tablets, and desktops.',
        content: `
          <p>Responsive design is mostly CSS, but HTML provides the foundation.</p>

          <h4>HTML pieces of responsiveness</h4>
          <ul>
            <li>The viewport meta tag — <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>.</li>
            <li><code>&lt;picture&gt;</code> + <code>&lt;source&gt;</code> — serve different images at different breakpoints.</li>
            <li>The <code>srcset</code> and <code>sizes</code> attributes on <code>&lt;img&gt;</code> — pick the right resolution.</li>
          </ul>
        `,
        example: {
          code: `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<picture>
  <source media="(min-width: 900px)" srcset="/img/hero-large.jpg" />
  <source media="(min-width: 480px)" srcset="/img/hero-medium.jpg" />
  <img src="/img/hero-small.jpg" alt="Mountain at sunrise" />
</picture>`,
        },
      },
      {
        id: 'computer-code',
        title: 'HTML Computercode',
        summary: 'Special elements for code samples, keyboard input, sample output, and variables.',
        content: `
          <p>HTML has a small family of elements built specifically for showing code-related content.</p>

          <h4>The "computer code" elements</h4>
          <ul>
            <li><code>&lt;code&gt;</code> — inline code snippet.</li>
            <li><code>&lt;pre&gt;</code> — preserves whitespace for code blocks.</li>
            <li><code>&lt;kbd&gt;</code> — keyboard input the user should press.</li>
            <li><code>&lt;samp&gt;</code> — sample output from a program.</li>
            <li><code>&lt;var&gt;</code> — a variable name in code or math.</li>
          </ul>
        `,
        example: {
          code: `<p>Use the <code>map()</code> method to transform an array.</p>

<pre><code>const doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled); // [2, 4, 6]</code></pre>

<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<p>The program printed: <samp>Connection failed.</samp></p>
<p>For a circle, area = π · <var>r</var><sup>2</sup>.</p>`,
        },
      },
    ],
  },
  {
    id: 'styling',
    title: 'Styling & Colors',
    topics: [
      {
        id: 'colors',
        title: 'HTML Colors',
        summary: 'Color values can be written as names, hex, RGB, HSL, or modern formats like oklch.',
        content: `
          <p>Anywhere CSS expects a color, you can pick the format that fits.</p>

          <h4>Common color formats</h4>
          <ul>
            <li><strong>Named</strong>: <code>red</code>, <code>tomato</code>, <code>rebeccapurple</code>.</li>
            <li><strong>Hex</strong>: <code>#12408e</code> or short form <code>#123</code>.</li>
            <li><strong>RGB / RGBA</strong>: <code>rgb(18 64 142)</code>, <code>rgb(18 64 142 / 0.5)</code>.</li>
            <li><strong>HSL / HSLA</strong>: <code>hsl(217 78% 31%)</code>.</li>
            <li><strong>Modern</strong>: <code>oklch(60% 0.18 250)</code>, <code>color-mix()</code>.</li>
          </ul>
        `,
        example: {
          code: `<p style="color: tomato;">Named</p>
<p style="color: #12408e;">Hex</p>
<p style="color: rgb(18 64 142);">RGB</p>
<p style="color: rgb(18 64 142 / 0.6);">RGB + alpha</p>
<p style="color: hsl(217 78% 31%);">HSL</p>
<p style="color: oklch(60% 0.18 250);">OKLCH</p>`,
        },
      },
      {
        id: 'css',
        title: 'HTML CSS',
        summary: 'There are three ways to attach CSS to HTML — external, internal, and inline.',
        content: `
          <p>CSS is what makes a page look like anything. HTML simply hosts the styles, in one of three ways.</p>

          <h4>Three ways to apply CSS</h4>
          <ul>
            <li><strong>External</strong> — <code>&lt;link rel="stylesheet" href="..."&gt;</code>. Best for real projects.</li>
            <li><strong>Internal</strong> — <code>&lt;style&gt;</code> block in <code>&lt;head&gt;</code>. Good for one-off pages.</li>
            <li><strong>Inline</strong> — <code>style="..."</code> on an element. Use sparingly.</li>
          </ul>

          <p>Cascade order: inline beats internal/external when specificity ties.</p>
        `,
        example: {
          code: `<!-- 1. External -->
<link rel="stylesheet" href="/styles/main.css" />

<!-- 2. Internal -->
<style>
  body { font-family: system-ui, sans-serif; }
  h1   { color: #12408e; }
</style>

<!-- 3. Inline -->
<p style="color: tomato; font-weight: bold;">
  Hot tip
</p>`,
        },
      },
      {
        id: 'style-guide',
        title: 'HTML Style Guide',
        summary: 'A short, opinionated style guide for writing clean, consistent HTML.',
        content: `
          <h4>Document</h4>
          <ul>
            <li>Always start with <code>&lt;!DOCTYPE html&gt;</code>.</li>
            <li>Set a language: <code>&lt;html lang="en"&gt;</code>.</li>
            <li>Specify a charset: <code>&lt;meta charset="UTF-8"&gt;</code>.</li>
            <li>Include a viewport meta for mobile.</li>
          </ul>

          <h4>Markup</h4>
          <ul>
            <li>Lower-case tag and attribute names.</li>
            <li>Always quote attribute values.</li>
            <li>Use 2-space indentation consistently.</li>
            <li>Close all elements (even self-closing-friendly ones for clarity).</li>
            <li>One blank line between major page sections.</li>
          </ul>
        `,
        example: {
          code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Style Guide Example</title>
  </head>
  <body>
    <header class="site-header">
      <h1 class="site-header__title">Hello</h1>
    </header>
  </body>
</html>`,
        },
      },
    ],
  },
  {
    id: 'metadata',
    title: 'Metadata & Structure',
    topics: [
      {
        id: 'page-title',
        title: 'HTML Page Title',
        summary: 'The <title> element names the page in tabs, history, and search results.',
        content: `
          <p>Every HTML document needs exactly one <code>&lt;title&gt;</code> inside <code>&lt;head&gt;</code>.</p>

          <h4>Why it matters</h4>
          <ul>
            <li>Shown in browser tabs and bookmarks.</li>
            <li>Used as the default share title.</li>
            <li>Heavily weighted by search engines.</li>
          </ul>

          <p><strong>Tip:</strong> keep titles under ~60 characters and put the most important words first.</p>
        `,
        example: {
          code: `<head>
  <title>Pricing — Acme Cloud</title>
</head>`,
        },
      },
      {
        id: 'charsets',
        title: 'HTML Charsets',
        summary: 'Tell the browser which character encoding your file uses — almost always UTF-8.',
        content: `
          <p>The <code>&lt;meta charset&gt;</code> tag must appear in <code>&lt;head&gt;</code> as early as possible — ideally as the very first child.</p>

          <h4>Why UTF-8</h4>
          <ul>
            <li>Covers every script: Latin, Cyrillic, Arabic, CJK, emoji.</li>
            <li>Default for HTML5.</li>
            <li>Save your files as UTF-8 too — encoding mismatches cause "mojibake".</li>
          </ul>
        `,
        example: {
          code: `<head>
  <meta charset="UTF-8" />
  <title>Café — résumé builder</title>
</head>`,
        },
      },
      {
        id: 'entities',
        title: 'HTML Entities',
        summary: 'Use entities to display reserved characters like <, >, and & literally.',
        content: `
          <p>If you literally want to show a <code>&lt;</code> or <code>&amp;</code> on the page, you have to escape it with an entity.</p>

          <h4>Most useful entities</h4>
          <ul>
            <li><code>&amp;lt;</code> → <code>&lt;</code></li>
            <li><code>&amp;gt;</code> → <code>&gt;</code></li>
            <li><code>&amp;amp;</code> → <code>&amp;</code></li>
            <li><code>&amp;quot;</code> → <code>"</code></li>
            <li><code>&amp;nbsp;</code> → non-breaking space.</li>
            <li><code>&amp;copy;</code> → ©, <code>&amp;reg;</code> → ®, <code>&amp;mdash;</code> → —.</li>
          </ul>
        `,
        example: {
          code: `<p>Use &lt;p&gt; for paragraphs and &lt;a&gt; for links.</p>
<p>Tom &amp; Jerry &mdash; a classic.</p>
<p>&copy; 2026 Acme, Inc.</p>
<p>Five&nbsp;dollars (the space won't break).</p>`,
        },
      },
      {
        id: 'symbols',
        title: 'HTML Symbols',
        summary: 'Math, currency, arrows, and Greek letters via named entities or numeric codes.',
        content: `
          <p>Many symbols have memorable named entities; the rest you can reference by Unicode code point.</p>

          <h4>Examples</h4>
          <ul>
            <li>Math: <code>&amp;times;</code> (×), <code>&amp;divide;</code> (÷), <code>&amp;plusmn;</code> (±).</li>
            <li>Currency: <code>&amp;euro;</code> (€), <code>&amp;pound;</code> (£), <code>&amp;yen;</code> (¥).</li>
            <li>Arrows: <code>&amp;larr;</code> (←), <code>&amp;rarr;</code> (→).</li>
            <li>Greek: <code>&amp;alpha;</code> (α), <code>&amp;beta;</code> (β), <code>&amp;pi;</code> (π).</li>
          </ul>
        `,
        example: {
          code: `<p>3 &times; 4 = 12, 12 &divide; 4 = 3.</p>
<p>Total: &euro;42.50</p>
<p>Go &rarr; or back &larr;</p>
<p>Area = &pi; &times; r&sup2;</p>`,
        },
      },
      {
        id: 'emojis',
        title: 'HTML Emojis',
        summary: 'Emojis are just Unicode characters — use them anywhere text goes.',
        content: `
          <p>Save your file as <strong>UTF-8</strong> and you can paste emoji directly into your HTML.</p>

          <h4>Three ways to write emoji</h4>
          <ul>
            <li>Paste directly: <code>🚀</code></li>
            <li>HTML decimal entity: <code>&amp;#128640;</code> → 🚀</li>
            <li>HTML hex entity: <code>&amp;#x1F680;</code> → 🚀</li>
          </ul>
        `,
        example: {
          code: `<p>Ship it 🚀</p>
<p>Pasted: 🐱 &nbsp; Decimal: &#128049; &nbsp; Hex: &#x1F431;</p>

<style>
  .big-emoji { font-size: 48px; }
</style>
<span class="big-emoji">🌍</span>`,
        },
      },
    ],
  },
  {
    id: 'graphics',
    title: 'Graphics',
    topics: [
      {
        id: 'canvas',
        title: 'HTML Canvas',
        summary: 'A bitmap drawing surface controlled with JavaScript — great for games and data viz.',
        content: `
          <p><code>&lt;canvas&gt;</code> is a blank rectangle of pixels. You drive it with the 2D drawing context API or WebGL.</p>

          <h4>Basic flow</h4>
          <ul>
            <li>Add <code>&lt;canvas width="..." height="..."&gt;</code>.</li>
            <li>Get a 2D context: <code>canvas.getContext('2d')</code>.</li>
            <li>Call drawing methods: <code>fillRect</code>, <code>arc</code>, <code>drawImage</code>.</li>
          </ul>
        `,
        example: {
          code: `<canvas id="board" width="320" height="160">
  Your browser does not support canvas.
</canvas>

<script>
  const ctx = document.getElementById('board').getContext('2d');
  ctx.fillStyle = '#12408e';
  ctx.fillRect(20, 20, 120, 80);

  ctx.beginPath();
  ctx.arc(220, 80, 50, 0, Math.PI * 2);
  ctx.fillStyle = 'tomato';
  ctx.fill();
</script>`,
        },
      },
      {
        id: 'svg',
        title: 'HTML SVG',
        summary: 'Scalable Vector Graphics — crisp, accessible, scriptable shapes that scale to any size.',
        content: `
          <p>SVG is XML-based vector graphics. Unlike canvas, every shape is a real DOM element — styleable with CSS, animatable, and scriptable.</p>

          <h4>Why SVG</h4>
          <ul>
            <li>Scales without blur — perfect for icons and logos.</li>
            <li>Tiny file size for simple shapes.</li>
            <li>Each shape can be styled and animated individually.</li>
            <li>Accessible: add <code>&lt;title&gt;</code> and <code>&lt;desc&gt;</code> for a name and description.</li>
          </ul>
        `,
        example: {
          code: `<svg
  width="120"
  height="120"
  viewBox="0 0 24 24"
  role="img"
  aria-labelledby="heart-title"
>
  <title id="heart-title">Heart icon</title>
  <path
    d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z"
    fill="tomato"
  />
</svg>`,
        },
      },
    ],
  },
  {
    id: 'apis',
    title: 'APIs & Browser Features',
    topics: [
      {
        id: 'web-apis',
        title: 'HTML Web APIs',
        summary: 'Modern browsers ship dozens of APIs that bring native-app powers to web pages.',
        content: `
          <p>Web APIs are JavaScript interfaces baked into the browser. You don't install them — just call them.</p>

          <h4>A small sampler</h4>
          <ul>
            <li><strong>Fetch</strong> — <code>fetch(url)</code> for HTTP requests.</li>
            <li><strong>Geolocation</strong> — get the user's location (with consent).</li>
            <li><strong>Web Storage</strong> — <code>localStorage</code> / <code>sessionStorage</code>.</li>
            <li><strong>Notifications</strong> — push system notifications.</li>
            <li><strong>Clipboard</strong> — read/write the system clipboard.</li>
            <li><strong>IntersectionObserver</strong> — react to elements entering the viewport.</li>
          </ul>
        `,
        example: {
          code: `const res = await fetch('/api/users');
const data = await res.json();

localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add('seen');
  }
});
document.querySelectorAll('.lazy').forEach((el) => io.observe(el));`,
        },
      },
      {
        id: 'geolocation',
        title: 'HTML Geolocation',
        summary: 'Ask the user for their location and receive coordinates from the browser.',
        content: `
          <p>The Geolocation API lives at <code>navigator.geolocation</code>. The browser asks the user for permission first.</p>

          <h4>Two main methods</h4>
          <ul>
            <li><code>getCurrentPosition()</code> — one-shot location read.</li>
            <li><code>watchPosition()</code> — stream of location updates.</li>
          </ul>

          <p>Geolocation only works on secure origins (HTTPS or localhost).</p>
        `,
        example: {
          code: `<button id="locate">Where am I?</button>
<p id="out"></p>

<script>
  document.getElementById('locate').addEventListener('click', () => {
    if (!navigator.geolocation) {
      out.textContent = 'Geolocation not supported.';
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        out.textContent = \`Lat: \${latitude}, Lng: \${longitude}\`;
      },
      (err) => { out.textContent = 'Error: ' + err.message; }
    );
  });
</script>`,
        },
      },
      {
        id: 'web-storage',
        title: 'HTML Web Storage',
        summary: 'Persist small bits of data in the browser via localStorage and sessionStorage.',
        content: `
          <p>Both <code>localStorage</code> and <code>sessionStorage</code> are key/value stores keyed by origin.</p>

          <h4>Differences</h4>
          <ul>
            <li><strong>localStorage</strong> — survives tab close and browser restart.</li>
            <li><strong>sessionStorage</strong> — cleared when the tab closes.</li>
            <li>Both store strings only — serialize objects with <code>JSON.stringify</code>.</li>
            <li>Quota is typically ~5 MB per origin.</li>
          </ul>
        `,
        example: {
          code: `localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Ada' }));

const user = JSON.parse(localStorage.getItem('user') || 'null');

localStorage.removeItem('user');
localStorage.clear();

sessionStorage.setItem('cart-step', '2');`,
        },
      },
    ],
  },
  {
    id: 'practice',
    title: 'Examples & Practice',
    topics: [
      {
        id: 'examples',
        title: 'HTML Examples',
        summary: 'A growing set of real-world HTML snippets you can copy, paste, and tweak.',
        content: `
          <p>Working examples are the fastest way to internalize HTML. Each snippet below is small on purpose — paste it into a blank <code>.html</code> file and tinker.</p>

          <h4>Try these</h4>
          <ul>
            <li>A semantic blog post layout.</li>
            <li>A simple contact form with validation.</li>
            <li>A responsive image gallery using <code>&lt;picture&gt;</code>.</li>
            <li>A keyboard-friendly modal dialog with <code>&lt;dialog&gt;</code>.</li>
          </ul>
        `,
        example: {
          code: `<dialog id="info">
  <form method="dialog">
    <h2>Hello</h2>
    <p>This is a native HTML dialog.</p>
    <button>Close</button>
  </form>
</dialog>

<button onclick="info.showModal()">Open dialog</button>`,
        },
      },
      {
        id: 'quiz',
        title: 'HTML Quiz',
        summary: 'Quick multiple-choice questions to check what you remember from each section.',
        content: `
          <p><strong>Sample question:</strong> Which element is the correct choice for the most important heading on a page?</p>

          <ol type="A">
            <li><code>&lt;h1&gt;</code></li>
            <li><code>&lt;header&gt;</code></li>
            <li><code>&lt;title&gt;</code></li>
            <li><code>&lt;strong&gt;</code></li>
          </ol>

          <p><em>Answer: A — exactly one <code>&lt;h1&gt;</code> per page.</em></p>
        `,
      },
      {
        id: 'interview-prep',
        title: 'HTML Interview Prep',
        summary: 'Common HTML interview questions with succinct, senior-grade answers.',
        content: `
          <h4>Sample questions</h4>
          <ul>
            <li><strong>Why does the <code>&lt;!DOCTYPE&gt;</code> matter?</strong> It triggers standards mode in browsers; without it you fall into quirks mode.</li>
            <li><strong>Difference between an id and a class?</strong> Ids are unique per page; classes can repeat. Both are CSS / JS hooks.</li>
            <li><strong>What is semantic HTML?</strong> Markup that describes the meaning of content (<code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>) — not just its appearance.</li>
            <li><strong>How does <code>defer</code> differ from <code>async</code>?</strong> Both download in parallel, but <code>defer</code> preserves order and runs after parsing; <code>async</code> runs as soon as ready, in any order.</li>
          </ul>
        `,
      },
      {
        id: 'summary',
        title: 'HTML Summary',
        summary: 'A one-page recap of every essential idea covered in the curriculum.',
        content: `
          <h4>The big picture</h4>
          <ul>
            <li>HTML describes <strong>structure</strong>, not visuals or behavior.</li>
            <li>Every page has a doctype, an <code>&lt;html&gt;</code> root, a <code>&lt;head&gt;</code>, and a <code>&lt;body&gt;</code>.</li>
            <li>Use semantic elements before generic <code>&lt;div&gt;</code> / <code>&lt;span&gt;</code>.</li>
          </ul>

          <h4>Habits that pay off</h4>
          <ul>
            <li>One <code>&lt;h1&gt;</code>; logical heading hierarchy.</li>
            <li>Always include <code>alt</code> text on images and labels on inputs.</li>
            <li>Validate your markup; keep tag and attribute names lower-case.</li>
            <li>Lean on browser features (validation, lazy loading, semantic landmarks) before adding JavaScript.</li>
          </ul>

          <p>If you remember just one thing: <em>HTML is for meaning. CSS is for looks. JavaScript is for behavior.</em></p>
        `,
      },
    ],
  },
  {
    id: 'certification',
    title: 'Certification',
    topics: [
      {
        id: 'certificate',
        title: 'HTML Certificate',
        summary: 'Earn a certificate by completing the curriculum and passing the final assessment.',
        content: `
          <p>Finishing every section unlocks a final assessment. Pass it, and a sharable certificate is added to your profile.</p>

          <h4>What the certificate covers</h4>
          <ul>
            <li>Document structure, semantic markup, and accessibility.</li>
            <li>Forms, validation, and modern input types.</li>
            <li>Media: images, audio, video, responsive images.</li>
            <li>Metadata, SEO basics, and head management.</li>
            <li>Practical use of advanced features (iframes, canvas, SVG).</li>
          </ul>

          <h4>How it works</h4>
          <ul>
            <li>Complete every required topic in this curriculum.</li>
            <li>Pass a 40-question multiple-choice exam (≥ 80% to pass).</li>
            <li>Build one capstone project to demonstrate fluency.</li>
            <li>Receive a unique, verifiable certificate URL.</li>
          </ul>
        `,
      },
    ],
  },
]

// HashMap for O(1) topic lookup by composite key
const topicIndex = new Map<string, number>()

export interface FlatTopicEntry extends Topic {
  categoryId: string
  categoryTitle: string
  globalIndex: number
}

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
