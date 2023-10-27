import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const resp = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=cat`);
      return result.data;
    },
  });
  console.log(resp);
  return <div>Gallery</div>;
};

export default Gallery;
