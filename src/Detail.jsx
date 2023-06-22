/* eslint-disable react/prop-types */
export default function Detail(props) {
    return (
        <section className="details">
            <img className="shadow" src={props.img} alt="flag" />
            <h1>{props.name}</h1>
            <ul>
                <li><span>native name:</span> {props.native}</li>
                <li><span>popultaion:</span> {props.population}</li>
                <li><span>region:</span> {props.region}</li>
                <li><span>sub region:</span> {props.sub}</li>
                <li><span>capital:</span> {props.capital}</li>
            </ul>
            <ul>
                <li><span>top level domain:</span> {props.tld}</li>
                <li><span>currencies:</span> {props.currencies}</li>
                <li><span>languages:</span> {props.languages}</li>
            </ul>
            <section>
                <h2>border countries</h2>
                <ul>{props.borders}</ul>
            </section>
        </section>
    )
}