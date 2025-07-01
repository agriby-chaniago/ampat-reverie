# Lazy Loading Implementation

## Overview

Implementasi lazy loading untuk meningkatkan performance aplikasi dengan menunda loading konten sampai user scroll ke area tersebut.

## Components Implemented

### 1. CenterLargeArea.jsx

- ✅ Intersection Observer API
- ✅ Framer Motion animations yang triggered on scroll
- ✅ Loading skeleton untuk better UX
- ✅ Custom useLazyLoad hook

## Custom Hooks

### useLazyLoad Hook

```javascript
const { ref, isInView, hasLoaded } = useLazyLoad({
  threshold: 0.1, // Percentage of element visible before triggering
  rootMargin: "100px 0px", // Trigger before element fully visible
  triggerOnce: true, // Only trigger once
});
```

### useLazyImage Hook

```javascript
const { ref, imageSrc, isLoaded, isError, isInView } = useLazyImage(
  "/path/to/image.jpg",
  { threshold: 0.2 }
);
```

## Loading Components

### TextSkeleton

```jsx
<TextSkeleton lines={3} className='h-4' />
```

### ImageSkeleton

```jsx
<ImageSkeleton aspectRatio='aspect-video' className='w-full' />
```

### LazyLoadingSkeleton

```jsx
<LazyLoadingSkeleton isLoaded={isInView}>
  <YourComponent />
</LazyLoadingSkeleton>
```

## Benefits

1. **Performance Improvement**

   - Reduced initial bundle size
   - Faster page load times
   - Better Core Web Vitals scores

2. **Better UX**

   - Smooth scroll-triggered animations
   - Loading skeletons provide visual feedback
   - Progressive content loading

3. **SEO Friendly**
   - Content still accessible to crawlers
   - Proper semantic HTML structure maintained

## Usage in Other Components

To implement lazy loading in other components:

```jsx
import { useLazyLoad } from "../hooks/useLazyLoad";
import { TextSkeleton } from "./LazyLoadingSkeleton";

export default function MyComponent() {
  const { ref, isInView } = useLazyLoad();

  return (
    <div ref={ref}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Your content */}
        </motion.div>
      ) : (
        <TextSkeleton lines={3} />
      )}
    </div>
  );
}
```

## Recommended Components for Lazy Loading

1. **GalleryVisual** - Heavy image content
2. **TopDestination** - Multiple images
3. **Footer** - Non-critical content
4. **Why section** - Lower priority content
5. **User generated content** - Comments, reviews

## Performance Monitoring

Monitor lazy loading effectiveness using:

- Lighthouse performance audits
- Chrome DevTools Performance tab
- Core Web Vitals metrics
- Real User Monitoring (RUM) tools
