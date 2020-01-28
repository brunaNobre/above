import React from 'react'
import userSun from '../../utils/userSun'


function AbvUserProfileSun (props) {
    const userSunTitle = userSun(props.day, props.month);

    return (
    <p>Olá, {userSunTitle}</p>
    )
}



export default AbvUserProfileSun