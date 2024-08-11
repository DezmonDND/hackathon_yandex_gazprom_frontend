import { OrganizationChart } from "primereact/organizationchart";
import "./Company.css";
import "./Flags.css";
import { COMPANY } from "../../mocks/user-data";
import { useState } from "react";
import {
  Avatar,
  Badge,
  Card,
  Flex,
  Layout,
  Tooltip,
} from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";

function Company() {
  const [selection, setSelection] = useState([]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <Card
          title={node.data.department}
          size="small"
          className="card__title"
          style={{
            width: 320,
            height: 212,
            borderRadius: 0,
          }}
        >
          <div className="card__data">
            <div className="card__user-info">
              <img
                className="card__image"
                src={node.data.image}
                alt={node.data.name}
              ></img>
              <Text className="card__name">{node.data.name}</Text>
              <Text className="card__title">{node.data.title}</Text>
            </div>
            <Flex
              gap="12px 0"
              wrap
              style={{
                margin: "12px 0 4px",
              }}
            ></Flex>

            <div
              style={{
                margin: "6px 0 4px",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginRight: "5px",
                }}
              >
                Сотрудники
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {node.data.worker_value}
              </Text>
            </div>
            <Avatar.Group
              size="large"
              max={{
                count: 3,
                style: {
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                },
                popover: {
                  trigger: "click",
                },
              }}
            >
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{
                  backgroundColor: "#1677ff",
                }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </div>
          <div className="card__projects">
            <Link to={""}>Подчиненные проекты</Link>
            <Badge
              className="card__badge"
              count={node.data.worker_value}
              style={{
                backgroundColor: "#FFF",
                color: "#1890FF",
              }}
            ></Badge>
          </div>
        </Card>
      );
    }

    return node.label;
  };

  return (
    <Layout
      style={{
        height: "calc(100vh - 48px)",
      }}
    >
      <div className="card overflow-x-auto">
        <OrganizationChart
          value={COMPANY}
          selectionMode="multiple"
          selection={selection}
          onSelectionChange={(e) => setSelection(e.data)}
          nodeTemplate={nodeTemplate}
        />
      </div>
    </Layout>
  );
}

export default Company;
