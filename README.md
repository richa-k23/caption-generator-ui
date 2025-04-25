
# Caption Craft Platform

A beautiful UI for generating platform-specific captions using Google's Gemini API.

## Features

- Select from popular social media platforms (Instagram, Twitter, LinkedIn, Facebook, YouTube)
- Customize your writing style (Professional, Casual, Friendly, Humorous)
- Add a topic or detail for your post
- Generate tailored captions with Gemini AI
- Beautiful, responsive UI with pastel colors
- Simple API key management

## Technologies Used

- React + Vite
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Gemini API integration

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Gemini API key from [Google AI Studio](https://ai.google.dev/)

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/richa-k23/caption-generator-ui.git
cd caption-generator-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

5. When prompted, enter your Gemini API key (you can get one from [Google AI Studio](https://ai.google.dev/))

## Using the Gemini API

This project uses the Gemini API to generate captions. The API is called with a prompt that combines:

1. The selected platform (e.g., Instagram, Twitter)
2. The topic/details provided by the user
3. The selected writing style (e.g., Professional, Casual)

The prompt is structured to generate platform-appropriate captions with the right tone, length, and style.

## Deployment

### GitHub

1. Create a new GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/caption-craft-platform.git
git push -u origin main
```

### Netlify

1. Sign up or login to [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Live Demo

[View live demo on Netlify](#) <!-- Replace with your actual Netlify URL once deployed -->

## License

MIT
