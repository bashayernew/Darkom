# Hero Section Video Requirements

## Video Files Needed

To complete the hero section video background, you need to add these video files:

### **Primary Video:**
- **`hero-background.mp4`** - Main MP4 format video
- **`hero-background.webm`** - WebM format for better browser compatibility

## Video Specifications

### **Content Requirements:**
- **Luxury construction/architecture footage** that showcases:
  - Modern building construction
  - Architectural design processes
  - Luxury interior spaces
  - Exterior facades and landscapes
  - Construction progress shots
  - Finished luxury projects

### **Technical Requirements:**
- **Resolution**: Minimum 1920x1080 (Full HD), preferably 4K
- **Duration**: 10-30 seconds (will loop seamlessly)
- **Format**: MP4 (H.264) and WebM for compatibility
- **File Size**: Keep under 50MB for optimal loading
- **Frame Rate**: 24-30 fps for smooth playback
- **Codec**: H.264 for MP4, VP9 for WebM

### **Style Requirements:**
- **Slow, cinematic movement** (not fast-paced)
- **Smooth camera work** (no shaky footage)
- **Professional quality** with good lighting
- **Luxury aesthetic** that matches Darkom's brand
- **Subtle motion** that doesn't distract from text

## How to Add Videos

1. **Create or obtain** the video footage described above
2. **Edit the video** to be 10-30 seconds with smooth looping
3. **Export in both formats**:
   - MP4 (H.264) as `hero-background.mp4`
   - WebM (VP9) as `hero-background.webm`
4. **Place both files** in this `public/videos/` folder
5. **Ensure file names** match exactly: `hero-background.mp4` and `hero-background.webm`

## Fallback System

The hero section includes a robust fallback system:
- **Primary**: Video background (MP4/WebM)
- **Secondary**: Fallback image (`bg-cont.jpg`) while video loads
- **Tertiary**: Static image if video fails to load

## Features Added

✅ **Video background** with auto-play and loop
✅ **Mute/unmute controls** in top-right corner
✅ **Responsive video** that covers full screen
✅ **Smooth fallback** to image if video unavailable
✅ **Accessibility features** with proper ARIA labels
✅ **Performance optimized** with proper video attributes

## Browser Compatibility

- **Modern browsers**: Full video support with controls
- **Older browsers**: Graceful fallback to image
- **Mobile devices**: Optimized with `playsInline` attribute
- **Autoplay policies**: Video starts muted for better user experience

## Next Steps

After adding the video files:
1. The hero section will automatically display the video background
2. Users can control audio with the mute/unmute button
3. The video will loop seamlessly
4. Fallback systems ensure the page always looks great
5. Performance will be optimized for all devices

---
*Note: The video should showcase luxury construction and design work that represents Darkom's high-end services and professional capabilities.*
