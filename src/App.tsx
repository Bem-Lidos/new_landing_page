import { ThemeProvider } from 'next-themes';
import LandingPage from './components/screens/LandingPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange={false}
      storageKey="bemlidos-theme"
    >
      <LandingPage />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
