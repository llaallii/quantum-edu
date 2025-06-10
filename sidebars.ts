// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Chapter 1: Introduction and Overview',
      collapsed: false,
      items: [
        'chapter-1-introduction/index',
      ],
    },
    // Add more chapters as needed...
  ],
};

export default sidebars;
