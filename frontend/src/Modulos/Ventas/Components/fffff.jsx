import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Recibo = React.forwardRef((props, ref) => (
  <div ref={ref}>
    {/* Aquí va el contenido del recibo */}
    <h1>Recibo</h1>
    <p>Producto: {props.producto}</p>
    <p>Total: {props.total}</p>
    {/* Agrega más detalles según sea necesario */}
  </div>
));

const ImprimirRecibo = () => {
  const reciboRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => reciboRef.current,
  });

  return (
    <div>
      <Recibo ref={reciboRef} producto="Producto 1" total="100.00" />
      <button onClick={handlePrint}>Imprimir Recibo</button>
    </div>
  );
};

export default ImprimirRecibo;
