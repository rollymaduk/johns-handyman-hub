
import * as LucideIcons from 'lucide-react';

/**
 * Gets a Lucide icon component by name
 * @param iconName The name of the icon to retrieve
 * @returns The icon component or a fallback
 */
export function getLucideIcon(iconName: string) {
  // Use the imported LucideIcons object
  if (!iconName) return LucideIcons.HelpCircle;
  
  const icon = (LucideIcons as Record<string, any>)[iconName];
  return icon || LucideIcons.HelpCircle;
}
