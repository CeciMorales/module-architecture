import React from 'react';

import RoomElement from './RoomElement'

const RoomList = () => {
    return (
        <>
            <h3 className="building-title">Edificio Legorreta </h3>
            <div className="grid-container">
            
            <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                
            </div>

            <h3 className="building-title">Edificio Cedetec</h3>
            <div className="grid-container">
            
            <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                <RoomElement></RoomElement>
                
            </div>
        </>
    )
}

export default RoomList;