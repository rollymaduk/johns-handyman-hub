/**
 * Clean up MDX content to ensure it has valid frontmatter format
 */
export function cleanupMdxContent(content: string): string {
  // Remove BOM if it exists and trim whitespace
  let cleanContent = content.replace(/^\uFEFF/, '').trim();
  
  // Remove any leading comments or invalid characters before frontmatter
  cleanContent = cleanContent.replace(/^(\/\/[^\n]*\n)+/, '');
  
  // Check if content has frontmatter
  if (!cleanContent.startsWith('---')) {
    console.warn("Content doesn't start with frontmatter delimiters");
    return cleanContent;
  }
  
  // Find the frontmatter section
  const match = cleanContent.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) {
    console.warn("Could not identify complete frontmatter section");
    return cleanContent;
  }
  
  const frontMatterContent = match[1];
  
  // Pre-process the frontmatter content to fix common YAML issues
  let fixedFrontmatter = frontMatterContent;
  
  // Fix arrays with bad indentation like storyContent: [ \n "item1", \n "item2" \n ]
  fixedFrontmatter = fixedFrontmatter.replace(
    /^(\w+):\s*\[\s*\n\s*"([^"]+)"/gm, 
    (match, key) => `${key}:\n  - "${match.split('"')[1]}"`
  );
  
  // Fix indentation for multiline arrays (convert to proper YAML format)
  const lines = fixedFrontmatter.split('\n');
  let inArray = false;
  let arrayKey = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect start of array with bracket notation
    if (line.match(/^\w+:\s*\[\s*$/) && !inArray) {
      const key = line.split(':')[0];
      lines[i] = `${key}:`;
      inArray = true;
      arrayKey = key;
      continue;
    }
    
    // Convert array items to YAML list format
    if (inArray) {
      // End of array
      if (line === ']') {
        lines[i] = '';
        inArray = false;
        continue;
      }
      
      // Array item (possibly quoted with trailing comma)
      const item = line.replace(/^"(.*)"[,]?$/, '$1');
      lines[i] = `  - "${item}"`;
    }
  }
  
  fixedFrontmatter = lines.filter(line => line !== '').join('\n');
  
  // Reassemble the content with fixed frontmatter
  return `---\n${fixedFrontmatter}\n---\n${cleanContent.slice(match[0].length)}`;
}
