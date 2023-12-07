import React from 'react'
import './prevent.css'
// import './prevent.scss' TODO
const prevent = () => {
  return (
<body>
    <header>
        <h1 className='prevent-title'></h1>
    
    </header>
        <div className='content'>
            <p className='text-content'></p>
            <img src="https://picsum.photos/200/300" alt="" />
        </div>

        <div className='content-2'>
            <p className='text-content'></p>
            <img src="https://picsum.photos/300/400" alt="" />
        </div>
</body>
)
}

export default prevent