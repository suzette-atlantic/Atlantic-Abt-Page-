# Atlantic Training - Standalone HTML Package

This is a complete standalone HTML version of the Atlantic Training About page, ready for migration to any development environment.

## 📁 Folder Structure

```
standalone-html/
├── index.html          # Main HTML file (all-in-one)
├── assets/             # All static assets
│   ├── icons/          # Icon images (1.png, 4.png, 9.png, 13.png, 23.png, 38.png, 39.png, 41.png, 42.png)
│   ├── AT_Logo.png     # Atlantic Training logo
│   ├── background-1.png # Hero section background
│   ├── Video-Thumbnail.png # Video thumbnail image
│   ├── Meeting-Image.jpeg # Meeting image
│   ├── Office-Meeting-Image-Placeholder.jpeg # Office meeting image
│   ├── Team-Workplace-Image.jpeg # Team workplace image
│   └── Why Atlantic (Shorten) .mp4 # Hero video file
└── README.md           # This file
```

## 🚀 What's Included

### 1. **index.html**
   - Complete HTML structure
   - All CSS styles (inline + Tailwind CDN)
   - All JavaScript functionality (inline)
   - No external dependencies except CDN resources

### 2. **Assets Folder**
   - All images, icons, and video files
   - Properly organized in subfolders
   - All paths are relative (works locally and on servers)

## 📋 Requirements for Migration

### Essential Files (MUST include):
1. ✅ **index.html** - The main HTML file
2. ✅ **assets/** folder - All images, icons, and videos
3. ✅ **assets/icons/** - All icon PNG files
4. ✅ **assets/background-1.png** - Hero background
5. ✅ **assets/Video-Thumbnail.png** - Video thumbnail
6. ✅ **assets/AT_Logo.png** - Logo file
7. ✅ **assets/*.jpeg** - All image files
8. ✅ **assets/*.mp4** - Video file

### External Dependencies (CDN - no download needed):
- ✅ Google Fonts (Figtree) - Loaded from CDN
- ✅ Tailwind CSS - Loaded from CDN

## 🔧 How to Use

### Option 1: Local Development
1. Open `index.html` directly in a web browser
2. All assets should load correctly if folder structure is maintained

### Option 2: Web Server
1. Upload the entire `standalone-html` folder to your web server
2. Ensure the folder structure is preserved
3. Access via: `https://yourdomain.com/standalone-html/index.html`

### Option 3: Integration
1. Copy `index.html` to your project root
2. Copy `assets/` folder to your project root
3. Update any paths if your structure differs

## 🎨 Features Included

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Video player functionality
- ✅ Testimonial carousel
- ✅ Interactive navigation
- ✅ Gradient text effects
- ✅ Hover animations
- ✅ Mobile-friendly layout

## 📝 Notes for Developers

1. **Tailwind CSS**: Uses CDN version. For production, consider using compiled Tailwind for better performance.

2. **Fonts**: Figtree font is loaded from Google Fonts CDN. If you need local fonts, download from the `Figtree Font/` folder in the original project.

3. **Video File**: The video file name has a space: `Why Atlantic (Shorten) .mp4`. Make sure the filename matches exactly in your assets folder.

4. **Paths**: All asset paths are relative (`assets/...`). If you change the folder structure, update the paths in `index.html`.

5. **JavaScript**: All JavaScript is inline in the HTML file. You can extract it to a separate `.js` file if preferred.

6. **CSS**: Custom styles are in a `<style>` tag. You can extract to a separate `.css` file if preferred.

## 🔍 File Checklist

Before handing off to dev team, verify:

- [ ] `index.html` exists and is complete
- [ ] `assets/AT_Logo.png` exists
- [ ] `assets/background-1.png` exists
- [ ] `assets/Video-Thumbnail.png` exists
- [ ] `assets/Meeting-Image.jpeg` exists
- [ ] `assets/Office-Meeting-Image-Placeholder.jpeg` exists
- [ ] `assets/Team-Workplace-Image.jpeg` exists
- [ ] `assets/Why Atlantic (Shorten) .mp4` exists (note the space in filename)
- [ ] `assets/icons/1.png` exists
- [ ] `assets/icons/4.png` exists
- [ ] `assets/icons/9.png` exists
- [ ] `assets/icons/13.png` exists
- [ ] `assets/icons/23.png` exists
- [ ] `assets/icons/38.png` exists
- [ ] `assets/icons/39.png` exists
- [ ] `assets/icons/41.png` exists
- [ ] `assets/icons/42.png` exists

## 🐛 Troubleshooting

**Images not loading?**
- Check that the `assets/` folder is in the same directory as `index.html`
- Verify all file names match exactly (case-sensitive)
- Check browser console for 404 errors

**Video not playing?**
- Verify the video file exists: `assets/Why Atlantic (Shorten) .mp4`
- Check browser console for errors
- Some browsers may require HTTPS for video playback

**Styles not working?**
- Ensure internet connection (for Tailwind CDN)
- Check browser console for CDN loading errors
- Verify Google Fonts CDN is accessible

## 📞 Support

If the dev team encounters any issues, they should:
1. Check browser console for errors
2. Verify all files are present
3. Ensure folder structure matches exactly
4. Test in a local web server (not just file://)

---

**Created**: 2025
**Version**: Standalone HTML Package
**Status**: Ready for migration


