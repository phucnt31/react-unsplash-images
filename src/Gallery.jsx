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

  if (resp.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (resp.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  if (resp.data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No result found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {resp.data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={url.id}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
