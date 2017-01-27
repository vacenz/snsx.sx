import React, { Component } from 'react'
import styles from './SNSX.css'
import CSSModules from 'react-css-modules'

import Triangle from './Triangle'

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {
  render() {
    return (
      <div styleName='Wrapper'>
        <div styleName='ColumnForum'>
          <a styleName='Forum' href='http://n4m.snsx.sx'>SNSX Forum</a>
        </div>
        <div styleName='ColumnHeading'>
          <p styleName='Heading'>SNSX</p>
          <p styleName='Description'>
            Social Netball Sexual Experience is Airknight and Apple McStrudel escaped from the wreckage of Social Netball 🏐🏐🏐 with a
            clear goal, to play some rocking tunes and avoid any big boom booms.
            With influences as varied as The Anniversary and The Lemonheads this new sound is set
            to put your speakers into sensual overdrive 🎹🎹🎹
          </p>
        </div>
        <div styleName='ColumnTriangle'>
          <Triangle />
        </div>

        <div styleName='ColumnEmbedPlace' />

        <div styleName='ColumnEmbed'>
          <iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304780277&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
        </div>
      </div>
    )
  }
}
