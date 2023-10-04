import { FaGofore,FaGithubSquare, FaFacebookSquare,FaInstagramSquare,FaWikipediaW } from "react-icons/fa";
import qzone1 from "../../Picture/qZone1.png"
import qzone2 from "../../Picture/qZone2.png"
import qzone3 from "../../Picture/qZone3.png"

const RightsideNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl">Login with</h1>
                <div className="m-2 ">
              <button className="flex w-full p-3 rounded-lg 
                gap-2  border-2  items-center align-middle">  <h1 className=""><FaGofore></FaGofore></h1>
                <h1 className="text-center  justify-center">Google</h1></button>
                    
                </div>
                <div className="m-2 ">
              <button className="flex w-full p-3 rounded-lg 
                gap-2  border-2  items-center align-middle">  <h1 className=""><FaGithubSquare></FaGithubSquare></h1>
                <h1 className="text-center  justify-center">Github</h1></button>
                    
                </div>
            </div>
            <div>
                <h1 className="text-3xl">Finds us on</h1>
                <div className="m-2 ">
              <button className="flex w-full p-3 rounded-lg 
                gap-2  border-2  items-center align-middle">  <h1 className=""><FaFacebookSquare></FaFacebookSquare></h1>
                <h1 className="text-center  justify-center">Facebook</h1></button>
                    
                </div>
                <div className="m-2 ">
              <button className="flex w-full p-3 rounded-lg 
                gap-2  border-2  items-center align-middle">  <h1 className=""><FaInstagramSquare></FaInstagramSquare></h1>
                <h1 className="text-center  justify-center">Instagram</h1></button>
                    
                </div>
                <div className="m-2 ">
              <button className="flex w-full p-3 rounded-lg 
                gap-2  border-2  items-center align-middle">  <h1 className=""><FaWikipediaW></FaWikipediaW></h1>
                <h1 className="text-center  justify-center">Wikipedia</h1></button>
                    
                </div>
            </div>
            <div>
            <h1 className="text-3xl">Q zone</h1>
            <div className="mx-auto items-center justify-center mx-2">
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            </div>
        </div>
    );
};

export default RightsideNav;