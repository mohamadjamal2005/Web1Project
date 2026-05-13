import type { ReactNode } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

interface MainLayoutProps {
  children?: ReactNode;
}

const menuItems = [
  { label: 'Dashboard', icon: <DashboardIcon className="h-5 w-5" /> },
  { label: 'Users', icon: <PeopleIcon className="h-5 w-5" /> },
  { label: 'Reports', icon: <BarChartIcon className="h-5 w-5" /> },
  { label: 'Settings', icon: <SettingsIcon className="h-5 w-5" /> },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white p-6 md:flex">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
              W
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700">Web1 Project</p>
              <p className="text-xs text-slate-500">Admin workspace</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-3xl bg-slate-50 px-4 py-4 text-slate-700">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Quick access</p>
            <p className="mt-2 text-sm">Manage users, reports and settings from one place.</p>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-4 py-4 shadow-sm md:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button aria-label="Open sidebar menu" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden">
                  <MenuIcon className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-sm font-medium text-slate-500">Welcome back,</p>
                  <h1 className="text-xl font-semibold text-slate-900">Dashboard overview</h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Notifications
                </button>
                <button aria-label="Log out" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm transition hover:bg-slate-800">
                  <LogoutIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 md:px-6">
            {children ?? <DashboardContent />}
          </main>

          <footer className="border-t border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 md:px-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Web1 Project. All rights reserved.</p>
              <p>Built with Tailwind CSS and MUI Icons.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Revenue</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">$98,400</p>
            </div>
            <span className="inline-flex items-center rounded-2xl bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
              +12.4%
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {['Sales', 'Customers', 'Growth'].map((metric) => (
              <div key={metric} className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{metric}</p>
                <p className="mt-3 text-xl font-semibold text-slate-900">{metric === 'Sales' ? '$24.8k' : metric === 'Customers' ? '1.2k' : '8.9%'}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-rows-[auto_1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Active users</p>
            <div className="mt-4 text-3xl font-semibold text-slate-900">3,248</div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Server uptime</p>
            <div className="mt-4 text-3xl font-semibold text-slate-900">99.97%</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-base font-semibold text-slate-900">Sales breakdown</h2>
          <p className="mt-3 text-sm text-slate-500">Weekly performance across channels.</p>
          <div className="mt-6 space-y-4">
            {['Online', 'In-store', 'Partnerships'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-700">{item}</p>
                <span className="text-sm font-semibold text-slate-900">{item === 'Online' ? '$42k' : item === 'In-store' ? '$18k' : '$12k'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-base font-semibold text-slate-900">Active projects</h2>
          <ul className="mt-5 space-y-4">
            {['Project Phoenix', 'Marketing refresh', 'Mobile redesign'].map((project) => (
              <li key={project} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-medium text-slate-800">{project}</p>
                <p className="mt-1 text-sm text-slate-500">In progress</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-base font-semibold text-slate-900">Team status</h2>
          <p className="mt-3 text-sm text-slate-500">Checklist for this week.</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            {['Design review', 'Frontend deploy', 'QA validation'].map((task) => (
              <li key={task} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainLayout;