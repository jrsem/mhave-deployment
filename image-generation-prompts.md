# AI Image Generation Prompts for MHAVE Team

Use these prompts with Midjourney, DALL-E 3, or Stable Diffusion to generate custom professional portraits.

## 1. Marie-Luce Clergé - Directrice Générale (Woman)

**Prompt:**
```
Professional corporate headshot of a confident Haitian businesswoman in her 40s, wearing an elegant navy blue business suit with a white blouse, warm professional smile, neutral light gray studio background, high-quality portrait photography, soft studio lighting, shoulders up composition, 4k resolution, photorealistic
```

**Alternative:**
```
Executive portrait of a professional African-Caribbean woman CEO, formal business attire, dark suit, confident pose, clean minimal background, corporate photography style, sharp focus on face, professional lighting
```

## 2. Jean-Marc Valbrun - Directeur de Cabinet (Man)

**Prompt:**
```
Professional corporate headshot of a distinguished Haitian businessman in his 50s, wearing a charcoal gray suit with dark tie, confident and approachable expression, neutral light gray studio background, high-quality executive portrait, studio lighting, shoulders up composition, photorealistic, 4k resolution
```

**Alternative:**
```
Executive business portrait of a mature professional Black man, formal dark suit and tie, leadership presence, minimal studio background, corporate photography, sharp professional look
```

## 3. Florence Petit - Chef de Communication (Man)

**Prompt:**
```
Professional corporate headshot of a young Haitian professional man in his 30s, wearing a modern slim-fit navy suit, creative professional appearance, friendly confident smile, neutral light gray background, contemporary business portrait style, studio lighting, photorealistic
```

**Alternative:**
```
Modern corporate portrait of a young professional Black man in communications role, stylish business suit, approachable expression, clean studio background, professional headshot photography
```

## 4. Robert Auguste - Conseiller Spécial (Man)

**Prompt:**
```
Professional corporate headshot of a senior Haitian advisor in his 60s, distinguished gray hair, wearing an elegant dark suit with subtle pattern, wise and trustworthy expression, neutral studio background, executive portrait photography, soft professional lighting, photorealistic
```

**Alternative:**
```
Senior executive portrait of an experienced Black professional man, formal business suit, distinguished appearance, mentor-like presence, minimal studio background, high-end corporate photography
```

## Image Specifications

- **Resolution:** 400x400 pixels minimum (square aspect ratio)
- **Format:** JPG or PNG
- **Style:** Professional headshot, shoulders up
- **Background:** Neutral/light gray or white studio background
- **Treatment:** Clean, corporate, photorealistic
- **Post-processing:** Images should work with grayscale filter in the UI

## Current Image URLs (Unsplash Placeholders)

The component currently uses these professional stock photos:

1. Marie-Luce Clergé: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face`
2. Jean-Marc Valbrun: `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face`
3. Florence Petit: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face`
4. Robert Auguste: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`

## Usage in Code

Replace the `src` attributes in `/modalPages/Presentation.tsx` with your generated image URLs or local paths:

```tsx
<Image 
  width={50} 
  height={50} 
  alt="Name" 
  className="object-cover! w-full! h-full! grayscale! group-hover:grayscale-0! transition-all!"
  src="/path/to/your/generated-image.jpg"
/>
```

## Recommended AI Tools

- **Midjourney v6**: Best for photorealistic portraits
- **DALL-E 3**: Good for following specific pose and styling instructions
- **Stable Diffusion XL**: Great for fine-tuned control with custom models

## Tips for Best Results

1. Include "professional headshot" or "corporate portrait" in prompts
2. Specify "neutral background" or "studio background"
3. Add ethnicity description for diverse representation
4. Use age descriptors to match the roles
5. Include clothing color specifications (navy, charcoal, etc.)
6. Request "4k" or "high resolution" for quality
