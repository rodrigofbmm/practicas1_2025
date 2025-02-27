import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";
import Button from "./Button.tsx";

export type Props = {
  titulo: string;
  texto: string;
};

const Texto: FunctionComponent<Props> = (props) => {
  const dado = useSignal(false);
  let content;

  if(dado.value === true){
    content = (
      <div class="content">
        <div class="separator" />
        <p>{props.texto}</p>
        <input type="text" placeholder="introduuce más texto"/>
      </div>
    );
  }
  return (
    <div class="text-container">
      <div class="top-section">
        <h1>{props.titulo}</h1>
        <Button name={dado.value ? "Minimizar" : "Mostrar más"} onClick={() => (dado.value = !dado.value)} />
      </div>
      {content}
    </div>
  );
};

export default Texto;
