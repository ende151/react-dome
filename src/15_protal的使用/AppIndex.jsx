
import React, { PureComponent } from 'react'
import { createPortal  } from 'react-dom'

export class AppIndex extends PureComponent {
  render() {
    return (
        <div>我是poatel
            {
                createPortal(<div>我是独立的</div>,document.querySelector('#model') )
            }
      </div>
    )
  }
}

export default AppIndex
