import { Avatar } from "./avatar"
import { Menu } from "./menu"

export function Header(){
    return(
        <div className="flex">
            <Avatar></Avatar>
            <Menu></Menu>
        </div>
    )
}
