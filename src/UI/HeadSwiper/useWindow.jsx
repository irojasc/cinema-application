import React from 'react'

export const useWindow = () => {
    const [widthWindow, setWidthWindow] = React.useState(window.innerWidth);
    const handleWidth = () => setWidthWindow(window.innerWidth);

    React.useEffect(()=>{
        window.addEventListener("resize", handleWidth, { passive: true});
        return ()=>(window.removeEventListener("resize", handleWidth));
    },[])

    return {
        widthWindow
    }
}
