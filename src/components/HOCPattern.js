import React, { useState, useEffect } from "react";

// 데이터 불러오기, 로딩 상태, 에러 처리를 담당하는 HOC
function withDataFetching(WrappedComponent, dataSource) {
  return function WithDataFetching(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      let isMounted = true;

      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(dataSource);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          if (isMounted) {
            setData(result);
            setIsLoading(false);
          }
        } catch (e) {
          if (isMounted) {
            setError(e.message);
            setIsLoading(false);
          }
        }
      };

      fetchData();

      return () => {
        isMounted = false;
      };
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
}

// 로깅 기능을 추가하는 HOC
function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounting`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// 데이터를 표시하는 기본 컴포넌트
function UserList({ data }) {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
// 게시물 목록을 표시하는 컴포넌트
function PostList({ data }) {
  return (
    <div>
      <h4>Post List</h4>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// HOC를 적용한 컴포넌트들
const EnhancedUserList = withLogging(
  withDataFetching(UserList, "https://jsonplaceholder.typicode.com/users")
);

const EnhancedPostList = withLogging(
  withDataFetching(PostList, "https://jsonplaceholder.typicode.com/posts")
);

// 탭을 관리하는 컴포넌트
function TabManager() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab("users")}>Users</button>
        <button onClick={() => setActiveTab("posts")}>Posts</button>
      </div>
      {activeTab === "users" ? <EnhancedUserList /> : <EnhancedPostList />}
    </div>
  );
}

function HOCPattern() {
  return (
    <div>
      <h3>Advanced HOC Pattern Usage Example</h3>
      <TabManager />
    </div>
  );
}

export default HOCPattern;
