/* eslint-disable */
import {
  Avatar,
  Badge,
  Card,
  ConfigProvider,
  Divider,
  Flex,
  Layout,
  Tag,
  Tooltip,
} from "antd";
import "./Profile.css";
import { useState } from "react";
import { PROFILE } from "../../mocks/user-data";
import Text from "antd/lib/typography/Text";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState(PROFILE);

  return (
    <Layout
      style={{
        height: "calc(100vh - 48px)",
        overflowY: "scroll",
      }}
    >
      <Flex
        style={{
          padding: 24,
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: 20,
          }}
        >
          <Card
            style={{ width: 368, display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={profile.avatar}
                alt="Аватар"
                style={{
                  width: 125,
                  height: 125,
                }}
              ></img>
              <Text>{profile.name}</Text>
              <Text>{profile.job}</Text>
              <Text>{profile.city}</Text>
              <Text>{profile.status}</Text>
              <Divider></Divider>
              <Text>{profile.email}</Text>
              <Text>{profile.phone}</Text>
              <Text>{profile.telegram}</Text>
            </div>
          </Card>
          <Card title="Проекты" style={{ width: 368 }}>
            <ConfigProvider>
              <Flex
                gap="middle"
                style={{
                  flexWrap: "wrap",
                }}
              >
                {profile.projects.map((project) => (
                  <Card
                    title={project.title}
                    size="small"
                    className="card__title"
                    style={{
                      width: 320,
                      height: 212,
                      borderRadius: 0,
                      overflow: "hidden",
                    }}
                  >
                    <div className="card__data">
                      <Text
                        style={{
                          textOverflow: "ellipsis",
                          maxWidth: "288px",
                        }}
                        className="card__more"
                      >
                        {project.description}
                      </Text>
                      <Flex
                        gap="12px 0"
                        wrap
                        style={{
                          margin: "12px 0 4px",
                        }}
                      >
                        {project.tags.map((item) => (
                          <Tag color="purple">{item.name}</Tag>
                        ))}
                      </Flex>
                      <div
                        style={{
                          flexDirection: "row",
                          width: "100%",
                        }}
                        className="card__projects"
                      >
                        <Link
                          style={{
                            color: "#1890FF",
                          }}
                          to={""}
                        >
                          Подчиненные проекты
                        </Link>
                        <Badge
                          className="card__badge"
                          count={project.project_value}
                          style={{
                            backgroundColor: "#FFF",
                            color: "#1890FF",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "24px",
                          }}
                        ></Badge>
                      </div>
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
                          {project.worker_value}
                        </Text>
                      </div>
                      <Avatar.Group
                        size="large"
                        max={{
                          count: 4,
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
                        <Avatar
                          style={{
                            backgroundColor: "#1677ff",
                          }}
                          icon={<AntDesignOutlined />}
                        />
                      </Avatar.Group>
                    </div>
                  </Card>
                ))}
              </Flex>
            </ConfigProvider>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <Card title="Общая информация" style={{ width: 792 }}></Card>
          <Card title="Организация" style={{ width: 792 }}></Card>
        </div>
      </Flex>
    </Layout>
  );
}

export default Profile;
