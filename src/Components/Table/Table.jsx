import React, { useState, useEffect } from "react";
import "./style.css";
// import rasm1  from "../../assets/img/r1";
// import rasm2  from "../../assets/img/r2";
// import rasm3  from "../../assets/img/r3";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { generalData } from "../../baza/baza";
import { PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
function Table() {
  const [modal, setModal] = useState(false);
  const [inputNumber, setInputNumber] = useState('');
  const [dataIndex, setDataIndex] = useState();
  const [toggleTd, setToggleTd] = useState("")
  const [baza, setBaza] = useState([])
  const [tableData, setDataTable] = useState(generalData);
      let user = baza;
      const data = {
          labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue',
            'Black',
            'Aqua',
            'Brown',
            'DeepPink',
            'Gold',
            'Indigo',
            'LawnGreen',
          ],
          datasets: [{
            label: 'Критерии oценки',
            data: user,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)',
              'rgb(14, 14, 14)',
              '#00FFFF',
              '#A52A2A',
              '#FF1493',
              '#FFD700',
              '#4B0082',
              '#7CFC00',
              'rgb(255, 255, 0)',
            ]
          }]};
  const toggle = () => setModal(!modal);
  const toggleTD = (index, setNumber)=> {
    setDataIndex(index)
    setToggleTd(setNumber)
    setModal(!modal)
  }

  const getNumber = (event) => {
    setInputNumber(event.target.value);
  }

  const saveFunction = () =>{
    setModal(!modal)
    let newArr = [...tableData]; 
    newArr[dataIndex][toggleTd] = inputNumber;
    setDataTable(newArr);
    
  }
  const savefFunction  = () => {
    let obj = [];
    const bazas = tableData.map((item) => (
     obj.push(item.tdTitle_1)
    ) );
    setBaza(obj);
    console.log(obj);
  }
  useEffect(() => {
    savefFunction();
  }, [tableData]);
  
  console.log('salom');
  console.log(baza);
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Table Number</ModalHeader>
        <ModalBody>
          <div>
            <Input onChange={getNumber}/>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Bekor Qilish
          </Button>
          <Button color="primary" onClick={saveFunction}>
            Saqlash
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <div className="container-item">
        <div className="table-title">Энергосберегающие сети Smart Grid</div>
        <div className="table-item">
          <table >
              <tr>
                  <th>#</th>
                  <th>Название</th>
                  <th className="table-head">1</th>
                  <th className="table-head">2</th>
                  <th className="table-head">3</th>
                  <th className="table-head">4</th>
                  <th className="table-head">5</th>
                  <th>color</th>
              </tr>
              {tableData.map((item, index) => {
                
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tdName}</td>
                    <td className="table-head" onClick={() => toggleTD(index, "tdTitle_1")}>
                      {(item.tdTitle_1 == 1)?(item.tdTitle_1):('0')}
                    </td>
                    <td className="table-head" onClick={() => toggleTD(index, "tdTitle_1")}>
                      {(item.tdTitle_1 == 2)?(item.tdTitle_1):('0')}
                    </td>
                    <td className="table-head" onClick={() => toggleTD(index, "tdTitle_1")}>
                      {(item.tdTitle_1 == 3)?(item.tdTitle_1):('0')}
                    </td>
                    <td className="table-head" onClick={() => toggleTD(index, "tdTitle_1")}>
                      {(item.tdTitle_1 == 4)?(item.tdTitle_1):('0')}
                    </td>
                    <td className="table-head" onClick={() => toggleTD(index, "tdTitle_1")}>
                      {(item.tdTitle_1 == 5)?(item.tdTitle_1):('0')}
                    </td>
                    <td className="color-bg">
                      <div className={item.tdColor}></div>
                    </td>
                  </tr>
                );
              })}

          </table>
          <div className='chart-item' >
              <div className='chart-items'>
                  <PolarArea 
                  data = {data}>
                  </PolarArea>
              </div>
          </div>
        </div>
        <div className="rasm-item row">

        </div>
      </div>
    </>
  );
}

export default Table;
