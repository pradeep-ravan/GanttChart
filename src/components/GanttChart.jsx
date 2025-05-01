import { Gantt } from "react-virtual-gantt";

export default function GanttChart() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Gantt>
        <Gantt.Controls />
        <Gantt.Chart
          data={[
            {
              key: "task-1",
              title: "Gantt Task",
              children: [
                {
                  key: "task-1-1",
                  title: "By Pradeep",
                  data: {
                    startDate: "2025-05-01T08:00:00.000Z",
                    endDate: "2025-05-02T08:00:00.000Z",
                  },
                },
                {
                  key: "task-1-2",
                  title: "Task Done",
                  data: {
                    repeatType: "DAY",
                    fromTime: 28800,
                    endDate: 64800,
                  },
                },
              ],
            },
            {
              key: "task-2",
              title: "HR Call ?",
              data: {
                repeatType: "MONTH",
                fromTime: 28800,
                endDate: 64800,
                monthdays: [1, 3, 5, 9, 11, 14, 21, 31],
              },
            },
          ]}
        />
      </Gantt>
    </div>
  );
}
