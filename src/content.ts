/**
 * Everything the site says, in one file. Copy lives here rather than inline in
 * the markup so it can be edited without touching layout.
 */

export const site = {
  name: 'OddlyBuilt',
  tagline: 'Websites and tools, built properly.',
  /** Where enquiries land. The contact form opens a draft addressed here. */
  email: 'hello@oddlybuilt.net',
  github: 'https://github.com/OddlyBuilt',
  location: 'Bangalore, India',
};

export interface Project {
  name: string;
  blurb: string;
  /** What was actually hard or interesting. The part clients care about. */
  detail: string;
  stack: string[];
  href?: string;
  /** Shown instead of a link when there's nothing public to point at. */
  status?: string;
}

export const projects: Project[] = [
  {
    name: 'FancyPaws',
    blurb: 'Storefront for a Delhi NCR puppy business.',
    detail:
      'Buyers enquire over WhatsApp with the breed, age and price already filled in, so the first message is useful. The owner edits listings in a browser CMS that commits straight to git — no database, and login is gated to accounts with write access to the repo.',
    stack: ['Astro', 'Decap CMS', 'GitHub OAuth', 'Netlify'],
    href: 'https://fancypaws.netlify.app',
  },
  {
    name: 'Kora Fox',
    blurb: 'Storefront for an undyed-leather belt brand.',
    detail:
      'Designed in Bangalore, cut in Kanpur. No database, no CMS, and no image assets — the whole product feel is carried by type, colour and spacing, which keeps it fast and makes the design easy to keep moving while the brand settles.',
    stack: ['Next.js 15', 'React 19', 'Tailwind v4', 'TypeScript'],
    status: 'In progress',
  },
  {
    name: 'Link in bio',
    blurb: 'One static HTML file, no build step.',
    detail:
      'Deliberately the smallest thing that works: a single file, no dependencies, no pipeline. Loads instantly and will still build in five years.',
    stack: ['HTML', 'GitHub Pages'],
    href: 'https://taltrums.github.io',
  },
];

export const services = [
  {
    title: 'Marketing sites that load fast',
    body: 'Static by default, so there is no server to fall over and nothing to patch. Content you can edit yourself without calling me.',
  },
  {
    title: 'Small products and internal tools',
    body: 'The unglamorous thing that saves someone hours a week — a dashboard, a form that goes somewhere useful, a script that runs on a schedule.',
  },
  {
    title: 'Fixing what already exists',
    body: 'Slow pages, broken deploys, a site nobody can edit. Often the highest-value work, and usually cheaper than a rebuild.',
  },
];

export const principles = [
  {
    n: '01',
    title: 'Boring tech, on purpose',
    body: 'Static files and well-trodden tools. Fewer moving parts means fewer things that break while you are asleep.',
  },
  {
    n: '02',
    title: 'You can edit it without me',
    body: 'If changing a price or adding a post needs a developer, the build was wrong. Handover is part of the job, not an extra.',
  },
  {
    n: '03',
    title: 'Shipped and verified',
    body: 'I run what I build before calling it done — real pages in a real browser, not just a passing test suite.',
  },
];
