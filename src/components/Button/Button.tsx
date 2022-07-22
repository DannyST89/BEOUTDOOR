
import { NavLink } from 'react-router-dom' 
type Props = {
    className?: string, 
    redirection: string,
    text: string,
    scrollTop?: boolean,
    scrollId?: string,
}

export const Button = ({ className, redirection, text, scrollId, scrollTop }: Props) => {

    return (

        <NavLink
            onClick={
                scrollTop
                    ?
                    () => document.getElementById(`${(scrollId == undefined) ? "invisible" : scrollId}`)?.scrollIntoView(true)
                    : () => { }
            }
            className={(className == undefined) ? "button" : className}
            to={redirection}>
            {text}
        </NavLink>

    )
}
