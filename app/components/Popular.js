var React = require('react');
var PropTypes = require('prop-types');

class SelectLanguage extends React.Component {
    render () {
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <ul className='languages'>
                {/*<p>Selected Language: {this.props.selectedLanguage}</p>*/}
                {languages.map(lang => {
                    return (
                        <li
                            style={lang === this.props.selectedLanguage ? {color: '#d0021b'}: null}
                            onClick={this.props.onSelect.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(_ => {
            return {
                selectedLanguage: lang
            }
        });
    }
    render() {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
            </div>

        )
    }
}

module.exports = Popular;
