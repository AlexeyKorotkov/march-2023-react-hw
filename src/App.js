import React from 'react';
import Simpsons from "./components/Simpsons/Simpsons";




const App = () => {
  return (
      <div>
      <Simpsons name={'Bart'} surname={'Simpson'} age={10} info={'Son'}
                photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>

      <Simpsons name={'Homer'} surname={'Simpson'} age={40} info={'Father'}
                  photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>

        <Simpsons name={'Marge'} surname={'Simpson'} age={38} info={'Mother'}
                  photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>

        <Simpsons name={'Lisa'} surname={'Simpson'} age={9} info={'Eldest Daughter'}
                  photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>

        <Simpsons name={'Maggie'} surname={'Simpson'} age={1} info={'Youngest Daughter'}
                  photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
      </div>
  );
};

export default App;
