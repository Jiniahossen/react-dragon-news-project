import Breakingnews from "./Breakingnews";
import Header from "./Shortpages/Header";
import Leftsidenav from "./Shortpages/Leftsidenav";
import Navbar from "./Shortpages/Navbar";
import Rightsidenav from "./Shortpages/Rightsidenav";

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div> 
                    <Leftsidenav></Leftsidenav>

                </div>
                <div className=" col-span-1 md:col-span-2">
                      <h2>News section.....</h2>
                </div>
                <div>
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;