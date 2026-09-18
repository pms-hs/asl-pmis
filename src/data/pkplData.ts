// ASL PMIS - PKPL Electro-Mechanical Package Data
// Project Management Information System

export const projectInfo = {
  name: "PKPL Electro-Mechanical Package",
  code: "PKPL-EMP-2024",
  client: "Pakistan Petroleum Limited (PKPL)",
  contractor: "Aristo Services Ltd (ASL)",
  location: "Pitalganj, Bangladesh",
  startDate: "2024-01-15",
  endDate: "2025-06-30",
  contractValue: "USD 12,500,000",
  overallProgress: 34.2,
  plannedProgress: 38.5,
  spi: 0.89,
  cpi: 0.94,
  budgetUsed: 32.1,
  status: "In Progress",
  projectDirector: "Eng. Shahabuddin",
  projectManager: "Eng. Kamrul Hasan",
};

export const wbsData = [
  {
    id: "1.0",
    name: "Project Engineering",
    weight: 10,
    progress: 85,
    children: [
      { id: "1.1", name: "Design Review & Approval", weight: 4, progress: 95 },
      { id: "1.2", name: "Procurement Engineering", weight: 3, progress: 80 },
      { id: "1.3", name: "Construction Engineering", weight: 3, progress: 75 },
    ],
  },
  {
    id: "2.0",
    name: "Material Supply",
    weight: 35,
    progress: 42,
    children: [
      { id: "2.1", name: "Pipeline Materials", weight: 12, progress: 55 },
      { id: "2.2", name: "Storage Tanks", weight: 8, progress: 30 },
      { id: "2.3", name: "Pumps & Compressors", weight: 5, progress: 45 },
      { id: "2.4", name: "Valves & Fittings", weight: 4, progress: 60 },
      { id: "2.5", name: "Instrumentation", weight: 3, progress: 38 },
      { id: "2.6", name: "Electrical Materials", weight: 3, progress: 40 },
    ],
  },
  {
    id: "3.0",
    name: "Construction",
    weight: 40,
    progress: 22,
    children: [
      { id: "3.1", name: "Pipeline Stringing", weight: 10, progress: 35 },
      { id: "3.2", name: "Pipeline Welding", weight: 8, progress: 30 },
      { id: "3.3", name: "HDD Works", weight: 7, progress: 15 },
      { id: "3.4", name: "Tank Foundation", weight: 5, progress: 40 },
      { id: "3.5", name: "Tank Erection", weight: 4, progress: 10 },
      { id: "3.6", name: "Piping Installation", weight: 3, progress: 20 },
      { id: "3.7", name: "Electrical Works", weight: 3, progress: 18 },
    ],
  },
  {
    id: "4.0",
    name: "Testing & Commissioning",
    weight: 10,
    progress: 5,
    children: [
      { id: "4.1", name: "Hydro Testing", weight: 3, progress: 10 },
      { id: "4.2", name: "Pneumatic Testing", weight: 2, progress: 5 },
      { id: "4.3", name: "Pre-Commissioning", weight: 3, progress: 0 },
      { id: "4.4", name: "Commissioning", weight: 2, progress: 0 },
    ],
  },
  {
    id: "5.0",
    name: "Project Management",
    weight: 5,
    progress: 60,
    children: [
      { id: "5.1", name: "Planning & Control", weight: 2, progress: 70 },
      { id: "5.2", name: "QA/QC", weight: 1.5, progress: 55 },
      { id: "5.3", name: "HSE", weight: 1.5, progress: 65 },
    ],
  },
];

export const materialRegister = [
  { id: "MAT-001", item: "Mainline Pipe (24\" API 5L X60)", unit: "KM", qty: 45, delivered: 38, progress: 84, status: "In Transit", vendor: "Nippon Steel", poDate: "2024-02-10", deliveryDate: "2024-08-15" },
  { id: "MAT-002", item: "HDD Pipe (24\" API 5L X60)", unit: "KM", qty: 8, delivered: 8, progress: 100, status: "Delivered", vendor: "Nippon Steel", poDate: "2024-02-10", deliveryDate: "2024-06-20" },
  { id: "MAT-003", item: "Storage Tank (5000 BBL)", unit: "SET", qty: 2, delivered: 0, progress: 15, status: "Fabrication", vendor: "Sinopec Equipment", poDate: "2024-03-05", deliveryDate: "2024-12-30" },
  { id: "MAT-004", item: "Centrifugal Pumps", unit: "SET", qty: 4, delivered: 2, progress: 50, status: "Partial Delivery", vendor: "Sulzer", poDate: "2024-04-12", deliveryDate: "2024-10-15" },
  { id: "MAT-005", item: "Metering Skid", unit: "SET", qty: 1, delivered: 0, progress: 25, status: "Fabrication", vendor: "Emerson", poDate: "2024-05-01", deliveryDate: "2025-01-30" },
  { id: "MAT-006", item: "Gate Valves (24\")", unit: "EA", qty: 12, delivered: 8, progress: 67, status: "Partial Delivery", vendor: "Flowserve", poDate: "2024-03-20", deliveryDate: "2024-09-10" },
  { id: "MAT-007", item: "Ball Valves (12\")", unit: "EA", qty: 24, delivered: 18, progress: 75, status: "In Stock", vendor: "Cameron", poDate: "2024-03-15", deliveryDate: "2024-07-25" },
  { id: "MAT-008", item: "Check Valves (8\"-24\")", unit: "EA", qty: 16, delivered: 10, progress: 63, status: "Partial Delivery", vendor: "Neway", poDate: "2024-04-01", deliveryDate: "2024-09-30" },
  { id: "MAT-009", item: "OFC Cable (48 Core)", unit: "KM", qty: 50, delivered: 50, progress: 100, status: "Delivered", vendor: "Corning", poDate: "2024-02-28", deliveryDate: "2024-05-15" },
  { id: "MAT-010", item: "Pressure Transmitters", unit: "EA", qty: 32, delivered: 20, progress: 63, status: "Partial Delivery", vendor: "Yokogawa", poDate: "2024-04-20", deliveryDate: "2024-10-01" },
  { id: "MAT-011", item: "Control Valves", unit: "EA", qty: 8, delivered: 4, progress: 50, status: "Partial Delivery", vendor: "Fisher", poDate: "2024-05-10", deliveryDate: "2024-11-15" },
  { id: "MAT-012", item: "Welding Consumables", unit: "LOT", qty: 1, delivered: 0.6, progress: 60, status: "Ongoing Supply", vendor: "Bohler", poDate: "2024-03-01", deliveryDate: "2025-03-30" },
  { id: "MAT-013", item: "Pipe Coating (3LPE)", unit: "KM", qty: 45, delivered: 35, progress: 78, status: "In Transit", vendor: "ShawCor", poDate: "2024-02-15", deliveryDate: "2024-08-01" },
  { id: "MAT-014", item: "Bending Induction", unit: "EA", qty: 60, delivered: 45, progress: 75, status: "In Stock", vendor: "Inducta", poDate: "2024-03-10", deliveryDate: "2024-07-15" },
  { id: "MAT-015", item: "Flanges (WN/SO)", unit: "EA", qty: 120, delivered: 90, progress: 75, status: "In Stock", vendor: "Boltex", poDate: "2024-03-25", deliveryDate: "2024-08-20" },
];

export const activities = [
  { id: "ACT-001", name: "Engineering Design Review", wbs: "1.1", plannedStart: "2024-01-15", plannedEnd: "2024-03-30", actualStart: "2024-01-20", actualEnd: "2024-04-05", progress: 95, weight: 4, status: "Completed" },
  { id: "ACT-002", name: "Procurement Engineering", wbs: "1.2", plannedStart: "2024-02-01", plannedEnd: "2024-05-30", actualStart: "2024-02-10", actualEnd: "-", progress: 80, weight: 3, status: "In Progress" },
  { id: "ACT-003", name: "Pipeline Material Procurement", wbs: "2.1", plannedStart: "2024-02-15", plannedEnd: "2024-08-30", actualStart: "2024-02-20", actualEnd: "-", progress: 55, weight: 12, status: "In Progress" },
  { id: "ACT-004", name: "Tank Fabrication", wbs: "2.2", plannedStart: "2024-03-01", plannedEnd: "2024-12-30", actualStart: "2024-03-15", actualEnd: "-", progress: 30, weight: 8, status: "Delayed" },
  { id: "ACT-005", name: "Pipeline Stringing", wbs: "3.1", plannedStart: "2024-06-01", plannedEnd: "2024-12-30", actualStart: "2024-06-15", actualEnd: "-", progress: 35, weight: 10, status: "In Progress" },
  { id: "ACT-006", name: "Pipeline Welding", wbs: "3.2", plannedStart: "2024-06-15", plannedEnd: "2025-01-30", actualStart: "2024-07-01", actualEnd: "-", progress: 30, weight: 8, status: "In Progress" },
  { id: "ACT-007", name: "HDD Crossing - River", wbs: "3.3", plannedStart: "2024-09-01", plannedEnd: "2025-01-15", actualStart: "-", actualEnd: "-", progress: 15, weight: 7, status: "In Progress" },
  { id: "ACT-008", name: "Tank Foundation Civil", wbs: "3.4", plannedStart: "2024-05-01", plannedEnd: "2024-09-30", actualStart: "2024-05-15", actualEnd: "-", progress: 40, weight: 5, status: "In Progress" },
  { id: "ACT-009", name: "Tank Erection", wbs: "3.5", plannedStart: "2024-10-01", plannedEnd: "2025-03-30", actualStart: "-", actualEnd: "-", progress: 10, weight: 4, status: "Not Started" },
  { id: "ACT-010", name: "Piping Installation", wbs: "3.6", plannedStart: "2024-11-01", plannedEnd: "2025-04-30", actualStart: "-", actualEnd: "-", progress: 20, weight: 3, status: "In Progress" },
  { id: "ACT-011", name: "Electrical Installation", wbs: "3.7", plannedStart: "2024-10-15", plannedEnd: "2025-03-15", actualStart: "-", actualEnd: "-", progress: 18, weight: 3, status: "In Progress" },
  { id: "ACT-012", name: "Hydrostatic Testing", wbs: "4.1", plannedStart: "2025-02-01", plannedEnd: "2025-04-30", actualStart: "-", actualEnd: "-", progress: 10, weight: 3, status: "Not Started" },
  { id: "ACT-013", name: "Pre-Commissioning", wbs: "4.3", plannedStart: "2025-04-01", plannedEnd: "2025-05-30", actualStart: "-", actualEnd: "-", progress: 0, weight: 3, status: "Not Started" },
  { id: "ACT-014", name: "Commissioning", wbs: "4.4", plannedStart: "2025-05-01", plannedEnd: "2025-06-30", actualStart: "-", actualEnd: "-", progress: 0, weight: 2, status: "Not Started" },
];

export const procurementItems = [
  { id: "PO-001", mrNo: "MR-2024-001", item: "Mainline Pipe 24\" API 5L X60", vendor: "Nippon Steel Japan", poValue: 2850000, poDate: "2024-02-10", deliveryStatus: "84% Delivered", paymentStatus: "70% Paid", status: "Active" },
  { id: "PO-002", mrNo: "MR-2024-002", item: "HDD Pipe 24\" API 5L X60", vendor: "Nippon Steel Japan", poValue: 520000, poDate: "2024-02-10", deliveryStatus: "100% Delivered", paymentStatus: "85% Paid", status: "Completed" },
  { id: "PO-003", mrNo: "MR-2024-003", item: "Storage Tank 5000 BBL (x2)", vendor: "Sinopec Equipment China", poValue: 1800000, poDate: "2024-03-05", deliveryStatus: "15% (Fabrication)", paymentStatus: "30% Advance", status: "Active" },
  { id: "PO-004", mrNo: "MR-2024-004", item: "Centrifugal Pumps (x4)", vendor: "Sulzer Germany", poValue: 680000, poDate: "2024-04-12", deliveryStatus: "50% Delivered", paymentStatus: "50% Paid", status: "Active" },
  { id: "PO-005", mrNo: "MR-2024-005", item: "Metering Skid", vendor: "Emerson USA", poValue: 950000, poDate: "2024-05-01", deliveryStatus: "25% (Fabrication)", paymentStatus: "25% Advance", status: "Active" },
  { id: "PO-006", mrNo: "MR-2024-006", item: "Gate Valves 24\" (x12)", vendor: "Flowserve UK", poValue: 360000, poDate: "2024-03-20", deliveryStatus: "67% Delivered", paymentStatus: "60% Paid", status: "Active" },
  { id: "PO-007", mrNo: "MR-2024-007", item: "Ball Valves 12\" (x24)", vendor: "Cameron USA", poValue: 420000, poDate: "2024-03-15", deliveryStatus: "75% Delivered", paymentStatus: "70% Paid", status: "Active" },
  { id: "PO-008", mrNo: "MR-2024-008", item: "OFC Cable 48 Core (50KM)", vendor: "Corning USA", poValue: 280000, poDate: "2024-02-28", deliveryStatus: "100% Delivered", paymentStatus: "90% Paid", status: "Completed" },
  { id: "PO-009", mrNo: "MR-2024-009", item: "Pressure Transmitters (x32)", vendor: "Yokogawa Japan", poValue: 192000, poDate: "2024-04-20", deliveryStatus: "63% Delivered", paymentStatus: "55% Paid", status: "Active" },
  { id: "PO-010", mrNo: "MR-2024-010", item: "Welding Consumables", vendor: "Bohler Austria", poValue: 150000, poDate: "2024-03-01", deliveryStatus: "60% Supplied", paymentStatus: "50% Paid", status: "Active" },
];

export const riskRegister = [
  { id: "RSK-001", risk: "Tank Delivery Delay", probability: "High", impact: "High", score: 25, owner: "Procurement Manager", mitigation: "Weekly vendor follow-up, alternative supplier identified", dueDate: "2024-12-30", status: "Open" },
  { id: "RSK-002", risk: "HDD Machine Breakdown", probability: "Medium", impact: "Critical", score: 20, owner: "Construction Manager", mitigation: "Backup HDD rig on standby, AMC in place", dueDate: "2025-01-15", status: "Monitoring" },
  { id: "RSK-003", risk: "ROW (Right of Way) Delay", probability: "Medium", impact: "High", score: 16, owner: "Project Manager", mitigation: "Continuous liaison with local authorities", dueDate: "2024-10-30", status: "Open" },
  { id: "RSK-004", risk: "Weld Rejection Rate High", probability: "Low", impact: "Medium", score: 8, owner: "QA/QC Manager", mitigation: "Welder qualification monitoring, additional training", dueDate: "2025-01-30", status: "Mitigated" },
  { id: "RSK-005", risk: "Monsoon Impact on Construction", probability: "High", impact: "Medium", score: 12, owner: "Construction Manager", mitigation: "Accelerated schedule before monsoon, covered work areas", dueDate: "2024-06-30", status: "Closed" },
  { id: "RSK-006", risk: "Currency Fluctuation", probability: "Medium", impact: "Medium", score: 9, owner: "Finance Manager", mitigation: "Hedging strategy, fixed-rate contracts where possible", dueDate: "2025-06-30", status: "Monitoring" },
  { id: "RSK-007", risk: "Skilled Welder Shortage", probability: "Medium", impact: "High", score: 16, owner: "HR Manager", mitigation: "Recruitment drive, training program initiated", dueDate: "2024-09-30", status: "Open" },
  { id: "RSK-008", risk: "Client Payment Delay", probability: "Low", impact: "High", score: 10, owner: "Project Director", mitigation: "Regular IPC submission, contractual reminders", dueDate: "2025-06-30", status: "Monitoring" },
];

export const dailyReports = [
  { date: "2024-11-15", manpower: 85, equipment: 12, weather: "Clear", progress: "Pipe stringing KP 12-14 completed. Welding 45 joints.", issues: "Minor delay in pipe delivery at KP 14", photos: 3 },
  { date: "2024-11-14", manpower: 82, equipment: 11, weather: "Partly Cloudy", progress: "Welding 42 joints completed. NDT 38 joints.", issues: "Crane breakdown - repaired same day", photos: 5 },
  { date: "2024-11-13", manpower: 78, equipment: 12, weather: "Clear", progress: "Trenching KP 15-16. Lowering at KP 10-12.", issues: "None", photos: 4 },
  { date: "2024-11-12", manpower: 80, equipment: 10, weather: "Rain", progress: "Limited work due to rain. Welding shop continued.", issues: "Rain halted outdoor activities for 4 hours", photos: 2 },
  { date: "2024-11-11", manpower: 88, equipment: 13, weather: "Clear", progress: "Full progress. Stringing, welding, and coating.", issues: "None", photos: 6 },
];

export const equipmentList = [
  { id: "EQ-001", name: "Excavator CAT 320", location: "KP 12-14", status: "Operating", hours: 4520, fuel: 85, lastMaintenance: "2024-11-01", nextMaintenance: "2024-12-01" },
  { id: "EQ-002", name: "Excavator Komatsu PC200", location: "KP 15-16", status: "Operating", hours: 3890, fuel: 72, lastMaintenance: "2024-10-25", nextMaintenance: "2024-11-25" },
  { id: "EQ-003", name: "HDD Rig (Vermeer D100)", location: "River Crossing", status: "Operating", hours: 1250, fuel: 60, lastMaintenance: "2024-11-10", nextMaintenance: "2024-12-10" },
  { id: "EQ-004", name: "Crane 50T (Kato)", location: "Pitalganj Depot", status: "Standby", hours: 2800, fuel: 45, lastMaintenance: "2024-10-15", nextMaintenance: "2024-11-15" },
  { id: "EQ-005", name: "Welding Tractor (x4)", location: "KP 12-14", status: "Operating", hours: 3200, fuel: 90, lastMaintenance: "2024-11-05", nextMaintenance: "2024-12-05" },
  { id: "EQ-006", name: "Sideboom (D8)", location: "KP 10-12", status: "Operating", hours: 5100, fuel: 78, lastMaintenance: "2024-10-20", nextMaintenance: "2024-11-20" },
  { id: "EQ-007", name: "Generator 500KVA", location: "Site Camp", status: "Operating", hours: 6800, fuel: 55, lastMaintenance: "2024-11-08", nextMaintenance: "2024-12-08" },
  { id: "EQ-008", name: "Boom Truck (30T)", location: "Pitalganj Store", status: "Maintenance", hours: 4200, fuel: 0, lastMaintenance: "2024-11-14", nextMaintenance: "2024-12-14" },
];

export const progressData = [
  { month: "Jan", planned: 5, actual: 4.5 },
  { month: "Feb", planned: 10, actual: 9.2 },
  { month: "Mar", planned: 15, actual: 13.8 },
  { month: "Apr", planned: 20, actual: 18.5 },
  { month: "May", planned: 25, actual: 23.0 },
  { month: "Jun", planned: 30, actual: 27.5 },
  { month: "Jul", planned: 35, actual: 31.0 },
  { month: "Aug", planned: 40, actual: 35.2 },
  { month: "Sep", planned: 45, actual: 38.0 },
  { month: "Oct", planned: 50, actual: 42.5 },
  { month: "Nov", planned: 55, actual: 34.2 },
  { month: "Dec", planned: 60, actual: null },
];

export const costData = [
  { category: "Engineering", budget: 500000, committed: 420000, actual: 380000 },
  { category: "Pipeline Materials", budget: 3500000, committed: 3200000, actual: 2850000 },
  { category: "Tank Materials", budget: 2200000, committed: 1800000, actual: 540000 },
  { category: "Pumps & Equipment", budget: 1200000, committed: 680000, actual: 340000 },
  { category: "Valves & Fittings", budget: 800000, committed: 780000, actual: 520000 },
  { category: "Instrumentation", budget: 450000, committed: 192000, actual: 120000 },
  { category: "Construction", budget: 2500000, committed: 1800000, actual: 1200000 },
  { category: "HDD Works", budget: 800000, committed: 600000, actual: 180000 },
  { category: "Testing", budget: 300000, committed: 50000, actual: 0 },
  { category: "PM & Overheads", budget: 250000, committed: 180000, actual: 150000 },
];

export const warehouseData = [
  { warehouse: "Central Store (Dhaka)", items: 245, value: 1250000, lastReceipt: "2024-11-12" },
  { warehouse: "Pitalganj Store", items: 180, value: 890000, lastReceipt: "2024-11-14" },
  { warehouse: "KAD Store", items: 95, value: 420000, lastReceipt: "2024-11-10" },
  { warehouse: "Site Laydown Area", items: 320, value: 2100000, lastReceipt: "2024-11-15" },
];

export const hseData = {
  safeManHours: 125000,
  ltiFree: 285,
  toolboxTalks: 156,
  nearMisses: 8,
  incidents: 0,
  firstAid: 3,
  permitsIssued: 89,
  jsaConducted: 142,
  trainingCompleted: 68,
  auditsConducted: 12,
};

export const qaqcData = {
  totalInspections: 234,
  passed: 218,
  failed: 8,
  pending: 8,
  weldJoints: 4520,
  weldAccepted: 4280,
  weldRejected: 240,
  rejectionRate: 5.3,
  ndtCompleted: 3800,
  ncrOpen: 3,
  carOpen: 5,
  punchListItems: 12,
};

export const documents = [
  { id: "DOC-001", name: "Pipeline Route Drawing Rev.3", type: "Drawing", revision: "Rev.3", status: "Approved", date: "2024-03-15", category: "Engineering" },
  { id: "DOC-002", name: "Tank Foundation Design", type: "Drawing", revision: "Rev.2", status: "Approved", date: "2024-04-20", category: "Engineering" },
  { id: "DOC-003", name: "Welding Procedure Specification", type: "WPS", revision: "Rev.1", status: "Approved", date: "2024-02-28", category: "QA/QC" },
  { id: "DOC-004", name: "Pipeline Construction Method Statement", type: "Method Statement", revision: "Rev.2", status: "Approved", date: "2024-05-10", category: "Construction" },
  { id: "DOC-005", name: "HDD Crossing Method Statement", type: "Method Statement", revision: "Rev.1", status: "Under Review", date: "2024-08-01", category: "Construction" },
  { id: "DOC-006", name: "Inspection & Test Plan (ITP)", type: "ITP", revision: "Rev.2", status: "Approved", date: "2024-03-01", category: "QA/QC" },
  { id: "DOC-007", name: "HSE Plan", type: "Plan", revision: "Rev.1", status: "Approved", date: "2024-01-20", category: "HSE" },
  { id: "DOC-008", name: "Project Schedule Rev.4", type: "Schedule", revision: "Rev.4", status: "Approved", date: "2024-10-01", category: "Planning" },
  { id: "DOC-009", name: "Material Requisition - Pipes", type: "MR", revision: "Rev.1", status: "Approved", date: "2024-02-05", category: "Procurement" },
  { id: "DOC-010", name: "Vendor Document - Tank", type: "Vendor Doc", revision: "Rev.1", status: "Under Review", date: "2024-09-15", category: "Procurement" },
];

export const contractData = {
  contractValue: 12500000,
  variations: [
    { id: "VO-001", description: "Additional pipe coating at river crossing", value: 85000, status: "Approved" },
    { id: "VO-002", description: "Extra HDD bore for utility crossing", value: 120000, status: "Pending" },
    { id: "VO-003", description: "Tank foundation redesign", value: 45000, status: "Submitted" },
  ],
  ipcSubmitted: 4,
  ipcCertified: 3,
  totalCertified: 3750000,
  totalReceived: 3200000,
  retention: 375000,
  advance: 1250000,
  advanceRecovered: 750000,
};

export const manpowerData = [
  { category: "Engineers", count: 12, present: 11 },
  { category: "Supervisors", count: 8, present: 8 },
  { category: "Welders", count: 24, present: 22 },
  { category: "Fitters", count: 16, present: 15 },
  { category: "Operators", count: 14, present: 13 },
  { category: "Helpers", count: 35, present: 32 },
  { category: "QA/QC", count: 6, present: 6 },
  { category: "HSE", count: 4, present: 4 },
  { category: "Surveyors", count: 3, present: 3 },
  { category: "Admin", count: 5, present: 5 },
];
