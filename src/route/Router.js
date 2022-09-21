import { Route, Routes} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import SalePage from '../pages/SalePage';
import RentPage from '../pages/RentPage';
import DetailPage from '../pages/DetailPage';
import ProfilePage from '../pages/ProfilePage';
import LikePage from '../pages/LikePage';
import MyPostPage from '../pages/MyPostPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import PostPicPage from '../pages/PostPicPage';
import PostPropertyPage from '../pages/PostPropertyPage';
import ConfirmPostPage from '../pages/ConfirmPostPage';

function Router() {
    return (
        <Routes>
            {/* user login */}
            <Route path='/my-post' element={<MyPostPage/>} />
            <Route path="/profile/:userId" element={<ProfilePage />}  />
            <Route path='/like' element={<LikePage />} />
            <Route path='/post-property1' element={<PostPropertyPage />} />
            <Route path='/post-property2' element={<PostPicPage />} />
            <Route path='/confirm' element={<ConfirmPostPage />} />

            {/* not login */}
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/detail/:propertyId" element={<DetailPage />} />
        </Routes>
    )
}

export default Router;