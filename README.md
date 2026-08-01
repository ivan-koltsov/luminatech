# Lumina Tech UI

This project is a Next.js application that implements three separate UI views for a construction equipment simulation dashboard based on design mockups.

## Features

The UI has been separated into three distinct routes for easy viewing:

- **`/machine-simulation`**: The Machine Simulation Overlay (3D view with control overlay)
- **`/dashboard-details`**: Dashboard Details (Cost Composition, Equipment Production Chain, Risk Register)
- **`/dashboard-overview`**: Dashboard Overview (Map Viewport, Project Metrics)

## Getting Started Locally

This project uses [Bun](https://bun.sh/) as its package manager (though you can also use npm or pnpm).

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Run the development server**:
   ```bash
   bun run dev
   ```

3. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser. You will see a landing page with links to the three separate views.

## Deploying to Vercel

This Next.js project is fully prepared for zero-configuration deployment to [Vercel](https://vercel.com).

1. Push this code to a repository on GitHub, GitLab, or Bitbucket.
2. Log in to Vercel and click **Add New... > Project**.
3. Import your repository.
4. Vercel will automatically detect that this is a Next.js project and configure the build settings (`next build`) and output directory.
5. Click **Deploy**.

Once deployed, Vercel will give you a live URL where your Lumina Tech UI can be viewed.