# Luminatech AI Agents Guidelines

These rules apply specifically to the Luminatech workspace.

## Technology Stack & Guidelines

1. **Next.js App Router**:
   - We are using Next.js 15 with the App Router (`/app`).
   - All routing and layouts should adhere to App Router paradigms (`page.tsx`, `layout.tsx`, `loading.tsx`, etc.).
   - Use `'use client'` appropriately for components that require React hooks or browser APIs.

2. **Styling**:
   - **Vanilla CSS / CSS Modules**: We strictly use Vanilla CSS via CSS Modules (`.module.css`) or global CSS (`globals.css`).
   - Avoid using utility-first frameworks like Tailwind CSS or component libraries (e.g., Material UI, Chakra UI) unless explicitly approved by the user.
   - Maintain the design system's aesthetic with precise values for spacing, typography, and colors. The design must be clean and premium.

3. **3D and Simulation**:
   - For 3D elements, we use `three.js` and `@react-three/fiber` along with `@react-three/drei`.
   - Ensure 3D canvas rendering is properly separated from SSR logic since `three.js` relies on browser APIs (e.g., using `next/dynamic` with `ssr: false`).
   - Aim for performant and interactive real-time loops via `useFrame` for simulation entities.

4. **State Management**:
   - Prefer standard React Context API for application-wide state management (e.g., syncing UI with 3D models).
   - If complexity increases, `zustand` is the preferred external state manager.

5. **Code Quality**:
   - Write clean, strongly typed TypeScript code.
   - Avoid generic names or excessive abstraction unless it improves readability.
   - Comments should explain *why* something is done rather than *what* is done, except for complex math or physics algorithms.
