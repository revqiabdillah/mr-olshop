import React from "react";
import WithLayout from "../../layouts";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { graphql } from "react-apollo";
import LinearProgress from "@material-ui/core/LinearProgress";
import Brand from '../../commons/Brand'

const Component = () => {
  const query = gql`
    query {
      getBrandList {
        name
        attribute_id
        logo
        sort_order
      }
    }
  `;
  const { loading, error, data } = useQuery(query);
  if (loading) return <LinearProgress />;
  if (error) return `Error! ${error.message}`;
  return (
    <WithLayout headerColor="#afd3db">
        <Brand />
      <div>
        {data.getBrandList.map(item => (
          <p key={item.attribute_id}>{item.name}</p>
        ))}
      </div>
    </WithLayout>
  );
};

export default Component
