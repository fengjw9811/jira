import AuthenticatedApp from "./authenticated-app";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./unauthenticated-app";

export default function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}
