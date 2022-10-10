import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import SignIn from '../components/Signin';
import { useState } from 'react';
import { useAuth } from '../contexts/auth';
import userResource from '../hooks/userResource';

export default function Home() {
    const [stands, setStands] = useState('');
    // const { user, login, logout } = useAuth();
    const {resources, loading, createResource, deleteResource } = userResource();

    function createStandHandler(event) {
        event.preventDefault();
        const standObj = {
            id: stands.length + 1,
            location: event.target.location.value,
            minCustomers: parseInt(event.target.min.value),
            maxCustomers: parseInt(event.target.max.value),
            avgCookies: parseInt(event.target.avg.value),
            hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        };

        setStands([...stands, standObj]);
        event.target.reset();
    }

    function handleClick(event) {
        event.preventDefault();
        login(event.target.username.value, event.target.password.value)
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header logout={logout} />
            {user ? (
                <main className='bg-emerald-50 p-8 flex flex-col items-center space-y-8'>
                    <CreateForm onSubmit={createStandHandler} />
                    <ReportTable stands={stands} />
                </main>
            ) : (
                <main>
                    <SignIn handleClick={handleClick} />
                </main>
            )
            }
            <Footer stands={stands.length} />
        </div>
    );
}