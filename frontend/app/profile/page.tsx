import Profile from "../components/Profile";
const ProfilePage = () => {
    return (
        <div>
            <Profile user={{username: "ayub", email: "ayub@gmail.com"}} />
        </div>
    )
}

export default ProfilePage;