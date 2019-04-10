import React from 'react';
import { fireEvent, render, cleanup } from 'react-testing-library';

import EventsByMonth from './EventsByMonth';

afterEach(cleanup);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

describe('EventsByMonth', () => {

  const defaultProps = {

  }

  const setup = props => {
    return render(<EventsByMonth { ...defaultProps } { ...props }/>)
  }

  it('should render', () => {
    const { queryByTestId } = setup();
    const eventsByMonth = queryByTestId('eventsByMonth');
    expect(eventsByMonth).toBeInTheDocument();
  });

});

describe('EventsByMonth navigation functions', () => {

  const defaultProps = {

  }

  const setup = props => {
    return render(<EventsByMonth {...defaultProps} {...props} />)
  }

  const date = new Date();
  const currentMonthIndex = date.getMonth();
  const currentYear = date.getFullYear();

  it('should contain a header featuring the current month name and full year', () => {
    const { queryByTestId } = setup();
    const eventsByMonth = queryByTestId("eventsByMonth");
    expect(eventsByMonth).toHaveTextContent(`${months[currentMonthIndex]} ${currentYear}`);
  });

  it("should change to previous month on prev button click", () => {
    const { getByTestId } = setup();
    const eventsByMonth = getByTestId("eventsByMonth");
    const prevButton = getByTestId('prevButton');
    const previousMonthIndex = currentMonthIndex > 0 ? currentMonthIndex - 1 : 11;
    const yearOfPreviousMonth = currentMonthIndex > 0 ? currentYear : currentYear - 1;
    fireEvent.click(prevButton);
    expect(eventsByMonth).toHaveTextContent(`${months[previousMonthIndex]} ${yearOfPreviousMonth}`);
  });
  
  it("should change to next month on next button click", () => {
    const { getByTestId } = setup();
    const eventsByMonth = getByTestId("eventsByMonth");
    const nextButton = getByTestId('nextButton');
    const nextMonthIndex = currentMonthIndex < 11 ? currentMonthIndex + 1 : 0;
    const yearOfNextMonth = currentMonthIndex < 11 ? currentYear : currentYear + 1;
    fireEvent.click(nextButton);
    expect(eventsByMonth).toHaveTextContent(`${months[nextMonthIndex]} ${yearOfNextMonth}`);
  });

})