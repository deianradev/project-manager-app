import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './components/Projects';
import AddProject from './components/AddProject';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [{
        title: 'business website',
        category: 'web design'
      },
      {
        title: 'mobile app',
        category: 'mobile development'
      },
      {
        title: 'ecommerce shopping cart',
        category: 'web development'
      }]
    });
  }
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id == id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }
  render() {
    return (
      <div className="container">
        <AddProject addProject={(e) => this.handleAddProject(e)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
