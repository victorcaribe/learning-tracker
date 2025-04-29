import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/resources" element={<div>Resources Page</div>} />
          <Route path="/progress" element={<div>Progress Page</div>} />
          <Route path="/analytics" element={<div>Analytics Page</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
