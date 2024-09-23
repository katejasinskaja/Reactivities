import { observer } from 'mobx-react-lite';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';

import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({ profile }: Props) {
    const { profileStore } = useStore();

    const panes = [
        { menuItem: 'About', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Events', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Followers', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Following', render: () => <ProfilePhotos profile={profile} /> },
    ];

    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
            
        />
    )
})