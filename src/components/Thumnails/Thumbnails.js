import { useContext } from "react"
import ThumbnailImage from './ThumbnailImage'
import ProfileContext from "../utils/ProfileContext"

function Thumbnail(){
    const { thumbnailCaption }= useContext( ProfileContext )

    return (
        <div class="img-thumbnail mx-2" style={ {width: '300px'} } >
            <ThumbnailImage />
            
            <div class='text-muted'>{thumbnailCaption}</div>
        </div>
    )
}

export default Thumbnail