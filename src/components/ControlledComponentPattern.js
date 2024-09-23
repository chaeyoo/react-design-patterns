import { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <h1>Controlled Component Pattern</h1>
      <p>
        Controlled Component Pattern은 React에서 폼 요소의 상태를 관리하는
        패턴입니다. 주요 특징은 다음과 같습니다: 폼 요소의 값을 React의 state로
        관리합니다. onChange 이벤트를 통해 사용자 입력을 처리하고 state를
        업데이트합니다. 폼 요소의 value 속성을 state와 연결합니다. React가
        "single source of truth"가 되어 폼의 상태를 완전히 제어합니다. 이 패턴의
        장점은 다음과 같습니다: 폼 데이터에 대한 즉각적인 접근과 조작이
        가능합니다. 데이터의 유효성 검사 및 변환이 용이합니다.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
