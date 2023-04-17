const NavBarLink = (props) =>{
    const {text, keyId} = props
    return(
        <li key={keyId}>
            {text}
        </li>
    )
}

export default NavBarLink