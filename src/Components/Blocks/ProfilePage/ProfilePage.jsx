import React, {useState, useEffect} from "react";
import { Row, Col } from "antd";
import { Menu } from "Components/Blocks/ProfilePage/Blocks/Menu";
import { User } from "Components/Blocks/ProfilePage/Blocks/User";
import { UserResults } from "Components/Blocks/ProfilePage/Blocks/UserResults";

const ProfilePage = ({ user, editEmail, editUserName, editPassword }) => {
  // const [test, setTest] = useState(false)
  useEffect(() => {
    console.log(`useEffect`)

  }, [user]);

  return (
    <Row>
      <Col xs={6} sm={6} md={4} lg={4} xl={4}>
        <Menu />
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        <User
          user={user}
          editEmail={editEmail}
          editUserName={editUserName}
          editPassword={editPassword}
          // test={test}
          // setTest={setTest}
        />
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        <UserResults />
      </Col>
    </Row>
  );
};

export default ProfilePage;

{
  /* <Col xs={20} sm={16} md={12} lg={8} xl={4}> */
}
