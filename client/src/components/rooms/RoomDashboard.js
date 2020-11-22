import React from 'react';

import RoomList from './RoomList'
import RoomHeader from './RoomHeader'
import RoomFooter from './RoomFooter'

const RoomDashboard = () => {
    return (
        <>  
            <RoomHeader></RoomHeader>
            <RoomList className="dashboard-background"></RoomList>
            <RoomFooter></RoomFooter>
        </>
    )
}

export default RoomDashboard;