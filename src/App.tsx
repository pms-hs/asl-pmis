import { useState, useRef, useEffect } from 'react';
import {
  LayoutDashboard, Network, Calendar, ShoppingCart, Package,
  HardHat, ClipboardList, Shield, FileText, AlertTriangle,
  Users, Truck, DollarSign, FolderOpen, TrendingUp,
  Menu, X, Bell, Search, Building2,
  BarChart3, CheckCircle2, Clock, AlertCircle, ArrowUpRight,
  ArrowDownRight, Activity, Wrench, ThermometerSun
} from 'lucide-react';
import {
  projectInfo, wbsData, materialRegister, activities, procurementItems,
  riskRegister, dailyReports, equipmentList, progressData, costData,
  warehouseData, hseData, qaqcData, documents, contractData, manpowerData
} from './data/pkplData';

type Module = 'dashboard' | 'wbs' | 'planning' | 'procurement' | 'materials' |
  'construction' | 'dpr' | 'qaqc' | 'hse' | 'documents' | 'contracts' |
  'finance' | 'equipment' | 'manpower' | 'risks' | 'portfolio';

const menuItems: { id: Module; label: string; icon: React.ComponentType<any>; group: string }[] = [
  { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard, group: 'Main' },
  { id: 'portfolio', label: 'Project Portfolio', icon: FolderOpen, group: 'Main' },
  { id: 'wbs', label: 'WBS Management', icon: Network, group: 'Project Controls' },
  { id: 'planning', label: 'Planning & Schedule', icon: Calendar, group: 'Project Controls' },
  { id: 'construction', label: 'Construction Progress', icon: HardHat, group: 'Project Controls' },
  { id: 'dpr', label: 'Daily Reports', icon: ClipboardList, group: 'Project Controls' },
  { id: 'procurement', label: 'Procurement', icon: ShoppingCart, group: 'Supply Chain' },
  { id: 'materials', label: 'Material Management', icon: Package, group: 'Supply Chain' },
  { id: 'equipment', label: 'Equipment', icon: Truck, group: 'Supply Chain' },
  { id: 'qaqc', label: 'QA/QC', icon: CheckCircle2, group: 'Quality & Safety' },
  { id: 'hse', label: 'HSE Management', icon: Shield, group: 'Quality & Safety' },
  { id: 'documents', label: 'Document Control', icon: FileText, group: 'Quality & Safety' },
  { id: 'contracts', label: 'Contract Management', icon: DollarSign, group: 'Commercial' },
  { id: 'finance', label: 'Cost Control', icon: TrendingUp, group: 'Commercial' },
  { id: 'risks', label: 'Risk Register', icon: AlertTriangle, group: 'Commercial' },
  { id: 'manpower', label: 'Manpower', icon: Users, group: 'Resources' },
];

export default function App() {
  const [activeModule, setActiveModule] = useState<Module>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const groups = [...new Set(menuItems.map(m => m.group))];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0 lg:w-16'} ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed lg:relative z-50 h-full bg-sidebar transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            {sidebarOpen && (
              <div className="animate-slide-in">
                <h1 className="text-white font-bold text-sm">ASL PMIS</h1>
                <p className="text-slate-400 text-[10px]">PKPL Electro-Mechanical</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {groups.map(group => (
            <div key={group} className="mb-4">
              {sidebarOpen && (
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-1">{group}</p>
              )}
              {menuItems.filter(m => m.group === group).map(item => (
                <button
                  key={item.id}
                  onClick={() => { setActiveModule(item.id); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all mb-0.5 ${
                    activeModule === item.id
                      ? 'sidebar-active text-white shadow-lg shadow-blue-500/20'
                      : 'text-slate-300 hover:bg-sidebar-hover hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {sidebarOpen && <span className="truncate">{item.label}</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-3 border-t border-slate-700/50">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                SK
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-medium truncate">Eng. Shahabuddin</p>
                <p className="text-slate-400 text-[10px]">Project Director</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hidden lg:block p-1.5 rounded-lg hover:bg-slate-100">
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-1.5 rounded-lg hover:bg-slate-100">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                {menuItems.find(m => m.id === activeModule)?.label}
              </h2>
              <p className="text-[11px] text-slate-500">{projectInfo.client} | {projectInfo.code}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-1.5">
              <Search className="w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search..." className="bg-transparent text-sm outline-none w-40" />
            </div>
            <button className="relative p-2 rounded-lg hover:bg-slate-100">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded-lg">
              <Activity className="w-3 h-3 text-emerald-600" />
              <span className="text-xs font-medium text-emerald-700">SPI: {projectInfo.spi}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="animate-fade-in">
            {activeModule === 'dashboard' && <DashboardModule />}
            {activeModule === 'wbs' && <WBSModule />}
            {activeModule === 'planning' && <PlanningModule />}
            {activeModule === 'procurement' && <ProcurementModule />}
            {activeModule === 'materials' && <MaterialsModule />}
            {activeModule === 'construction' && <ConstructionModule />}
            {activeModule === 'dpr' && <DPRModule />}
            {activeModule === 'qaqc' && <QAQCModule />}
            {activeModule === 'hse' && <HSEModule />}
            {activeModule === 'documents' && <DocumentsModule />}
            {activeModule === 'contracts' && <ContractsModule />}
            {activeModule === 'finance' && <FinanceModule />}
            {activeModule === 'risks' && <RisksModule />}
            {activeModule === 'equipment' && <EquipmentModule />}
            {activeModule === 'manpower' && <ManpowerModule />}
            {activeModule === 'portfolio' && <PortfolioModule />}
          </div>
        </main>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </div>
  );
}

// ============ CUSTOM CHART COMPONENTS ============

function AreaChartSVG({ data, width = 600, height = 250 }: { data: { month: string; planned: number | null; actual: number | null }[]; width?: number; height?: number }) {
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = 60;

  const plannedPoints = data.map((d, i) => {
    const x = padding.left + (i / (data.length - 1)) * chartW;
    const y = padding.top + chartH - ((d.planned || 0) / maxVal) * chartH;
    return `${x},${y}`;
  }).join(' ');

  const actualPoints = data.filter(d => d.actual !== null).map((d, i) => {
    const x = padding.left + (i / (data.length - 1)) * chartW;
    const y = padding.top + chartH - ((d.actual || 0) / maxVal) * chartH;
    return `${x},${y}`;
  }).join(' ');

  const plannedArea = `${padding.left},${padding.top + chartH} ${plannedPoints} ${padding.left + ((data.length - 1) / (data.length - 1)) * chartW},${padding.top + chartH}`;
  const actualData = data.filter(d => d.actual !== null);
  const actualArea = actualData.length > 0
    ? `${padding.left},${padding.top + chartH} ${actualPoints} ${padding.left + ((actualData.length - 1) / (data.length - 1)) * chartW},${padding.top + chartH}`
    : '';

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {/* Grid lines */}
      {[0, 15, 30, 45, 60].map(v => {
        const y = padding.top + chartH - (v / maxVal) * chartH;
        return (
          <g key={v}>
            <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#f1f5f9" strokeWidth="1" />
            <text x={padding.left - 5} y={y + 3} textAnchor="end" fontSize="9" fill="#94a3b8">{v}%</text>
          </g>
        );
      })}
      {/* X-axis labels */}
      {data.map((d, i) => {
        const x = padding.left + (i / (data.length - 1)) * chartW;
        return <text key={i} x={x} y={height - 8} textAnchor="middle" fontSize="9" fill="#94a3b8">{d.month}</text>;
      })}
      {/* Planned area */}
      <polygon points={plannedArea} fill="#3b82f620" />
      <polyline points={plannedPoints} fill="none" stroke="#3b82f6" strokeWidth="2" />
      {/* Actual area */}
      {actualArea && <polygon points={actualArea} fill="#10b98120" />}
      {actualPoints && <polyline points={actualPoints} fill="none" stroke="#10b981" strokeWidth="2" />}
      {/* Legend */}
      <rect x={width - 140} y={5} width="10" height="10" fill="#3b82f6" rx="2" />
      <text x={width - 125} y={14} fontSize="9" fill="#64748b">Planned</text>
      <rect x={width - 80} y={5} width="10" height="10" fill="#10b981" rx="2" />
      <text x={width - 65} y={14} fontSize="9" fill="#64748b">Actual</text>
    </svg>
  );
}

function PieChartSVG({ data, size = 180 }: { data: { name: string; value: number; color: string }[]; size?: number }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.35;
  const innerR = size * 0.22;
  let currentAngle = -90;

  const slices = data.map(d => {
    const angle = (d.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    const ix1 = cx + innerR * Math.cos(startRad);
    const iy1 = cy + innerR * Math.sin(startRad);
    const ix2 = cx + innerR * Math.cos(endRad);
    const iy2 = cy + innerR * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;

    return { path, color: d.color, name: d.name, value: d.value };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto max-w-[180px] mx-auto">
      {slices.map((s, i) => (
        <path key={i} d={s.path} fill={s.color} stroke="white" strokeWidth="2" />
      ))}
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">100%</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="8" fill="#64748b">Total Weight</text>
    </svg>
  );
}

function BarChartSVG({ data, width = 600, height = 280 }: { data: { category: string; budget: number; committed: number; actual: number }[]; width?: number; height?: number }) {
  const padding = { top: 20, right: 20, bottom: 60, left: 50 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...data.map(d => d.budget)) * 1.1;
  const barGroupWidth = chartW / data.length;
  const barWidth = barGroupWidth * 0.22;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {/* Grid */}
      {[0, 0.25, 0.5, 0.75, 1].map(frac => {
        const y = padding.top + chartH * (1 - frac);
        const val = maxVal * frac;
        return (
          <g key={frac}>
            <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#f1f5f9" strokeWidth="1" />
            <text x={padding.left - 5} y={y + 3} textAnchor="end" fontSize="8" fill="#94a3b8">${(val / 1000).toFixed(0)}K</text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map((d, i) => {
        const groupX = padding.left + i * barGroupWidth + barGroupWidth * 0.15;
        const budgetH = (d.budget / maxVal) * chartH;
        const committedH = (d.committed / maxVal) * chartH;
        const actualH = (d.actual / maxVal) * chartH;
        return (
          <g key={i}>
            <rect x={groupX} y={padding.top + chartH - budgetH} width={barWidth} height={budgetH} fill="#94a3b8" rx="2" />
            <rect x={groupX + barWidth + 2} y={padding.top + chartH - committedH} width={barWidth} height={committedH} fill="#3b82f6" rx="2" />
            <rect x={groupX + (barWidth + 2) * 2} y={padding.top + chartH - actualH} width={barWidth} height={actualH} fill="#10b981" rx="2" />
            <text x={groupX + barWidth * 1.5} y={height - padding.bottom + 12} textAnchor="middle" fontSize="7" fill="#64748b" transform={`rotate(-30, ${groupX + barWidth * 1.5}, ${height - padding.bottom + 12})`}>{d.category}</text>
          </g>
        );
      })}
      {/* Legend */}
      <rect x={padding.left} y={height - 15} width="8" height="8" fill="#94a3b8" rx="1" />
      <text x={padding.left + 12} y={height - 8} fontSize="8" fill="#64748b">Budget</text>
      <rect x={padding.left + 60} y={height - 15} width="8" height="8" fill="#3b82f6" rx="1" />
      <text x={padding.left + 72} y={height - 8} fontSize="8" fill="#64748b">Committed</text>
      <rect x={padding.left + 140} y={height - 15} width="8" height="8" fill="#10b981" rx="1" />
      <text x={padding.left + 152} y={height - 8} fontSize="8" fill="#64748b">Actual</text>
    </svg>
  );
}

function HorizontalBarChart({ data, width = 500, height = 250 }: { data: { category: string; count: number; present: number }[]; width?: number; height?: number }) {
  const padding = { top: 10, right: 20, bottom: 30, left: 80 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...data.map(d => d.count));
  const barHeight = chartH / data.length * 0.7;
  const gap = chartH / data.length * 0.3;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      {data.map((d, i) => {
        const y = padding.top + i * (barHeight + gap);
        const totalW = (d.count / maxVal) * chartW;
        const presentW = (d.present / maxVal) * chartW;
        return (
          <g key={i}>
            <text x={padding.left - 5} y={y + barHeight / 2 + 3} textAnchor="end" fontSize="9" fill="#64748b">{d.category}</text>
            <rect x={padding.left} y={y} width={totalW} height={barHeight} fill="#e2e8f0" rx="3" />
            <rect x={padding.left} y={y} width={presentW} height={barHeight} fill="#3b82f6" rx="3" />
            <text x={padding.left + totalW + 5} y={y + barHeight / 2 + 3} fontSize="8" fill="#64748b">{d.count}</text>
          </g>
        );
      })}
      {/* X-axis */}
      {[0, 0.25, 0.5, 0.75, 1].map(frac => {
        const x = padding.left + chartW * frac;
        return (
          <g key={frac}>
            <line x1={x} y1={padding.top} x2={x} y2={padding.top + chartH} stroke="#f1f5f9" strokeWidth="1" />
            <text x={x} y={height - 10} textAnchor="middle" fontSize="8" fill="#94a3b8">{Math.round(maxVal * frac)}</text>
          </g>
        );
      })}
    </svg>
  );
}

function DonutChart({ accepted, rejected, size = 180 }: { accepted: number; rejected: number; size?: number }) {
  const total = accepted + rejected;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.35;
  const innerR = size * 0.24;

  const acceptedAngle = (accepted / total) * 360;
  const acceptedRad = (acceptedAngle * Math.PI) / 180;
  const startRad = (-90 * Math.PI) / 180;

  const ax1 = cx + r * Math.cos(startRad);
  const ay1 = cy + r * Math.sin(startRad);
  const ax2 = cx + r * Math.cos(startRad + acceptedRad);
  const ay2 = cy + r * Math.sin(startRad + acceptedRad);
  const aix1 = cx + innerR * Math.cos(startRad);
  const aiy1 = cy + innerR * Math.sin(startRad);
  const aix2 = cx + innerR * Math.cos(startRad + acceptedRad);
  const aiy2 = cy + innerR * Math.sin(startRad + acceptedRad);
  const largeArcA = acceptedAngle > 180 ? 1 : 0;

  const rejectedAngle = 360 - acceptedAngle;
  const rx1 = ax2;
  const ry1 = ay2;
  const rx2 = ax1;
  const ry2 = ay1;
  const rix1 = aix2;
  const riy1 = aiy2;
  const rix2 = aix1;
  const riy2 = aiy1;
  const largeArcR = rejectedAngle > 180 ? 1 : 0;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto max-w-[180px] mx-auto">
      <path d={`M ${ax1} ${ay1} A ${r} ${r} 0 ${largeArcA} 1 ${ax2} ${ay2} L ${aix2} ${aiy2} A ${innerR} ${innerR} 0 ${largeArcA} 0 ${aix1} ${aiy1} Z`} fill="#10b981" />
      <path d={`M ${rx1} ${ry1} A ${r} ${r} 0 ${largeArcR} 1 ${rx2} ${ry2} L ${rix2} ${riy2} A ${innerR} ${innerR} 0 ${largeArcR} 0 ${rix1} ${riy1} Z`} fill="#ef4444" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">{((accepted / total) * 100).toFixed(1)}%</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="8" fill="#64748b">Acceptance</text>
    </svg>
  );
}

// ============ DASHBOARD MODULE ============
function DashboardModule() {
  const pieData = [
    { name: 'Engineering', value: 10, color: '#3b82f6' },
    { name: 'Material Supply', value: 35, color: '#10b981' },
    { name: 'Construction', value: 40, color: '#f59e0b' },
    { name: 'Testing', value: 10, color: '#8b5cf6' },
    { name: 'PM', value: 5, color: '#6b7280' },
  ];

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold">{projectInfo.name}</h1>
            <p className="text-blue-200 text-sm mt-1">{projectInfo.client} | {projectInfo.location}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xs bg-white/20 px-2 py-1 rounded">Contract: {projectInfo.contractValue}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">Duration: Jan 2024 - Jun 2025</span>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{projectInfo.overallProgress}%</div>
              <div className="text-xs text-blue-200">Actual Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{projectInfo.plannedProgress}%</div>
              <div className="text-xs text-blue-200">Planned Progress</div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPICard title="Schedule Performance" value={`${(projectInfo.spi * 100).toFixed(0)}%`} subtitle="SPI Index" trend="down" trendValue="-11%" color="red" icon={TrendingUp} />
        <KPICard title="Cost Performance" value={`${(projectInfo.cpi * 100).toFixed(0)}%`} subtitle="CPI Index" trend="down" trendValue="-6%" color="amber" icon={DollarSign} />
        <KPICard title="Budget Utilized" value={`${projectInfo.budgetUsed}%`} subtitle="of Total Budget" trend="neutral" trendValue="On Track" color="blue" icon={BarChart3} />
        <KPICard title="LTI Free Days" value={`${hseData.ltiFree}`} subtitle="Consecutive Days" trend="up" trendValue="Excellent" color="green" icon={Shield} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* S-Curve */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-800">Progress S-Curve</h3>
            <span className="text-xs text-slate-500">Planned vs Actual</span>
          </div>
          <AreaChartSVG data={progressData} />
        </div>

        {/* WBS Weight Distribution */}
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">WBS Weight Distribution</h3>
          <PieChartSVG data={pieData} />
          <div className="space-y-1.5 mt-3">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-medium text-slate-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">Key Activities Status</h3>
          <div className="space-y-3">
            {activities.slice(0, 6).map(act => (
              <div key={act.id} className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-700">{act.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full progress-bar-fill" style={{
                        width: `${act.progress}%`,
                        backgroundColor: act.progress > 70 ? '#10b981' : act.progress > 30 ? '#3b82f6' : '#f59e0b'
                      }}></div>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">{act.progress}%</span>
                  </div>
                </div>
                <StatusBadge status={act.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Risk Summary */}
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">Risk Overview</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-red-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-red-600">{riskRegister.filter(r => r.score >= 15).length}</p>
              <p className="text-[10px] text-red-500 font-medium">High Risk</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-amber-600">{riskRegister.filter(r => r.score >= 8 && r.score < 15).length}</p>
              <p className="text-[10px] text-amber-500 font-medium">Medium Risk</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-blue-600">{riskRegister.filter(r => r.status === 'Open').length}</p>
              <p className="text-[10px] text-blue-500 font-medium">Open Risks</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-600">{riskRegister.filter(r => r.status === 'Closed' || r.status === 'Mitigated').length}</p>
              <p className="text-[10px] text-green-500 font-medium">Mitigated</p>
            </div>
          </div>
          <div className="space-y-2">
            {riskRegister.slice(0, 3).map(risk => (
              <div key={risk.id} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                <AlertTriangle className={`w-3.5 h-3.5 ${risk.score >= 15 ? 'text-red-500' : 'text-amber-500'}`} />
                <span className="text-xs text-slate-700 flex-1">{risk.risk}</span>
                <span className="text-[10px] font-bold text-slate-500">{risk.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ WBS MODULE ============
function WBSModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Work Breakdown Structure</h2>
          <p className="text-sm text-slate-500">PKPL Electro-Mechanical Package | Weight-based Progress Tracking</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700">+ Add WBS Item</button>
          <button className="px-3 py-1.5 bg-white border border-slate-200 text-xs rounded-lg hover:bg-slate-50">Export</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500 mb-1">Total WBS Weight</p>
          <p className="text-2xl font-bold text-slate-800">100%</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500 mb-1">Weighted Progress</p>
          <p className="text-2xl font-bold text-blue-600">{projectInfo.overallProgress}%</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500 mb-1">Total Activities</p>
          <p className="text-2xl font-bold text-slate-800">{activities.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <h3 className="text-sm font-semibold text-slate-700">WBS Hierarchy & Progress</h3>
        </div>
        <div className="p-4">
          {wbsData.map(level1 => (
            <div key={level1.id} className="mb-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">{level1.id}</span>
                <span className="text-sm font-semibold text-slate-800 flex-1">{level1.name}</span>
                <span className="text-xs text-slate-500">Weight: {level1.weight}%</span>
                <div className="w-24">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full progress-bar-fill" style={{ width: `${level1.progress}%` }}></div>
                    </div>
                    <span className="text-xs font-bold text-blue-700">{level1.progress}%</span>
                  </div>
                </div>
              </div>
              {level1.children && (
                <div className="ml-6 mt-2 space-y-1.5">
                  {level1.children.map(level2 => (
                    <div key={level2.id} className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded">{level2.id}</span>
                      <span className="text-xs text-slate-700 flex-1">{level2.name}</span>
                      <span className="text-[10px] text-slate-400">Wt: {level2.weight}%</span>
                      <div className="w-20">
                        <div className="flex items-center gap-1.5">
                          <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full rounded-full progress-bar-fill" style={{
                              width: `${level2.progress}%`,
                              backgroundColor: level2.progress >= 70 ? '#10b981' : level2.progress >= 30 ? '#3b82f6' : '#f59e0b'
                            }}></div>
                          </div>
                          <span className="text-[10px] font-medium text-slate-600">{level2.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ PLANNING MODULE ============
function PlanningModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Planning & Schedule</h2>
          <p className="text-sm text-slate-500">Activity Schedule & Progress Tracking</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ Add Activity</button>
          <button className="px-3 py-1.5 bg-white border border-slate-200 text-xs rounded-lg">Import P6</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <p className="text-xl font-bold text-slate-800">{activities.length}</p>
          <p className="text-[10px] text-slate-500">Total Activities</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <p className="text-xl font-bold text-green-600">{activities.filter(a => a.status === 'Completed').length}</p>
          <p className="text-[10px] text-slate-500">Completed</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <p className="text-xl font-bold text-blue-600">{activities.filter(a => a.status === 'In Progress').length}</p>
          <p className="text-[10px] text-slate-500">In Progress</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <p className="text-xl font-bold text-amber-600">{activities.filter(a => a.status === 'Delayed').length}</p>
          <p className="text-[10px] text-slate-500">Delayed</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <p className="text-xl font-bold text-slate-400">{activities.filter(a => a.status === 'Not Started').length}</p>
          <p className="text-[10px] text-slate-500">Not Started</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Activity</th>
                <th>WBS</th>
                <th>Planned Start</th>
                <th>Planned End</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(act => (
                <tr key={act.id}>
                  <td className="font-mono text-xs">{act.id}</td>
                  <td className="font-medium">{act.name}</td>
                  <td className="font-mono text-xs">{act.wbs}</td>
                  <td>{act.plannedStart}</td>
                  <td>{act.plannedEnd}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{
                          width: `${act.progress}%`,
                          backgroundColor: act.progress >= 70 ? '#10b981' : act.progress >= 30 ? '#3b82f6' : '#f59e0b'
                        }}></div>
                      </div>
                      <span className="text-xs font-medium">{act.progress}%</span>
                    </div>
                  </td>
                  <td><StatusBadge status={act.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ PROCUREMENT MODULE ============
function ProcurementModule() {
  const totalPOValue = procurementItems.reduce((sum, p) => sum + p.poValue, 0);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Procurement Management</h2>
          <p className="text-sm text-slate-500">MR → RFQ → PO → Delivery → GRN Workflow</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ New MR</button>
      </div>

      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <div className="flex items-center justify-between overflow-x-auto pb-2">
          {['MR', 'RFQ', 'Evaluation', 'PO', 'Delivery', 'GRN', 'Warehouse', 'Issue'].map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 5 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  {i + 1}
                </div>
                <span className="text-[10px] mt-1 text-slate-600 whitespace-nowrap">{step}</span>
              </div>
              {i < 7 && <div className={`w-8 h-0.5 ${i < 4 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Total PO Value</p>
          <p className="text-xl font-bold text-slate-800">${(totalPOValue / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Active POs</p>
          <p className="text-xl font-bold text-blue-600">{procurementItems.filter(p => p.status === 'Active').length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Completed POs</p>
          <p className="text-xl font-bold text-green-600">{procurementItems.filter(p => p.status === 'Completed').length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Vendors</p>
          <p className="text-xl font-bold text-slate-800">{new Set(procurementItems.map(p => p.vendor)).size}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-700">Purchase Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>PO No.</th>
                <th>MR Ref</th>
                <th>Item</th>
                <th>Vendor</th>
                <th>PO Value</th>
                <th>Delivery</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {procurementItems.map(po => (
                <tr key={po.id}>
                  <td className="font-mono text-xs font-medium">{po.id}</td>
                  <td className="font-mono text-xs">{po.mrNo}</td>
                  <td className="text-xs">{po.item}</td>
                  <td className="text-xs">{po.vendor}</td>
                  <td className="text-xs font-medium">${(po.poValue / 1000).toFixed(0)}K</td>
                  <td className="text-xs">{po.deliveryStatus}</td>
                  <td className="text-xs">{po.paymentStatus}</td>
                  <td><StatusBadge status={po.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ MATERIALS MODULE ============
function MaterialsModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Material Management</h2>
          <p className="text-sm text-slate-500">Material Register & Inventory Tracking</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ Add Material</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {warehouseData.map(wh => (
          <div key={wh.warehouse} className="bg-white rounded-xl p-4 border border-slate-200 card-hover">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-4 h-4 text-blue-600" />
              <p className="text-xs font-medium text-slate-700 truncate">{wh.warehouse}</p>
            </div>
            <p className="text-lg font-bold text-slate-800">{wh.items} items</p>
            <p className="text-[10px] text-slate-500">Value: ${(wh.value / 1000000).toFixed(2)}M | Last: {wh.lastReceipt}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-700">Material Register</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Material</th>
                <th>Unit</th>
                <th>Qty</th>
                <th>Delivered</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Vendor</th>
              </tr>
            </thead>
            <tbody>
              {materialRegister.map(mat => (
                <tr key={mat.id}>
                  <td className="font-mono text-xs">{mat.id}</td>
                  <td className="text-xs font-medium">{mat.item}</td>
                  <td className="text-xs">{mat.unit}</td>
                  <td className="text-xs">{mat.qty}</td>
                  <td className="text-xs">{mat.delivered}</td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{
                          width: `${mat.progress}%`,
                          backgroundColor: mat.progress >= 80 ? '#10b981' : mat.progress >= 50 ? '#3b82f6' : '#f59e0b'
                        }}></div>
                      </div>
                      <span className="text-[10px] font-medium">{mat.progress}%</span>
                    </div>
                  </td>
                  <td><StatusBadge status={mat.status} /></td>
                  <td className="text-xs">{mat.vendor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ CONSTRUCTION MODULE ============
function ConstructionModule() {
  const constructionActivities = [
    { name: "Pipe Stringing", planQty: "45 KM", actualQty: "15.8 KM", earned: "15.8 KM", remaining: "29.2 KM", progress: 35 },
    { name: "Pipe Welding", planQty: "50,000 DIA-INCH", actualQty: "15,000 DIA-INCH", earned: "14,500 DIA-INCH", remaining: "35,000 DIA-INCH", progress: 30 },
    { name: "HDD Crossing", planQty: "800M", actualQty: "120M", earned: "100M", remaining: "680M", progress: 15 },
    { name: "Tank Foundation", planQty: "2 Foundations", actualQty: "1 Foundation", earned: "0.8 Foundation", remaining: "1.2 Foundations", progress: 40 },
    { name: "Piping Installation", planQty: "2,500 DIA-INCH", actualQty: "500 DIA-INCH", earned: "480 DIA-INCH", remaining: "2,000 DIA-INCH", progress: 20 },
    { name: "Electrical Works", planQty: "50 KM Cable", actualQty: "9 KM", earned: "8.5 KM", remaining: "41 KM", progress: 18 },
    { name: "Coating & Wrapping", planQty: "45 KM", actualQty: "18 KM", earned: "17 KM", remaining: "27 KM", progress: 40 },
    { name: "Backfilling", planQty: "30 KM", actualQty: "8 KM", earned: "7.5 KM", remaining: "22 KM", progress: 27 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Construction Progress</h2>
        <p className="text-sm text-slate-500">Physical Progress Measurement by Activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {constructionActivities.map((act, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 card-hover">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-slate-800">{act.name}</h4>
              <span className={`text-lg font-bold ${act.progress >= 30 ? 'text-blue-600' : 'text-amber-600'}`}>{act.progress}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full progress-bar-fill" style={{ width: `${act.progress}%` }}></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-50 rounded p-2">
                <p className="text-[10px] text-slate-500">Plan Qty</p>
                <p className="text-xs font-medium text-slate-700">{act.planQty}</p>
              </div>
              <div className="bg-blue-50 rounded p-2">
                <p className="text-[10px] text-blue-500">Actual Qty</p>
                <p className="text-xs font-medium text-blue-700">{act.actualQty}</p>
              </div>
              <div className="bg-green-50 rounded p-2">
                <p className="text-[10px] text-green-500">Earned Qty</p>
                <p className="text-xs font-medium text-green-700">{act.earned}</p>
              </div>
              <div className="bg-amber-50 rounded p-2">
                <p className="text-[10px] text-amber-500">Remaining</p>
                <p className="text-xs font-medium text-amber-700">{act.remaining}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ DPR MODULE ============
function DPRModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Daily Progress Reports</h2>
          <p className="text-sm text-slate-500">Site Daily Reporting & Monitoring</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ New DPR</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
          <p className="text-lg font-bold text-slate-800">{dailyReports[0].manpower}</p>
          <p className="text-[10px] text-slate-500">Manpower</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <Truck className="w-5 h-5 text-green-600 mx-auto mb-1" />
          <p className="text-lg font-bold text-slate-800">{dailyReports[0].equipment}</p>
          <p className="text-[10px] text-slate-500">Equipment</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <ThermometerSun className="w-5 h-5 text-amber-600 mx-auto mb-1" />
          <p className="text-sm font-bold text-slate-800">{dailyReports[0].weather}</p>
          <p className="text-[10px] text-slate-500">Weather</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <FileText className="w-5 h-5 text-purple-600 mx-auto mb-1" />
          <p className="text-lg font-bold text-slate-800">{dailyReports[0].photos}</p>
          <p className="text-[10px] text-slate-500">Photos</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <ClipboardList className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
          <p className="text-sm font-bold text-slate-800">{dailyReports[0].issues === 'None' ? 'No Issues' : '1 Issue'}</p>
          <p className="text-[10px] text-slate-500">Issues</p>
        </div>
      </div>

      <div className="space-y-3">
        {dailyReports.map((dpr, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 card-hover">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{dpr.date}</p>
                  <p className="text-[10px] text-slate-500">Manpower: {dpr.manpower} | Equipment: {dpr.equipment} | {dpr.weather}</p>
                </div>
              </div>
              <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">{dpr.photos} photos</span>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 mb-2">
              <p className="text-xs text-slate-500 mb-1">Progress</p>
              <p className="text-xs text-slate-700">{dpr.progress}</p>
            </div>
            {dpr.issues !== 'None' && (
              <div className="bg-amber-50 rounded-lg p-3">
                <p className="text-xs text-amber-600 mb-1">Issues</p>
                <p className="text-xs text-amber-800">{dpr.issues}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ QA/QC MODULE ============
function QAQCModule() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">QA/QC Management</h2>
        <p className="text-sm text-slate-500">Quality Assurance & Quality Control</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Total Inspections</p>
          <p className="text-2xl font-bold text-slate-800">{qaqcData.totalInspections}</p>
          <p className="text-[10px] text-green-600">{qaqcData.passed} Passed</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Weld Joints</p>
          <p className="text-2xl font-bold text-slate-800">{qaqcData.weldJoints.toLocaleString()}</p>
          <p className="text-[10px] text-green-600">{qaqcData.weldAccepted.toLocaleString()} Accepted</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Rejection Rate</p>
          <p className="text-2xl font-bold text-amber-600">{qaqcData.rejectionRate}%</p>
          <p className="text-[10px] text-slate-500">Target: &lt;5%</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Open NCRs</p>
          <p className="text-2xl font-bold text-red-600">{qaqcData.ncrOpen}</p>
          <p className="text-[10px] text-slate-500">{qaqcData.carOpen} CARs Open</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">Weld Acceptance</h3>
          <DonutChart accepted={qaqcData.weldAccepted} rejected={qaqcData.weldRejected} />
          <div className="flex justify-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-[10px] text-slate-600">Accepted: {qaqcData.weldAccepted.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <span className="text-[10px] text-slate-600">Rejected: {qaqcData.weldRejected.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">Inspection Summary</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Inspections Passed</span>
                <span className="font-medium">{qaqcData.passed}/{qaqcData.totalInspections}</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full"><div className="h-full bg-green-500 rounded-full" style={{ width: `${(qaqcData.passed / qaqcData.totalInspections) * 100}%` }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">NDT Completed</span>
                <span className="font-medium">{qaqcData.ndtCompleted.toLocaleString()}/{qaqcData.weldJoints.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${(qaqcData.ndtCompleted / qaqcData.weldJoints) * 100}%` }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Punch List Closed</span>
                <span className="font-medium">{48 - qaqcData.punchListItems}/48</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full"><div className="h-full bg-amber-500 rounded-full" style={{ width: `${((48 - qaqcData.punchListItems) / 48) * 100}%` }}></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-700">Inspection Requests</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
          {[
            { label: 'IR', count: 156, open: 5, bg: 'bg-blue-50', text: 'text-blue-700' },
            { label: 'MIR', count: 42, open: 2, bg: 'bg-green-50', text: 'text-green-700' },
            { label: 'RFI', count: 28, open: 1, bg: 'bg-purple-50', text: 'text-purple-700' },
            { label: 'NCR', count: 8, open: 3, bg: 'bg-red-50', text: 'text-red-700' },
            { label: 'CAR', count: 12, open: 5, bg: 'bg-amber-50', text: 'text-amber-700' },
            { label: 'Punch List', count: 48, open: 12, bg: 'bg-indigo-50', text: 'text-indigo-700' },
          ].map(item => (
            <div key={item.label} className={`${item.bg} rounded-lg p-3 text-center`}>
              <p className={`text-xs font-bold ${item.text}`}>{item.label}</p>
              <p className="text-xl font-bold text-slate-800">{item.count}</p>
              <p className="text-[10px] text-red-500">{item.open} Open</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ HSE MODULE ============
function HSEModule() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">HSE Management</h2>
        <p className="text-sm text-slate-500">Health, Safety & Environment</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
          <Shield className="w-6 h-6 mb-2 opacity-80" />
          <p className="text-2xl font-bold">{hseData.ltiFree}</p>
          <p className="text-xs opacity-80">LTI Free Days</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <Activity className="w-6 h-6 mb-2 opacity-80" />
          <p className="text-2xl font-bold">{(hseData.safeManHours / 1000).toFixed(0)}K</p>
          <p className="text-xs opacity-80">Safe Man-Hours</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <ClipboardList className="w-6 h-6 mb-2 opacity-80" />
          <p className="text-2xl font-bold">{hseData.toolboxTalks}</p>
          <p className="text-xs opacity-80">Toolbox Talks</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-4 text-white">
          <AlertTriangle className="w-6 h-6 mb-2 opacity-80" />
          <p className="text-2xl font-bold">{hseData.nearMisses}</p>
          <p className="text-xs opacity-80">Near Misses</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-white">
          <AlertCircle className="w-6 h-6 mb-2 opacity-80" />
          <p className="text-2xl font-bold">{hseData.incidents}</p>
          <p className="text-xs opacity-80">Incidents (LTI)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">Safety Activities</h3>
          <div className="space-y-3">
            {[
              { label: 'Permits to Work Issued', value: hseData.permitsIssued, icon: FileText },
              { label: 'JSA Conducted', value: hseData.jsaConducted, icon: ClipboardList },
              { label: 'Training Completed', value: hseData.trainingCompleted, icon: Users },
              { label: 'Safety Audits', value: hseData.auditsConducted, icon: CheckCircle2 },
              { label: 'First Aid Cases', value: hseData.firstAid, icon: AlertCircle },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-700">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">HSE Compliance Status</h3>
          <div className="space-y-4">
            {[
              { label: 'PPE Compliance', value: 98, color: 'bg-green-500', textColor: 'text-green-600' },
              { label: 'Toolbox Talk Completion', value: 92, color: 'bg-blue-500', textColor: 'text-blue-600' },
              { label: 'Permit Compliance', value: 100, color: 'bg-green-500', textColor: 'text-green-600' },
              { label: 'Training Completion', value: 85, color: 'bg-amber-500', textColor: 'text-amber-600' },
              { label: 'Incident Closure Rate', value: 100, color: 'bg-green-500', textColor: 'text-green-600' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600">{item.label}</span>
                  <span className={`font-medium ${item.textColor}`}>{item.value}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full"><div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ DOCUMENTS MODULE ============
function DocumentsModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Document Control</h2>
          <p className="text-sm text-slate-500">Engineering & Project Documents with Version Control</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ Upload Document</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-slate-800">{documents.length}</p>
          <p className="text-xs text-slate-500">Total Documents</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-green-600">{documents.filter(d => d.status === 'Approved').length}</p>
          <p className="text-xs text-slate-500">Approved</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-amber-600">{documents.filter(d => d.status === 'Under Review').length}</p>
          <p className="text-xs text-slate-500">Under Review</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-blue-600">{new Set(documents.map(d => d.category)).size}</p>
          <p className="text-xs text-slate-500">Categories</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Doc ID</th>
                <th>Document Name</th>
                <th>Type</th>
                <th>Revision</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc.id}>
                  <td className="font-mono text-xs">{doc.id}</td>
                  <td className="text-xs font-medium">{doc.name}</td>
                  <td className="text-xs">{doc.type}</td>
                  <td className="text-xs font-mono">{doc.revision}</td>
                  <td className="text-xs">{doc.category}</td>
                  <td className="text-xs">{doc.date}</td>
                  <td><StatusBadge status={doc.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ CONTRACTS MODULE ============
function ContractsModule() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Contract Management</h2>
        <p className="text-sm text-slate-500">Client Contract Tracking & Variations</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs opacity-80">Contract Value</p>
            <p className="text-xl font-bold">${(contractData.contractValue / 1000000).toFixed(1)}M</p>
          </div>
          <div>
            <p className="text-xs opacity-80">Total Certified</p>
            <p className="text-xl font-bold">${(contractData.totalCertified / 1000000).toFixed(2)}M</p>
          </div>
          <div>
            <p className="text-xs opacity-80">Total Received</p>
            <p className="text-xl font-bold">${(contractData.totalReceived / 1000000).toFixed(2)}M</p>
          </div>
          <div>
            <p className="text-xs opacity-80">IPC Submitted</p>
            <p className="text-xl font-bold">{contractData.ipcSubmitted}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Advance Given</p>
          <p className="text-lg font-bold text-slate-800">${(contractData.advance / 1000000).toFixed(2)}M</p>
          <p className="text-[10px] text-blue-600">Recovered: ${(contractData.advanceRecovered / 1000).toFixed(0)}K</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Retention</p>
          <p className="text-lg font-bold text-slate-800">${(contractData.retention / 1000).toFixed(0)}K</p>
          <p className="text-[10px] text-slate-500">5% of certified</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Variations Approved</p>
          <p className="text-lg font-bold text-green-600">${(contractData.variations.filter(v => v.status === 'Approved').reduce((s, v) => s + v.value, 0) / 1000).toFixed(0)}K</p>
          <p className="text-[10px] text-slate-500">{contractData.variations.filter(v => v.status === 'Approved').length} approved</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Variations Pending</p>
          <p className="text-lg font-bold text-amber-600">${(contractData.variations.filter(v => v.status !== 'Approved').reduce((s, v) => s + v.value, 0) / 1000).toFixed(0)}K</p>
          <p className="text-[10px] text-slate-500">{contractData.variations.filter(v => v.status !== 'Approved').length} pending</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-700">Variation Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>VO No.</th>
                <th>Description</th>
                <th>Value</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contractData.variations.map(vo => (
                <tr key={vo.id}>
                  <td className="font-mono text-xs font-medium">{vo.id}</td>
                  <td className="text-xs">{vo.description}</td>
                  <td className="text-xs font-medium">${(vo.value / 1000).toFixed(0)}K</td>
                  <td><StatusBadge status={vo.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ FINANCE MODULE ============
function FinanceModule() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Cost Control</h2>
        <p className="text-sm text-slate-500">Budget vs Commitment vs Actual Cost Analysis</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Total Budget</p>
          <p className="text-xl font-bold text-slate-800">${(costData.reduce((s, c) => s + c.budget, 0) / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Total Committed</p>
          <p className="text-xl font-bold text-blue-600">${(costData.reduce((s, c) => s + c.committed, 0) / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Total Actual</p>
          <p className="text-xl font-bold text-green-600">${(costData.reduce((s, c) => s + c.actual, 0) / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-xs text-slate-500">Variance</p>
          <p className="text-xl font-bold text-amber-600">
            ${((costData.reduce((s, c) => s + c.budget, 0) - costData.reduce((s, c) => s + c.actual, 0)) / 1000000).toFixed(1)}M
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">Cost by Category</h3>
        <BarChartSVG data={costData} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-700">Cost Center Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Cost Center</th>
                <th>Budget</th>
                <th>Committed</th>
                <th>Actual</th>
                <th>Variance</th>
                <th>% Used</th>
              </tr>
            </thead>
            <tbody>
              {costData.map((item, i) => (
                <tr key={i}>
                  <td className="text-xs font-medium">{item.category}</td>
                  <td className="text-xs">${(item.budget / 1000).toFixed(0)}K</td>
                  <td className="text-xs">${(item.committed / 1000).toFixed(0)}K</td>
                  <td className="text-xs">${(item.actual / 1000).toFixed(0)}K</td>
                  <td className={`text-xs font-medium ${item.budget - item.actual > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${((item.budget - item.actual) / 1000).toFixed(0)}K
                  </td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(item.actual / item.budget) * 100}%` }}></div>
                      </div>
                      <span className="text-[10px]">{((item.actual / item.budget) * 100).toFixed(0)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ RISKS MODULE ============
function RisksModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Risk Register</h2>
          <p className="text-sm text-slate-500">Project Risk Identification & Mitigation</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ Add Risk</button>
      </div>

      <div className="bg-white rounded-xl p-5 border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">Risk Matrix (Probability × Impact)</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1"></div>
          <div className="text-center text-xs font-medium text-slate-500 pb-2">Medium Impact</div>
          <div className="text-center text-xs font-medium text-slate-500 pb-2">High/Critical Impact</div>
          
          <div className="text-xs font-medium text-slate-500 flex items-center">High Prob.</div>
          <div className="bg-amber-100 border border-amber-200 rounded-lg p-3 min-h-[60px]">
            {riskRegister.filter(r => r.probability === 'High' && r.impact === 'Medium').map(r => <p key={r.id} className="text-[10px] text-amber-800 truncate">{r.risk}</p>)}
          </div>
          <div className="bg-red-100 border border-red-200 rounded-lg p-3 min-h-[60px]">
            {riskRegister.filter(r => r.probability === 'High' && (r.impact === 'High' || r.impact === 'Critical')).map(r => <p key={r.id} className="text-[10px] text-red-800 truncate">{r.risk}</p>)}
          </div>
          
          <div className="text-xs font-medium text-slate-500 flex items-center">Medium Prob.</div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 min-h-[60px]">
            {riskRegister.filter(r => r.probability === 'Medium' && r.impact === 'Medium').map(r => <p key={r.id} className="text-[10px] text-yellow-800 truncate">{r.risk}</p>)}
          </div>
          <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 min-h-[60px]">
            {riskRegister.filter(r => r.probability === 'Medium' && (r.impact === 'High' || r.impact === 'Critical')).map(r => <p key={r.id} className="text-[10px] text-orange-800 truncate">{r.risk}</p>)}
          </div>
          
          <div className="text-xs font-medium text-slate-500 flex items-center">Low Prob.</div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 min-h-[60px]">
            {riskRegister.filter(r => r.probability === 'Low' && r.impact === 'Medium').map(r => <p key={r.id} className="text-[10px] text-green-800 truncate">{r.risk}</p>)}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 min-h-[60px]">
            {riskRegister.filter(r => r.probability === 'Low' && r.impact === 'High').map(r => <p key={r.id} className="text-[10px] text-amber-800 truncate">{r.risk}</p>)}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Risk</th>
                <th>Probability</th>
                <th>Impact</th>
                <th>Score</th>
                <th>Owner</th>
                <th>Mitigation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {riskRegister.map(risk => (
                <tr key={risk.id}>
                  <td className="font-mono text-xs">{risk.id}</td>
                  <td className="text-xs font-medium">{risk.risk}</td>
                  <td><span className={`text-[10px] px-1.5 py-0.5 rounded ${risk.probability === 'High' ? 'bg-red-100 text-red-700' : risk.probability === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{risk.probability}</span></td>
                  <td><span className={`text-[10px] px-1.5 py-0.5 rounded ${risk.impact === 'Critical' || risk.impact === 'High' ? 'bg-red-100 text-red-700' : risk.impact === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{risk.impact}</span></td>
                  <td className="text-xs font-bold">{risk.score}</td>
                  <td className="text-xs">{risk.owner}</td>
                  <td className="text-xs max-w-[200px] truncate">{risk.mitigation}</td>
                  <td><StatusBadge status={risk.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ EQUIPMENT MODULE ============
function EquipmentModule() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Equipment Management</h2>
          <p className="text-sm text-slate-500">Heavy Equipment Tracking & Maintenance</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ Add Equipment</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-green-600">{equipmentList.filter(e => e.status === 'Operating').length}</p>
          <p className="text-xs text-slate-500">Operating</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-blue-600">{equipmentList.filter(e => e.status === 'Standby').length}</p>
          <p className="text-xs text-slate-500">Standby</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-amber-600">{equipmentList.filter(e => e.status === 'Maintenance').length}</p>
          <p className="text-xs text-slate-500">Maintenance</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-slate-800">{equipmentList.length}</p>
          <p className="text-xs text-slate-500">Total Equipment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {equipmentList.map(eq => (
          <div key={eq.id} className="bg-white rounded-xl p-4 border border-slate-200 card-hover">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${eq.status === 'Operating' ? 'bg-green-50' : eq.status === 'Standby' ? 'bg-blue-50' : 'bg-amber-50'}`}>
                  <Wrench className={`w-5 h-5 ${eq.status === 'Operating' ? 'text-green-600' : eq.status === 'Standby' ? 'text-blue-600' : 'text-amber-600'}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{eq.name}</p>
                  <p className="text-[10px] text-slate-500">{eq.location}</p>
                </div>
              </div>
              <StatusBadge status={eq.status} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-50 rounded p-2 text-center">
                <p className="text-[10px] text-slate-500">Hours</p>
                <p className="text-xs font-bold text-slate-700">{eq.hours.toLocaleString()}</p>
              </div>
              <div className="bg-slate-50 rounded p-2 text-center">
                <p className="text-[10px] text-slate-500">Fuel</p>
                <p className="text-xs font-bold text-slate-700">{eq.fuel}%</p>
              </div>
              <div className="bg-slate-50 rounded p-2 text-center">
                <p className="text-[10px] text-slate-500">Next Maint.</p>
                <p className="text-xs font-bold text-slate-700">{eq.nextMaintenance.slice(5)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ MANPOWER MODULE ============
function ManpowerModule() {
  const totalManpower = manpowerData.reduce((s, m) => s + m.count, 0);
  const totalPresent = manpowerData.reduce((s, m) => s + m.present, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Manpower Management</h2>
        <p className="text-sm text-slate-500">Workforce Planning & Attendance</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-slate-800">{totalManpower}</p>
          <p className="text-xs text-slate-500">Total Strength</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-green-600">{totalPresent}</p>
          <p className="text-xs text-slate-500">Present Today</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-blue-600">{((totalPresent / totalManpower) * 100).toFixed(0)}%</p>
          <p className="text-xs text-slate-500">Attendance Rate</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-amber-600">{totalManpower - totalPresent}</p>
          <p className="text-xs text-slate-500">Absent</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">Manpower Distribution</h3>
        <HorizontalBarChart data={manpowerData} />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Total</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Attendance %</th>
              </tr>
            </thead>
            <tbody>
              {manpowerData.map((m, i) => (
                <tr key={i}>
                  <td className="text-xs font-medium">{m.category}</td>
                  <td className="text-xs">{m.count}</td>
                  <td className="text-xs text-green-600 font-medium">{m.present}</td>
                  <td className="text-xs text-red-500">{m.count - m.present}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${(m.present / m.count) * 100}%` }}></div>
                      </div>
                      <span className="text-[10px]">{((m.present / m.count) * 100).toFixed(0)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ PORTFOLIO MODULE ============
function PortfolioModule() {
  const projects = [
    { name: "PKPL Electro-Mechanical", client: "Pakistan Petroleum Ltd", value: "$12.5M", progress: 34.2, status: "In Progress", color: "blue" },
    { name: "PGCB Grid Substation", client: "Power Grid Corp. Bangladesh", value: "$8.2M", progress: 0, status: "Pre-Award", color: "slate" },
    { name: "BPPL Gas Pipeline", client: "Bangladesh Petroleum", value: "$15.0M", progress: 0, status: "Bidding", color: "amber" },
    { name: "LNG Terminal Mech.", client: "Petronas LNG", value: "$22.0M", progress: 0, status: "Planning", color: "purple" },
    { name: "Oil & Gas Refinery", client: "Eastern Refinery Ltd", value: "$5.5M", progress: 0, status: "Proposal", color: "green" },
  ];

  const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
    slate: { bg: 'bg-slate-50', text: 'text-slate-600', badge: 'bg-slate-100 text-slate-700' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', badge: 'bg-amber-100 text-amber-700' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
    green: { bg: 'bg-green-50', text: 'text-green-600', badge: 'bg-green-100 text-green-700' },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Project Portfolio</h2>
          <p className="text-sm text-slate-500">All Projects Under Aristo Services Ltd</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">+ New Project</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-slate-800">{projects.length}</p>
          <p className="text-xs text-slate-500">Total Projects</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-blue-600">1</p>
          <p className="text-xs text-slate-500">Active</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-amber-600">3</p>
          <p className="text-xs text-slate-500">Pipeline</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
          <p className="text-2xl font-bold text-green-600">$63.2M</p>
          <p className="text-xs text-slate-500">Total Value</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((proj, i) => {
          const c = colorMap[proj.color] || colorMap.blue;
          return (
            <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 card-hover">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center`}>
                  <Building2 className={`w-5 h-5 ${c.text}`} />
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${c.badge} font-medium`}>{proj.status}</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-800 mb-1">{proj.name}</h4>
              <p className="text-xs text-slate-500 mb-3">{proj.client}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">{proj.value}</span>
                {proj.progress > 0 && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${proj.progress}%` }}></div>
                    </div>
                    <span className="text-[10px] font-medium">{proj.progress}%</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============ SHARED COMPONENTS ============
function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'Completed': 'bg-green-100 text-green-700',
    'In Progress': 'bg-blue-100 text-blue-700',
    'Delayed': 'bg-red-100 text-red-700',
    'Not Started': 'bg-slate-100 text-slate-500',
    'Active': 'bg-blue-100 text-blue-700',
    'Delivered': 'bg-green-100 text-green-700',
    'Partial Delivery': 'bg-amber-100 text-amber-700',
    'In Transit': 'bg-purple-100 text-purple-700',
    'In Stock': 'bg-green-100 text-green-700',
    'Fabrication': 'bg-amber-100 text-amber-700',
    'Ongoing Supply': 'bg-blue-100 text-blue-700',
    'Approved': 'bg-green-100 text-green-700',
    'Under Review': 'bg-amber-100 text-amber-700',
    'Rejected': 'bg-red-100 text-red-700',
    'Open': 'bg-red-100 text-red-700',
    'Closed': 'bg-green-100 text-green-700',
    'Mitigated': 'bg-blue-100 text-blue-700',
    'Monitoring': 'bg-amber-100 text-amber-700',
    'Operating': 'bg-green-100 text-green-700',
    'Standby': 'bg-blue-100 text-blue-700',
    'Maintenance': 'bg-amber-100 text-amber-700',
    'Pending': 'bg-amber-100 text-amber-700',
    'Submitted': 'bg-blue-100 text-blue-700',
  };

  return (
    <span className={`status-badge ${colors[status] || 'bg-slate-100 text-slate-600'}`}>
      {status}
    </span>
  );
}

function KPICard({ title, value, subtitle, trend, trendValue, color, icon: Icon }: {
  title: string; value: string; subtitle: string; trend: string; trendValue: string; color: string; icon: React.ComponentType<any>;
}) {
  const colorClasses: Record<string, { text: string; icon: string }> = {
    red: { text: 'text-red-600', icon: 'text-red-500' },
    amber: { text: 'text-amber-600', icon: 'text-amber-500' },
    blue: { text: 'text-blue-600', icon: 'text-blue-500' },
    green: { text: 'text-green-600', icon: 'text-green-500' },
  };

  const c = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 card-hover">
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-5 h-5 ${c.icon}`} />
        <div className={`flex items-center gap-0.5 text-[10px] ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-500'}`}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : trend === 'down' ? <ArrowDownRight className="w-3 h-3" /> : null}
          {trendValue}
        </div>
      </div>
      <p className={`text-xl font-bold ${c.text}`}>{value}</p>
      <p className="text-[10px] text-slate-500 mt-0.5">{subtitle}</p>
      <p className="text-[10px] text-slate-400">{title}</p>
    </div>
  );
}
