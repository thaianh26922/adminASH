import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import ManageProduct from '../component/ManageProduct/ManageProduct';
import ManageHuman from '../component/ManageHuman/ManageHuman';
import ManageMachines from '../component/ManageMachines/ManageMachines';
import ManageContrast from '../component/ManageContrast/ManageContrast';
import ManageProfit from '../component/ManageProfit/ManageProfit';
import ManageSupplier from '../component/ManageSupplier/ManageSupplier';
import ManageWebsite from '../component/ManageWebsite/ManageWebsite';
import ProductList from '../component/ProductList/ProductList';
import ProductUpdate from '../component/ProductUpdate/ProductUpdate';
import ManageOrder from '../component/ManageOrder/ManageOrder';
import ImportProduct from '../component/ProductList/ImportProduct';
import SupplierManagement from '../component/Supplier/SupplierManagement';
import EmployeeManagement from '../component/ManageHuman/EmployeeManagement';
import ServiceManagement from '../component/ManageService/ServiceManagement';
import FeedbackDetail from '../component/ManageFeedback/FeedbackDetail';
import Invoice from '../component/ManageOrder/Invoice';


export default function ListRouter() {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/manageProduct' element={<ManageProduct />} />
                <Route path='/manageProductDetail/:pid' element={<ProductList />} />
                <Route path='/import' element={<ImportProduct />} />   {/*Impor san pham */}
                <Route path='/manageProductUpdate/:pid' element={<ProductUpdate />} />
                <Route path='/manageOrder' element={<ManageOrder />} />
                <Route path='/supplier' element={<SupplierManagement />} />
                <Route path='/employee' element={<EmployeeManagement />} />
                <Route path='/service' element={<ServiceManagement />} />
                <Route path='/feedback' element={<FeedbackDetail />} />
                <Route path='/feedback' element={<FeedbackDetail />} />
                <Route path='/invoice' element={<Invoice />} />
                <Route path='/manageHuman' element={<ManageHuman />} />
                <Route path='/manageMachines' element={<ManageMachines />} />
                <Route path='/manageContrast' element={<ManageContrast />} />
                <Route path='/manageProfit' element={<ManageProfit />} />
                <Route path='/manageSupplier' element={<ManageSupplier />} />
                <Route path='/manageWebsite' element={<ManageWebsite />} />
            </Route>

        </Routes>
    )
}
