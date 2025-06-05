

import PostPage from "../pages/PostPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import CreatePostPage from "../pages/CreatePostPage";

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PostPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="create" element={<CreatePostPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
     </BrowserRouter>
  )
}
export default AppRouter;

//  <Route path="/" elemennt={<MainLayout />}>
//         <Route index element={<PostPage />}/>
//         <Route path="register" element={<RegisterPage/>} />
//         <Route path="login" element={<LoginPage/>} />
//       </Route>