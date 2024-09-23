import { useState } from "react";
import { useEffect } from "react";
import { UserList } from "../ui/UserList";

// Container Component
export default function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p>
        Container/Presentational Pattern은 컴포넌트의 로직과 표현을 분리하는
        패턴입니다. 주요 특징은 다음과 같습니다: Container 컴포넌트: 데이터
        페칭, 상태 관리 등의 로직을 담당합니다. Presentational 컴포넌트: UI
        렌더링만을 담당하며, 주로 순수 함수형 컴포넌트로 구현됩니다. 관심사의
        분리를 통해 코드의 재사용성과 테스트 용이성이 향상됩니다. UI와 로직의
        독립적인 개발과 유지보수가 가능해집니다. 이 패턴의 장점은 컴포넌트의
        책임을 명확히 분리하여 코드의 구조를 개선하고, 각 부분의 재사용성을
        높인다는 것입니다.
      </p>
      <UserList users={users} />;
    </>
  );
}
