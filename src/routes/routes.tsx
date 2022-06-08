import Chat from "../pages/chat/Chat";
import Mypage from "../pages/mypage/Mypage";
import MypageDetail from "../pages/mypage/MypageDetail";
const routes = [
  {
    path: "/my-page",
    child: [
      { path: null, index: true, element: <Mypage />, child: [] },
      { path: ":id", element: <MypageDetail />, child: [] },
    ],
  },
  {
    path: "",
    child: [
      { path: null, index: true, element: <Chat />, child: [] }
    ],
  },
];

export default routes;
