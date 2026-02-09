import React from 'react'
import "./doc.scss"

const Doc = () => {
  return (
    <div className='doc'>
      <div className='icon github'><img src="/doc-icons/github.svg" alt="github icon" /></div>
      <div className='icon note'><img src="/doc-icons/note.svg" alt="note icon" /></div>
      <div className='icon pdf'><img src="/doc-icons/pdf.svg" alt="pdf icon" /></div>
      <div className='icon calender'><img src="/doc-icons/calender.svg" alt="calender icon" /></div>
      <div className='icon spotify'><img src="/doc-icons/spotify.svg" alt="spotify icon" /></div>
      <div className='icon mail'><img src="/doc-icons/mail.svg" alt="mail icon" /></div>
      <div className='icon link'><img src="/doc-icons/link.svg" alt="link icon" /></div>
      <div className='icon cli'><img src="/doc-icons/cli.svg" alt="cli icon" /></div>
    </div>
  )
}

export default Doc