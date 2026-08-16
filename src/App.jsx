import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ProjectDetail from './pages/ProjectDetail'
import StudioPage from './pages/StudioPage'
import WhispersPage from './pages/WhispersPage'
import WhisperDetail from './pages/WhisperDetail'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/whispers" element={<WhispersPage />} />
          <Route path="/whispers/:slug" element={<WhisperDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
