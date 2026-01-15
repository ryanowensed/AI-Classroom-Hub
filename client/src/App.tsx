import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TryThisToday from "./pages/TryThisToday";
import CaseStudies from "./pages/CaseStudies";
import News from "./pages/News";
import Tools from "./pages/Tools";
import Resources from "./pages/Resources";
import GettingStarted from "./pages/GettingStarted";
import Course from "./pages/Course";
import CourseModule from "./pages/CourseModule";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/try-this-today"} component={TryThisToday} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/news"} component={News} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/getting-started"} component={GettingStarted} />
      <Route path={"/course"} component={Course} />
      <Route path={"/course/module/:moduleId"} component={CourseModule} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
