import { lazy } from 'react';

// Lazy loading hace que cargue las páginas solo cuando se necesitan
const Home = lazy(() => import('../pages/homeUser'));
const Login = lazy(() => import('../pages/Login'));
const CreateUser = lazy(() => import('../pages/create-user'));
const HomeAdmin = lazy(() => import('../pages/homeAdmin'));

// Rutas públicas o del usuario, así están mejor organizadas
const userRoutes = [
  { path: '/', element: <Home />, showNavbar: true },
  { path: '/Login', element: <Login />, showNavbar: false },
  { path: '/create-user', element: <CreateUser />, showNavbar: false },
];

// Rutas del administrador 
const adminRoutes = [
  { path: '/admin/dashboard', element: <HomeAdmin />, isAdmin: true },
];

// Exportar todas las rutas en un solo arreglo, hell yeah
export const appRoutes = [...userRoutes, ...adminRoutes, notFoundRoute];