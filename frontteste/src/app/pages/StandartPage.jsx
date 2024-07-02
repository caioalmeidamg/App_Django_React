import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const StandartPage = (props) => {
  
  const actualStyle = () => {
    if(!props.style){
      return {
          display: 'flex',
          justifyContent: 'center',
          flex: '1'    
      }  
    } else {
      return props.style
    }
  }
  
  return (
    <div style={{display: 'flex', flexDirection: 'column',minHeight: '100vh',}}>
      <Header />
        <div style={actualStyle()}>
            {props.children}
        </div>
      <Footer />     
    </div>   
  );
};
