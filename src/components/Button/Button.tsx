
import { NavLink } from 'react-router-dom'
type Props = {
    className?: string,
    classNameIcon?: string,
    redirection: string,
    text: string,
    scrollTop?: boolean,
    scrollId?: string,

    icon?: {
        className?: string,
        src?: string
        width?: string,
        height?: string,
    },

    width?: string,
    height?: string,
}

export const Button = ({ className, redirection, text, scrollId, scrollTop, classNameIcon, icon, width, height }: Props) => {

    return (

        <NavLink style={(
            (width || height) ? {
                width: width ? width : '',
                height: height ? height : '',
            } : {})}
            onClick={
                scrollTop
                    ?
                    () => document.getElementById(`${(scrollId == undefined) ? "invisible" : scrollId}`)?.scrollIntoView(true)
                    : () => { }
            }
            className={(className == undefined) ? "button" : className}
            to={redirection}>
            <div className={classNameIcon}>

                {text +" "}
                {
                    icon && <img
                        style={(
                            (icon.width || icon.height) ?
                                {
                                    width: icon.width ? icon.width : '',
                                    height: icon.height ? icon.height : '',
                                } : {})}
                        className={icon.className} src={icon.src} alt="icono" />
                }

            </div>
        </NavLink>

    )
}
