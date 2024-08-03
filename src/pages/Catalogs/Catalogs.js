/* eslint-disable */
import { Table, Tag } from "antd";
import Main from "../Main/Main";
import "./Catalogs.css";
import { USERS } from "../../mocks/user-data";

function Catalogs() {
  const columns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
      width: 312,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Должность",
      dataIndex: "job",
      key: "job",
      width: 145,
    },
    {
      title: "Отдел",
      dataIndex: "section",
      key: "section",
      width: 188,
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      width: 145,
    },
    {
      title: "Тип найма",
      dataIndex: "recruitment",
      key: "recruitment",
      width: 145,
    },
    {
      title: "Навыки",
      dataIndex: "skills",
      key: "skills",
      width: 200,
      render: (_, { skills }) => (
        <>
          {skills.map((skill) => {
            let color = skill.length > 5 ? "geekblue" : "green";
            if (skill === "volcano") {
              color = "volcano";
            } else if (skill === "red") {
              color = "red";
            } else if (skill === "green") {
              color = "green";
            } else if (skill === "geekblue") {
              color = "geekblue";
            } else if (skill === "gold") {
              color = "gold";
            } else if (skill === "cyan") {
              color = "cyan";
            } else if (skill === "magenta") {
              color = "magenta";
            } else if (skill === "purple") {
              color = "purple";
            }
            return (
              <Tag color={color} key={skill}>
                {skill.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <Main>
      <Table
        columns={columns}
        dataSource={USERS}
        style={{
          margin: "24px",
        }}
      ></Table>
    </Main>
  );
}

export default Catalogs;
