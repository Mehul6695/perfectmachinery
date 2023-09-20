import React from 'react'

import AdminDashbordApp from './AdminDashbordApp'
import AdminNavApp from './AdminNavApp'
import AdminSidbarApp from './AdminSidbarApp'
import AdminfooterApp from './AdminfooterApp'

export default function AdminLayout() {
    return (
       
        <div>
        <AdminNavApp />
        <div className='row admin-main'>
            <div className='col-md-3'>
        <AdminSidbarApp />  

            </div>
            <div className='col-md-8 mt-5'>
         
            <AdminDashbordApp />
            <AdminfooterApp />
            </div>
        </div>
    </div>
    )
}
