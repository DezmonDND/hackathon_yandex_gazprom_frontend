import Avatar_4 from "../assets/images/avatar_1.png";
import Avatar_1 from "../assets/images/avatar_2.png";
import Avatar_2 from "../assets/images/avatar_3.png";
import Avatar_3 from "../assets/images/avatar_4.png";

export const USERS = [
  {
    key: "1",
    name: "Соловьев Александр",
    job: "Front-end",
    section: "Веб-разработка",
    status: "На работе",
    recruitment: "Штатный",
    skills: ["red", "volcano"],
  },
  {
    key: "2",
    name: "Щербакова Алиса",
    job: "Front-end",
    section: "Веб-разработка",
    status: "На работе",
    recruitment: "Штатный",
    skills: ["red", "volcano"],
  },
  {
    key: "3",
    name: "Афанасьев Даниил",
    job: "Back-end",
    section: "Мобильная разработка",
    status: "На работе",
    recruitment: "Штатный",
    skills: ["green", "geekblue"],
  },
  {
    key: "4",
    name: "Васильев Михаил",
    job: "Back-end",
    section: "Веб-разработка",
    status: "На работе",
    recruitment: "Штатный",
    skills: ["green", "geekblue"],
  },
  {
    key: "5",
    name: "Горбачев Артемий",
    job: "Аналитик",
    section: "Аналитика",
    status: "В отпуске",
    recruitment: "Аутсорс",
    skills: ["gold", "magenta"],
  },
  {
    key: "6",
    name: "Волков Дмитрий",
    job: "Дизайнер",
    section: "Дизайн",
    status: "На работе",
    recruitment: "Штатный",
    skills: ["cyan", "purple"],
  },
];

export const PROJECTS = [
  {
    title: "Отчеты с оооочень длинным названиями",
    description: "Добавление панели мониторинга для ежеквартального отчета",
    tags: [{ name: "Высокий" }, { name: "Выполнено" }, { name: "Аутсорс" }],
    project_value: "+2",
    worker_value: "(52)",
  },
  {
    title: "Панель управления отчетами",
    description: "Добавление панели мониторинга для ежеквартального отчета",
    tags: [{ name: "Высокий" }, { name: "Не начато" }],
    project_value: "+2",
    worker_value: "(150)",
  },
  {
    title: "Редизайн веб сайта",
    description: "Добавление обновленных элементов бренда",
    tags: [{ name: "Средний" }, { name: "В процессе" }],
    project_value: "+2",
    worker_value: "(60)",
  },
  {
    title: "Оптимизация отображения в Space",
    description: "Использование новой базы данных через ...",
    tags: [{ name: "Средний" }, { name: "В процессе" }],
    project_value: "+2",
    worker_value: "(20)",
  },
  {
    title: "Оптимизация отображения в Space",
    description: "Использование новой базы данных через ...",
    tags: [{ name: "Средний" }, { name: "В процессе" }],
    project_value: "+2",
    worker_value: "(20)",
  },
  {
    title: "Оптимизация отображения в Space",
    description: "Использование новой базы данных через ...",
    tags: [{ name: "Средний" }, { name: "В процессе" }],
    project_value: "+2",
    worker_value: "(20)",
  },
  {
    title: "Оптимизация отображения в Space",
    description: "Использование новой базы данных через ...",
    tags: [{ name: "Средний" }, { name: "В процессе" }],
    project_value: "+2",
    worker_value: "(20)",
  },
  {
    title: "Оптимизация отображения в Space",
    description: "Использование новой базы данных через ...",
    tags: [{ name: "Средний" }, { name: "В процессе" }],
    project_value: "+2",
    worker_value: "(20)",
  },
  {
    title: "Оптимизация отображения в Space",
    description: "Использование новой базы данных через ...",
    tags: [{ name: "Средний" }, { name: "В процессе" }],
    project_value: "+2",
    worker_value: "(20)",
  },
];

export const COMPANY = [
  {
    expanded: true,
    type: "person",
    data: {
      department: "Tech Nexus",
      image: Avatar_1,
      name: "Александр Александров",
      title: "CEO",
      worker_value: "(200)",
      projects: [],
    },
    children: [
      {
        expanded: true,
        type: "person",
        data: {
          department: "Департамент разработки",
          image: Avatar_2,
          name: "Игорь Дроздов",
          title: "CTO",
          worker_value: "(120)",
          projects: [],
        },
        children: [
          {
            expanded: true,
            type: "person",
            data: {
              department: "Департамент разработки",
              image: Avatar_2,
              name: "Игорь Дроздов",
              title: "CTO",
              worker_value: "(120)",
              projects: [{ name: "Сервис InSight" }, { name: "CodEX Project" }],
            },
          },
        ],
      },
      {
        expanded: true,
        type: "person",
        data: {
          department: "Департамент управления продуктами",
          image: Avatar_3,
          name: "Андрей Алексеев",
          title: "CPO",
          worker_value: "(30)",
          projects: [],
        },
        children: [
          {
            expanded: true,
            type: "person",
            data: {
              department: "Департамент управления продуктами",
              image: Avatar_3,
              name: "Андрей Алексеев",
              title: "CPO",
              worker_value: "(30)",
              projects: [{ name: "Сервис InSight" }, { name: "CodEX Project" }],
            },
          },
        ],
      },
      {
        expanded: true,
        type: "person",
        data: {
          department: "Информационный департамент",
          image: Avatar_4,
          name: "Елена Сидорова",
          title: "CIO",
          worker_value: "(50)",
          projects: [],
        },
        children: [
          {
            expanded: true,
            type: "person",
            data: {
              department: "Информационный департамент",
              image: Avatar_4,
              name: "Елена Сидорова",
              title: "CIO",
              worker_value: "(50)",
              projects: [{ name: "Сервис InSight" }, { name: "CodEX Project" }],
            },
          },
        ],
      },
    ],
  },
];
