import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getActivities, filterByActivity } from "../../Redux/actions/actions.js";
function Activity({ filterByActivity, getActivities, activities }) {
  useEffect(() => {
    getActivities();
  },[]);
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      filterByActivity(e.target.value);
    }
  };
  return (
    <div>
      <select name="Activities" onChange={handleChange}>
        <option value="">Activities</option>
        {activities.map((a, i) => {
          return (
            <option key={i} value={a}>
              {a}
            </option>
          );
        })}
      </select>
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
