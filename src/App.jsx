import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Product } from "./pages/Product";
import { Settings } from "./pages/Settings";
import { Support } from "./pages/Support";
import { Customer } from "./pages/Customer";
import { Subscription } from "./pages/Subscription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
