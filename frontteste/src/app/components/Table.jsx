
export const Table = (props) => {

    const actualStyle = () => {       
        const defaultStyle = {
            height: "40vh", 
            backgroundColor: "grey", 
            width: "80%", 
            justifySelf: "center"
        }

        // Combina os estilos padrão e os estilos passados via props
        return { ...defaultStyle, ...props.style };
    }      

    return(
        <div style={actualStyle()}>

        </div>
    )

}