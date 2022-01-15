import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  getActivities,
  filterByActivity,
} from "../../Redux/actions/actions.js";
const Select = styled.select`
  width: 180px;
  height: 40px;
  background-color: rgb(0, 20, 39);
  font-size: 16px;
  padding-left: 5px;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    border-bottom: 3px solid rgb(141, 8, 1);
  }
`;

function Activity({ filterByActivity, getActivities, activities }) {
  useEffect(() => {
    getActivities();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      filterByActivity(e.target.value);
    }
  };
  return (
    <div>
      <Select name="Activities" onChange={handleChange}>
        <option value="">Activities</option>
        {activities.map((a, i) => {
          return (
            <option key={i} value={a}>
              {a}
            </option>
          );
        })}
      </Select>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    activities: state.activities,
  };
}
export default connect(mapStateToProps, {
  filterByActivity,
  getActivities,
})(Activity);
