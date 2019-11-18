import React from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";

import { injectIntl } from "react-intl";

class JobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intl: props.intl.locale,
      offers: [
        {
          id: "0001",
          name: "Manager",
          company: "Schneider Electric",
          salary: 4.5,
          city: "Bogotá, Colombia",
          date: "2019-03-26",
          visits: 2649
        },
        {
          id: "0002",
          name: "Software Engineer",
          company: "Google Inc.",
          salary: 20,
          city: "Palo Alto, CA, USA",
          date: "2019-03-27",
          visits: 64
        },
        {
          id: "0003",
          name: "Nurse",
          company: "Clínica La Aurora",
          salary: 1,
          city: "Cali, Colombia",
          date: "2019-03-28",
          visits: 75098
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead
            className={
              this.state.intl === "es-ES" ? "thead-light" : "thead-dark"
            }
          >
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Position" />
              </th>
              <th scope="col">
                <FormattedMessage id="Company" />
              </th>
              <th scope="col">
                <FormattedMessage id="Salary" />
              </th>
              <th scope="col">
                <FormattedMessage id="City" />
              </th>
              <th scope="col">
                <FormattedMessage id="PulibicationDate" />
              </th>
              <th scope="col">
                <FormattedMessage id="Visits" />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.offers.map((e, i) => (
              <Job intl={this.state.intl} key={i} offer={e} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default injectIntl(JobsList);
