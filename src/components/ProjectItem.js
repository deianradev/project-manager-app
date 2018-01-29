import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }
    render() {
        return (

            <li className="list-group-item clearfix">
                <strong>{this.props.project.title}</strong>: {this.props.project.category}
                <span className="float-right button-group">
                    {/* <a href="/admin/userA" className="btn btn-primary"><span className="glyphicon glyphicon-edit"></span> Edit</a> */}
                    {/* <button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span> Delete</button> */}
                    <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)} className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span> Delete</a>
                </span>
            </li>


            // <div className="row">
            // <div className="list-group-item">
            //     <div className="column-sm-9">
            //         <p>
            //             <strong>{this.props.project.title}</strong>: {this.props.project.category}
            //         </p>
            //     </div>
            //     </div>
            //     <div className="column-sm-3">
            //         <button type="button" className="btn btn-danger" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
            //     </div>
            // </div>

        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}

export default ProjectItem;