// Design reminder: all routes inherit the Institutional Care Capital frame while product pages own distinctive accents.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import InfoPage from "./pages/InfoPage";
import LeadPage from "./pages/LeadPage";
import ProductPage from "./pages/ProductPage";
import Solutions from "./pages/Solutions";
import WhoWeHelp from "./pages/WhoWeHelp";
import { products } from "./data/site";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/apgp-referrals"><ProductPage product={products.apgp} /></Route>
      <Route path="/incidentiq"><ProductPage product={products.incidentiq} /></Route>
      <Route path="/incident-iq"><ProductPage product={products.incidentiq} /></Route>
      <Route path="/noteguard"><ProductPage product={products.noteguard} /></Route>
      <Route path="/creds-vault"><ProductPage product={products.credsvault} /></Route>
      <Route path="/credsvault"><ProductPage product={products.credsvault} /></Route>
      <Route path="/provider-pulse"><ProductPage product={products.providerpulse} /></Route>
      <Route path="/providerpulse"><ProductPage product={products.providerpulse} /></Route>
      <Route path="/about" component={About} />
      <Route path="/who-we-help" component={WhoWeHelp} />
      <Route path="/who-we-help/ndis-providers" component={WhoWeHelp} />
      <Route path="/who-we-help/allied-health" component={WhoWeHelp} />
      <Route path="/who-we-help/aged-care" component={WhoWeHelp} />
      <Route path="/who-we-help/sil-sda" component={WhoWeHelp} />
      <Route path="/book-demo"><LeadPage /></Route>
      <Route path="/contact"><LeadPage contactOnly /></Route>
      <Route path="/pricing"><LeadPage /></Route>
      <Route path="/resources"><InfoPage type="resources" /></Route>
      <Route path="/security"><InfoPage type="security" /></Route>
      <Route path="/privacy"><InfoPage type="privacy" /></Route>
      <Route path="/terms"><InfoPage type="terms" /></Route>
      <Route path="/cookies"><InfoPage type="cookies" /></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider><Toaster /><Router /></TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
