import React from "react";
import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Output from "../Output/Output";
import Output2 from "../Output2/Output2";
import { useState } from "react";

const Home = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [option, setOption] = useState();
  let element = 0;

  const onchange = (event) => {
    const selected = event.target.value;
    setOption(selected);
  };
  // console.log(option)

  const handleText1 = (event) => {
    const value = event.target.value;
    setText1(value);
  };
  const handleText2 = (event) => {
    const value2 = event.target.value;
    setText2(value2);
  };

  const btnClickHandler = () => {
    const items = [...list];
    const items2 = [...list2];

    if (option === "Excellent") {
      if (text1.trim() && text2.trim()) {
        let price = (text1 / 100) * 20;
        items.push(text2 + " offers a tip of rs " + price);
        items2.push(price);
        setList2(items2);
        setList(items);
      }
    } else if (option === "Good") {
      if (text1.trim() && text2.trim()) {
        let price = (text1 / 100) * 10;
        items.push(text2 + " offers a tip of rs " + price);
        setList(items);
        items2.push(price);
        setList2(items2);
      }
    } else if (option === "Nice") {
      if (text1.trim() && text2.trim()) {
        let price = (text1 / 100) * 5;
        items.push(text2 + " offers a tip of rs " + price);
        setList(items);
        items2.push(price);
        setList2(items2);
      }
    } else if (option === "Bad") {
      if (text1.trim() && text2.trim()) {
        let price = (text1 / 100) * 3;
        items.push(text2 + " offers a tip of rs " + price);
        setList(items);
        items2.push(price);
        setList2(items2);
      }
    }
    setText1("");
    setText2("");
    console.log(items2);
    for (let i = 0; i < items2.length; i++) {
      element = items2[i] + element;
    }
  };

  const clickHandle = () => {
    alert(
      "You get your total customers and total tip of the day in the given table"
    );
  };

  return (
    <div>
      <Heading />

      <Input
        value={text1}
        change={handleText1}
        change2={handleText2}
        value2={text2}
        click={btnClickHandler}
        select={onchange}
        vselect={option}
      />

      <Output list={list} />

      <Output2
        length={list.length}
        total={list2.reduce(function (acc, val) {
          return acc + val;
        }, 0)}
        clickHandle={clickHandle}
      />

      <Footer />
    </div>
  );
};

export default Home;
