import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/blog":
      component = <Blog />;
      break;
    case "/about":
      component = <About />;
      break;
  }

  return (
    <div>
      <Header />
      {component}
    </div>
  );
}
