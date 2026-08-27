import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import PropertyPage from "./pages/PropertyPage";
import BusinessPage from "./pages/BusinessPage";
import ContactPage from "./pages/ContactPage";
import InsightsPage from "./pages/InsightsPage";
import InsightArticlePage from "./pages/InsightArticlePage";


function Router() {
  return (
    <Switch>
      <Route path={"/casos/vista-linda"} component={PropertyPage} />
      <Route path={"/hogar360"} component={BusinessPage} />
      <Route path={"/contacto"} component={ContactPage} />
      <Route path={"/insights/:slug"} component={InsightArticlePage} />
      <Route path={"/insights"} component={InsightsPage} />
      <Route path={"/"} component={BusinessPage} />
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
