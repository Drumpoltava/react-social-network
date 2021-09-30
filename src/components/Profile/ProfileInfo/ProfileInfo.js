import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=225G&client=byo&paint=P0475&fabric=FLKSW&sa=S022A,S0248,S0302,S0316,S0319,S0322,S03AG,S0465,S04MA,S04NB,S04WN,S0552,S05AC,S05AS,S06AC,S06AK,S06C4,S06NW,S06U3,S0776&quality=hight&bkgnd=transparent&w=9800&h=8000&x=180&y=800&resp=png&angle=60'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo