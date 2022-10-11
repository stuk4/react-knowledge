
import { AnalyticsView } from "../modules/dashboards/analytics/AnalyticsView";
import { SeparatorTitle } from "../modules/layout/navbar-sidebar/SeparatorTitle";

interface Route{
    to:string;
    path:string;
    Component: () => JSX.Element;
    name:string;

}
export const routes:Route[] =  [
    {
        to:'',
        path:'',
        Component:SeparatorTitle,
        name:'Dashboard',
        
    },
    {
        to:'/analytics',
        path:'analytics',
        Component:AnalyticsView,
        name:'analytics',
    },

]
