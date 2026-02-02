# Project Detail Components

This directory contains modular components for the project detail page. The main `ClientProjectDetail.tsx` component has been refactored into smaller, reusable components for better organization and maintainability.

## Component Structure

### Main Component
- **`ClientProjectDetail.tsx`** - Main component that orchestrates all sub-components

### Sub-Components (`_components/`)

#### 1. **`theme.ts`**
Utility file containing theme configuration based on project category.
- Exports `getCategoryTheme()` function
- Returns color schemes for Web Design, Development, and Branding categories

#### 2. **`ProjectHero.tsx`**
Hero section with animated background and project title.
- Animated gradient orbs
- Project category badge
- Back to work link
- Responsive hero image with overlay

#### 3. **`ProjectInfoGrid.tsx`**
Grid displaying project metadata.
- Deliverables list
- Timeline/year
- Services provided
- Hover animations

#### 4. **`ProjectOverview.tsx`**
Overview section with project description.
- Background pattern
- Highlighted key terms
- Responsive padding

#### 5. **`TechnicalSpecs.tsx`**
Technical specifications section.
- **Color Palette** - Visual color swatches with hex codes
- **Typography** - Font families and pairings
- **Frameworks** - List of frameworks used
- **Technologies** - Technologies and libraries
- **Tools** - Design and development tools

#### 6. **`ProjectChallenge.tsx`**
Challenge section with grid of challenge cards.
- 4 challenge cards with icons
- Hover effects
- Staggered animations

#### 7. **`ProjectSolution.tsx`**
Solution section with numbered steps.
- Gradient background
- Animated rotating circles
- 3-step solution process
- Large numbered indicators

#### 8. **`FeatureShowcase.tsx`**
Feature showcase with alternating layouts.
- 3 key features
- Feature images with overlays
- Alternating left/right layouts
- Category-themed badges

#### 9. **`ProjectImpact.tsx`**
Impact section with statistics.
- Quote/testimonial
- 3 statistics cards
- Gradient text effects
- Hover animations

#### 10. **`ProjectCTA.tsx`**
Call-to-action section.
- Gradient background
- Dot pattern overlay
- Link to more projects
- Centered layout

#### 11. **`index.ts`**
Barrel export file for easier imports.

## Usage

```tsx
import ClientProjectDetail from './ClientProjectDetail';

// In your page component
<ClientProjectDetail project={projectData} />
```

## Props

### ClientProjectDetail
```tsx
interface ClientProjectDetailProps {
    project: Project; // From '../_components/data'
}
```

### Project Interface
```tsx
interface Project {
    id: string;
    title: string;
    slug: string;
    category: string;
    year: string;
    description: string;
    imageUrl: string;
    link: string;
    techSpecs: ProjectTechSpecs;
}
```

## Benefits of This Structure

1. **Modularity** - Each section is a separate component
2. **Reusability** - Components can be reused across different pages
3. **Maintainability** - Easier to find and update specific sections
4. **Testability** - Individual components can be tested in isolation
5. **Performance** - Smaller component files load faster
6. **Readability** - Cleaner, more organized code structure

## File Sizes
- Main component: ~1KB (down from ~32KB)
- Average sub-component: ~3-5KB
- Largest component: TechnicalSpecs.tsx (~10KB)

## Animation Libraries Used
- **Framer Motion** - For all animations and transitions
- **Lucide React** - For icons

## Styling
- Tailwind CSS utility classes
- Dynamic theming based on project category
- Responsive design (mobile-first approach)
