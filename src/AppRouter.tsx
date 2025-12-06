import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import AccountDeletionPage from './Pages/AccountDeletionPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsPage from './Pages/TermsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: 'account-deletion',
                element: <AccountDeletionPage />,
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicyPage />,
            },
            {
                path: 'terms-and-condition',
                element: <TermsPage />,
            },
        ],
    },
]);

const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default AppRouter;
