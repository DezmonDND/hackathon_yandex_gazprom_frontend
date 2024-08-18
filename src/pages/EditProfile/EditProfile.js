/* eslint-disable */
// Есть неиспользованные переменные: setUserInfo
import {
  Avatar,
  Breadcrumb,
  Button,
  Divider,
  Flex,
  Form,
  Input,
  Layout,
  Radio,
  Select,
  theme,
} from "antd";
import { useState } from "react";
import { PROFILE } from "../../mocks/user-data";
import Text from "antd/lib/typography/Text";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import TextArea from "antd/es/input/TextArea";

function EditProfile() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [userInfo, setUserInfo] = useState(PROFILE);
  const { Option } = Select;

  const selectBefore = (
    <Select defaultValue="+7">
      <Option value="+7">+7</Option>
      <Option value="8">8</Option>
    </Select>
  );

  return (
    <Layout
      style={{
        height: "calc(100vh - 48px)",
        overflowY: "scroll",
      }}
    >
      <Header
        style={{
          padding: "16px 24px",
          background: colorBgContainer,
          display: "flex",
          flexDirection: "column",
          height: 102,
        }}
      >
        <Breadcrumb
          items={[
            { title: <a href="/catalogs">Каталог</a> },
            { title: <a href="/profile">Мой профиль</a> },
            { title: "Редактирование профиля" },
          ]}
        ></Breadcrumb>
        <Flex
          style={{
            justifyContent: "space-between",
          }}
        >
          <Flex
            style={{
              alignItems: "center",
            }}
          >
            <ArrowLeftOutlined
              style={{
                width: 16,
                height: 16,
              }}
            />
            <a
              href="/profile"
              style={{
                fontSize: 20,
                fontWeight: 500,
                marginLeft: 5,
                color: "#000",
              }}
            >
              Редактирование профиля
            </a>
          </Flex>
        </Flex>
      </Header>
      <Flex
        style={{
          padding: 24,
          gap: 24,
          backgroundColor: "#fff",
          margin: 24,
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
          <Flex>
            <Flex>
              <Form layout="vertical">
                <Flex
                  style={{
                    flexDirection: "row",
                    gap: 52,
                  }}
                >
                  <Flex
                    style={{
                      flexDirection: "column",
                      width: 400,
                    }}
                  >
                    <Flex>
                      <Avatar
                        src={userInfo.avatar}
                        style={{
                          width: 139,
                          height: 139,
                          marginBottom: 48,
                        }}
                      ></Avatar>
                      <Button
                        style={{
                          position: "relative",
                          bottom: -29,
                          right: 33,
                          border: "1px dashed #D9D9D9",
                          borderRadius: "50%",
                          backgroundColor: "#fff",
                        }}
                        icon={<EditOutlined />}
                      ></Button>
                    </Flex>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Общая информация
                    </Text>
                    <Divider></Divider>
                    <Form.Item label="Город" name="city" layout="vertical">
                      <Select
                        className="custom"
                        showSearch
                        placeholder="Начните вводить название"
                      ></Select>
                    </Form.Item>
                    <Form.Item
                      label="Часовой пояс"
                      name="time"
                      layout="vertical"
                    >
                      <Select showSearch></Select>
                    </Form.Item>
                    <Form.Item label="Статус" name="status" layout="vertical">
                      <Radio.Group>
                        <Radio.Button value="На работе">На работе</Radio.Button>
                        <Radio.Button value="В отпуске">В отпуске</Radio.Button>
                        <Radio.Button value="Недоступен">
                          Недоступен
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Навыки" name="skills" layout="vertical">
                      <Select
                        mode="multiple"
                        showSearch
                        placeholder="Навык, например, «Figma»"
                      >
                        <Option value="Figma">Figma</Option>
                        <Option value="JS">JS</Option>
                      </Select>
                    </Form.Item>
                    <TextArea
                      showCount
                      maxLength={300}
                      placeholder="Напишите что-нибудь о себе, например, свою биографию
"
                    ></TextArea>
                    <Flex
                      style={{
                        gap: 8,
                        marginTop: 32,
                      }}
                    >
                      <Button
                        type="submit"
                        style={{
                          border: "1px solid #D9D9D9",
                          borderRadius: 0,
                        }}
                      >
                        Сохранить
                      </Button>
                      <Button
                        type="button"
                        style={{
                          border: "1px solid #D9D9D9",
                          borderRadius: 0,
                        }}
                      >
                        Отмена
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex
                    style={{
                      flexDirection: "column",
                      width: 400,
                      marginTop: 187,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Контакты
                    </Text>
                    <Divider></Divider>
                    <Form.Item layout="vertical" label="Номер телефона">
                      <Input
                        addonBefore={selectBefore}
                        placeholder="000-00-00-00"
                      ></Input>
                    </Form.Item>
                    <Form.Item layout="vertical" label="Email">
                      <Input placeholder="example@gmail.com"></Input>
                    </Form.Item>
                    <Form.Item layout="vertical" label="Telegram">
                      <Input placeholder="@username"></Input>
                    </Form.Item>
                  </Flex>
                </Flex>
              </Form>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Layout>
  );
}

export default EditProfile;
