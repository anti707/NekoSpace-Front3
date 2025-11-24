import { lazy } from 'react';

// Lazy loading hace que cargue las páginas solo cuando se necesitan
const Home = lazy(() => import('../pages/homeUser'));
const Login = lazy(() => import('../pages/Login'));
const CreateUser = lazy(() => import('../pages/create-user'));
const HomeAdmin = lazy(() => import('../pages/homeAdmin'));
const Homeauth = lazy(() => import('../pages/Homeauth'));
const Contacto = lazy(() => import('../pages/Contacto'));

// Rutas públicas / usuario
const userRoutes = [
  { path: '/', element: <Home />, showNavbar: true },
  { path: '/login', element: <Login />, showNavbar: false },
  { path: '/create-user', element: <CreateUser />, showNavbar: false },
  { path: '/contacto', element: <Contacto />, showNavbar: true },
];

// Rutas del administrador
const adminRoutes = [
  { path: '/admin/dashboard', element: <HomeAdmin />, isAdmin: true, showNavbar: true },
];

// Ruta 404 (fallback)
const notFoundRoute = {
  path: '*',
  element: <div style={{ padding: 24 }}>404 — Página no encontrada</div>,
  showNavbar: false,
};

// Exportar arreglo completo de rutas
export const appRoutes = [...userRoutes, ...adminRoutes, notFoundRoute];