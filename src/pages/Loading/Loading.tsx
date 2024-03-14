import React from "react"
import { Background, LoadingText } from "./LoadingStyles"

import "./loading.css"

const Loading = () => {
    return (
        <div>
            <Background>
                <LoadingText>잠시만 기다려 주세요.</LoadingText>
                <span className="loader">Load&nbsp;ng</span>
            </Background>
        </div>
    )
}

export default Loading