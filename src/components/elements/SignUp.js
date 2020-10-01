import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SignUp extends Component {

	render() {
		return (
			<div className={`mailing-list`}>
				<div className="wrapper">
					Get notified about the new assets and tutorials:
				{/* MailChimp */}
					<form action="https://playmirage.us7.list-manage.com/subscribe/post?u=0f23c7984541d915d1108a16e&amp;id=22b9dcc98a" method="post">
						<input type="email" name="EMAIL" className="form-control-cta"
							placeholder="Enter your email..." />
						{/* Antibot */}
						<div className="mailchimp-pixel" aria-hidden="true">
							<input type="text" name="b_0f23c7984541d915d1108a16e_22b9dcc98a"
								tabIndex="-1" defaultValue="" />
						</div>
						{/* Subscribe button */}
						<button className="btn-subscribe btn-cta" type="submit">
							Subscribe
	      </button>
						{/* <a className="btn-square btn-cta" href="https://rpgadventures.io/rss.xml">
						<FontAwesomeIcon icon={["fas", "rss"]} />
					</a>
					<a className="btn-square btn-cta" href="https://discord.gg/MtBB8TV">
						<FontAwesomeIcon icon={["fab", "discord"]} />
					</a> */}
						<div className="clearfix" />
					</form>
				</div>
			</div>
		)
	}
}

export default SignUp
