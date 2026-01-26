# Images To Replace

This document lists the images that need to be replaced with your actual photos and project images.

## Personal Images

### Avatar
- **File**: `/public/images/avatar.jpg`
- **Current**: Placeholder image
- **Needed**: Your professional headshot photo
- **Recommended size**: 400x400px or larger, square aspect ratio
- **Format**: JPG or PNG

## Project Images

### Research Project: Open Clusters Neural Network
- **Location**: `/public/images/projects/` (create a new folder if needed)
- **Needed**: 
  - Visualizations of your neural network results
  - QuadTree decomposition diagrams
  - Stellar cluster images from your research
  - Charts showing accuracy comparisons

### Other Projects
If you have other GenAI/Agentic AI projects to showcase:
- Create new MDX files in `/src/app/work/projects/`
- Add corresponding images to `/public/images/projects/[project-name]/`
- Use the existing MDX files as templates
- Set `category: "data-science"` or `category: "research"` as appropriate

## Gallery Images (Optional)

- **Location**: `/public/images/gallery/`
- **Current**: Placeholder landscape/portrait photos
- **Recommended**: Replace with your own photos if you want to use the gallery feature
- If you don't want a gallery, set `routes: { "/gallery": false }` in `/src/resources/once-ui.config.ts`

## OpenGraph/Social Media Images

- **Location**: `/public/images/og/home.jpg`
- **Current**: Generic portfolio image
- **Recommended**: Create a custom OG image with your name and role
- **Size**: 1200x630px (standard OG image dimensions)

## Instructions

1. Replace `/public/images/avatar.jpg` with your photo
2. Create project-specific folders in `/public/images/projects/`
3. Update image paths in MDX files to point to your new images
4. Optionally, update gallery images or disable the gallery
5. Create a custom OG image for better social media sharing

## Tips

- Keep image file sizes optimized (use tools like TinyPNG or ImageOptim)
- Use WebP format for better performance (Next.js will auto-convert)
- Maintain consistent aspect ratios within each project
- Add descriptive alt text in MDX files for accessibility
