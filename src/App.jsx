import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import About from "./ui/About";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ScamTracing from "./pages/ScamTracing";
import Testimonial from "./pages/Testimonial";
import BitcoinWallet from "./pages/BitcoinWallet";
import BlockchainWallet from "./pages/BlockchainWallet";
import MultibitWallet from "./pages/MultibitWallet";
import MetaMaskWallet from "./pages/MetaMaskWallet";
import ElectrumWallet from "./pages/ElectrumWallet";
import Press from "./pages/Press";
import KnowledgeCenter from "./pages/KnowledgeCenter";

import ScrollToTop from "./ui/ScrollToTop";

function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/scam-trace" element={<ScamTracing />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/press" element={<Press />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/wallets/bitcoin-core" element={<BitcoinWallet />} />
            <Route
              path="/wallets/blockchain-com"
              element={<BlockchainWallet />}
            />
            <Route path="/wallets/multibit" element={<MultibitWallet />} />
            <Route path="/wallets/metamask" element={<MetaMaskWallet />} />
            <Route path="/wallets/electrum" element={<ElectrumWallet />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
