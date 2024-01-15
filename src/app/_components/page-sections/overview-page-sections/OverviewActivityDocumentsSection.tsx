import LearningActivity from '@components/learning-activity/LearningActivity'
import LearingDocuments from '@components/learning-documents/LearingDocuments'
import React from 'react'

const OverviewActivityDocumentsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2 ">
            <LearningActivity />
          </div>
          <div className="col-span-1 ">
            <LearingDocuments />
          </div>
        </div>
  )
}

export default OverviewActivityDocumentsSection