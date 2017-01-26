import React, { Component } from 'react'
import styles from './SNSX.css'
import CSSModules from 'react-css-modules'

import Triangle from './Triangle'

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {
  render() {
    return (
      <div styleName='Wrapper'>
        <div styleName='Column'>
          <p styleName='Heading'>SNSX</p>
        </div>
        <div styleName='Column'>
          <Triangle />
        </div>
        <div styleName='ColumnLast'>
          <p styleName='SubHeading'>Social Netball</p>
          <img styleName='Netball' src='http://i.imgur.com/iHVkevD.png' />
          <p styleName='SubHeading'>Sexual Experience</p>
        </div>
      </div>
    )
  }
}
