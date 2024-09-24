import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ModalAddProducto } from './Inventory/Inventario/Components/ModalAddProducto'
import { ModalAddUser } from './Segurity/Users/Components/ModalAddUser'
import { ModalPermisos } from './Segurity/Users/Components/ModalPermisos'
import { ModalUpdateUser } from './Segurity/Users/Components/ModalUpdateUser'
import { ModalAddCategoria } from './Inventory/Categoria/Components/ModalAddCategoria'
import { ModalUpdateCategoria } from './Inventory/Categoria/Components/ModalUpdateCategoria'
import { ModalAddMarca } from './Inventory/Marca/Components/ModalAddMarca'
import { ModalUpdateMarca } from './Inventory/Marca/Components/ModalUpdateMarca'
import { ModalAddDistribuidor } from './Inventory/Distribuidor/Components/ModalAddDistribuidor'
import { ModalUpdateDistribuidor } from './Inventory/Distribuidor/Components/ModalUpdateDistribuidor'
import { ModalAddPaisDeOrigen } from './Inventory/PaisDeOrigen/Components/ModalAddPaisDeOrigen'
import { ModalUpdatePaisDeOrigen } from './Inventory/PaisDeOrigen/Components/ModalUpdatePaisDeOrigen'
import { ModalLotes } from './Inventory/Inventario/Components/ModalLotes'
import { ModalDetalleVenta } from './Ventas/Components/ModalDetalleVenta'
import { ModalAddVenta } from './Ventas/Components/ModalAddVenta'
import { ModalVencimiento } from './Ventas/Components/ModalVencimiento'

export const Modals = () => {
  return (
    <>
      <ModalAddProducto />
      <ModalAddUser />
      <ModalPermisos />
      <ModalUpdateUser />
      <ModalAddCategoria />
      <ModalUpdateCategoria />
      <ModalAddMarca />
      <ModalUpdateMarca />
      <ModalAddDistribuidor />
      <ModalUpdateDistribuidor />
      <ModalAddPaisDeOrigen />
      <ModalUpdatePaisDeOrigen />
      <ModalLotes />
      <ModalDetalleVenta />
      <ModalAddVenta />
      <ModalVencimiento />
    </>
  )
}
