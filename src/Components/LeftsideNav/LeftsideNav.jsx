import { useEffect, useState } from "react";
import data from "../../../public/data/categories.json"
import { Link } from "react-router-dom";

const LeftsideNav = () => {
    const [categories, setcategories] = useState([])
    useEffect(() =>{
       fetch("../../../public/data/categories.json")
       .then(res => res.json())
       .then(data => setcategories(data))
    }
    ,[])
    console.log(categories)
    return (
        <div className="space-y-3">
            <h1 className="text-2xl">All categories</h1>
            {
                categories.map(category => <Link className="block text-xl font-semibold
                ml-4 " to={`category/${category.id}`} key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftsideNav;