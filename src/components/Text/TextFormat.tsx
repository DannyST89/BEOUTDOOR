import { ReactNode } from "react";

/*Este componente nos permite seleccionar el tamaño de texto necesitado en el componente llamado*/

type textStyle = {
  heigth?: string | number;
  weight?: string | number;
  paddingTop?: string | number;
  paddingRigth?: string | number;
  paddingLeft?: string | number;
  paddingBottom?: string | number;
  color?: string | number;
  size?: string | number;
  font?: string | number;
};

export const TextFormat = (textStyle: textStyle): ReactNode => {
  return <div> {textStyle.color}</div>;
};
