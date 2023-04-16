import { useEffect, useState, useCallback } from "react";
import { storage } from "./firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

function Content() {
  const [mediaSrc, setMediaSrc] = useState("");
  const [mediaType, setMediaType] = useState("");

  const getMediaType = (filename) => {
    const fileExtension = filename.split(".").pop().toLowerCase();
    if (["png", "jpeg", "jpg"].includes(fileExtension)) return "image";
    if (["mp4", "mov"].includes(fileExtension)) return "video";
    return "unknown";
  };

  const getRandomMedia = useCallback(async () => {
    try {
      const listResult = await listAll(ref(storage, "funny-images-videos"));
      const randomIndex = Math.floor(Math.random() * listResult.items.length);
      const randomItem = listResult.items[randomIndex];
      const downloadURL = await getDownloadURL(randomItem);

      setMediaSrc(downloadURL);
      setMediaType(getMediaType(randomItem.name));
    } catch (error) {
      console.error("Error fetching random media:", error);
    }
  }, []);

  useEffect(() => {
    getRandomMedia();
  }, [getRandomMedia]);

  const mediaStyle = {
    border: "5px solid white",
    height: "80vh",
    objectFit: "contain",
    maxWidth: "100%",
  };

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <header className="App-header">
        {mediaType === "image" && (
          <img src={mediaSrc} alt="random" style={mediaStyle} />
        )}
        {mediaType === "video" && (
          <video controls style={mediaStyle}>
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </header>
    </div>
  );
}


export default Content;
