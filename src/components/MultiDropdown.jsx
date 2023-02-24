import React, { useState } from "react";
import { data } from "./data";

function MultiDropdown() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [selectedStates, setSelectedStates] = useState(
    //!!
    data.reduce((obj, state) => ({ ...obj, [state.abbreviation]: false }), {}) //this is the initial state of the selected states object (all false)
  ); //this is the state of the selected states object
  //console.log(selectedStates);

  const numberOfStatesSelected = //!!
    Object.values(selectedStates).filter(Boolean).length; //filter out the false values and return the number of true values
  console.log(numberOfStatesSelected);

  return (
    <div className="w-1/2 h-3/4 mx-auto flex justify-start flex-col items-center">
      <button
        onClick={() => setIsDisplayed((prevState) => !prevState)}
        className={
          numberOfStatesSelected
            ? `p-3 bg-white text-black rounded-lg w-2/3 font-bold text-lg flex justify-evenly items-center`
            : `p-3 bg-white text-black rounded-lg w-2/3 flex justify-evenly items-center`
        }
      >
        {numberOfStatesSelected > 0
          ? `${numberOfStatesSelected} states selected`
          : "-- select your states --"}

        {isDisplayed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>

      {isDisplayed && (
        <div className="mt-2 text-black p-5 w-full h-[91%] bg-white rounded-md grid grid-cols-3 gap-x-5 overflow-scroll">
          {data.map(
            (
              state,
              i //htmlFor is a React thing that allows you to associate a label with an input element by using the id of the input element
            ) => (
              <div
                key={i}
                className={
                  selectedStates[state.abbreviation] //if the value of sate.abbreviation is true, then the background color will be blue
                    ? `p-2 flex justify-between items-center gap-x-2 font-bold text-xs col-span-1 bg-blue-500/50 rounded-md transition duration-300`
                    : `p-2 flex justify-between items-center gap-x-2 font-bold text-xs col-span-1`
                }
              >
                <input
                  onChange={(e) =>
                    setSelectedStates({
                      ...selectedStates,
                      [state.abbreviation]: e.target.checked, //AK: true
                    })
                  }
                  checked={selectedStates[state.abbreviation]} //this is the value of the checkbox
                  id={`input- ${state.abbreviation}`}
                  type="checkbox"
                />
                <label
                  className="w-20 text-left"
                  htmlFor={`input- ${state.abbreviation}`}
                >
                  {state.name}
                </label>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default MultiDropdown;
