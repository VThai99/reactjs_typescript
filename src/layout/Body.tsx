import { Outlet, Route, Routes } from "react-router-dom";
import routes from "../routes/routes";


interface routesArray{
    path: string | '';
    index?: boolean;
    element?: any;
    child: any;
}
const Body: React.FC = () => {
    function routerPath(array:routesArray[]){
        return array?.map((item, idx) => (
            <Route
              key={idx}
              path={item?.path}
              index={item?.index}
              element={item.child?.length > 0 ? <Outlet /> : item.element}
            >
              {item.child?.length > 0 && routerPath(item.child)}
            </Route>
          ));
    }
    return (
        <div>
            <Routes>{routerPath(routes)}</Routes>
        </div>
    )
}
export default Body