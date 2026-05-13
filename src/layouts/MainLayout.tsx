import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: <DashboardIcon className="h-5 w-5" />, path: '/dashboard' },
  { label: 'Users', icon: <PeopleIcon className="h-5 w-5" />, path: '/users' },
  { label: 'Reports', icon: <BarChartIcon className="h-5 w-5" />, path: '/reports' },
  { label: 'Settings', icon: <SettingsIcon className="h-5 w-5" />, path: '/settings' },
];

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

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
                onClick={() => handleMenuClick(item.path)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
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
                <button 
                  aria-label="Open sidebar menu" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
                >
                  <MenuIcon className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-sm font-medium text-slate-500">Welcome back,</p>
                  <h1 className="text-xl font-semibold text-slate-900">Admin Panel</h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Notifications
                </button>
                <button 
                  onClick={handleLogout}
                  aria-label="Log out" 
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm transition hover:bg-slate-800"
                >
                  <LogoutIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 md:px-6">
            {children || <Outlet />}
          </main>

          <footer className="border-t border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 md:px-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Web1 Project. All rights reserved.</p>
              <p>Built with Tailwind CSS and MUI Icons.</p>
            </div>
          </footer>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div className="w-72 flex-col border-r border-slate-200 bg-white p-6">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.path)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;