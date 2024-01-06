
import styles from "./Quadro.module.css"
import Select, { components} from 'react-select';
import { purple } from "@mui/material/colors";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-router-dom";

const msgStyles = {
  color: 'purple',
};

const CustomNoOptionsMessage = () => {
  return (
    <>
      <Select
        isClearable
        noOptionsMessage={() => "ok"}
        //styles={{ noOptionsMessage: (base) => ({  ...msgStyles }) }}
        isSearchable
        name="color"
        options={[]}
      />
    </>
  );
};


export const Quadro = (props) => {
  return (       
          <div className={(styles.quadro)}>
          <h2> Opa, testando a propriedade {props.nome}</h2>
          <CustomNoOptionsMessage />
          </div>
  );
};