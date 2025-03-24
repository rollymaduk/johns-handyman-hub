
# Website Content Management with MDX

This website uses MDX files to manage content. You can host these files in your GitHub repository and the website will dynamically load them.

## Setup Instructions

1. Create a GitHub repository to host your content files
2. Update the GitHub username and repository in `src/utils/githubContent.ts`:
   ```typescript
   const GITHUB_USERNAME = 'your-github-username';
   const GITHUB_REPO = 'your-website-content';
   const BRANCH = 'main'; // or any branch you prefer
   ```
3. Copy the example MDX files from this folder to your repository
4. Customize the content to fit your needs
5. Commit and push the changes to your repository

## File Structure

Your repository should have the following structure:

```
content/
  about.mdx     # Content for the About page
  services.mdx  # Content for the Services page
  gallery.mdx   # Content for the Gallery page
```

## MDX File Format

Each MDX file contains a frontmatter section (between `---` marks) with all the content data in YAML format. For example:

```mdx
---
heroTitle: "Our Story & Mission"
heroDescription: "Learn about our journey..."
# More content properties...
---

# Optional markdown content
This is optional markdown content that can be included in the file.
```

## Available Properties

See the example files for all available properties. The structure matches the types defined in `src/types/content.ts`.

## Troubleshooting

If the content doesn't load, check your browser console for errors. Make sure:

1. Your GitHub repository is public
2. The file paths are correct
3. The MDX files are properly formatted
4. You've updated the GitHub username and repository in the code
