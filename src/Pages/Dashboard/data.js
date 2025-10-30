// Department Pie Chart
export const COLORS = ["#047857", "#10B981", "#34D399", "#6EE7B7"];
export const departmentData = [
  { name: "HR", value: 4 },
  { name: "Finance", value: 6 },
  { name: "Engineering", value: 8 },
  { name: "Marketing", value: 5 },
];

export const notifications = [
  "🔔 Salary processed for May",
  "🔔 Team outing on 5th Nov",
  "🔔 New leave policy updated",
  "🔔 Performance review starts next week",
];

// Employee Data
export const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "HR",
    attendance: "95%",
    salary: "₹28,000",
    performance: 92,
    birthday: "12 Jan",
    totalLeave: 14,
    pendingLeave: 5,
    chartData: [
      { month: "Jan", attendance: 95, salary: 28000 },
      { month: "Feb", attendance: 93, salary: 28500 },
      { month: "Mar", attendance: 96, salary: 29000 },
      { month: "Apr", attendance: 90, salary: 27800 },
      { month: "May", attendance: 92, salary: 28300 },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Finance",
    attendance: "90%",
    salary: "₹30,000",
    performance: 89,
    birthday: "25 Mar",
    totalLeave: 10,
    pendingLeave: 3,
    chartData: [
      { month: "Jan", attendance: 88, salary: 29500 },
      { month: "Feb", attendance: 90, salary: 30000 },
      { month: "Mar", attendance: 91, salary: 30200 },
      { month: "Apr", attendance: 89, salary: 29800 },
      { month: "May", attendance: 92, salary: 30400 },
    ],
  },
  {
    id: 3,
    name: "Michael Lee",
    department: "Engineering",
    attendance: "92%",
    salary: "₹52,000",
    performance: 94,
    birthday: "5 May",
    totalLeave: 12,
    pendingLeave: 2,
    chartData: [
      { month: "Jan", attendance: 94, salary: 51000 },
      { month: "Feb", attendance: 92, salary: 52000 },
      { month: "Mar", attendance: 95, salary: 52500 },
      { month: "Apr", attendance: 93, salary: 53000 },
      { month: "May", attendance: 96, salary: 53500 },
    ],
  },
  {
    id: 4,
    name: "Sara Khan",
    department: "Marketing",
    attendance: "88%",
    salary: "₹62,000",
    performance: 87,
    birthday: "19 Sep",
    totalLeave: 15,
    pendingLeave: 4,
    chartData: [
      { month: "Jan", attendance: 85, salary: 61000 },
      { month: "Feb", attendance: 88, salary: 61500 },
      { month: "Mar", attendance: 90, salary: 62000 },
      { month: "Apr", attendance: 86, salary: 62500 },
      { month: "May", attendance: 87, salary: 63000 },
    ],
  },
];
