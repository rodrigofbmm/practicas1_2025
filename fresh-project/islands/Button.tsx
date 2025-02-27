import { FunctionComponent } from "preact";

export type Props = {
  name: string;
  onClick?: () => void;
};

const Button: FunctionComponent<Props> = (props) => {
  return (
    <button onClick={props.onClick} class="text-with-button-container">
      {props.name}
    </button>
  );
};

export default Button;