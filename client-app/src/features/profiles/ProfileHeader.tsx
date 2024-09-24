import { observer } from 'mobx-react-lite';
import { Grid, Segment, Item, Header } from "semantic-ui-react";
import { Profile } from '../../app/models/profile';


interface Props {
    profile: Profile
}

export default observer(function ProfileHeader({ profile }: Props) {
    return (
        <Segment>
            <Grid>
                <Grid.Column width={16}>
                    <Item.Group>
                        <Item>
                            <Item.Image
                                avatar
                                size='small'
                                src={profile.image || '/assets/user.png'}
                            />
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content={profile.displayName} />
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
               
            </Grid>
        </Segment>

    )
})