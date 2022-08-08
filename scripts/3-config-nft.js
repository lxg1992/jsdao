import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xbb8C755b92cCD8BEC0C5d1ECFE29D8E69f9DafF9");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Trump Sandwich",
        description: "This NFT will give you access to RPDao!",
        image: readFileSync("scripts/assets/trumpsandwich.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();