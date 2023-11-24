class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ` # Header
## sub heading 
This is the link : [links](https://www.freecodecamp.org)
code can be inserted like this : \`<div></div>\`.Or this way :
\`\`\`
function myFunc() {
  return answer
}
\`\`\`
list: 
- item 1
- item 2
- item 3

> Something wise
**and next, the logo**
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`,
      previous: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
    this.setState({
      previous: this.state.input,
    });
  }

  render() {
    marked.setOptions({
      breaks: true,
    });
    return (
      <div className="big-box">
        <div className="box1">
          <div className="editor-title">Editor</div>
          <textarea
            id="editor"
            onChange={this.handleChange}
            value={this.state.input}
          ></textarea>
        </div>
        <div className="box2">
          <div className="preview-title">Preview</div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked.parse(this.state.input) }}
          ></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("machine-app"));
