import { ThemeProvider } from 'next-themes';
import LandingPage from './components/screens/LandingPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider
      attribute="class" 
      defaultTheme="dark"
      enableSystem={false}
      storageKey="bemlidos-theme"
      enableColorScheme={true}
      disableTransitionOnChange={false}
    >
      <LandingPage />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
