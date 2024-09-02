import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contacts from "./pages/Dashboard/Contacts/Contacts";
import Home from "./pages/Dashboard/Home/Home";
import Leads from "./pages/Dashboard/Leads/Leads";
import Accounts from "./pages/Dashboard/Accounts/Accounts";
import Deals from "./pages/Dashboard/Deals/Deals";
import Meetings from "./pages/Dashboard/Meetings/Meetings";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/sign-in"
            element={
              <UnauthenticatedLayout>
                <SignIn />
              </UnauthenticatedLayout>
            }
          />
          <Route
            path="/sign-up"
            element={
              <UnauthenticatedLayout>
                <SignUp />
              </UnauthenticatedLayout>
            }
          />
          <Route
            path="/"
            element={
              <UnauthenticatedLayout>
                <HomePage />
              </UnauthenticatedLayout>
            }
          />
          <Route
            path="/*"
            element={
              <AuthenticatedLayout>
                <Routes>
                  <Route path="/home/*" element={<Home />} />
                  <Route path="/contacts/*" element={<Contacts />} />
                  <Route path="/leads/*" element={<Leads />} />
                  <Route path="/accounts/*" element={<Accounts />} />
                  <Route path="/deals/*" element={<Deals />} />
                  <Route path="/meetings/*" element={<Meetings />} />
                </Routes>
              </AuthenticatedLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
