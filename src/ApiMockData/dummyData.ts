import { IBoard } from "../Interfaces/Kanban";

export const ApiMockResponse: IBoard[] = [
  {
    id: 1651319512266.0001,
    title: "今日のプログラム",
    cards: [
      {
        id: 1651319677070.0110,
        title: "歩く",
        labels: [{ color: "#0067C0", text: "下半身運動" }],
        date: "2022-05-06",
        tasks: [],
      },
    ]
  },
  {
    id: 1651319512267.7095,
    title: "上半身運動",
    cards: [
      {
        id: 1651319552926.0933,
        title: "腕を上げる",
        labels: [{ color: "#cf61a1", text: "上半身運動" }],
        date: "2023-09-03",
        tasks: [
          { id: 1651319625559.8025, completed: true, text: "Task1_subtask1" },
          { id: 1651319629650.8945, completed: true, text: "Task1_subtask2" },
          { id: 1651319633774.9905, completed: true, text: "Task1_subtask3" },
        ],
        desc: "Task1 Detail Description",
      },
      {
        id: 1651319568365.593,
        title: "首を回す",
        labels: [{ color: "#cf61a1", text: "上半身運動" }],
        date: "",
        tasks: [],
      },
      {
        id: 1651319672685.5078,
        title: "腹筋",
        labels: [{ color: "#cf61a1", text: "上半身運動" }],
        date: "",
        tasks: [
          { id: 1651319728301.3855, completed: false, text: "restore db" },
        ],
      },
      {
        id: 1651319680948.0479,
        title: "背筋",
        labels: [{ color: "#cf61a1", text: "上半身運動" }],
        date: "2022-05-04",
        tasks: [
          { id: 1651319820180.9648, completed: false, text: "GraphQl" },
          { id: 1651319833779.3252, completed: true, text: "Restful API" },
        ],
      }
    ],
  },
  {
    id: 1651319512268.0000,
    title: "下半身運動",
    cards: [
      {
        id: 1651319677070.0733,
        title: "立ち上がる",
        labels: [{ color: "#0067C0", text: "下半身運動" }],
        date: "2022-05-06",
        tasks: [],
      },
      {
        id: 1651319677070.0734,
        title: "スクワット",
        labels: [{ color: "#0067C0", text: "下半身運動" }],
        date: "2022-05-06",
        tasks: [],
      },
      {
        id: 1651319677070.0101,
        title: "足首回す",
        labels: [{ color: "#0067C0", text: "下半身運動" }],
        date: "2022-05-06",
        tasks: [],
      },
    ],
  },
];
