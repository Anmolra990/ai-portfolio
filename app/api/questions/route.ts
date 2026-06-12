import { NextResponse } from "next/server";

type Question = {
  question: string;
  answer: string;
};

const frontendQuestions: Question[] = [
   {
    question: "What is HTML?",
    answer: "HTML is the standard markup language used to create web pages."
  },
  {
    question: "What is CSS?",
    answer: "CSS is used to style and layout web pages."
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used to make websites interactive."
  },
  {
    question: "What is the DOM?",
    answer: "The DOM is a tree-like representation of an HTML document that JavaScript can manipulate."
  },
  {
    question: "What is Event Bubbling?",
    answer: "Event Bubbling is when an event propagates from the target element up through its parent elements."
  },
  {
    question: "What is Event Delegation?",
    answer: "Event Delegation is attaching an event listener to a parent element to handle child element events."
  },
  {
    question: "What is a Closure?",
    answer: "A closure is a function that remembers variables from its outer scope even after the outer function has finished."
  },
  {
    question: "Difference between var, let, and const?",
    answer: "var is function-scoped, let and const are block-scoped. const cannot be reassigned."
  },
  {
    question: "What is Hoisting?",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution."
  },
  {
    question: "What is the Event Loop?",
    answer: "The Event Loop handles asynchronous operations and executes callbacks when the call stack is empty."
  },
  {
    question: "What is a Promise?",
    answer: "A Promise represents the eventual completion or failure of an asynchronous operation."
  },
  {
    question: "What is Async/Await?",
    answer: "Async/Await provides a cleaner syntax for working with Promises."
  },
  {
    question: "What is Local Storage?",
    answer: "Local Storage stores data in the browser permanently until it is manually removed."
  },
  {
    question: "What is Session Storage?",
    answer: "Session Storage stores data only for the duration of the browser session."
  },
  {
    question: "What is Responsive Design?",
    answer: "Responsive Design ensures websites work properly on different screen sizes and devices."
  },
  {
    question: "What is Flexbox?",
    answer: "Flexbox is a CSS layout model used to align and distribute items efficiently."
  },
  {
    question: "What is CSS Grid?",
    answer: "CSS Grid is a two-dimensional layout system for creating rows and columns."
  },
  {
    question: "What is Semantic HTML?",
    answer: "Semantic HTML uses meaningful tags such as header, nav, main, section, and footer."
  },
  {
    question: "Difference between == and ===?",
    answer: "== compares values after type conversion, while === compares both value and type."
  },
  {
    question: "Difference between null and undefined?",
    answer: "undefined means a variable has not been assigned a value, while null is an intentional empty value."
  }
];

const reactQuestions: Question[] = [
 {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension that allows writing HTML-like code in JavaScript."
  },
  {
    question: "What is Virtual DOM?",
    answer: "Virtual DOM is a lightweight copy of the real DOM used to improve performance."
  },
  {
    question: "What are React Hooks?",
    answer: "Hooks allow functional components to use state and lifecycle features."
  },
  {
    question: "What is useState?",
    answer: "useState is a Hook used to manage component state."
  },
  {
    question: "What is useEffect?",
    answer: "useEffect is used for side effects such as API calls and subscriptions."
  },
  {
    question: "What is useContext?",
    answer: "useContext allows components to access data from Context."
  },
  {
    question: "What is useMemo?",
    answer: "useMemo memoizes values to improve performance."
  },
  {
    question: "What is useCallback?",
    answer: "useCallback memoizes functions to prevent unnecessary recreation."
  },
  {
    question: "What are Props?",
    answer: "Props are data passed from parent components to child components."
  },
  {
    question: "What is State?",
    answer: "State is data managed within a component."
  },
  {
    question: "Difference between Props and State?",
    answer: "Props are read-only and passed from parents, while state is managed within the component."
  },
  {
    question: "What is Context API?",
    answer: "Context API provides a way to share data globally."
  },
  {
    question: "What are Controlled Components?",
    answer: "Controlled Components are form elements controlled by React state."
  },
  {
    question: "What are Uncontrolled Components?",
    answer: "Uncontrolled Components manage their own state using refs."
  },
  {
    question: "What is React Fragment?",
    answer: "React Fragment groups multiple elements without adding extra DOM nodes."
  },
  {
    question: "What is a Key in React?",
    answer: "Keys help React identify which list items have changed."
  },
  {
    question: "What is Prop Drilling?",
    answer: "Prop Drilling is passing data through multiple nested components."
  },
  {
    question: "What is Lifting State Up?",
    answer: "Lifting State Up means moving state to a common parent component."
  },
  {
    question: "What causes a React component to re-render?",
    answer: "Changes in state, props, or context can trigger a re-render."
  }
];

const nextQuestions: Question[] = [
    {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications."
  },
  {
    question: "What is the App Router?",
    answer: "The App Router is Next.js's modern routing system using the app directory."
  },
  {
    question: "What are Server Components?",
    answer: "Server Components render on the server and reduce client-side JavaScript."
  },
  {
    question: "What are Client Components?",
    answer: "Client Components run in the browser and can use hooks."
  },
  {
    question: "What is SSR?",
    answer: "SSR renders pages on the server for each request."
  },
  {
    question: "What is SSG?",
    answer: "SSG generates pages at build time."
  },
  {
    question: "What is ISR  -?",
    answer: "ISR updates static pages after deployment."
  },
  {
    question: "What is Dynamic Routing?",
    answer: "Dynamic Routing creates routes using parameters like [id]."
  },
  {
    question: "What is the Link Component?",
    answer: "Link enables client-side navigation in Next.js."
  },
  {
    question: "What is Image Optimization?",
    answer: "Next.js automatically optimizes images for performance."
  },
  {
    question: "What are API Routes?",
    answer: "API Routes allow backend endpoints within a Next.js project."
  },
  {
    question: "What is Middleware?",
    answer: "Middleware runs before a request is completed."
  },
  {
    question: "What is Hydration?",
    answer: "Hydration attaches React event handlers to server-rendered HTML."
  },
  {
    question: "How does Next.js improve SEO?",
    answer: "Next.js improves SEO using SSR, SSG, and metadata."
  },
  {
    question: "How do you fetch data in Next.js?",
    answer: "Using fetch(), Server Components, API Routes, or client-side requests."
  },
  {
    question: "What is generateMetadata?",
    answer: "generateMetadata dynamically creates page metadata."
  },
  {
    question: "What is Loading UI?",
    answer: "Loading UI shows fallback content while data loads."
  },
  {
    question: "What is Error Handling in Next.js?",
    answer: "Error handling is done using error.tsx and try-catch blocks."
  },
  {
    question: "What is Route Handler?",
    answer: "Route Handlers create API endpoints inside the app directory."
  },
  {
    question: "Difference between React and Next.js?",
    answer: "React is a UI library, while Next.js is a framework built on React."
  }
];

export async function POST(req: Request) {
  const { role } = await req.json();

  let questions: Question[] = [];

  if (role === "Frontend Developer") {
    questions = frontendQuestions;
  } else if (role === "React Developer") {
    questions = reactQuestions;
  } else if (role === "Next.js Developer") {
    questions = nextQuestions;
  }

  return NextResponse.json({ questions });
}