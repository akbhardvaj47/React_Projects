import React from "react";
import Sidebar from "../Components/Sidebar";
import Video from "./Video";
import { useAuth } from "../Context/AuthProvider";

function Home() {
  const { searchResults } = useAuth();
  // console.log(searchResults);


  return (
    <div className="flex">
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 p-0.5">
        {
          searchResults.map((v, i) => {
          // Only render the video if the type is 'video'
          if (v.type === 'video') {
            return <Video key={i} video={v.video} />;
          }
          return null; // Return null for non-video items
        })
        }
      </div>
    </div>
  );
}

export default Home;
