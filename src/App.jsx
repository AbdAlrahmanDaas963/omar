import MyHeader from "./components/MyHeader";
import DevDimensions from "./development/DevDimensions";
import WelcomeSection from "./pages/WelcomeSection";
function App() {
  return (
    <>
      <MyHeader />
      <WelcomeSection />

      {/* Dev */}
      <DevDimensions />
    </>
  );
}

export default App;
