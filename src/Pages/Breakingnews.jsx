import Marquee from "react-fast-marquee";


const Breakingnews = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] py-3 px-3 flex">
                <button className="text-lg bg-[#D72050] text-white font-poppins font-medium px-4 py-1 rounded-sm">
                    Latest
                </button>
                <Marquee className=" text-black" pauseOnHover={true} speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

        </div>
    );
};

export default Breakingnews;