import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { useState } from "react";

function App() {
  const [isSignupShowVisible, setIsSignupShowVisible] = useState(false);
  const handleSignupClose = () => {
    setIsSignupShowVisible(false);
  };
  const handleSignupShow = () => {
    setIsSignupShowVisible(true);
  };

  const [isLoginShowVisible, setIsLoginShowVisible] = useState(false);
  const handleLoginClose = () => {
    setIsLoginShowVisible(false);
  };
  const handleLoginShow = () => {
    setIsLoginShowVisible(true);
  };

  return (
    <div>
      <Header onSignupShow={handleSignupShow} onLoginShow={handleLoginShow} />
      <Content
        handleSignupClose={handleSignupClose}
        isSignupShowVisible={isSignupShowVisible}
        handleLoginClose={handleLoginClose}
        isLoginShowVisible={isLoginShowVisible}
      />
      <Footer />
    </div>
  );
}

export default App;
