import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import AllProjectsPage from "../pages/AllPalacesPage";
import DetailPage from "../pages/DetailPage";
import NewPalace from "../pages/NewPalace";
import EditPage from "../pages/EditPage";
import NotFoundPage from "../pages/NotFoundPage";
import Profile from "../pages/Profile";
import Rooms from "../pages/Rooms";
import PalacePage from "../pages/PalacePage";
import CreateMemoryPage from "../pages/CreateMemoryPage";
import CreateRoomPage from "../pages/CreateRoomPage";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.ALLPROJECTS,
      element: <AllProjectsPage {...props} />,
    },
    {
      path: PATHS.PROJECTBYID,
      element: <DetailPage {...props} />,
    },
    {
      path: PATHS.PROJECTNEW,
      element: <NewPalace {...props} />,
    },
    {
      path: PATHS.PROJECTEDIT,
      element: <EditPage {...props} />,
    },
    {
      path: PATHS.PROFILEPAGE,
      element: <Profile {...props} />,
    },
    {
      path: PATHS.ROOMS,
      element: <Rooms {...props} />,
    },
    {
      path: PATHS.CREATENOTE,
      element: <PalacePage {...props} />,
    },
    {
      path: PATHS.CREATEMEMORY,
      element: <CreateMemoryPage {...props} />,
    },
    {
      path: PATHS.CREATEROOM,
      element: <CreateRoomPage {...props} />,
    },
    {
      path: PATHS.PAGE404,
      element: <NotFoundPage {...props} />,
    },
    // {
    //   path: "/rooms",
    //   element: <NotFoundPage {...props} />,
    // },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
