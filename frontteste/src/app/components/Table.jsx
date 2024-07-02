
export const Table = (props) => {

    const actualStyle = () => {       
        const defaultStyle = {
            height: "40vh", 
            backgroundColor: "grey", 
            width: "80%", 
            justifySelf: "center",
            marginTop: '2%', 
            borderRadius:'8px'
        }

        // Combina os estilos padrão e os estilos passados via props
        return { ...defaultStyle, ...props.style };
    }      

    return(
        <div id="tabela" style={actualStyle()}>
            <header style={{backgroundColor: "#333", borderTopLeftRadius:'8px', borderTopRightRadius:'8px', height: "10%"}}></header>
        </div>
    )

}