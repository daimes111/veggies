const React = require('react')

class Index extends React.Component {
    render () {
        const {veggies} = this.props
        return (
            <div>
                <h1>Veggies Index Page</h1>
                <nav>
                    <a href="/veggies/new">Create a New Veggie</a>
                </nav>
                <ul>
                    {veggies.map((veggie) => {
                        const {name, type, fav, _id} = veggie
                        return (
                            <li key={_id}>
                                The{' '} <a href={`/veggies/${_id}`}>{name}</a> {' '} is a {type} <br />
                                {fav? 'I very much enjoy this veggie':'I do not like this vegetable!'}
                                <form method="POST" action={`/veggies/${_id}?_method=DELETE`}>
                                    <input type="submit" value={`Delete ${type} ${name}`} />
                                </form>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index