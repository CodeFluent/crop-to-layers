// Get the layer the image is on

// Get the various presets for cropping
// TODO: create a json that gets the presets for Instagram and use that for preset. 
// TODO: Said json must be updated, so be sure to github hook when a new release is updated and display to user

// Get the bounds of the rectangle to crop
// TODO: people might want different crops for different formats

// Crop the image using all the presets

// Save each preset crop to its own layer


/*
*   If your script is in this main startup folder, it 
*   is also executed by all other Adobe Creative Suite 6 
*   applications at startup. If such a script is meant to 
*   be executed only by Photoshop, it must include code 
*   such as the following: 
*/

if (BridgeTalk.appName == "photoshop") {
    // continue executing script
}