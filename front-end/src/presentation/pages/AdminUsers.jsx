import React from 'react';
import LayoutPage from '../layout/LayoutPage';
import HeaderAdmin from '../components/header/HeaderAdmin';
import AdminRegister from '../components/cards/AdminRegister';

export default function AdminUsers() {
  return (
    <LayoutPage>
      <section>
        <HeaderAdmin />
        <AdminRegister />
      </section>
    </LayoutPage>
  );
}
