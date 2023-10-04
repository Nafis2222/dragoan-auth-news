import { useLoaderData } from "react-router-dom";
import Breakingnews from "../Breakingnews";
import LeftsideNav from "../LeftsideNav/LeftsideNav";
import RightsideNav from "../RightsideNaav/RightsideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar";
import NewsCard from "../NewsCard";

const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
            <div  className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border-2">
                <LeftsideNav></LeftsideNav>
                </div>
                <div className="border-2 col-span-2">
                {
                    news.map(aNews => <NewsCard key={aNews.id} aNews={aNews}></NewsCard>)
                }

                </div>
                <div className="border-2">
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;