# Star Hi Herbs Website

This is the official website for Star Hi Herbs, a global B2B manufacturer of herbal extracts, probiotics, branded ingredients, and nutraceutical solutions.

## Project Structure

```
starhiherbs-updated/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── collections/      # Product collections pages
│   ├── contact/          # Contact page
│   ├── download-catalogue/ # Download catalogue page
│   ├── innovation/       # Innovation page
│   ├── products/         # Product pages
│   ├── request-quote/    # Request quote page
│   ├── request-sample/   # Request sample page
│   ├── sustainability/   # Sustainability page
│   ├── globals.css       # Global CSS
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # Robots configuration
│   └── sitemap.ts        # Sitemap configuration
├── components/           # Reusable React components
│   ├── forms/            # Form components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── products/         # Product-related components
│   └── ui/               # UI components (Button, Input, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── public/               # Static assets
│   └── images/           # Images
├── src/                  # Source code
│   └── data/             # Central data management
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Technologies Used

- Next.js 13+ (App Router)
- TypeScript
- TailwindCSS
- Shadcn UI
- Radix UI
