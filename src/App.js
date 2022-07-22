import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
import { Navbar, Footer, Sidbar, ThemeSetings } from './components';
import { Ecommerce, Employees, Orders, Customers, Calender, Kanban, Editor, Colorpicker, Line, Area, Bar, Pie, Financial, ColorMaping, Pyramid, Stacked, } from './pages';
import { useSateContext } from './context/ContextProvider'
function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useSateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''} >
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg ">
          <div className="fixed right-4  bottom-4 " style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => { setThemeSettings(true) }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidbar />
            </div>
          ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidbar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSetings />}
              <Routes>
                {/* Dashbord */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/eCommerce" element={<Ecommerce />} />
                {/* pages */}
                <Route path="/employees" element={<Employees />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                {/* App */}
                <Route path="/calendar" element={<Calender />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<Colorpicker />} />
                {/* charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMaping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div >
      </BrowserRouter>
    </div>
  );
}

export default App;
