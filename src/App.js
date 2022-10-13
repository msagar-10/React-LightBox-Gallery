import React from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
const App = () => {
  return (
    <>
      <Gallery>
        <Item
          original="https://placekitten.com/1024/768?image=1"
          thumbnail="https://placekitten.com/80/60?image=1"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/80/60?image=1"
            />
          )}
        </Item>
        <Item
          original="https://placekitten.com/1024/768?image=2"
          thumbnail="https://placekitten.com/80/60?image=2"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="https://placekitten.com/80/60?image=2"
            />
          )}
        </Item>
      </Gallery>
    </>
  );
};

export default App;
