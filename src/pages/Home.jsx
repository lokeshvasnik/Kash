import React from "react";

const Home = () => {
    return (
        <div className="h-screen text-center">
            <div>
                <p className="text-6xl my-10 font-bold ">
                    It’s a Big World Out There, Go Explore
                </p>
                <p className="my-10 text-xl">
                    We always make our customer happy by providing many chocies
                </p>
                <div>
                    <button className=" py-4 mx-5  rounded-full px-10 bg-green-500 items-center text-md text-white hover:opacity-75">
                        Get Started
                    </button>
                    <button className=" py-4 mx-5 rounded-full px-10 bg-slate-100 items-center text-md hover:opacity-75">
                        Get a demo
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="py-5">
                    <img src="./travigo.png" alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Home;
