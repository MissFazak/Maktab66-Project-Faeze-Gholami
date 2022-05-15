import React from 'react'
import { useSelector } from 'react-redux'

export default function ProtectedRoute(props) {
    const state = useSelector(state=>state)
  return (
    <div>ProtectedRoute</div>
  )
}
