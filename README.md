# Take Home Todo

This is a take-home test project provided by a company that wishes to remain anonymous.

# Preview (GIF Demo)

![sean-hong-end-point-todo](https://github.com/user-attachments/assets/26dda5eb-0b8e-4aec-9651-b27804adb4cc)

# Getting Started

### Setup

Clone the repository and follow these steps:

MUST add `.env` file and add line below

```.env
VITE_PUBLIC_API_KEY=PMAK-65a6d95a73d7f315b0b3ae13-28f9a3fada28cc91e0990b112478319641
```

Using pnpm (recommended):

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

Fetch and update todos

# Requirements

- [x] fetch todos
- [x] todos in the list should be sorted in the following order:
  - Overdue items at the top
  - Sort by due date (due soonest at the top)
  - Completed items at the bottom
- [x] update todo
- [x] show loading state when update todo

# Concern

I had trouble pushing the code due to the mock API key but eventually allowed the commit with a warning. Please let me know if the API key is sensitive. If it is, I will remove the repository and re-push it without the key.

![image](https://github.com/user-attachments/assets/a20d7259-06b6-4544-a27d-41b02a75eac8)
