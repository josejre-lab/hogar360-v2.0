# Niero Template Audit for Hogar360

## Observed Template System

Niero is a free Framer template intended for creative agencies and studios. Its public preview has a deliberate, contemporary agency structure: a full-screen blue hero with a centered statement, a narrow outlined inner frame, small metadata at the lower edges, and a compact uppercase navigation. The homepage then moves through a project-led portfolio, an expandable services catalogue, process steps, pricing cards, a blog/insights grid, FAQ, conversion banner, and a dense utility footer.

The template provides eight pages: Home, About, Work, Work Detail, Insights/Blog, Contact, Pricing, and 404. Projects and insights are structured as CMS-like repeating card collections, which makes its work and article patterns appropriate for a growing Hogar360 portfolio and educational resource section.

## Elements Worth Carrying Forward

| Niero pattern | Hogar360 adaptation |
| --- | --- |
| Editorial full-screen hero | A clear Hogar360 promise focused on property understanding before an in-person visit. |
| Compact top navigation | `Inicio`, `Casos`, `Servicios`, `Insights`, and a `Cotizar` CTA. |
| Selected work cards | Case studies, beginning with Vista Linda as a promotional sample—not an active listing. |
| Work detail page | A standalone case-study page with the video, gallery, property facts, and future Matterport embed. |
| Structured services/process areas | A direct explanation of the Tour 3D + Landing package and a simple four-step workflow. |
| Insights grid | Educational posts explaining how 3D tours change real-estate marketing internationally and locally. |
| CTA banner and dense footer | A direct WhatsApp/contact conversion point with service navigation and social links only if provided. |

## Elements to Change or Exclude

| Template element | Decision for Hogar360 |
| --- | --- |
| Blue agency hero as-is | Replace with Hogar360’s warm architectural editorial treatment and 360-view spatial motif. |
| Generic branding/UIUX copy | Replace with language about property visualization, virtual tours, and agent workflows. |
| Client testimonials | Exclude until Hogar360 has real, permissioned client testimonials. |
| Monthly agency pricing format | Replace with the current single Paquete Lanzamiento at RD$ 8,950 and the forthcoming Drone add-on. |
| Fake location, contact details, social links | Remove unless the user supplies accurate information. |
| Property-sale or realtor contact language in Vista Linda | Keep removed; Vista Linda remains a proof-of-work case study. |

## Recommended Site Architecture

| Route | Purpose | Starting content |
| --- | --- | --- |
| `/hogar360` | Main conversion homepage for agents | Hero, selected case, services, workflow, insights preview, contact. |
| `/` | Vista Linda promotional case study | Case-study hero, Matterport preparation block, video, gallery, facts, service CTA. |
| `/insights` | Educational blog index | Featured article and article-card grid. |
| `/insights/:slug` | Individual educational articles | Reading layout with an end-of-article Hogar360 CTA. |
| `/contacto` | Optional dedicated inquiry route | A focused quote form and WhatsApp option. |

## Proposed Blog Launch Topics

The first three articles should be practical and credible rather than sales-heavy. They can cover the role of virtual tours in real-estate marketing internationally, why a 3D tour improves the quality of early buyer conversations, and a simple guide for agents preparing a property for a successful virtual-tour shoot. All claims about current markets or international adoption should be researched and cited before publication.

## Approval Gate

Do not rebuild around the template until the user approves the mapping above. After approval, implementation should happen in stages: navigation and page shell first; homepage and case study next; then the insights index, article template, and researched editorial content.
