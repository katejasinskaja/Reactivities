import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";
import ProfileHeader from "./ProfileHeader";
import ProfilePhotos from "./ProfilePhotos";

export default observer(function ProfilePage() {
    const { username } = useParams<{username: string}>();
    const { profileStore } = useStore();
    const { loadingProfile, loadProfile, profile } = profileStore;

    useEffect(() => {
        if (username) loadProfile(username);
        
    }, [loadProfile, username])

    if (loadingProfile) return <LoadingComponent inverted content='Loading profile...' />

    if (!profile) return <h2>Problem loading profile</h2>

    return (
        <Grid>
            <Grid.Column width='16'>
                {profile &&
                    <ProfileHeader profile={profile} />}
                <ProfilePhotos profile={profile} />
            </Grid.Column>
        </Grid>
    )
})