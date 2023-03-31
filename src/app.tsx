import type { Component } from 'solid-js';
import { Link, useRoutes, useLocation, Routes, Route } from '@solidjs/router';

import Home from './pages/home';
import NotFound from './errors/404';

const App: Component = () => {
  const location = useLocation();


  return (
    <>
      {/* <nav class="bg-gray-200 text-gray-900 px-4">
       <ul class="flex items-center">
         <li class="py-2 px-4">
           <Link href="/" class="no-underline hover:underline">
             Home
           </Link>
         </li>
         <li class="py-2 px-4">
           <Link href="/about" class="no-underline hover:underline">
             About
           </Link>
         </li>
         <li class="py-2 px-4">
           <Link href="/error" class="no-underline hover:underline">
             Error
           </Link>
         </li>

         <li class="text-sm flex items-center space-x-1 ml-auto">
           <span>URL:</span>
           <input
             class="w-75px p-1 bg-white text-sm rounded-lg"
             type="text"
             readOnly
             value={location.pathname}
           />
         </li>
       </ul>
      </nav> */}

       <main>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/**" component={NotFound} />
      </Routes>
      </main>
    </>
  );
};

export default App;
