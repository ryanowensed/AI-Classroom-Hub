import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PreK from "./pages/PreK";
import Elementary from "./pages/Elementary";
import MiddleSchool from "./pages/MiddleSchool";
import HighSchool from "./pages/HighSchool";
import Administrators from "./pages/Administrators";
import HubResources from "./pages/HubResources";
import PromptLibrary from "./pages/PromptLibrary";
import ToolDirectory from "./pages/ToolDirectory";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import PolicyTemplates from "./pages/PolicyTemplates";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/prek-kinder" component={PreK} />
      <Route path="/elementary" component={Elementary} />
      <Route path="/middle-school" component={MiddleSchool} />
      <Route path="/high-school" component={HighSchool} />
      <Route path="/administrators" component={Administrators} />
      <Route path="/hub-resources" component={HubResources} />
      <Route path="/prompt-library" component={PromptLibrary} />
      <Route path="/tool-directory" component={ToolDirectory} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/about" component={About} />
      <Route path="/policy-templates" component={PolicyTemplates} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
