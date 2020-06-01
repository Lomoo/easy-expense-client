import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const IconBox = styled.span.attrs({
  className: "icon",
})`
  font-size: 36px;
  width: 56px;
  height: 56px;
`;
const IconBox2 = styled.div.attrs({
  className: "is-4",
})`
  padding: 15px;
  float: left;
  margin-top: -30px;
  margin-right: 15px;
  border-radius: 3px;
  background-color: #999;
  background: linear-gradient(60deg, #66bb6a, #43a047);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(76, 175, 80, 0.4);
`;
export const NetSavedCard = () => {
  const { expenses, incomes } = useContext(GlobalContext);

  const totalExpenses = expenses.map((expense) => expense.expenseAmount);
  const totalIncome = incomes.map((income) => income.income);

  const totalExpensesAmount = totalExpenses
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalIncomeAmount = totalIncome
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const netSaved = totalIncomeAmount - totalExpensesAmount;
  //const savingPercent = (netSaved / totalIncomeAmount).toFixed(1) * 100;

  return (
    <>
      <div className="card box">
        <div className="media">
          <div className="media-left">
            <IconBox2>
              <IconBox>
                <FontAwesomeIcon icon="wallet" size="lg" color="white" />
              </IconBox>
            </IconBox2>
          </div>

          <div className="media-content text-is-aligned-right">
            <p className="subtitle is-6 ">Net Saved</p>
            <p className="title is-size-4-desktop is-size-4-mobile has-text-success">
              ${netSaved}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetSavedCard;
