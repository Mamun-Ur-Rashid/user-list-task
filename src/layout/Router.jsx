import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import UserList from "../components/userList/UserList";
import UserDetails from "../components/userDetails/UserDetails";
import AddUser from "../components/addUser/AddUser";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <UserList></UserList>
            },
            {
                path:'/userDetails/:userId',
                element: <UserDetails></UserDetails>
            },
            {
                path:'/addUser',
                element: <AddUser></AddUser>
            }
        ]
    }
])
export default router;