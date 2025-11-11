# Portfolio Setup Instructions

## Important: Add Your Profile Picture

Before running the project, you need to add your profile picture:

1. Find a professional photo of yourself
2. Rename it to `profile.jpg`
3. Place it in the `public` folder
4. The image should be square (recommended: 500x500px or larger)

## Running the Project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features Implemented

✅ Modern, professional design with gradient accents
✅ Fully responsive layout (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Animated hover effects on cards
✅ Six main sections:
  - Hero with profile picture
  - About section with education & experience highlights
  - Skills with progress bars (3 categories)
  - Work Experience (2 internships)
  - Projects showcase (6 projects)
  - Contact section with social links

✅ Social media integration:
  - LinkedIn: https://www.linkedin.com/in/princeraj123/
  - GitHub: https://github.com/Prince6350Raj/
  - Email link

✅ Light mode design with professional color scheme
✅ Custom animations and transitions
✅ Modular component architecture
✅ TypeScript for type safety
✅ Tailwind CSS for styling

## Project Structure

```
myportfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page composition
│   └── globals.css      # Global styles & animations
├── components/
│   ├── Navigation.tsx   # Sticky navigation bar
│   ├── Hero.tsx         # Hero section with profile
│   ├── About.tsx        # About me section
│   ├── Skills.tsx       # Skills with progress bars
│   ├── Experience.tsx   # Work experience timeline
│   ├── Projects.tsx     # Projects showcase
│   └── Contact.tsx      # Contact & social links
└── public/
    └── profile.jpg      # YOUR PHOTO GOES HERE!
```

## Customization Tips

- All your information is already integrated
- Colors use a purple-indigo gradient theme
- Smooth animations on scroll and hover
- Professional typography with Geist font family
- Clean, modern UI/UX design

## Build for Production

```bash
npm run build
npm start
```

Good luck with your assessment! 🚀
