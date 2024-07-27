import React from "react";
import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan | Code with me",
    image: "th.png",
    thumbImage: "profile.jpg",
    author: "Vikash Sharma",
    views: "100k",
    timestamp: "2 days go",
  },
];

const VideoGrid = () => {
  return <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 items-center justify-around">
    {
        VIDEOS.map(item=><div>
            <VideoCard title={item.title} author={item.author} image={item.image} thumbImage={item.thumbImage} timestamp={item.timestamp} views={item.views}/>
        </div>)
    }
  </div>;
};

export default VideoGrid;
