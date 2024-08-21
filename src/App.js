import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { sum, subtract, multiply, divide, isValidOperation } from './utils/utils';
import { useState } from 'react';

const App = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setOperation('');
    setPreviousNumber('0');
    setCurrentNumber('0');
  }

  const handleAddNumber = (num) => {
    if (Number(currentNumber) === 0) {
      setCurrentNumber(num);
    } else {
      setCurrentNumber(`${currentNumber}${num}`);
    }
  }

  const handleOperation = (operation) => {
    setOperation(operation);
    setPreviousNumber(currentNumber);
    setCurrentNumber('0');
  }

  const handleEquals = () => {
    if (previousNumber !== '' && currentNumber !== '' && isValidOperation(operation)) {
      let result;
      switch (operation) {
        case '+':
          result = sum(Number(previousNumber), Number(currentNumber));
          setCurrentNumber(`${result}`);
          break;
        case '-':
          result = subtract(Number(previousNumber), Number(currentNumber));
          setCurrentNumber(`${result}`);
          break;
        case '*':
          result = multiply(Number(previousNumber), Number(currentNumber));
          setCurrentNumber(`${result}`);
          break;
        case '/':
          result = divide(Number(previousNumber), Number(currentNumber));
          setCurrentNumber(`${result}`);
          break;
        default:
          break;
      }
      setPreviousNumber('0');
      setOperation('');
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="AC" onClick={() => handleClear()} />
          <Button label="()" onClick={() => handleEquals("()")} />
          <Button label="%" onClick={() => handleEquals("%")} />
          <Button label="/" onClick={() => handleOperation("/")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="*" onClick={() => handleOperation("*")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={() => handleEquals()} />
          <Button label="x" onClick={() => handleEquals()} />
          <Button label="=" onClick={() => handleEquals()} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
