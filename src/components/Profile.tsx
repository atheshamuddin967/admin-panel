import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { useState, useEffect } from "react";
import Avatar from "react-avatar-edit";
import Images from "../images/Images";
interface ProfileItem {
  pview: string; // Adjust the type accordingly, e.g., string, number, etc.
}

function Profile({ username }: any) {
  const [image, setImage] = useState<File | null>(null);
  const [src, setSrc] = useState<string>("");
  const [imageCrop, setImageCrop] = useState<boolean>(false);
  const [profile, setProfile] = useState<ProfileItem[]>([]);

  const profilefinal = profile.map((item) => item.pview);
  useEffect(() => {
    // Update the profile image when the profilefinal changes
    setSrc(profilefinal.length ? profilefinal[0] : Images.profile);
  }, [profilefinal]);

  const onClose = () => {
    setImageCrop(false);
  };

  const onCrop = (view: any) => {
    setProfile([...profile, { pview: view }]);
  };

  const saveCropImage = () => {
    setImageCrop(false);
    setSrc("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.substring(0, 5) === "image") {
      setImage(file);
      setSrc(URL.createObjectURL(file)); // Set src based on the selected file
      setImageCrop(true); // Show the cropping dialog
    } else {
      setImage(null);
      setSrc(""); // Reset src if no valid image is selected
      console.error("Selected file is not an image.");
    }
  };

  return (
    <div className="profile_img text-center">
      <div className="flex flex-column justify-content-center align-item-center">
        <img
          alt="profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            objectFit: "cover",
            border: "3px solid gray",
          }}
          onClick={() => setImageCrop(true)}
          src={src}
        />
        <label className="userName" htmlFor="fileInput">
          {username}
        </label>

        <Dialog
          header={() => (
            <p className="text-2xl font-semibold text-color-red">Update</p>
          )}
          visible={imageCrop}
          onHide={onClose}
        >
          <Avatar
            src={src}
            width={400}
            height={300}
            onCrop={onCrop}
            onClose={onClose}
          />
          <button onClick={saveCropImage}>Save</button>
        </Dialog>

        <InputText
          type="file"
          accept="image/*"
          id="fileInput" // Add a meaningful id for the label
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Profile;
