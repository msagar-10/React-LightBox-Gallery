import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

const GROUP1 = [
  [
    "https://edufy-sigma.vercel.app/static/media/case-2.859bd4ba2ebbd4730032.png",
  ],
  [
    "https://edufy-sigma.vercel.app/static/media/case-3.8c0c1972c214c2a06819.png",
  ],
  [
    "https://edufy-sigma.vercel.app/static/media/case-1.973102b277452f00072b.png",
  ],
];

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "300px", width: "300px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);

function App() {
  return (
    <>
      <LightgalleryProvider>
        <h1 style={{ textAlign: "center" }}>React LightBox Gallery</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {GROUP1.map((p, idx) => (
            <PhotoItem key={idx} image={p[0]} thumb={p[1]} group="group1" />
          ))}
        </div>
      </LightgalleryProvider>
    </>
  );
}

export default App;
