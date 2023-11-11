import NavBar from "./NavBar";
import LeftSideSection from "./leftSideSection";
import RightSideSection from "./RightSideSection";
import MainSection from "./MainSection";
function App() {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftSideSection />
        <MainSection />
        <RightSideSection />
      </div>
    </>
  );
}

export default App;
