import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const StandartPage = (props) => {
  
  const actualStyle = () => {
    if(!props.style){
      return {
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh', // 100% da altura da tela      
      }  
    } else {
      return props.style
    }
  }
  
  return (
    <>
      <Header />
        <div style={actualStyle()}>
            {props.children}
        </div>
      <Footer />     
    </>   
  );
};
