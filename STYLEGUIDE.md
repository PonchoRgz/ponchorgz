# Poncho Rodríguez Website - Style Guide

## 🎨 Design Philosophy

**Minimalist & Professional**: Clean, modern design that emphasizes content and readability while maintaining a professional appearance suitable for a Product & Strategy Leader.

**Accessibility First**: High contrast ratios, clear typography hierarchy, and smooth transitions for an inclusive user experience.

**Responsive Design**: Mobile-first approach with seamless desktop experience and smooth dark/light mode transitions.

---

## 🌈 Color Palette

### Primary Colors
- **Primary Blue**: `#0066cc` - Used for buttons, links, icons, and accents
- **White**: `#FFFFFF` - Primary background in light mode
- **Black**: `#000000` - Primary text in light mode

### Light Mode Colors
- **Background**: `#FFFFFF` (White)
- **Text Primary**: `#000000` (Black)
- **Text Secondary**: `#374151` (Gray-700)
- **Text Tertiary**: `#6B7280` (Gray-500)
- **Borders**: `#E5E7EB` (Gray-200)
- **Hover States**: `#F3F4F6` (Gray-100)

### Dark Mode Colors
- **Background**: `#111827` (Gray-900)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#D1D5DB` (Gray-300)
- **Text Tertiary**: `#9CA3AF` (Gray-400)
- **Borders**: `#374151` (Gray-700)
- **Hover States**: `#1F2937` (Gray-800)

### Brand Colors
- **Mercado Libre**: `#FFE600` (Yellow) - Used for company links
- **Uber**: `#276EF1` (Blue) - Used for company links
- **Professional Green**: `#34A853` - Used for early career links
- **Strava**: `#FC4C02` (Orange) - Used for fitness links
- **Goodreads**: `#553B08` (Brown) - Used for reading links

---

## 🔤 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Type Scale
- **H1/Name**: `text-4xl` (2.25rem) - Font weight: 700 (Bold)
- **H2/Title**: `text-2xl` (1.5rem) - Font weight: 600 (Semi-bold)
- **H3/Section Titles**: `text-3xl` (1.875rem) - Font weight: 700 (Bold)
- **Body Text**: `text-base` (1rem) - Font weight: 400 (Regular)
- **Small Text**: `text-sm` (0.875rem) - Font weight: 400 (Regular)
- **Caption**: `text-xs` (0.75rem) - Font weight: 400 (Regular)

### Typography Rules
- **Line Height**: `leading-relaxed` for body text
- **Letter Spacing**: `tracking-tight` for headings
- **Text Colors**: 
  - Headings: `text-black dark:text-white`
  - Body: `text-gray-600 dark:text-gray-300`
  - Links: `text-primary dark:text-primary`

---

## 🧩 Component Library

### Buttons

#### Primary Button (`.btn-primary`)
```css
@apply inline-flex items-center justify-center px-6 py-3 text-base font-medium 
text-white dark:text-white
bg-primary dark:bg-primary/90 rounded-full
shadow-sm hover:shadow-lg hover:bg-primary/90 dark:hover:bg-primary 
transform hover:-translate-y-0.5 
transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900;
```

**States:**
- **Default**: Blue background with white text
- **Hover**: Slight lift effect (-translate-y-0.5), enhanced shadow
- **Focus**: Ring outline for accessibility
- **Active**: Scale down effect (0.98)

#### Base Button (`.btn`)
```css
@apply px-6 py-2 rounded-lg transition-all duration-300 font-medium relative overflow-hidden;
```

### Cards

#### Standard Card (`.card`)
```css
@apply bg-white dark:bg-gray-800 rounded-lg p-6 transition-all duration-300;
```

**Hover Effects:**
- Shadow enhancement: `shadow-xl`
- Lift effect: `translateY(-4px)`
- Smooth transitions: `duration-300`

### Navigation

#### Nav Links (`.nav-link`)
```css
@apply px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary relative overflow-hidden;
```

**Hover Effect:**
- Underline animation from left to right
- Color transition to primary blue

### Profile Image

#### Container (`.profile-image-container`)
```css
@apply relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary transition-all duration-300;
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
```

**Hover Effects:**
- Ring expansion: `ring-8`
- Scale increase: `scale-105`
- Enhanced shadow: `0 25px 50px rgba(0, 0, 0, 0.15)`
- Image zoom: `scale(1.2)`

---

## 🎭 Animations & Transitions

### Keyframe Animations

#### Slide Up Fade
```css
@keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### Slide Down Fade
```css
@keyframes slideDownFade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### Scale In
```css
@keyframes scaleIn {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
```

#### Shimmer Loading
```css
@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}
```

### Transition Classes

#### Text Reveal
- `.animate-text-reveal`: Base animation
- `.animate-text-reveal-delay-1`: 0.2s delay
- `.animate-text-reveal-delay-2`: 0.4s delay

#### Fade In
- `.fade-in`: Base fade in with transform
- `.fade-in.visible`: Triggers animation

### Duration Standards
- **Fast**: `duration-200` (200ms)
- **Standard**: `duration-300` (300ms)
- **Slow**: `duration-500` (500ms)
- **Very Slow**: `duration-700` (700ms)

---

## 📱 Layout & Spacing

### Container System
- **Main Container**: `container mx-auto px-4`
- **Section Padding**: `py-16` (top/bottom)
- **Card Padding**: `p-6`
- **Button Padding**: `px-6 py-3`

### Grid System
```css
.grid-auto-fit {
    @apply grid gap-6;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

### Spacing Scale
- **Extra Small**: `space-y-2` (0.5rem)
- **Small**: `space-y-4` (1rem)
- **Medium**: `space-y-6` (1.5rem)
- **Large**: `space-y-8` (2rem)
- **Extra Large**: `space-y-16` (4rem)

---

## 🌙 Dark Mode Implementation

### Toggle System
- **Class-based**: Uses `dark:` prefix for dark mode styles
- **Smooth Transitions**: `transition-colors duration-300` on all elements
- **Theme Persistence**: Stored in localStorage

### Theme Toggle Button
```css
#theme-toggle {
    @apply ml-4 p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2;
}
```

### Icon States
- **Light Mode**: Sun icon visible, moon icon hidden
- **Dark Mode**: Moon icon visible, sun icon hidden
- **Smooth Transitions**: Opacity and rotation animations

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px` (default)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Hidden/visible classes for responsive navigation

### Mobile Menu
```css
#mobile-menu {
    @apply hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50;
    @apply transition-opacity duration-300 ease-in-out;
}
```

---

## ♿ Accessibility Features

### Focus States
- **Primary Buttons**: `focus:ring-2 focus:ring-primary focus:ring-offset-2`
- **Form Inputs**: `focus:ring-2 focus:ring-primary focus:ring-opacity-50`
- **Links**: Hover opacity changes for visual feedback

### Color Contrast
- **Light Mode**: Black text on white background (21:1 ratio)
- **Dark Mode**: White text on dark background (15:1 ratio)
- **Primary Blue**: Meets WCAG AA standards

### Smooth Scrolling
```css
html {
    scroll-behavior: smooth;
    @apply scroll-pt-20;
}
```

---

## 🎯 Interactive States

### Hover Effects
- **Scale**: `hover:scale-110` for icons and buttons
- **Lift**: `hover:-translate-y-1` for cards
- **Color Changes**: Primary color on hover for links
- **Shadow Enhancement**: Increased shadows on hover

### Active States
- **Button Press**: `active:scale-0.98`
- **Form Focus**: `focus:scale-[1.01]` for subtle growth

### Loading States
- **Skeleton Loading**: `.skeleton` class with pulse animation
- **Button Loading**: `.btn-loading` with spinner
- **Shimmer Effect**: Gradient animation for loading placeholders

---

## 🔧 Utility Classes

### Common Patterns
- **Centered Content**: `mx-auto text-center`
- **Flexbox Layouts**: `flex items-center justify-between`
- **Responsive Text**: `text-2xl md:text-3xl lg:text-4xl`
- **Spacing**: `space-y-4 md:space-y-6 lg:space-y-8`

### Custom Utilities
- **Theme Transitions**: `.theme-transition`
- **Loading States**: `.loading`
- **Animation Delays**: `.animate-text-reveal-delay-1`

---

## 📋 Usage Guidelines

### Do's
✅ Use the established color palette consistently
✅ Apply smooth transitions to all interactive elements
✅ Maintain proper contrast ratios for accessibility
✅ Use semantic HTML with appropriate ARIA labels
✅ Follow the established spacing scale

### Don'ts
❌ Don't use colors outside the defined palette
❌ Don't remove transition animations
❌ Don't use low contrast color combinations
❌ Don't skip focus states for interactive elements
❌ Don't override the established typography scale

### When Adding New Components
1. Follow the existing naming conventions
2. Use the established color variables
3. Include proper hover and focus states
4. Add smooth transitions
5. Ensure dark mode compatibility
6. Test accessibility with screen readers

---

## 🚀 Performance Considerations

### CSS Optimization
- **Tailwind Purge**: Only includes used classes in production
- **Minification**: CSS is minified in build process
- **Critical CSS**: Important styles are preloaded

### Animation Performance
- **GPU Acceleration**: Uses `transform` and `opacity` for smooth animations
- **Reduced Motion**: Respects user preferences
- **Efficient Transitions**: Uses `duration-300` as standard

---

*This style guide ensures consistency across all website components and provides a foundation for future development and maintenance.*
