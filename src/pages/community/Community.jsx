import React from 'react'
import Posts from '../../components/posts/posts'
import Share from '../../components/share/Share'
import './community.scss'
function Community() {
  return (
    <div className='social'>
        <Share/>
        <Posts/>
        </div>
  )
}

export default Community