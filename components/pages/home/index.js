import React from "react";
import WithLayout from "../../layouts";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { graphql } from "react-apollo";
import style from "./style.css";
import { LinearProgress, Grid } from "@material-ui/core";
import Brand from "../../commons/Brand";
import Carousel from "../../commons/Carousel";
import { SLIDER } from "../../../data";

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
  const carousel = SLIDER;
  if (error) return `Error! ${error.message}`;
  return (
    <WithLayout headerColor="#afd3db">
      <Grid container>
        <Grid sm={12} lg={12}>
          <div className="div-slider">
            <Carousel data={SLIDER} />
          </div>
        </Grid>
        <Grid sm={12} lg={12} className="list-product" item>
          {loading ? (
            <LinearProgress />
          ) : (<Brand  data={data.getBrandList}/>
          )}
        </Grid>
      </Grid>
    </WithLayout>
  );
};

export default Component;
