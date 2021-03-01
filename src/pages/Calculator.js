import React, { useState } from 'react';

import InitOperand from '../components/InitOperand';
import Expression from '../components/Expression';

const Calculator = () => {

  const [data, setData] = useState({
    first_num: '',
    second_num: '',
    result: 0,
    operator: ''
  })

  return (
    data.first_num === '' ? <InitOperand data={data} setData={setData} /> : <Expression data={data} setData={setData} />
  );
};

export default Calculator;
