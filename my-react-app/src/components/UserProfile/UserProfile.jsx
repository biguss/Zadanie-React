import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";

function UserProfile({ name, email, pictureSrc }) {
  return (
    <div>
      <ProfilePicture src={pictureSrc} />
      <ProfileDetails name={name} email={email} />
    </div>
  );
}
export default UserProfile;
