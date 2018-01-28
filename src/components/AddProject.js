import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories: ['web design', 'web development', 'mobile development']
    }
    handleSubmit(e) {
        if (!this.refs.title.value) {
            alert('title is required')
        } else {
            this.setState({
                newProject: {
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            },
                () => this.props.addProject(this.state.newProject)
            )
        }
        e.preventDefault();
    }
    render() {
        let categoryOptions = this.props.categories.map((category, i) => {
            return <option key={i} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <br />
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        );
    }
}

AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject;