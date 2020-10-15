import React from 'react'

export const CalendarEvent = ({ event }) => {

    const { title, user } = event;

    return (
        <div>
            <strong> Nombre del paciente:{ title } </strong>
            <br></br>
            <span>- { user.name } </span>
        </div>
    )
}
