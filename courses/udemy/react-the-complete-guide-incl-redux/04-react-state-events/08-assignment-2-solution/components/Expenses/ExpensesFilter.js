import './ExpensesFilter.css';

const ExpensesFilter = props => {
  const selectChangeHandler = e => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter by year</label>
        <select
          name=""
          id=""
          value={props.selected}
          onChange={selectChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
