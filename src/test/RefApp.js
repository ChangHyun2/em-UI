import React, { Component } from "react";

// https://www.youtube.com/watch?v=tiytyGEodl0

// user action을 통해 다음 tab으로 이동

const MyInput = (props) => {
  return <input ref={props.innerRef} type="text" />;
};
const MyInput2 = ({ innerRef, ...others }) => {
  return <input ref={innerRef} {...others} type="text" />;
};

const FunctionRef = () => {
  let inputRef = null;
  let myInputRef = null;
  let myInputRef2 = null;

  const onClick = () => {
    inputRef.focus();
  };

  const onClickMyInput = () => {
    myInputRef.focus();
  };
  const onClickMyInput2 = () => {
    myInputRef2.focus();
  };

  return (
    <>
      <span onClick={onClickMyInput2}>function componen reused input UI</span>
      <MyInput2
        innerRef={(input) => {
          myInputRef2 = input;
        }}
      />
      <span onClick={onClickMyInput}>function componen reused input UI</span>
      <MyInput
        innerRef={(input) => {
          myInputRef = input;
        }}
      />
      <span>function component input</span>
      <input
        type="text"
        ref={(input) => {
          inputRef = input;
        }}
      />
      <input type="submit" value="submit" onClick={onClick} />
    </>
  );
};

class Ref extends Component {
  // componentDIdmount이후 ref callback 실행

  onClick = () => {
    console.log(this.firstName);
    console.log(this.firstName.value);
  };

  onKeyUp = (target, e) => {
    console.log(target, e.keyCode, this);
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };

  render() {
    return (
      <>
        <FunctionRef />
        <div>
          <span>First Name:</span>
          <input
            ref={(input) => {
              this.firstName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "firstName")}
            type="text"
          />
        </div>
        <div>
          <span>Last Name:</span>
          <input
            ref={(input) => {
              this.lastName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "lastName")}
            type="text"
          />
        </div>
        <div>
          <span>Age:</span>
          <input
            ref={(input) => {
              this.age = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "age")}
            type="text"
          />
        </div>
        <div>
          <input
            ref={(input) => {
              this.submit = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "submit")}
            type="submit"
            value="submit"
            onClick={this.onClick}
          />
        </div>
      </>
    );
  }
}
export default Ref;
