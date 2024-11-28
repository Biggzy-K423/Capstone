import { Routes, Route, useLocation, Navigate } from "react-router";

// Import semua halaman
import { Layout } from "./components/layouts/Layout";
import { ProfileLayout } from "./components/layouts/ProfileLayout";
import { LandingPage } from "./pages/LandingPage";
import { TopicPage } from "./pages/TopicPage";
import { NotificationPage } from "./pages/NotificationPage";
import { ProfilePage } from "./pages/ProfilePage";
import { DocumentPage } from "./pages/DocumentPage";
import { PasswordPage } from "./pages/PasswordPage";
import { LogbookPage } from "./pages/LogbookPage";
import { DetailLogbookPage } from "./pages/DetailLogbookPage";

const App = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/beranda" replace />;
  }
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="beranda" element={<LandingPage />} />
        <Route path="topik" element={<TopicPage />} />
        <Route path="notifikasi" element={<NotificationPage />} />
        <Route path="bantuan" element={<LandingPage />} />
        <Route path="profile/logbook/:id" element={<DetailLogbookPage />} />
      </Route>

      <Route path="profile" element={<ProfileLayout />}>
        <Route index element={<ProfilePage />} />
        <Route path="lengkapi-dokumen" element={<DocumentPage />} />
        <Route path="ganti-sandi" element={<PasswordPage />} />
        <Route path="logbook" element={<LogbookPage />} />
      </Route>
    </Routes>
  );
};

export default App;
