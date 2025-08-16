# Live Portfolio Gallery - PRD

## Core Purpose & Success
- **Mission Statement**: Create an immersive portfolio gallery that showcases Roderick L. Renwick's technical work through live, interactive previews of web projects.
- **Success Indicators**: Users can instantly see live previews of projects without leaving the gallery, improving engagement and project understanding.
- **Experience Qualities**: Immersive, Interactive, Professional

## Project Classification & Approach
- **Complexity Level**: Light Application (multiple features with dynamic iframe loading and state management)
- **Primary User Activity**: Consuming and Interacting - users browse and preview projects in real-time

## Thought Process for Feature Selection
- **Core Problem Analysis**: Traditional portfolio galleries only show static screenshots or require users to navigate away to see actual projects
- **User Context**: Technical recruiters, potential collaborators, and fellow engineers who want to quickly assess project quality
- **Critical Path**: Browse categories → Preview projects in real-time → Visit full projects when interested
- **Key Moments**: 
  1. First impression with live preview loading
  2. Seamless category filtering with maintained preview states
  3. Smooth transition from preview to full project visit

## Essential Features

### Live Preview System
- **What it does**: Embeds live websites as scaled-down iframe previews within each project card
- **Why it matters**: Allows immediate assessment of project quality and functionality without navigation
- **Success criteria**: Previews load within 8 seconds, graceful error handling for failed loads

### Category-Based Organization
- **What it does**: Organizes 26 projects across 7 categories (Comprehensive, Interactive, Professional, Foundation, Hardware, Software, GitHub)
- **Why it matters**: Enables focused exploration based on user interests and technical domains
- **Success criteria**: Smooth filtering animations, maintained preview states during category changes

### Lazy Loading & Performance
- **What it does**: Only loads iframe previews when cards come into viewport
- **Why it matters**: Prevents overwhelming network requests and improves initial load performance
- **Success criteria**: Intersection Observer triggers preview loading 200px before viewport entry

### Error Handling & Retry
- **What it does**: Displays fallback states for failed iframe loads with retry functionality
- **Why it matters**: Maintains professional appearance even when external sites have issues
- **Success criteria**: Clear error indication, functional retry mechanism, graceful degradation

## Design Direction

### Visual Tone & Identity
- **Emotional Response**: Professional confidence with cutting-edge technical sophistication
- **Design Personality**: Sleek, modern, and technically impressive - reflecting the subject's expertise
- **Visual Metaphors**: Glass morphism suggests transparency and depth, live previews represent active engagement
- **Simplicity Spectrum**: Rich interface that showcases technical complexity while maintaining clean organization

### Color Strategy
- **Color Scheme Type**: Sophisticated dark theme with accent gradients
- **Primary Color**: Purple-blue gradient (oklch(0.65 0.15 260)) - suggesting innovation and technical depth
- **Secondary Colors**: Category-specific gradients for visual organization
- **Accent Color**: Live green indicators for active previews
- **Color Psychology**: Dark backgrounds reduce eye strain during technical review, colored accents provide clear categorization
- **Foreground/Background Pairings**: White text on dark backgrounds (>7:1 contrast), colored badges on semi-transparent backgrounds

### Typography System
- **Font Pairing Strategy**: System fonts for optimal performance and consistent rendering across devices
- **Typographic Hierarchy**: Bold project titles, subtle descriptions, micro-copy for technical details
- **Font Personality**: Clean, technical, and highly legible for professional audiences
- **Readability Focus**: Optimized for quick scanning and technical content consumption

### Visual Hierarchy & Layout
- **Attention Direction**: Live preview thumbnails draw immediate attention, followed by project titles and descriptions
- **White Space Philosophy**: Generous spacing around cards to prevent cognitive overload
- **Grid System**: Responsive grid adapts from 1-4 columns based on screen size
- **Responsive Approach**: Mobile-first with enhanced desktop features
- **Content Density**: Balanced to show sufficient projects while maintaining detail visibility

### Animations
- **Purposeful Meaning**: Loading states communicate active processing, hover effects suggest interactivity
- **Hierarchy of Movement**: Subtle card hover elevations, smooth category transitions, live preview loading indicators
- **Contextual Appropriateness**: Professional animations that enhance rather than distract from technical content

### UI Elements & Component Selection
- **Component Usage**: shadcn Card components for consistent styling, Badge components for categorization
- **Component States**: Loading, error, success states for live previews with appropriate visual feedback
- **Icon Selection**: Phosphor icons for external links and retry actions
- **Component Hierarchy**: Preview takes visual precedence, followed by title, then metadata
- **Mobile Adaptation**: Single-column layout on mobile with maintained preview functionality

## Edge Cases & Problem Scenarios
- **iframe Loading Failures**: Comprehensive error handling with retry mechanism and fallback states
- **Cross-Origin Issues**: Graceful degradation for sites that block iframe embedding
- **Performance on Slow Connections**: Lazy loading and optimized iframe scaling prevent overwhelming slow networks
- **Mobile Interaction**: Disabled pointer events on previews prevent accidental navigation on mobile

## Implementation Considerations
- **Scalability Needs**: New projects can be easily added to the projects array with automatic preview integration
- **Testing Focus**: Cross-browser iframe compatibility, performance with multiple simultaneous previews
- **Critical Questions**: How to handle sites that change their iframe policies, balance between preview quality and performance

## Reflection
This approach uniquely combines traditional portfolio browsing with live web application previews, creating an immersive experience that immediately demonstrates the quality and functionality of technical projects. The implementation showcases both the subject's technical work and the sophistication of the gallery system itself.