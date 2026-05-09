import { ThemeProvider } from 'next-themes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/screens/LandingPage';
import PrivacyPage from './components/screens/PrivacyPage';
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
