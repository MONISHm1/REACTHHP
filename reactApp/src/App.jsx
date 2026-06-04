import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
function App() {
  return (
    <>
      <Navbar Title = "Text-Utils"/>
      <div className="container">
        <TextForm heading = "Enter the text to Analyze"/>
      </div>
    </>
  );
}

export default App;
