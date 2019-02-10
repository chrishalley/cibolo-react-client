import React from 'react'

import FormSectionGroup from './Group/Group'

import styles from './Section.module.css'

const FormSection = ({ sectionConfig }) => {
  // console.log('sectionProps: ', sectionConfig)
  const { title, fieldGroups } = sectionConfig
  const renderFieldGroups = () => {
    return fieldGroups.map(group => {
      // console.log('group: ', group)
      return (
        <FormSectionGroup groupConfig={group} key={group.id}></FormSectionGroup>
      )
    })
  }

  return (
    <div className="form-section">
      <h2 className={styles['section-title']}>{title}</h2>
      <section className={styles.section}>{renderFieldGroups()}</section>
    </div>
  )
}

export default FormSection