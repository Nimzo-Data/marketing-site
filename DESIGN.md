# Nimzo Data — Design System

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#004f4c` | Headings, nav, buttons, borders |
| `--color-background` | `#f4faff` | Page backgrounds |
| `--color-card` | `#dee7e7` | Card backgrounds, dividers |
| `--color-accent` | `#493441` | CTA buttons, accent highlights |
| `--color-text` | `#1a1a1a` | Body text, headings |
| `--color-text-secondary` | `#6b7280` | Captions, labels |
| `--color-white` | `#ffffff` | Card backgrounds, contrast sections |

## Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | Archivo SemiBold (600) | H1–H4, section titles, nav |
| `--font-body` | Roboto Regular (400) | Paragraphs, descriptions |
| Emphasis | Roboto Medium (500) | Labels, card titles |

## Spacing Scale (4px base)

4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

## Border Radius

- Buttons: `8px` (`--radius-btn`)
- Cards: `12px` (`--radius-card`)
- Inputs: `6px` (`--radius-input`)

## Shadows

- Cards: `0 1px 3px rgba(0,0,0,0.08)` (`--shadow-card`)
- Dropdowns: `0 4px 12px rgba(0,0,0,0.1)` (`--shadow-dropdown`)

## Breakpoints

- Mobile: 375px (`--breakpoint-sm`)
- Tablet: 768px (`--breakpoint-md`)
- Desktop: 1024px (`--breakpoint-lg`)
- Wide: 1280px (`--breakpoint-xl`)
- Max content width: 1200px

## Focus & Interaction

- Focus ring: 2px solid `#004f4c`, 2px offset
- Hover transitions: 150ms ease
- Dropdown transitions: 200ms ease
- Button hover: darken 10%

## Logo Assets

Location: `public/images/logos/`
- `logo-colored.png` — Primary logo (teal mark + "Nimzo Data" text)
- `logo-white.png` — White version for dark/teal backgrounds
- `logo-black.png` — Black version for light backgrounds
- `favicon.svg` — Custom SVG favicon

## Component Patterns

### Buttons
- Primary: `background: var(--color-primary)`, white text, `border-radius: var(--radius-btn)`
- Accent: `background: var(--color-accent)`, white text
- Secondary: transparent background, `border: 1px solid var(--color-primary)`, primary text
- Ghost: transparent, no border, primary text with underline on hover

### Cards
- Background: `var(--color-card)` or `var(--color-white)`
- Border radius: `var(--radius-card)`
- Shadow: `var(--shadow-card)`

### Section Wrapper
- Max width: 1200px, centered
- Horizontal padding: 24px (mobile), 48px (tablet+)
- Vertical padding: 64px (default)
