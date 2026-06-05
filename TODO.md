# TODO - Responsive + Glassmorphic + Animations UI

- [x] Update `src/App.css`:
  - [ ] Make layout use full available width on desktop while keeping readable margins.
  - [ ] Improve glassmorphic cards (stronger translucency, colorful gradients, consistent border radius/shadows).
  - [ ] Add mobile-friendly UX changes (typography scaling, spacing, tap targets).
  - [ ] Add collapsible Table of Contents styles for mobile.
  - [ ] Add improved scroll animations (stagger, smoother transitions) and keep `prefers-reduced-motion`.
  - [ ] Enhance background gradient to “gradually change into different light colors” smoothly.


- [ ] Update `src/App.js`:
  - [ ] Replace inline IntersectionObserver style mutations with class-based logic.
  - [ ] Add scroll progress indicator (optional but lightweight) + tie to subtle header glow.
  - [ ] Implement collapsible ToC state + button UI, while keeping scrollToSection.
  - [ ] Add stagger via CSS variable or dataset.

- [ ] Run `npm start` and verify:
  - [ ] Desktop width fills properly.
  - [ ] Mobile ToC collapses/expands.
  - [ ] Glass look is consistent.
  - [ ] Scroll reveal animations trigger.

- [ ] Run `npm run build` to ensure production build succeeds.

