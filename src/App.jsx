import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Fluid Cursor Effect */}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />

      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
