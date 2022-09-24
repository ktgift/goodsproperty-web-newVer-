import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
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
  console.log(user)
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
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/detail/:propertyId" element={<DetailPage />} />

          <Route path="*" element={<NotfoundPage />} />
        </>
      )}
    </Routes>
  );
}

export default Router;


https://github.com/ktgift/goodsproperty-web.git