import React, { useState } from "react";
function Example2() {
  const [age, setAge] = useState(18);
  const [sex, setSex] = useState('男');
  const [work, setWork] = useState('程序员');
  return (
    <div>
      <p>今年 { age } 岁</p>
      <p>性别是{ sex }</p>
      <p>工作是{ work }岁</p>
    </div>
  );
}

export default Example2;
