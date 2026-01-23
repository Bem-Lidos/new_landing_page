import LandingPage from './components/screens/LandingPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <>
      <LandingPage />
      <Toaster position="top-center" />
    </>
  );
}
