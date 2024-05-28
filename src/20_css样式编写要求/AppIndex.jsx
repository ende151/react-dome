import React, { PureComponent } from 'react'
// import APP from './01_内联样式//App'    // 内联样式
// import APP from './02_普通的css样式/App'
// import APP from './03_CSS_module/App'
import APP from './04_css_in_js写法/App'

export class AppIndex extends PureComponent {
  render() {
    return (
      <div>
        <APP />
      </div>
    )
  }
}

export default AppIndex
