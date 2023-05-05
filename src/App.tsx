import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Discover from './pages/Discover';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="discover" element={<Discover />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
