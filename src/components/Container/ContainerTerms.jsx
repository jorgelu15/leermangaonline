import { useState } from "react"
import React, { useRef } from 'react';

import TermTabs from "../Tabs/TabsTerms";

const ContainerTerms = (props) => {

    return (
        <div className="cont-term">
            <TermTabs></TermTabs>
        </div>
    )
}

export default ContainerTerms;