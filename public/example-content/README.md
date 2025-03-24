
# Website Content Files

This directory contains example content files for your website. These are sample MDX files that show the expected format for your content.

## How to Use These Files

1. Create a new GitHub repository to host your content
2. Upload these MDX files to a directory called `content` in your repository
3. Update the `githubContent.ts` file with your GitHub username and repository name

## Available Content Files

- **about.mdx**: Content for the About page
- **services.mdx**: Content for the Services page
- **gallery.mdx**: Content for the Gallery page
- **contact.mdx**: Content for the Contact page

## File Structure

Each file contains frontmatter (content between `---` lines) with structured data used to populate the website pages.

## Example

```md
---
heroTitle: "Our Story & Mission"
heroDescription: "Learn about our journey, values, and commitment to excellence."
# More fields specific to each page...
---

# Additional content (if needed)
```

## Updating Content

To update your website content:
1. Edit the corresponding MDX file in your GitHub repository
2. Commit and push the changes
3. Your website will fetch the updated content on the next page load

For more information on the structure of each file, see the example files in this directory.
