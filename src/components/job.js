import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural } from "react-intl";

export default class Job extends React.Component {
  render() {
	  const m = this.props.intl === "es-ES" ? "millón" : "million";
	  const ms = this.props.intl === "es-ES" ? "millones" : "millions";
    return (
      <tr>
        <th scope="row">{this.props.offer.id}</th>
        <td>{this.props.offer.name}</td>
        <td>{this.props.offer.company}</td>
        <td>
          {this.props.offer.salary + " "}
          <FormattedPlural
            value={this.props.offer.salary}
            one={m}
            other={ms}
          />
        </td>
        <td>{this.props.offer.city}</td>
        <td>
          <FormattedDate
            value={new Date(this.props.offer.date)}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </td>
        <td>
          <FormattedNumber value={this.props.offer.visits} />
        </td>
      </tr>
    );
  }
}
