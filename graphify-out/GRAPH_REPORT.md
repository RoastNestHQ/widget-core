# Graph Report - .  (2026-07-10)

## Corpus Check
- Corpus is ~11,282 words - fits in a single context window. You may not need a graph.

## Summary
- 266 nodes · 491 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Referral Core|Referral Core]]
- [[_COMMUNITY_UI Components|UI Components]]
- [[_COMMUNITY_Provider and API|Provider and API]]
- [[_COMMUNITY_Build Config|Build Config]]
- [[_COMMUNITY_Referral UI|Referral UI]]
- [[_COMMUNITY_Dependencies|Dependencies]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Toast System|Toast System]]
- [[_COMMUNITY_User Management|User Management]]
- [[_COMMUNITY_Referral Storage|Referral Storage]]

## God Nodes (most connected - your core abstractions)
1. `ReferralAPI` - 23 edges
2. `compilerOptions` - 16 edges
3. `useRoastnestContext()` - 13 edges
4. `ReferralStorage` - 13 edges
5. `ITransport` - 11 edges
6. `ReferralEventPayload` - 9 edges
7. `EventQueue` - 9 edges
8. `ReferralData` - 8 edges
9. `ReferralWidgetProps` - 8 edges
10. `ApiInstance` - 8 edges

## Surprising Connections (you probably didn't know these)
- `ReferralAPI` --references--> `ReferralStorage`  [EXTRACTED]
  src/features/referral/ReferralAPI.ts → src/features/referral/core/ReferralStorage.ts
- `Provider()` --calls--> `getBackgroundColor()`  [EXTRACTED]
  src/core/RoastnestProvider/index.tsx → src/utils/getBackgroundColor.ts
- `useRoastnest()` --calls--> `useRoastnestContext()`  [EXTRACTED]
  src/core/hooks/useRoastnest.tsx → src/core/hooks/useRoastnestContext.tsx
- `FeedbackForm()` --calls--> `useRoastnestContext()`  [EXTRACTED]
  src/features/feedback/components/FeedbackForm/index.tsx → src/core/hooks/useRoastnestContext.tsx
- `FeedbackPopper()` --calls--> `useRoastnestContext()`  [EXTRACTED]
  src/features/feedback/components/FeedbackPopper/index.tsx → src/core/hooks/useRoastnestContext.tsx

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "Referral Core"
Cohesion: 0.09
Nodes (14): ConversionEvent, QueuedEvent, ReferralConfig, ReferralData, ReferralEventPayload, EventQueue, ReferralDetector, SessionManager (+6 more)

### Community 1 - "UI Components"
Cohesion: 0.09
Nodes (22): defaultRoastnestConfig, RoastnestContext, useRoastnest(), useRoastnestContext(), FeedbackForm(), FeedbackPopper(), FeedbackWidgetProps, allowedPlacements (+14 more)

### Community 2 - "Provider and API"
Cohesion: 0.10
Nodes (26): initialSelectedValue, Provider(), TODO: Handle errors in screenshot capture, RoastnestProvider(), FeedbackWidget(), BaseRoastnestProviderProps, FormDataProps, FormSubmitHandler (+18 more)

### Community 3 - "Build Config"
Cohesion: 0.07
Nodes (28): author, dependencies, clsx, @floating-ui/react, html2canvas-pro, react-device-detect, description, files (+20 more)

### Community 4 - "Referral UI"
Cohesion: 0.15
Nodes (17): ReferralButton(), ReferralButtonProps, ReferralCardProps, ReferralLifecycle(), ReferralPopup(), ReferralPopupProps, DEFAULT_WIDGET_PROPS, ReferralWidget() (+9 more)

### Community 5 - "Dependencies"
Cohesion: 0.11
Nodes (18): devDependencies, postcss, postcss-import, react, react-dom, rimraf, rollup, @rollup/plugin-commonjs (+10 more)

### Community 6 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib (+9 more)

### Community 7 - "Toast System"
Cohesion: 0.15
Nodes (13): getDefaultIcon(), toast, ToastContext, ToastContextType, ToastData, ToastOptions, ToastProvider(), ToastProviderProps (+5 more)

### Community 8 - "User Management"
Cohesion: 0.24
Nodes (3): Person, PersonManager, ApiInstance

## Knowledge Gaps
- **74 isolated node(s):** `version`, `name`, `description`, `main`, `module` (+69 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ReferralAPI` connect `Referral Core` to `Referral Storage`, `Referral UI`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Why does `ReferralStorage` connect `Referral Storage` to `Referral Core`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `ApiInstance` connect `User Management` to `UI Components`, `Provider and API`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `version`, `name`, `description` to the rest of the system?**
  _75 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Referral Core` be split into smaller, more focused modules?**
  _Cohesion score 0.0889894419306184 - nodes in this community are weakly interconnected._
- **Should `UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08686868686868687 - nodes in this community are weakly interconnected._
- **Should `Provider and API` be split into smaller, more focused modules?**
  _Cohesion score 0.10483870967741936 - nodes in this community are weakly interconnected._