# Take Home Todo

This is a take-home test project provided by a company that wishes to remain anonymous.

# Preview (GIF Demo)

Include a GIF here showcasing the app in action for a quick visual overview.

![sean-hong-end-point-todo](https://github.com/user-attachments/assets/26dda5eb-0b8e-4aec-9651-b27804adb4cc)

# Getting Started

### Setup

Clone the repository and follow these steps:

Using pnpm:

```bash
pnpm install && pnpm run dev
```

Using npm:

```bash
npm install && npm run dev
```

# Tech Choices

### Why these tools were selected:

- `Vite`: For its fast development experience and efficient bundling.
- `@tanstack/react-query`: Simplifies server-state management with robust fetching and mutation handling.
- `Tailwind CSS`: Enables rapid styling and prototyping with utility-first CSS.

# Features

Task Management: fetch and update todo

# Requirements

- [x] fetch todos
- [x] todos in the list should be sorted in the following order:
  - Overdue items at the top
  - Sort by due date (due soonest at the top)
  - Completed items at the bottom
- [x] update todo
- [x] show loading state when update todo
