import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import TotalPostPage from "../pages/TotalPostPage";
import SalePage from "../pages/SalePage";
import RentPage from "../pages/RentPage";
import DetailPage from "../pages/DetailPage";
import ProfilePage from "../pages/ProfilePage";
import LikePage from "../pages/LikePage";
import MyPostPage from "../pages/MyPostPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import PostPicPage from "../pages/PostPicPage";
import PostPropertyPage from "../pages/PostPropertyPage";
import ConfirmPostPage from "../pages/ConfirmPostPage";
import NotfoundPage from "../pages/NotFoundPage";
import { useAuthen } from "../context/AuthenContext";

function Router() {
  const { user } = useAuthen();
  // console.log(user)
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-post" element={<MyPostPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/like" element={<LikePage />} />
          <Route path="/post-property1" element={<PostPropertyPage />} />
          <Route path="/post-property2" element={<PostPicPage />} />
          <Route path="/confirm" element={<ConfirmPostPage />} />
          <Route path="/newtotal/:id" element={<TotalPostPage />} />
          <Route path="/sale/:id" element={<SalePage />} />
          <Route path="/rent/:id" element={<RentPage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          {/* ใส่ id เพื่อไว้ เช็ค status menu */}
          <Route path="/newtotal/:id" element={<TotalPostPage />} />
          <Route path="/sale/:id" element={<SalePage />} />
          <Route path="/rent/:id" element={<RentPage />} />

          <Route path="/detail/:propertyId" element={<DetailPage />} />

          <Route path="*" element={<NotfoundPage />} />
        </>
      )}
    </Routes>
  );
}

export default Router;