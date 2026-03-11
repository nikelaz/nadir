# Motivation

## Why Nadir Exists

Every UI project eventually faces the same tension: writing raw CSS is flexible but slow, while adopting a full utility framework like Tailwind can feel like surrendering control over your design to a third-party opinion.

Nadir was created to occupy the space in between. The goal is a small, focused set of CSS primitives that covers the structural and typographic patterns that appear in virtually every UI, without dictating anything about colors, component design, or your overall visual language.

The name "nadir" — the lowest point — reflects this philosophy: a foundation you build on, not a system that builds for you.

## What Nadir Is

**A set of structural primitives.** Nadir gives you classes for the things that are genuinely repetitive and mechanical: spacing scales, flex/grid layout patterns, font size scales, border radius, and shadows. These are the parts of CSS where having a consistent vocabulary pays off.

**Modular by design.** Every area of the library ships as its own bundle. If you only need typography utilities, you pay only for typography. If you want everything, one import covers it. There is no build step required on your end.

**Configurable at the edges.** Font families and a handful of other properties are wired up to CSS custom properties, so you can slot your own values in without touching the library source.

## What Nadir Is Not

**Not a complete design system.** Nadir has no color palette, no spacing tokens tied to a specific brand scale, and no opinion on what your buttons or inputs should look like. You bring those decisions.

**Not Tailwind.** Tailwind aims for comprehensive coverage — a utility class for every CSS property and value. Nadir deliberately does not. It covers the 20% of CSS that solves 80% of layout and typography problems, and stops there.

**Not a component library.** There are no pre-built card, modal, dropdown, or navigation components. Nadir provides the building blocks; what you assemble from them is up to you.

**Not opinionated about your stack.** Nadir is plain CSS. It works with any framework, any build tool, or no build tool at all. Import it in a Vite project, link it from a CDN in a static HTML file, or anywhere else — it does not care.

## The Trade-off

Nadir means you will write some CSS yourself. If you want a utility class for `overflow: hidden` or `cursor: pointer`, you will add it to your own stylesheet. That is an intentional trade-off. The goal is a small, learnable vocabulary that you understand completely, not a complete replacement for knowing CSS.
