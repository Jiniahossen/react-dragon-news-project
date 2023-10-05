import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Leftsidenav = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
            <h2 className=" text-xl font-poppins font-medium">All Category</h2>
           <div className=" block">
           {
                // categories.map(category=> <NavLink key={category.id}
                //     to={`/category/${category.id}`}
                //     className={({ isActive, isPending }) =>
                //       isPending ? " block font-poppins font-normal text-lg" : isActive ? " bg-[#E7E7E7] text-black font-poppins font-medium font-xl" : ""
                //     }
                //   >
                //     {category.name}
                //   </NavLink>)

                categories.map(category=> <Link key={category.id} className=" block my-4 font-poppins font-medium text-base" to={`category/${category.id}`}> 
                {category.name}
                </Link>)
            }
           </div>
        </div>
    );
};

export default Leftsidenav;