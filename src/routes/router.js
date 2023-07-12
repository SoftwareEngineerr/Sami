import { Navigate , Outlet } from 'react-router-dom'

//pages
import { Home } from '../veiws/home/home'

// Layout
import { Header } from '../layout/full/header/veiw'
import { Footer } from '../layout/full/footer/veiw'

export const Router = [
    {
        path: '/',
        element: <>
                <Header /><Outlet /><Footer />
            </>,
        children:[
            {path:'/' , element:<Navigate to="/home" />},
            {path:'/home', element:<Home />}
        ]
    }
]