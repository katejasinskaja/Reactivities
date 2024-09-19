import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";
import { useStore } from "../../../app/stores/store";



export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
   

   



    useEffect(() => {
        activityStore.loadActivities();

    }, [activityStore])








    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters/>
            </Grid.Column>
        </Grid>
    )
});