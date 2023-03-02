import Profile from "./Profile.js";

export default function Gallery() {
  return (
    <section>
      <h1>Yellowstone Wildflowers</h1>
      <div className="flower-info">
        <Profile
          imageUrl="https://www.yellowstonenationalpark.com/images/wyomingpaintbrush.JPG"
          alt=""
          flowerName="Red flower"
        />
        <Profile
          imageUrl="https://www.yellowstonenationalpark.com/images/sulphurpaintbrush.JPG"
          alt=""
          flowerName="Yellow flower"
        />

        <Profile
          imageUrl="https://www.yellowstonenationalpark.com/images/dalmatian.JPG"
          alt=""
          flowerName="Yellow Yellow flower"
        />
      </div>
    </section>
  );
}
