import { useState } from "react"

const Section =({name,isVisible,setIsVisible})=>{
    //const [isVisible,setIsVisible] = useState(false);
    console.log("render");
    return (
        <>
        <h1>{name}:</h1>
                {
                isVisible?
                <button onClick={()=>{
                    setIsVisible(null)
                }
                    }>Hide
                </button>
                :<button onClick={()=>{
                    setIsVisible(name)
                }
                    }>show
                </button>
                }  
        {isVisible && (
                <>
                <div>Lorem </div>
                </>
            )
        }
        </>
    )
}
const Offers = ()=>{
    const [sectionRender,setSectionRender] = useState(null);
    console.log("render : 1");
    return (
        <>
        <Section isVisible = {sectionRender === "amitx13"} setIsVisible={(name)=>{setSectionRender(name)}}  name = {"amitx13"} />

        <Section isVisible = {sectionRender === "Harkirat"} setIsVisible={(name)=>{setSectionRender(name)}} name = {"Harkirat"}/>

        <Section isVisible = {sectionRender === "Xlr8Op"} setIsVisible={(name)=>{setSectionRender(name)}}    name = {"Xlr8Op"}/>
        </>
    )
}

export default Offers;