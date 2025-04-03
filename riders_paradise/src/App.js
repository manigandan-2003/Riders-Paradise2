import { BrowserRouter as Router, Routes, Route, useNavigate, } from "react-router-dom";
import { Html } from "@react-three/drei";
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera, } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "../src/styles/styles.css";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/Homepage";
import { Ground } from "./models/3dmodel/Ground";
import { Bike } from "./models/3dmodel/Bike";
import Admin from "./components/admin/Admin";
import Header from "./components/page/header";
import Footer from "./components/page/footer";
import { Rings } from "./models/3dmodel/Rings";
import { Boxes } from "./models/3dmodel/Box";
import { FloatingGrid } from "./models/3dmodel/FloatingGrid";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/Contactus";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotpasswordPage from "./pages/ForgotpasswordPage";
import BikeDetailsPage from "./pages/BikeDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import TestRidePage from "./pages/TestRidePage";
import Payment from "./components/user/Payment";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import PrivateRoute from "./components/routes/PrivateRoute.js";
function App() {
 return (
  <Provider store={store}>
   <PersistGate persistor={persistor}>
    <Router>
     <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/password/forgot" element={<ForgotpasswordPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/contact" element={<ContactusPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route element={<PrivateRoute />}>
       <Route path="/user/home" element={<HomePage />} />
       <Route path="/user/about" element={<AboutPage />} />
       <Route path="/user/explore" element={<ExplorePage />} />
       <Route path="/user/contact" element={<ContactusPage />} />
       <Route path="/user/testride" element={<TestRidePage />} />
       <Route path="/user/registerbike" element={<RegistrationPage />} />
       <Route path="/user/profile" element={<ProfilePage />} />
       <Route path="/user/payment" element={<Payment />} />
       <Route path="/user/explore/bikes/:_id" element={<BikeDetailsPage />} />
       <Route path="/admin" element={<Admin />} />
      </Route>
     </Routes>
    </Router>
   </PersistGate>
  </Provider>
 );
}

export default App;

function LandingPage() {
 let navigate = useNavigate();
 const routechanege = () => {
  navigate("/user/explore/bikes/654e6695d0ebf3b537eab9cc");
 };
 const routechange = () => {
