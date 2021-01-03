import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Stuff I Make.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
               <h3>
                 <a href="https://time-stuff.herokuapp.com/">TimeStuff</a> :
                 I am constantly brewing tea/coffee in my office or have dinner baking in the oven, so I created a custom timer for myself!
                 </h3> 
                 <h3>
                 <a href="">Scrum Experiment: Get Stuff Done</a> :
                 I am constantly brewing tea/coffee in my office or have dinner baking in the oven, so I created a custom timer for myself!
                 </h3> 
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
