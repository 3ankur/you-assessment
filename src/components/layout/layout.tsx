import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Category from "../category"
import Main from "../main";
import SignUpIn from "../signup-signin";
import watchVideo from "../watch";
import Header from "./header/header"
// import Sidebar from "./sidebar/sidebar"

const Layout = () => {

    return (
        <div className="">
            <Header />
           
            <Router>
                <Switch>
                    {/* <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route> */}
                    <Route  exact path="/" component={Main} />
                    <Route  exact path="/watch" component={watchVideo} />
                    <Route exact path="/signin" component={SignUpIn} />
                       
                </Switch>
            </Router>

            {/* <Sidebar /> */}
           

        </div>
    )

}
export default Layout;