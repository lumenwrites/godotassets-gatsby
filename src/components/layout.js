import React from "react"


import "../styles/style.scss"

import ReactTooltip from "react-tooltip"

import Header from "./header"

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import Modal from './elements/Modal'

const Layout = ({ location, children, subnav, footer }) => {
	return (
		<>
			<Header />
			{subnav}
			<main className={subnav ? "has-subnav" : ""}>
				<div className="wrapper">{children}</div>
			</main>
			{footer}
			<Modal name="about">
				<div><h1> What is this? </h1>
					<hr />
					<p>Hi! This project is under development, very early version. In the future, it is going to be
					a place where you can buy and sell Godot assets.</p>
					<p>Meanwhile, I am sharing here some of the
						 assets I have made, for free. I hope you will find them useful.</p>
					<p>If you're interested in selling your godot assets, or have any questions/comments about this project,
						 feel free to message me at <b>mike@godotassets.io</b>.</p>
					<p>Subscribe to the newsletter to get notified when the marketplace will be open to the sellers.</p></div>
			</Modal>
			<ReactTooltip className="react-tooltip center-text" type="dark" effect="solid" delayShow={0} html={true} />
		</>
	)
}

export default Layout
