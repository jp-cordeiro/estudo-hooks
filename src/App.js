import { Link } from 'react-router-dom';

import './app.css';

function App() {
  return (
    <div className="app">
      <Link to="/use-state">useState</Link>
      <Link to="/use-effect">useEffect</Link>
    </div>
  );
}

export default App;
