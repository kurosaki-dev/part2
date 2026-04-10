# Full Stack Open Part 2 Workspace

This repository is set up as a React + Vite workspace for the Full Stack Open course. The current codebase matches the early Part 2 exercises around rendering course data with reusable components.

## Current Learning Focus

- Component decomposition
- Passing data with props
- Rendering lists with `map`
- Deriving values from arrays with `reduce`

Core files in the current exercise flow:

- `src/App.jsx`
- `src/components/Course.jsx`
- `src/components/Content.jsx`
- `src/components/Header.jsx`
- `src/components/Part.jsx`

## Mentor Workflow

This workspace now includes a mentoring guide in [`MENTORING.md`](./MENTORING.md).

Default collaboration style:

- Mentor mode
- Hints first
- Review and explanation before full solutions
- Course-aligned guidance over overengineered patterns

You can steer the support style at any time with prompts like:

- `give me only hints`
- `review my code`
- `explain this concept`
- `show me the full solution`

## Development Commands

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run lint` runs ESLint

## Success Criteria

The goal is not just to finish exercises, but to understand them well enough to explain:

- what each component is responsible for
- why data flows through props the way it does
- how derived values are calculated
- which parts of the solution are course-core versus optional improvements
