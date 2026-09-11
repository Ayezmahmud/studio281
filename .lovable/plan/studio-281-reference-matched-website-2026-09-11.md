# Studio 281 Reference-Matched Website

## Build
- Recreate the supplied single-page composition at `/`: lightweight header, split hero, six numbered editorial sections, feature strip, and structured footer.
- Match the monochrome warm-white palette, high-contrast serif headings, compact sans-serif copy, thin dividers, image proportions, spacing, and sharp controls from the reference.
- Generate a cohesive set of realistic framing-studio photographs matching each image position, including the floating hero frame arrangement.
- Add restrained load, reveal, parallax, image-scale, divider, arrow, scroll-indicator, and floating-frame motion with reduced-motion support.

## Functionality
- Add working desktop and mobile navigation, smooth in-page navigation, gallery lightbox interactions, process video modal, telephone/site/social links, and the supplied Google Maps directions link.
- Keep the mobile layout editorial rather than converting content into generic cards.

## Quality Checks
- Add page-specific title, description, Open Graph, and Twitter metadata.
- Compare desktop and mobile renders against the reference for hierarchy, proportions, rhythm, image placement, and footer structure.
- Verify all interactions and links, and confirm there are no browser errors or overlapping content.

## Technical Details
- Use the existing TanStack Start and Tailwind v4 setup.
- Define all visual values as semantic tokens in the global design system.
- Use generated local image assets and transform-based CSS/React motion; avoid backend work because the requested experience is fully client-side.
