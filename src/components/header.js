import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Header = () => {
	return (<StaticQuery
		query={graphql`
	      query {
					logo: file(relativePath: { eq: "images/logo2.png" }) {
						name
						childImageSharp {
							fixed(width: 40) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
	      }
	    `}
		render={data => (
			<header>
				<div className="wrapper">
					<Link to="/" className="logo">
						{/* <img src={logoImage} />  */}
						<Img className="logo-image"
							alt={data.logo.name}
							fixed={data.logo.childImageSharp.fixed} />
						<span className="godot">godot</span>assets
		      </Link>
					<div className="right">
						{/* <div className="btn" onClick={() => this.props.toggleModal("help")}>
							<FontAwesomeIcon icon={["fas", "question-circle"]} />
						</div> */}
						{/* 
						<Link to="/" className="btn">
							Assets
			  		</Link>
						<Link to="/" className="btn">
							Tutorials
			  		</Link>
						<Link to="/" className="btn">
							Services
			  		</Link>
						<Link to="/portfolio" className="btn">
							Jobs
			  		</Link>
 */}
						{/* <div className="dropdown">
							<div className="menu-handle btn">Resources</div>
							<div className="menu left">
								<Link to="/writers-room" className="item btn">
									Writer's Room
				  			</Link>
								<Link to="/adventure-writing-guide" className="item btn">
									Adventure Design
				  			</Link>
								<Link to="/prompts" className="item btn">
									Prompts
				  			</Link>
							</div>
						</div> */}

					</div>
					{/* End right */}
					<div className="clearfix" />
				</div>
				{/* End main wrapper */}
			</header>
		)}
	/>
	)
}

export default Header

