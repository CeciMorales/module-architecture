import React from 'react';

import RoomDetail from './RoomDetail'
import RoomHeader from '../rooms/RoomHeader'
import RoomFooter from '../rooms/RoomFooter'
const RoomDetailDashboard = () => {
    return (
        <>
            <RoomHeader></RoomHeader>
            <RoomDetail ></RoomDetail>
            <RoomFooter></RoomFooter>
        </>
    )
}

export default RoomDetailDashboard;