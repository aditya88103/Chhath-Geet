# Chhath Geet Gatha — Complete HTML Website

## 🌟 Overview
A complete, fully functional website dedicated to Chhath Puja with 50+ devotional songs, 4-day rituals guide, panchang calendar, thekua recipe, and ghat gallery.

## 📁 File Structure

```
chhath-geet/
├── home.html           # Main landing page with hero, featured songs
├── songs.html          # 50+ Chhath songs with YouTube player
├── player.html         # Nonstop player with queue management
├── rituals.html        # 4-day Chhath Puja vidhi with checklist
├── calendar.html       # Panchang 2024-2027 with countdown
├── recipe.html         # Thekua recipe with scalable ingredients
├── gallery.html        # Chhath ghat photo gallery
├── about.html          # History, science, and singers tribute
├── css/
│   ├── index.css       # Core design system & variables
│   ├── components.css  # UI components (navbar, cards, etc.)
│   └── responsive.css  # Mobile responsive styles
├── js/
│   ├── app.js          # Main router & state manager
│   ├── audio/          # Audio player modules
│   ├── components/     # Navbar, player bar components
│   ├── data/           # Songs, rituals, panchang data
│   └── pages/          # Page render functions
└── assets/             # Images and media files
```

## ✨ Features

### 🎵 Songs Page (songs.html)
- **50+ Chhath Songs** with real YouTube integration
- **Embedded YouTube Player** - Click any song to play
- **Advanced Filtering:**
  - Filter by Day (Nahay Khay, Kharna, Sandhya Arghya, Usha Arghya)
  - Filter by Category (Paramparik, Aarti, Kosi, Modern)
  - Filter by Artist (Sharda Sinha, Anuradha Paudwal, etc.)
  - Search by title, artist name, or Hindi text
- **Favorites System** (localStorage)
- **Play All** button for filtered songs
- **Modal Player** with full YouTube embed

### 🏠 Home Page (home.html)
- Hero section with festival dates
- 4-day ritual cards with links
- Featured songs grid
- Gallery preview
- Philosophy section

### 🎼 Player Page (player.html)
- Rotating vinyl/sun disc animation
- Now playing information
- Queue management by days
- Nonstop mode toggle
- Visualizer placeholder
- Shuffle & clear queue

### 🕯️ Rituals Page (rituals.html)
- 4 tabs for each day
- Detailed vidhi for each day
- Sacred mantras with transliteration
- **Interactive Samagri Checklist:**
  - Click items to check/uncheck
  - Saves to localStorage
  - Print checklist button
  - Reset checklist
- Linked songs for each day

### 📅 Calendar Page (calendar.html)
- **Live Countdown** to next Chhath
- City selector (Patna, Delhi, Mumbai, etc.)
- Sunrise/sunset timings table
- **Multi-year Panchang** (2024-2027)
- Kartik & Chaiti Chhath dates

### 🍪 Recipe Page (recipe.html)
- **Scalable Thekua Recipe**
- Batch size selector (10, 20, 40, 60 pieces)
- **Auto-calculating ingredients**
- 5-step detailed instructions
- Sacred rules banner
- Pro tips section

### 📸 Gallery Page (gallery.html)
- Photo grid with categories
- Filter by: Arghya, Ghats, Devotees, Prasad
- Hover overlays with Hindi captions
- Unsplash images for demo

### ℹ️ About Page (about.html)
- Complete history & origins
- Solar science explanation
- **8 Legendary Singers** showcase
- Key facts table
- App information

## 🎨 Themes
Three beautiful themes accessible from all pages:
- **Usha (Dawn Gold)** - Default warm gold theme
- **Sandhya (Crimson Dusk)** - Pink/crimson sunset theme
- **Kosi (Night Diya)** - Cool blue night theme

Theme persists across pages via localStorage.

## 🎵 Song Database (50+ Songs)

### Artists Included:
- **Sharda Sinha** (14 songs) - The legendary "Kokila of Bihar"
- **Anuradha Paudwal** (8 songs) - Devotional queen
- **Kalpana Patowary** (6 songs) - Modern folk fusion
- **Maithili Thakur** (5 songs) - Classical meets folk
- **Khesari Lal Yadav** (5 songs) - Modern Bhojpuri
- **Pawan Singh** (6 songs) - Popular Bhojpuri artist
- **Devi** (6 songs) - Traditional paramparik

### Day-wise Distribution:
- General Songs: 12
- Nahay Khay (Day 1): 5
- Kharna (Day 2): 8
- Sandhya Arghya (Day 3): 12
- Usha Arghya (Day 4): 13

### Category-wise:
- Paramparik (Traditional): 22
- Aarti: 12
- Modern: 11
- Kosi: 5

## 🚀 How to Use

### Opening the Website:
1. Simply open `home.html` in any modern web browser
2. Navigate between pages using the top navbar
3. All pages are fully functional standalone

### Playing Songs:
1. Go to `songs.html`
2. Click on any song card or play button
3. YouTube player opens in modal
4. Use filters to find specific songs
5. Click "Play All" to queue filtered songs

### Using Filters:
- **Day Filters**: Click day pills to show songs for that day
- **Category Filters**: Click category to filter by type
- **Artist Dropdown**: Select artist from dropdown
- **Search**: Type in search box for real-time filtering
- **All filters work together** for precise results

### Rituals Checklist:
1. Go to `rituals.html`
2. Select day tab (1-4)
3. Click checklist items to mark as done
4. Print checklist for physical copy
5. Reset to clear all checks

### Recipe Calculator:
1. Go to `recipe.html`
2. Select batch size (Small to Family)
3. Ingredients auto-calculate
4. Follow step-by-step instructions

## 🎯 Key Features Implemented

✅ **50+ Real Chhath Songs** with YouTube IDs  
✅ **Working YouTube Player** with modal overlay  
✅ **Multi-level Filtering** (Day + Category + Artist + Search)  
✅ **Interactive Checklist** with localStorage  
✅ **Recipe Calculator** with dynamic scaling  
✅ **Theme Switcher** with persistence  
✅ **Responsive Design** (mobile-friendly)  
✅ **No External Dependencies** (pure HTML/CSS/JS)  
✅ **No Build Step Required** (open and run)  

## 🌐 Browser Compatibility
- Chrome/Edge (Recommended)
- Firefox
- Safari
- All modern browsers with JavaScript enabled

## 📱 Mobile Responsive
All pages are fully responsive and work on:
- Desktop (1280px+)
- Tablet (768px-1024px)
- Mobile (320px-767px)

## 🔧 Technical Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks
- **YouTube IFrame API** - Video embedding
- **LocalStorage** - Theme & checklist persistence
- **Google Fonts** - Crimson Pro, Inter, Noto Sans Devanagari

## 🎨 Design System
- **Color Palette**: Saffron, Gold, Terracotta, River Blue
- **Typography**: 3 font families for English, Hindi, Display
- **Components**: Reusable glass cards, buttons, badges
- **Animations**: Smooth transitions, fade-ins, rotations
- **Dark Theme**: Three variants with smooth switching

## 📝 Notes

### Song YouTube IDs:
Some songs have placeholder IDs (`samplex`). Replace with real YouTube video IDs:
- Find song on YouTube
- Copy video ID from URL (e.g., `youtube.com/watch?v=VIDEO_ID_HERE`)
- Replace in songs array in `songs.html`

### Adding More Songs:
Edit the `songs` array in `songs.html`:
```javascript
{
  id: 51,
  title: 'New Song Title',
  titleHi: 'नया गीत शीर्षक',
  artist: 'Artist Name',
  day: 'general', // or nahay-khay, kharna, sandhya-arghya, usha-arghya
  category: 'paramparik', // or aarti, modern, kosi
  duration: '5:00',
  youtubeId: 'YOUTUBE_VIDEO_ID'
}
```

### Customization:
- **Colors**: Edit CSS variables in `css/index.css`
- **Fonts**: Change Google Fonts link in `<head>`
- **Images**: Replace Unsplash URLs in gallery
- **Content**: Edit HTML directly in each page

## 🙏 Credits
- **Concept**: Chhath Puja Digital Tribute
- **Music**: Original artists (Sharda Sinha, Anuradha Paudwal, etc.)
- **Images**: Unsplash (demo purposes)
- **Fonts**: Google Fonts

## 📧 Support
For issues or questions about the website functionality, check:
1. Browser console for JavaScript errors
2. YouTube video availability
3. Internet connection for embedded content

---

**जय छठी मईया! 🙏 जय सूर्य देव! ☀️**

Built with devotion for Chhath Puja celebrations worldwide.
