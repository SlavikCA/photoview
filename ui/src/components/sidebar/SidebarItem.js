import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ItemName = styled.div`
  display: inline-block;
  width: 100px;
  font-weight: 600;
  font-size: 12px;
  color: #888;
  text-align: right;
  margin-right: 8px;
`

const ItemValue = styled.div`
  display: inline-block;
`

const SidebarItem = ({ name, value }) => (
  <div>
    <ItemName>{name}</ItemName>
    <ItemValue>{value}</ItemValue>
  </div>
)

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
}

export default SidebarItem
