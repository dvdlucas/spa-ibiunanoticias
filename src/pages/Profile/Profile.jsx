import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconEdit,
  ProfileIconsAdd,
  ProfileUser,
} from "./ProfileStyled";

export function Profile() {
  const { user } = useContext(UserContext);
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>
        <ProfileBackground src={user.background} alt="" />
        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>
        <ProfileActions>
          <ProfileIconsAdd>
            <i className="bi bi-plus-circle"></i>
          </ProfileIconsAdd>
        </ProfileActions>
      </ProfileHeader>
    </ProfileContainer>
  );
}
